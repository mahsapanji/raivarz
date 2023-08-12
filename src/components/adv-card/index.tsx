import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "../../redux-config/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBath,
    faBed,
    faEdit,
    faSquare,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAppNavigate } from "../../route";
import house from "../../asset/content/house.webp";

import { AdvType } from "../../dto";
const AdvCard = (props: {setModal:Function,id:Function,item:AdvType[]}) => {
    const adv = props.item
 
    const navigate = useAppNavigate();
    return (
        <>
            {adv.length == 0 ? (
                <div className="d-flex flex-column bg-white text-black shadow-sm col-12 col-lg-8 my-2 rounded justify-content-center align-items-center   p-3 ">
                    <span>There Is No Advertise</span>
                </div>
            ) : (
                adv.map((item, index) => {
                    return (
                        <div className="d-flex flex-row bg-white text-black shadow-sm col-12 col-lg-8 my-2 rounded justify-content-between adv-card  p-3 ">
                            <div className="d-flex flex-row    col-lg-1  col-3  my-2 rounded">
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="px-2"
                                    onClick={() =>{ props.setModal(true);props.id(item.id)}}
                                />
                                <FontAwesomeIcon
                                    onClick={() =>
                                        navigate(`/adv/edit/${index}`)
                                    }
                                    icon={faEdit}
                                    color="red"
                                    className="px-2"
                                />
                            </div>
                            <Link
                                to={`adv/${index}`}
                                className="d-flex flex-row text-black col-lg-11  col-9 my-2 rounded"
                            >
                                <div className="d-flex flex-row     col-12 ">
                                    <div className="d-flex flex-column  col-6 col-lg-10  align-items-end px-2 " style={{overflow:'hidden'}}>
                                        <span className="pt-2">
                                            {item.streetName}
                                            {item.houseNumber}
                                        </span>
                                        <span className="pt-2">
                                            {" "}
                                            {item.price} $
                                        </span>

                                        <span className="pt-2">
                                            {item.postalCode}
                                            {item.city}
                                        </span>

                                        <div className="d-flex flex-row mt-2  col-12 justify-content-end ">
                                            <span >
                                                {" "}
                                                {item.size}{" "}
                                                <FontAwesomeIcon
                                                    icon={faSquare}
                                                    className="px-2"
                                                />{" "}
                                            </span>
                                            <span>
                                                {item.bathroom}
                                                <FontAwesomeIcon
                                                    icon={faBath}
                                                    className="px-2"
                                                />{" "}
                                            </span>
                                            <span>
                                                {item.bedrooms}{" "}
                                                <FontAwesomeIcon
                                                    icon={faBed}
                                                    className="px-2"
                                                />{" "}
                                            </span>
                                        </div>
                                    </div>

                                    <img
                                        src={house}
                                        className=" col-6 col-lg-2 col-lg-2 rounded "
                                    />
                                </div>
                            </Link>
                        </div>
                    );
                })
            )}
              
        
        </>
    );
};
export default AdvCard;
