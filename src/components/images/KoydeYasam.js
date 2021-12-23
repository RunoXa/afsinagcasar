import React, {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import Image_Y_1 from '../../images/koydeyasam/y_1.jpg';
import Image_Y_2 from '../../images/koydeyasam/y_2.jpg';
import Image_Y_3 from '../../images/koydeyasam/y_3.jpg';
import Image_Y_4 from '../../images/koydeyasam/y_4.jpg';
import Image_Y_5 from '../../images/koydeyasam/y_5.jpg';
import Image_Y_6 from '../../images/koydeyasam/y_6.jpg';
import Image_Y_7 from '../../images/koydeyasam/y_7.jpg';
import Image_Y_8 from '../../images/koydeyasam/y_8.jpg';
import Image_Y_9 from '../../images/koydeyasam/y_9.jpg';
import Image_Y_10 from '../../images/koydeyasam/y_10.jpg';
import Image_Y_11 from '../../images/koydeyasam/y_11.jpg';
import Image_Y_12 from '../../images/koydeyasam/y_12.jpg';
import Image_Y_13 from '../../images/koydeyasam/y_13.jpg';
import Image_Y_14 from '../../images/koydeyasam/y_14.jpg';
import Image_Y_15 from '../../images/koydeyasam/y_15.jpg';
import Image_Y_16 from '../../images/koydeyasam/y_16.jpg';
import Image_Y_17 from '../../images/koydeyasam/y_17.jpg';
import Image_Y_18 from '../../images/koydeyasam/y_18.jpg';
import Image_Y_19 from '../../images/koydeyasam/y_19.jpg';
import Image_Y_20 from '../../images/koydeyasam/y_20.jpg';

const IMAGES =
    [
        {
            src: Image_Y_1,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_2,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_3,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_4,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_5,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_6,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_7,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_8,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_9,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_10,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_11,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_12,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_13,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_14,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_15,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_16,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_17,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_18,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_19,
            width: 4,
            height: 3
        },
        {
            src: Image_Y_20,
            width: 4,
            height: 3
        },
    ]

export default function KoydeYasam() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }

    return (
        <div>
            <div style={{marginTop: "50px"}}>
                <Gallery photos={IMAGES} onClick={openLightbox} margin={10}/>
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={IMAGES.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}