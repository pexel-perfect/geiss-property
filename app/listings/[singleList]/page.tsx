'use client'
import { getListById } from "@/lib/data";
import { CustomTitle } from "@/utils/CustomTitle";
import LoadingSkeleton from "@/utils/LoadingSkeleton";
import { Chip, Image as NextUiImage } from "@nextui-org/react";
import Error from "next/error";
import Link from "next/link";
import React from "react";
import SingleListIconBox from "./SingleListIconBox";

interface Props {
    params: { singleList: string | number };
}

const SingleListPage: React.FC<Props> = ({ params }) => {
    const { singleList } = params;
    const [listData, setListData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const fetchListData = async () => {
            setLoading(true);
            try {
                const data = await getListById(singleList);
                setListData(data);
            } catch (error: any) {
                throw new Error(error.message)
            } finally {
                setLoading(false);
            }
        };

        fetchListData();
    }, [singleList]);

    return (
        <LoadingSkeleton open={loading}>
            <div className="container">
                <div className="flex justify-start items-center gap-4">
                    <CustomTitle>{listData?.title ?? ''}</CustomTitle>
                    <Chip color="secondary" radius="sm" className="uppercase">{listData?.category}</Chip>
                </div>
                <div className="md:flex gap-4 pt-4">
                    <div>
                        <NextUiImage
                            src={`/images/${listData?.banner}`}
                            alt={listData?.title}
                            width={400}
                            height={400}
                            className="z-0 singleItem-bannerImg"
                        />
                    </div>
                    <div className="pt-4 md:pt-2 grid grid-cols-2 gap-2">
                        {listData?.images?.map((image: string) =>
                            <NextUiImage
                                key={image}
                                src={`/images/${image}`}
                                alt={listData?.title}
                                width={400}
                                height={400}
                                className="z-0 custom-img"
                            />)}
                    </div>
                </div>
                <div className="md:flex pt-8">
                    <div className="text-light md:w-4/6 pr-8">
                        <h1 className="text-primary text-xl font-bold font-primary">{listData?.title ?? ''}</h1>
                        <p className="font-primary text-description pt-2">{listData?.description ?? ''}</p>
                        <div className="pt-8">
                            <div className="text-light">
                                <div>
                                    <h1 className="text-primary text-xl font-bold font-primary">Daten und Fakten:</h1>

                                    {listData?.rooms && <SingleListIconBox
                                        url="/icon-room.png"
                                        item="Räume"
                                        count={listData?.rooms}
                                    />}
                                    {listData?.kitchen && <SingleListIconBox
                                        url="/geissproperty-kitchen.png"
                                        item="Küchen"
                                        count={listData?.kitchen}
                                    />}
                                    {listData?.bedroom && <SingleListIconBox
                                        url="/icon-bed.png"
                                        item="Schlafzimmer"
                                        count={listData?.bedroom}
                                    />}
                                    {listData?.area && <SingleListIconBox
                                        url="/icon-floor.png"
                                        item="Wohnfläche"
                                        count={listData?.area}
                                    />}
                                </div>
                                {
                                    listData?.furnishing &&
                                    <div className="pt-8">
                                        <h1 className="text-primary text-xl font-bold font-primary">Ausstattung:</h1>
                                        <ol className="list-disc ps-4">
                                            {listData?.furnishing.map((item: string) => <li key={item} className="font-primary text-description pt-2">{item}</li>)}
                                        </ol>

                                    </div>
                                }
                                {listData?.property_map &&
                                    <NextUiImage
                                        src={`/images/${listData?.property_map}`}
                                        alt={listData?.title}
                                        width={1200}
                                        height={400}
                                        className="z-0 pt-8 w-full object-cover rounded-md"
                                    />
                                }
                                {(listData?.handover || listData?.price) && <div className="px-4 pb-4 mt-8 bg-grayBackground">
                                    {listData?.handover && <SingleListIconBox
                                        url="/icon-calender.png"
                                        item="Wohnfläche"
                                        count={listData?.handover}
                                    />}
                                    {listData?.price && <SingleListIconBox
                                        url="/icon-price-tag.png"
                                        item="Wohnfläche"
                                        count={`${listData.price} EUR`}
                                    />}
                                </div>}

                                <Link href="/listings">
                                    <p className="pt-8 md:mb-8 text-light hover:text-primary ">← ALLE ANGEBOTE ANZEIGEN</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/6 bg-grayBackground text-light p-4 rounded-lg mt-4 md:mt-0">
                        Form will be added soon
                    </div>
                </div>

            </div>
        </LoadingSkeleton>
    );
};

export default SingleListPage;
