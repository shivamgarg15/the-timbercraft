import React from 'react'
import {
    Link
} from "react-router-dom";
import body1 from '../Images/body1.jpg'
import Fade from 'react-reveal/Fade';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { images, names } from './ServicesData';

function Body1() {

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

    return (
        <div className='primary-font' style={{ display: "flex", alignItems: "center", padding: "20px 0px", boxSizing: "content-box", flexDirection: "column", justifyContent: "center" }}>
            {/* <div>Fullfilling your dream</div> */}
            <div className="container text-center height-inherit" style={{ width: "90%" }}>
                <div className="row justify-content-center height-inherit">
                    <Fade left duration={1500}>
                        <div className="col-12 col-md-4 col-lg-3 mx-4 my-3 body1Column ">
                            <div style={{ color: "indianred" }}>Creative</div>
                            <div style={{ color: "royalblue" }}>Design</div>
                            <div style={{ color: "forestgreen" }}>Elegance</div>
                            <div style={{ color: "maroon" }}>Service</div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mx-4 my-3 body1Column ">
                            <p>The TimberCraft aims at providing an unparallel experience to the customers with the help of our Beautiful & Creative Designs and an unmatched customer service with bunch of customizations available for all the furniture products present in our iventory.</p>
                            <Link to="/about" className='text-danger'>Read More About Us</Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mx-4 my-3 body1Column ">
                            <div className='m-auto'>
                                <div><img src={body1} alt="" /></div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            <div className="container my-5">
            <h1 className='text-center my-5'><Link to="/services">Our Services</Link></h1>
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

                    {images.map((element, index) => {
                        return (<div><div className='text-center'>{names[index]}</div><img src={element[2]} alt="" width={"100%"} style={{ height: "200px", objectFit: "cover" }} /></div>);
                    })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Body1