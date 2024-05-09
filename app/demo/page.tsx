import ImageSlider from "@/components/imageModalAndLightbox/ImageSlider";
import { getListById } from "@/lib/data";
import React from "react";

const DemoPage = async () => {
    const data = await getListById(1);
    console.log(data);

    if (!data) return;
    return (
        <div>
            <ImageSlider dataArr={data?.bannerImages} />
        </div>
    )
}

export default DemoPage; 