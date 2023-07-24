import "./Carousel.sass";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../../../assets/images/Laptop.png';
import Image2 from '../../../../assets/images/smartphones.png';
import Image3 from '../../../../assets/images/SW.png';
import Image4 from '../../../../assets/images/csq.png';
import Image5 from '../../../../assets/images/iphone .gif';
import { useNavigate } from "react-router-dom";

export const CarouselComponent = () => {

    let Destination = useNavigate()



    return (
        <>
            <div className="w-100 carouselParent">
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <div className="caroudelDiv d-flex w-100 align-items-center flex-row-reverse justify-content-evenly">
                            <img className="d-block   mb-5" src={Image5} alt="First slide" />
                            <div className="carousel-product-info ms-2 w-25 d-flex flex-column align-items-start justify-content-around">
                                <h3 className=" text-white ">Apple Devices Category</h3>
                                <h5 className="text-gray">Discover a premium selection of exclusively Apple devices, from the latest iPhones and MacBooks to innovative iPads and accessories.</h5>
                                <button className="w-75 btn bg-indigo text-white rounded-pill" onClick={() => {Destination("/techno-land/Category/Phone")}}>Discover Apple Collections</button>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div className="caroudelDiv d-flex w-100 align-items-center flex-row-reverse justify-content-evenly">
                            <img className="d-block  mb-5" src={Image1} alt="First slide" />
                            <div className="carousel-product-info ms-2 w-25 d-flex flex-column align-items-start justify-content-around">
                                <h3 className=" text-white">Laptop category</h3>
                                <h5 className="text-gray">Explore our extensive range of laptops, featuring top-tier brands and the latest models with powerful performance.</h5>
                                <button onClick={() => {Destination("/techno-land/Category/Laptop")}} className="w-75 btn bg-indigo text-white rounded-pill">Discover More Laptops</button>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div className="caroudelDiv d-flex w-100 align-items-center flex-row-reverse justify-content-evenly">
                            <img className="d-block  mb-5" src={Image2} alt="First slide" />
                            <div className="carousel-product-info ms-2 w-25 d-flex flex-column align-items-start justify-content-around">
                                <h3 className=" text-white">Phone Category</h3>
                                <h5 className="text-gray">Step into a world of cutting-edge communication and technology with our exceptional phone collection</h5>
                                <button className="w-75 btn bg-indigo text-white rounded-pill" onClick={() => {Destination("/techno-land/Category/Phone")}}>Discover More Phones</button>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div className="caroudelDiv d-flex w-100 align-items-center flex-row-reverse justify-content-evenly">
                            <img className="d-block  mb-5" src={Image3} alt="First slide" />
                            <div className="carousel-product-info ms-2 w-25 d-flex flex-column align-items-start justify-content-around">
                                <h3 className=" text-white">Smart Devices Category</h3>
                                <h5 className="text-gray">Immerse yourself in the world of smart technology with our premium selection of smartwatches and smart devices.</h5>
                                <button className="w-75 btn bg-indigo text-white rounded-pill" onClick={() => {Destination("/techno-land/Category/Smart Devices")}}>Discover More Smart Devices</button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div className="caroudelDiv d-flex w-100 align-items-center flex-row-reverse justify-content-evenly">
                            <img className="d-block  mb-5" src={Image4} alt="First slide" />
                            <div className="carousel-product-info ms-2 w-25 d-flex flex-column align-items-start justify-content-around">
                                <h3 className=" text-white">Accessories Category</h3>
                                <h5 className="text-gray">Enhance your digital setup with our exceptional range of accessories. Elevate your productivity with high-performance accessoties.</h5>
                                <button className="w-75 btn bg-indigo text-white rounded-pill" onClick={() => {Destination("/Category/Accessories")}}>Discover More Accessoires</button>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};
