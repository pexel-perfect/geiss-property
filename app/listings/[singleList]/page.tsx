'use client'
import { getListById } from "@/lib/data";
import { CustomTitle } from "@/utils/CustomTitle";
import LoadingSkeleton from "@/utils/LoadingSkeleton";
import { BreadcrumbItem, Breadcrumbs, Chip, Image as NextUiImage } from "@nextui-org/react";
import Error from "next/error";
import Link from "next/link";
import React from "react";
import SingleListIconBox from "./components/SingleListIconBox";
import ImageModal from "./components/ImageModal";
import PropertyTypeCard from "./components/PropertyTypeCard";
import { DividerWithIcon } from "@/utils/DividerWithIcon";
import ImageSlider from "./components/ImageSlider";
import PaymentPlanTable from "./components/PaymentPlanTable";
import InquiryForm from "./components/InquiryForm";

interface Props {
    params: { singleList: string | number };
}

const SingleListPage: React.FC<Props> = ({ params }) => {
    const { singleList } = params;
    const [listData, setListData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [openImageDialog, setOpenImageDialog] = React.useState<string | null>(null);

    const handleOpenModal = () => {
        setOpenImageDialog(null)
    }

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
                <Breadcrumbs color="primary">
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/listings">Property</BreadcrumbItem>
                    <BreadcrumbItem >{listData?.title}</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex justify-start items-center gap-4">
                    <CustomTitle>{listData?.title ?? ''}</CustomTitle>
                    <Chip color="secondary" radius="sm" className="uppercase">{listData?.category}</Chip>
                </div>
                <div className="md:flex gap-4 pt-4">
                    <div className="cursor-pointer">
                        <NextUiImage
                            onClick={() => setOpenImageDialog(listData?.bannerImages[0]?.link)}
                            src={listData?.bannerImages[0]?.link}
                            alt={listData?.title}
                            width={400}
                            height={400}
                            className="z-0 singleItem-bannerImg"
                        />
                    </div>
                    <div className="pt-4 md:pt-2 grid grid-cols-2 gap-2 cursor-pointer">
                        {listData?.bannerImages?.slice(1).map((image: any) =>
                            <NextUiImage
                                onClick={() => setOpenImageDialog(image.link)}
                                key={image}
                                src={image?.link}
                                alt={image?.title}
                                width={400}
                                height={400}
                                className="z-0 custom-img"
                            />)}
                    </div>
                </div>
                <div className="md:flex pt-8">
                    <div className="text-light md:w-9/12 md:pr-8">
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
                                {/* optional property type section */}
                                {
                                    listData?.property_type &&
                                    <div className="pt-8">
                                        <h1 className="text-primary text-xl font-bold font-primary">Property Type:</h1>
                                        {listData?.property_type?.map((property: any, index: number) => <PropertyTypeCard key={index} type={property.type} value={property.value} />)}
                                    </div>
                                }

                                {/* optional amenities section */}
                                {
                                    listData?.amenities &&
                                    <div className="pt-8">
                                        <h1 className="text-primary text-xl font-bold font-primary">Ausstattung:</h1>
                                        <ol className="list-disc ps-4">
                                            {listData?.amenities.map((item: string) => <li key={item} className="font-primary text-description pt-2">{item}</li>)}
                                        </ol>

                                    </div>
                                }

                                {/* floor plans optional */}
                                {listData?.floor_plans &&
                                    <div className="pt-8">
                                        <h1 className="text-primary text-xl font-bold font-primary pb-4">Floor Plans:</h1>
                                        <ImageSlider data={listData?.floor_plans} />
                                    </div>
                                }
                                {/* optional: exter links */}
                                {
                                    listData?.external_links &&
                                    <div className="pt-8">
                                        <h1 className="text-primary text-xl font-bold font-primary">External Links:</h1>
                                        <ol className="list-disc ps-4">
                                            {listData?.external_links.map((item: any) => <li key={item} className="font-primary text-description pt-2 underline hover:text-light"><a href={item?.link} target="_blank">{item.text}</a></li>)}
                                        </ol>

                                    </div>
                                }
                                {/* optional: payment plan */}
                                {
                                    listData?.payment_plan &&
                                    <div className="pt-8">
                                        <h1 className="text-primary text-xl font-bold font-primary">External Links:</h1>
                                        <ol className="list-disc pt-4">
                                            <PaymentPlanTable data={listData?.payment_plan} />
                                        </ol>

                                    </div>
                                }

                                {/* hand over & price */}
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
                    <div className="md:w-1/4 mt-4 md:mt-0 relative">
                        <div className="bg-grayBackground text-light p-4 rounded-lg sticky top-24">                        
                            <InquiryForm />
                        </div>
                    </div>
                </div>
            </div>
            {openImageDialog && <ImageModal open={openImageDialog} data={listData.bannerImages} handleOpenModal={handleOpenModal} />}
        </LoadingSkeleton>
    );
};

export default SingleListPage;
