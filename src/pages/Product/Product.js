import { HeaderComponent } from "../../layouts/Header/Header"
import "../../styles/modules/Product/Product.sass"
import { ProductComponent } from "./components/productdetaills"
export const Product = (props) => {

    return (

        <>
            <div className="productBody">
                <div className="header">
                    <HeaderComponent tabAllProducts={props.tabAllProducts} onlineUser={props.onlineUser} setOnlineUser={props.setOnlineUser}  cart={props.cart} setCart={props.setCart}  online={props.online} setOnline={props.setOnline} />
                </div>
                <div className="product d-flex align-items-lg-center mt-lg-0 mt-1 justify-content-center">
                    <ProductComponent  tabAllProducts={props.tabAllProducts} cart={props.cart} setCart={props.setCart} theProduct={props.theProduct} setTheProduct={props.setTheProduct} />
                </div>
            </div>
        </>
    )
}