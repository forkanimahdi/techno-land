import "./Category.sass"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image1 from '../../../../assets/images/Laptop.png';
import Image2 from '../../../../assets/images/smartphones.png';
import Image3 from '../../../../assets/images/SW.png';
import Image4 from '../../../../assets/images/csq.png';
import { useNavigate } from "react-router-dom";


export const CategoryComponent = () => {

    class Categorys {
        constructor(imgCat, tittleCat, descriptionCat, type) {
            this.imgCat = imgCat;
            this.tittleCat = tittleCat;
            this.descriptionCat = descriptionCat;
            this.type = type
        }
    }

    let laptopCat = new Categorys(Image1, "Laptop Category", "Step into a world of cutting-edge communication and technology with our exceptional phone collection ", "Laptop")
    let PhoneCat = new Categorys(Image2, "Phone Category", "Step into a world of cutting-edge communication and technology with our exceptional Phone collection ", "Phone")
    let SmartDevicesCat = new Categorys(Image3, "Smart Devices Category", "Step into a world of cutting-edge communication and technology with our exceptional phone collection ", "Smart Devices")
    let AccessoriesCat = new Categorys(Image4, "Accessories Category", "Step into a world of cutting-edge communication and technology with our exceptional phone collection ", "Accessories")

    const tabCategorys = [laptopCat, PhoneCat, SmartDevicesCat, AccessoriesCat]

    let Destination = useNavigate()
    const navigateTo = (element) => {
        Destination(`/techno-land/Category/${element.type}`)
    }
    return (
        <>
            {
                tabCategorys.map((element, index) =>
                    <>
                        <Card className="cards-body bg-transparent border border-1 border-indigo p-1 mt-" style={{ width: '20rem', height: '62vh' }}>
                            <Card.Img variant="top h-50" src={element.imgCat} />
                            <Card.Body className="">
                                <Card.Title className="text-center text-white">{element.tittleCat}</Card.Title>
                                <Card.Text className="text-center text-gray">
                                    {element.descriptionCat}
                                </Card.Text>
                                <div className="text-center">
                                    <Button onClick={() => navigateTo(element)} className="m-auto rounded-pill border border-1 border-white" variant="indigo">Browse Category</Button>
                                </div>
                            </Card.Body>
                        </Card>

                    </>
                )
            }
        </>

    )
}