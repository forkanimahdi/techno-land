import "./_Header.sass"
import React, { useState } from 'react';
import { Navbar, NavDropdown, Container, Offcanvas, Form, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRightFromBracket, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";





export const HeaderComponent = (props) => {
    let NavTo = useNavigate()
    let [searching, setSearching] = useState("")
    let [typing, setTyping] = useState(false)
    let [results, setResults] = useState([])
    let tabCarts = [...props.cart]



    const navigateto = (param) => {
        if (param === "") {
            NavTo(`/techno-land`)
        }
        else if (param === "Authentificating") {
            NavTo(`/techno-land/Authentificating`)
        } else {
            NavTo(`/techno-land/Category/${param}`)
        }
    }
    const Minusitem = (element, index) => {

        if (element.quantity > 1) {
            element.quantity -= 1;
            tabCarts.splice(index, 1, element);
            props.setCart(tabCarts);
        } else {
            tabCarts.splice(index, 1);
            props.setCart(tabCarts);
        }

    }

    const Plusitem = (element, index) => {

        if (element.quantity > 1) {
            element.quantity += 1;
            tabCarts.splice(index, 1, element);
            props.setCart(tabCarts);
        }
    }

    const Checking = () => {
        if (props.online === false) {
            NavTo("/techno-land/Authentificating")
        } else {
            window.open("https://forkanimahdi.github.io/details-of-payment/", "_blank");
        }
    }

    const Search = (event) => {
        setSearching(event.target.value);
        setTyping(true)
        let newTab = [...props.tabAllProducts]
        let filtredResult = newTab.filter(element => element.name.toLowerCase().includes(event.target.value))
        setResults(filtredResult)
        console.table(filtredResult);

        if (event.target.value === "") {
            setTyping(false)
        }
    }
    return (

        <>
            <div className=" bg-white header d-flex align-items-center justify-content-around">
                <h3 onClick={() => { NavTo("/techno-land/") }} className="pointer-event">Techno Land</h3>
                <NavDropdown className="" title="CATALOGUE" id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={() => navigateto("")} className="text-indigo " >
                        Home
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigateto("Laptop")} className=" text-indigo " >
                        Laptops
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigateto("Phone")} className=" text-indigo " >
                        Smart Phones
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigateto("Smart Devices")} className=" text-indigo " >
                        Smart Devices
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigateto("Accessories")} className=" text-indigo " >
                        Accessories
                    </NavDropdown.Item>

                </NavDropdown>


                <Form className="d-flex">
                    <input
                        type="search"
                        placeholder="Search ..."
                        className="me-2 searchBar bg-transparent text-center"
                        aria-label="Search"
                        value={searching}
                        onChange={Search}
                    />
                    <Button variant="outline-indigo">Search</Button>
                </Form>
                <div className={typing === true ? "searchArea border border-2 p-1  position-absolute start-50 overflow-auto top-10 bg-indiggo rounded-3" : "d-none"}>
                    {
                        results.map((element) =>
                            <div onClick={() => {
                                NavTo(`/techno-land/Product/${element.name}`);
                                setSearching("");
                                setTyping(false)

                            }} className="result position-relative  h-25 border-bottom  d-flex align-items-center justify-content-around">
                                <img className="" src={element.imgSrc} alt="" />
                                <div className="info w-75 d-flex flex-column">
                                    <h5 className="text-gray">{element.name}</h5>
                                    <p>{element.description}</p>
                                    <div className="price position-absolute  bottom-0 end-0">{element.price} $</div>
                                </div>

                            </div>


                        )

                    }


                </div>

                <div className="login d-flex align-items-center">
                    <FontAwesomeIcon className="user-icon me-2" icon={faUser} />
                    {
                        props.online === false ?
                            <>
                                <div className="Guest" onClick={() => navigateto("Authentificating")}>Guest</div>
                            </>
                            :
                            <>

                                <NavDropdown className="" title={props.onlineUser.username} id="navbarScrollingDropdown">
                                    <NavDropdown.Item onClick={() => navigateto("")} className="text-indigo border-bottom border-indigo " >
                                        <FontAwesomeIcon className="user-icon me-1" icon={faGear} />
                                        Setting (...)
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => {
                                        props.setOnline(false);
                                        navigateto("")
                                    }} className=" text-indigo" >
                                        <FontAwesomeIcon className="user-icon me-1" icon={faRightFromBracket} />
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>

                            </>

                    }

                </div>


                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} >
                        <Container fluid>
                            <Navbar.Toggle className="d-flex position-relative h-100">
                                {/* Cart icon */}
                                <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
                                <p className={tabCarts.length > 0 ? "bg-white position-absolute w-50 border border-indigo d-flex align-items-center justify-content-center text-indigo fs-6 h-75 rounded-circle ms-2 top-0 fw-bolder" : "d-none"}>{tabCarts.length}</p>
                            </Navbar.Toggle>
                            <Navbar.Offcanvas
                                className="side-bar "
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"

                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title className="text-white" id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Cart
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2 "
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-indigo">Search</Button>
                                    </Form>
                                    {
                                        tabCarts.map((element, index) =>
                                            <>
                                                <div className="cart border p-1 mt-2 d-flex align-items-center justify-content-around" key={index}>
                                                    <div className="image-div w-25 h-100 d-lg-flex align-self-start mt-0">
                                                        <img className="w-100" src={element.image} alt="" />
                                                    </div>
                                                    <div className="cart-info d-flex flex-column align-start-center justify-content-between">
                                                        <h5 className="text-gray ms-1">{element.name}</h5>
                                                        <p className="order ms-1 text-white fs-6">You Added {element.quantity} {element.name} to your basket for {Math.ceil(element.quantity * element.price)} $</p>
                                                        <div className="controlepanel d-flex align-items-center justify-content-around">
                                                            <button className="btn text-white" onClick={() => {
                                                                Minusitem(element, index)

                                                            }}>-</button>
                                                            <p className="text-white mt-1">{element.quantity}</p>
                                                            <button className="btn text-white" onClick={() => {
                                                                Plusitem(element, index)
                                                            }}>+</button>
                                                        </div>
                                                        <button className="btn bg-indigo rounded-pill text-white" onClick={Checking}>Checkout</button>

                                                    </div>
                                                </div>
                                            </>
                                        )




                                    }



                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}

            </div >
        </>


    )
}