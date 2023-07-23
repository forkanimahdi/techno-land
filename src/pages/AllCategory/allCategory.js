import { HeaderComponent } from "../../layouts/Header/Header"
import "../../styles/modules/Laptop/LaptopPage.sass"
import { CategoryComponent } from "./components/Category"


export const CategoryPage = (props) => {

    
    return (
        <>

            <div className="laptopCategoryBody">
                <div className="header">
                    <HeaderComponent tabAllProducts={props.tabAllProducts} onlineUser={props.onlineUser} setOnlineUser={props.setOnlineUser}  cart={props.cart} setCart={props.setCart}  online={props.online} setOnline={props.setOnline} />
                </div>
                <div className="category p-2 ">
                    <CategoryComponent tabAllProducts={props.tabAllProducts} theProduct={props.theProduct} setTheProduct={props.setTheProduct}  />

                </div>

            </div>
        </>
    )

}