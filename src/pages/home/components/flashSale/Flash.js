import "./Flash.sass";
import Image1 from '../../../../assets/images/keyboard.gif';
import Image2 from '../../../../assets/images/muse-argb.gif';
import { useEffect, useState } from "react";

export const FlashSalesComponent = () => {
    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(30);
    const [hours, setHours] = useState(4);
    let interval;

    useEffect(() => {
        interval = setInterval(() => {
            LimitedTime();
        }, 1000);

        return () => clearInterval(interval); 

    }, []); 

    const LimitedTime = () => {
        setSeconds(prevSeconds => {
            if (prevSeconds <= 0) {
                setMinutes(prevMinutes => {
                    if (prevMinutes <= 0) {
                        setHours(prevHours => {
                            if (prevHours <= 0) {
                                clearInterval(interval);
                                return prevHours;
                            }
                            return prevHours - 1;
                        });
                        return prevMinutes;
                    }
                    return prevMinutes - 1;
                });
                return 59;
            }
            return prevSeconds - 1;
        });
    };

    const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

    return (
        <>
            <div className="w-100 h-100 d-flex align-items-center justify-content-evenly">
                <div className="h-75 w-25 position-relative d-flex flex-column align-items-start justify-content-evenly">
                    <h3 className="text-white ">Special Offer!</h3>
                    <h3 className="text-indigo counter">
                        <span className="text-white fs-5">Limited Offer:</span> {formattedTime}
                    </h3>
                    <p className="text-white">Buy the first Element and get the Accessory related to it for free</p>
                    <button className="btn bg-indigo border border-1 border-white rounded-pill w-50 text-white">Order Now</button>
                </div>
                <div className="images d-flex align-items-center justify-content-around w-25">
                    <img className="w-100" src={Image1} alt="" />
                    <h5 className="text-white">+</h5>
                    <img className="w-50" src={Image2} alt="" />
                </div>
            </div>
        </>
    );
};
