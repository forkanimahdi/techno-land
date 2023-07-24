import "./Laptop.sass"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useNavigate, useParams } from "react-router-dom";


export const CategoryComponent = (props) => {

    const { category } = useParams()
    let Destination = useNavigate()





    


    const SendtoProductInfo = (element) => {
        Destination(`/techno-land/Product/${element.name}`)


    }


    return (
        <>
            <div className="m3rftch p-2 bg-indigo"></div>

            <div className="products container p-2 d-flex align-items-center justify-content-around flex-wrap">
                {
                    props.tabAllProducts.map((element, index) =>
                        element.type === category ?

                            <>
                                <Card className="cards-body bg-transparent border border-1 border-indigo p-1 mt-2" style={{ width: '20rem', height: '30rem' }}>
                                    <Card.Img variant="top h-50" src={element.imgSrc} />
                                    <Card.Body className="h-25" style={{ height: '20%' }}>
                                        <Card.Title className="text-center text-white">{element.name}</Card.Title>
                                        <Card.Text className="text-center text-gray" >
                                            {element.description}
                                        </Card.Text>
                                        <div className="text-center">
                                            <h5 className="text-white p-1">{element.price} $</h5>
                                        </div>
                                        <div className="text-center">
                                            <Button onClick={() =>
                                                SendtoProductInfo(element)
                                            } className="m-auto rounded-pill border w-75 border-1 border-white" variant="indigo">Go To Product</Button>
                                        </div>
                                    </Card.Body>
                                </Card>

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