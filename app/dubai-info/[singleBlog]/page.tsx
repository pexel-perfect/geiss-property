'use client'
import { getBlogById } from "@/lib/data";
import { DividerWithImg } from "@/utils/DividerWithImg";
import LoadingSkeleton from "@/utils/LoadingSkeleton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    params: { singleBlog: string };
}
const SingleBlog: React.FC<Props> = ({ params }) => {
    const { singleBlog } = params;
    console.log(params, "params");
    const [blogData, setBlogData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(true);


    React.useEffect(() => {
        const fetchListData = async () => {
            setLoading(true);
            try {
                const data = await getBlogById(singleBlog);
                setBlogData(data);
            } catch (error: any) {
                throw new Error(error.message)
            } finally {
                setLoading(false);
            }
        };

        fetchListData();
    }, [singleBlog]);
    return (
        <LoadingSkeleton open={loading}>
            <div className="my-4 md:my-8 mr-4 ms-2 md:mx-0">
                <div className="relative bg-gradient-to-t from-black via-black to-black pt-16 md:py-36 px-12 rounded-t-lg overflow-hidden container mt-12">
                    <Image className="absolute inset-0 w-full h-full object-cover object-center z-0" src={blogData?.image} alt="Blog Header Background" height={500} width={1020} />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 text-white text-center">
                        <h1 className="text-2xl md:text-5xl  font-bold tracking-tight mb-4 font-primary">{blogData?.title}</h1>
                        <p className="text-lg md:text-xl text-white mb-8 font-secondary">February 6, 2024 | Md Asifur Rahman</p>
                    </div>
                </div>

                <div className="container-x bg-black/30 pb-12 rounded-b-lg">
                    <div>
                        <h1 className="text-white text-xl font-bold font-primary pb-4 pt-8">{`Wirtschaftlicher Wohlstand`}</h1>

                        <p className="font-secondary text-description">{`Dubai ist eine globale Wirtschaftsmacht dank seiner dynamischen Geschäftsumgebung, seiner strategischen Lage und seiner investorenfreundlichen Politik. Luxusimmobilien hier zu besitzen, geht über Immobilien hinaus; es ist eine Beteiligung an der Zukunft.`}</p>

                        <h1 className="text-white text-xl font-bold font-primary pb-4 pt-8">{`Innovation auf dem Höhepunkt`}</h1>

                        <p className="font-secondary text-description">{`Dubai ist nicht nur eine Stadt; sie ist ein visionäres Wunder, das die Grenzen der Innovation erweitert. Mit ikonischen Strukturen wie dem Burj Khalifa und einem Engagement für hochmoderne Technologien gestaltet Dubai aktiv die Zukunft. Ihre Luxusresidenz hier ist nicht nur ein Zuhause; sie ist ein Zeugnis für einen progressiven und zukunftsorientierten Lebensstil.`}</p>

                        <h1 className="text-white text-xl font-bold font-primary pb-4 pt-8">{`Extravaganter Lebensstil`}</h1>

                        <p className="font-secondary text-description">{`Dubai ist gleichbedeutend mit luxuriösem Leben - also ergreifen Sie Ihre Chance und Willkommen in Dubai! Vom weltberühmten Dubai Mall bis hin zu exquisiten Speisemöglichkeiten mit Blick auf den Arabischen Golf ist jeder Moment in Dubai ein Genuss in Eleganz. Ihre Residenz hier ist ein Tor zu einem Leben voller Perfektion und Freude.`}</p>

                        <h1 className="text-white text-xl font-bold font-primary pb-4 pt-8">{`Willkommen in Dubai - Vielfältige Kultur`}</h1>

                        <p className="font-secondary text-description">{`Erleben Sie in Dubai eine reiche Mischung aus Kulturen, in der Vielfalt gefeiert wird. Das Engagement der Stadt für Toleranz und Inklusivität schafft eine kosmopolitische Gemeinschaft, sodass Ihre Luxusresidenz mehr ist als nur eine Immobilie - sie ist ein Reisepass zu einem globalen Lebensstil.`}</p>
                    </div>
                    {/* blog footer */}
                    <div className="container-x flex justify-center py-12">
                        <Link href={"/dubai-info"} className="bg-primary md:w-1/2 mx-auto text-center rounded-md py-2 px-4">Alle Neuigkeiten und Insights</Link>
                    </div>
                    <DividerWithImg />
                </div>
            </div>
        </LoadingSkeleton>
    )
}


export default SingleBlog; 