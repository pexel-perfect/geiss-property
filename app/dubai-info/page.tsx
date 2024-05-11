'use client'
import { getBlogs } from "@/lib/data";
import { CustomDescription } from "@/utils/CustomDescription";
import { CustomTitle } from "@/utils/CustomTitle";
import React from "react";
import BlogCard from "./components/BlogCard";

const DubaiInfoPage = () => {
    const [blogs, setBlogs] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    React.useEffect(() => {
        const fetchList = async () => {
            setLoading(true);
            try {
                const data = await getBlogs();
                setBlogs(data);
            } catch (error: any) {
                throw new Error(error.message)
            } finally {
                setLoading(false);
            }
        };

        fetchList();
    }, []);

    return (
        <>
            <div
                className="relative bg-cover bg-center  flex itemsp-center justify-center py-16 md:py-36"
                style={{
                    backgroundImage: `url('/images/skyline-dubai-marina-with-ain-scaled.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-primary">Dubai News</h1>
                    <p className="text-lg md:text-xl lg:text-3xl mb-2 md:mb-6 font-primary">Insights with Carmen and Robert Geiss</p>
                </div>
            </div>

            <div className="container">
                <div className="text-center">
                    <CustomDescription >Welcome to our blog, where we keep up to date with the latest news and provide valuable insights into current developments.
                    </CustomDescription>
                </div>
            </div>

            <div className="container">
                <div>
                    <p className="text-primary">BLOG</p>
                    <CustomTitle >News & Insights</CustomTitle>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                    {blogs?.map((item: any) => (
                        <BlogCard title={item.title} excerpt={item.excerpt} key={item.title} image={item.image} />
                    ))}

                </div>
            </div>
        </>
    );
}

export default DubaiInfoPage; 