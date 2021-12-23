import React, {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import Bahar1 from '../../images/bahar/bahar1.JPG';
import Bahar2 from '../../images/bahar/bahar2.JPG';
import Bahar3 from '../../images/bahar/bahar3.JPG';
import Bahar4 from '../../images/bahar/bahar4.JPG';
import Bahar5 from '../../images/bahar/bahar5.JPG';
import Bahar6 from '../../images/bahar/bahar6.JPG';
import Bahar7 from '../../images/bahar/bahar7.JPG';
import Bahar8 from '../../images/bahar/bahar8.JPG';
import Bahar9 from '../../images/bahar/bahar9.JPG';
import Bahar10 from '../../images/bahar/bahar10.JPG';
import Bahar11 from '../../images/bahar/bahar11.JPG';
import Bahar12 from '../../images/bahar/bahar12.JPG';
import Bahar13 from '../../images/bahar/bahar13.JPG';
import Bahar14 from '../../images/bahar/bahar14.JPG';
import Bahar15 from '../../images/bahar/bahar15.JPG';
import Bahar16 from '../../images/bahar/bahar16.JPG';
import Bahar17 from '../../images/bahar/bahar17.JPG';
import Bahar18 from '../../images/bahar/bahar18.JPG';
import Bahar19 from '../../images/bahar/bahar19.JPG';
import Bahar20 from '../../images/bahar/bahar20.JPG';
import Bahar21 from '../../images/bahar/bahar21.JPG';
import Bahar22 from '../../images/bahar/bahar22.JPG';
import Bahar23 from '../../images/bahar/bahar23.JPG';
import Bahar24 from '../../images/bahar/bahar24.JPG';
import Bahar25 from '../../images/bahar/bahar25.JPG';
import Bahar26 from '../../images/bahar/bahar26.JPG';
import Bahar27 from '../../images/bahar/bahar27.JPG';
import Bahar28 from '../../images/bahar/bahar28.JPG';
import Bahar29 from '../../images/bahar/bahar29.JPG';
import Bahar30 from '../../images/bahar/bahar30.JPG';

const IMAGES =
    [
        {
            src: Bahar1,
            thumbnail: Bahar1,
            width: 1,
            height: 1,
        },
        {
            src: Bahar2,
            thumbnail: Bahar2,
            width: 1,
            height: 1,
        },
        {
            src: Bahar3,
            thumbnail: Bahar3,
            width: 1,
            height: 1
        },
        {
            src: Bahar4,
            thumbnail: Bahar4,
            width: 1,
            height: 1
        },
        {
            src: Bahar5,
            thumbnail: Bahar5,
            width: 1,
            height: 1
        },
        {
            src: Bahar6,
            thumbnail: Bahar6,
            width: 1,
            height: 1
        },
        {
            src: Bahar7,
            thumbnail: Bahar7,
            width: 1,
            height: 1
        },
        {
            src: Bahar8,
            thumbnail: Bahar8,
            width: 1,
            height: 1
        },
        {
            src: Bahar9,
            thumbnail: Bahar9,
            width: 1,
            height: 1
        },
        {
            src: Bahar10,
            thumbnail: Bahar10,
            width: 1,
            height: 1
        },
        {
            src: Bahar11,
            thumbnail: Bahar11,
            width: 1,
            height: 1
        },
        {
            src: Bahar12,
            thumbnail: Bahar12,
            width: 1,
            height: 1
        },
        {
            src: Bahar13,
            thumbnail: Bahar13,
            width: 1,
            height: 1
        },
        {
            src: Bahar14,
            thumbnail: Bahar14,
            width: 1,
            height: 1
        },
        {
            src: Bahar15,
            thumbnail: Bahar15,
            width: 1,
            height: 1
        },
        {
            src: Bahar16,
            thumbnail: Bahar16,
            width: 1,
            height: 1
        },
        {
            src: Bahar17,
            thumbnail: Bahar17,
            width: 1,
            height: 1
        },
        {
            src: Bahar18,
            thumbnail: Bahar18,
            width: 1,
            height: 1
        },
        {
            src: Bahar19,
            thumbnail: Bahar19,
            width: 1,
            height: 1
        },
        {
            src: Bahar20,
            thumbnail: Bahar20,
            width: 1,
            height: 1
        },
        {
            src: Bahar21,
            thumbnail: Bahar21,
            width: 1,
            height: 1
        },
        {
            src: Bahar22,
            thumbnail: Bahar22,
            width: 1,
            height: 1
        },
        {
            src: Bahar23,
            thumbnail: Bahar23,
            width: 1,
            height: 1
        },
        {
            src: Bahar24,
            thumbnail: Bahar24,
            width: 1,
            height: 1
        },
        {
            src: Bahar25,
            thumbnail: Bahar25,
            width: 1,
            height: 1
        },
        {
            src: Bahar26,
            thumbnail: Bahar26,
            width: 1,
            height: 1
        },
        {
            src: Bahar27,
            thumbnail: Bahar27,
            width: 1,
            height: 1
        },
        {
            src: Bahar28,
            thumbnail: Bahar28,
            width: 1,
            height: 1
        },
        {
            src: Bahar29,
            thumbnail: Bahar29,
            width: 1,
            height: 1
        },
        {
            src: Bahar30,
            thumbnail: Bahar30,
            width: 1,
            height: 1
        },
    ];

export default function Bahar() {
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