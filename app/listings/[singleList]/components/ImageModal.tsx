import { Modal, ModalBody, ModalContent, ModalHeader, Image as NextUiImage } from "@nextui-org/react";
import React, { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

interface Props {
    open: string | null;
    handleOpenModal: () => void;
    data: {
        link: string;
        title: string;
        description?: string;
    }[];
}

const ImageModal: FC<Props> = ({ open, handleOpenModal, data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null); 

    useEffect(() => {
        const activeIndex = data.findIndex((item) => item.link === open);
        if (activeIndex !== -1) {
            setCurrentSlide(activeIndex);
            sliderRef.current?.slickGoTo(activeIndex);
        }
    }, [data, open]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current: number) => setCurrentSlide(current),
    };

    return (
        <>
            <Modal isOpen={!!open} onOpenChange={handleOpenModal} isDismissable={false} size="lg" className="flex justify-center">
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">{data[currentSlide]?.title}</ModalHeader>
                    <ModalBody className="p-8">
                        <Slider {...settings} ref={sliderRef}>
                            {data.map((image, index) => (
                                <div key={index} >
                                    <NextUiImage
                                        src={image.link}
                                        alt={image.title}
                                        width={800}
                                        height={400}
                                        className="z-0 singleItem-bannerImg border-4 border-primary"
                                    />
                                    <div>
                                        <p className="pt-2">{image.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ImageModal;
