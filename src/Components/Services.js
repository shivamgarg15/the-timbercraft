import React from 'react'
import { images, names } from './ServicesData'
import cross from '../Images/cross.svg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        // slidesToSlide: 1 // optional, default to 1.
    }
};

function Services(props) {

    const showFullscreen = (e) => {
        let a = document.querySelector('.fullscreen img');
        document.querySelector('.fullscreen').style.display = "block";
        a.src = e;
    }

    return (
        <div className='py-4'>
            {images.map((elem, ind) => {
                return (
                    <div className='py-4' key={ind}>
                        <h1 className='text-center mt-2 mb-3'>{names[ind]}</h1>
                        <div className="m-auto">

                            <Carousel
                                swipeable={true}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={4000}
                                keyBoardControl={true}
                                transitionDuration={1500}
                                itemClass='px-3'
                            >
                
                            {elem.map((element, index) => {
                                return (<div><img src={element} alt="" width={"100%"} style={{ height: "50vh", maxHeight: "400px", objectFit: "cover" }} onClick={() => { showFullscreen(element) }} /></div>);
                            })
                            }
                            </Carousel>
                        </div>
                    </div>
                )
})}

<div className='fullscreen'>
    <img src="" alt="" />
    <img src={cross} alt="" onClick={() => { document.querySelector('.fullscreen').style.display = "none"; }} />
</div>
        </div >
    )
}

export default Services