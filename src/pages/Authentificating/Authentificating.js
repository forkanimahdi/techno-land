import React from "react";
import "../../styles/modules/Authentificating style/Authentificating.sass"
import { AuthentificatingComponent } from "./components/signup";
import { HeaderComponent } from "../../layouts/Header/Header";

export const Authentificating = (props) => {
  return (
    <>
      <div className="AuthentificatingBody">
        <div className="Authentificatingheader">
          <HeaderComponent tabAllProducts={props.tabAllProducts}  onlineUser={props.onlineUser} setOnlineUser={props.setOnlineUser}  cart={props.cart} setCart={props.setCart} online={props.online} setOnline={props.setOnline} />
        </div>
        <div className="Authentificating d-flex align-items-center justify-content-center">
          <AuthentificatingComponent  onlineUser={props.onlineUser} setOnlineUser={props.setOnlineUser}  online={props.online} setOnline={props.setOnline}  tabAllProducts={props.tabAllProducts} cart={props.cart} setCart={props.setCart} theProduct={props.theProduct} setTheProduct={props.setTheProduct} />
        </div>
      </div>
    </>

  );
};
