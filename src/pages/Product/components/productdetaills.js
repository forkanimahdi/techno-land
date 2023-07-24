import { useState } from "react"
import "./productdetaills.sass"
import { useParams } from "react-router-dom";




export const ProductComponent = (props) => {

    let [quantity, setQuantity] = useState(0);
    const oldTab = props.cart
    const { id } = useParams()



    const Addtocart = (element) => {
        if (quantity > 0) {

            let price = Math.ceil(element.price * quantity);
            let basketObject = {
                image: element.imgSrc,
                price: element.price,
                name: element.name,
                quantity: quantity,
                fullPrice: price
            }
            const existingProductIndex = oldTab.findIndex((item) =>
                item.name.includes(basketObject.name)
            );


            if (existingProductIndex !== -1) {
                // If the product with the same title already exists in the cart, update it
                let newTab = [...oldTab];
                newTab.splice(existingProductIndex, 1, basketObject);
                props.setCart(newTab);
                setQuantity(0)
                


            } else {
                // If the product does not exist in the cart, add it
                let newTab = [...oldTab, basketObject];
                props.setCart(newTab);
                setQuantity(0)
            }
        }
    };



    return (
        <>
            <div className="productdetaillDiv border border-1 border-white d-flex flex-lg-row flex-column">
                {
                    props.tabAllProducts.map((element) =>
                        element.name === id ?
                            <>
                                <div className="imgDiv w-50 h-100 d-flex  align-items-center justify-content-center">
                                    <img className="w-75" src={element.imgSrc} alt="" />
                                </div>
                                <div className="product-info w-50 d-flex flex-column align-items-start justify-content-evenly">
                                    <h2 className="text-white m-lg-0 ms-3">{element.name}</h2>
                                    <p className="container text-gray">{element.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum, assumenda neque dolorum illo a Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos voluptatem eligendi nostrum. Animi, neque..</p>
                                    <h3 className="text-indigo  m-lg-0 ms-2">{element.price} $</h3>
                                    <div className="pannel-quantity  d-flex w-50 border text-white align-items-center justify-content-between ">
                                        <button onClick={() => {
                                            quantity > 0 ? setQuantity(quantity - 1) : setQuantity(quantity)
                                        }} className="btn text-white fs-3"> -</button>
                                        <h3>{quantity}</h3>
                                        <button onClick={() => {
                                            setQuantity(quantity + 1)
                                        }} className="btn text-white fs-3"> +</button>
                                    </div>
                                    <button onClick={() => { Addtocart(element) }} className="call-to-action btn btn-indigo text-white w-75 rounded-pill">Add To Cart</button>
                                </div>

                            </>
                            :
                            <>
                            </>


                    )
                }


            </div>
        </>
    )






}