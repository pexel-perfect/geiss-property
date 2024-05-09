
import { Image as NextUiImage } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface OfferCardProps {
    title: string;
    price: string;
    bed: string | number;
    area: string;
    url: string;
    redirect: string;
}
export const OfferCard = ({ title, price, bed, area, url, redirect }: OfferCardProps) => {

    return (
        <Link href={redirect}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
                <NextUiImage
                    src={url}
                    alt={title}
                    width={400}
                    height={400}
                    className="z-0 banner-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-between items-center text-white z-10 w-full p-4">
                    <div></div>


                    <div className="flex flex-col justify-between  gap-2 w-full">
                        <h3 className="text-xl font-bold  font-primary text-center">{title}</h3>
                        <p className="text-center mb-4 font-secondary text-primary font-semibold">{price}</p>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Image src="/images/geissproperty-bedroom.png" height={40} width={40} alt="bed"  />
                                <p className="font-secondary text-light/70">{bed}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src="/images/geissproperty-wohnflaeche.png" height={35} width={35} alt="area" />
                                <p className="font-secondary text-light/70">{area}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}