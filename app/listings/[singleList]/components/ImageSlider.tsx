'use client'
import { Image as NextUiImage } from "@nextui-org/react";
import React from "react";
import Slider from "react-slick";
import ImageModal from "./ImageModal";


interface Props {
    data: {
        link: string;
        title: string;
    }[]
}
const ImageSlider: React.FC<Props> = ({ data }) => {
    const [openImageDialog, setOpenImageDialog] = React.useState<string | null>(null);
    const handleOpenModal = () => {
        setOpenImageDialog(null)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 6000
    };
    return (
        <div>
            <Slider {...settings} >
                {data.map((image, index) => (
                    <div key={index} onClick={()=>setOpenImageDialog(image.link)}>
                        <NextUiImage
                            src={image.link}
                            alt={image.title}
                            width={1000}
                            height={600}
                            className="z-0 singleItem-bannerImg w-full"
                        />
                        <div>
                            <p className="pt-2">{image.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            {openImageDialog && <ImageModal open={openImageDialog} data={data} handleOpenModal={handleOpenModal} />}
        </div>
    )
}

export default ImageSlider; 