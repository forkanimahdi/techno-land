import React from "react";
import { HeaderComponent } from "../../layouts/Header/Header";
import { CarouselComponent } from "./components/carousel/Carousel";
import { FlashSalesComponent } from "./components/flashSale/Flash";
import { CategoryComponent } from "./components/category/Categorytypes";
import { FooterComponent } from "../../layouts/Footer/Footer";

export const Home = (props) => {

  return (

    <>
      <div className="homeBody">
        <div className="headerDiv">
          <HeaderComponent tabAllProducts={props.tabAllProducts} onlineUser={props.onlineUser} setOnlineUser={props.setOnlineUser}  online={props.online} setOnline={props.setOnline} cart={props.cart} setCart={props.setCart} />
        </div>
        <div className="carouselDiv d-flex align-items-center justify-content-center">
          <CarouselComponent />
        </div>
        <div className="flash-sales p-lg-0 p-3">
          <FlashSalesComponent />
        </div>
        <div className="product-category p-3 d-flex align-items-center justify-content-around flex-wrap">
          <CategoryComponent />
        </div>
        <div className="footer bg-black p-3 text-white d-flex align-items-center justify-content-center">
          <FooterComponent />
        </div>

      </div>

    </>

  );
};
