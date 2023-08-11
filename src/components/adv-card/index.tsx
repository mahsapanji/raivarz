import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./style.scss";
import { useAppDispatch } from "../../redux-config/hooks";
import pic from "../../asset/content/house.webp";

// import { postUpdated, userDel } from "../../redux-config/entities/adv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBath,
    faBed,
    faEdit,
    faGrinSquint,
    faSquare,
    faSquareEnvelope,
    faSquareH,
    faTachometer,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAppNavigate } from "../../route";

const AdvCard = (props: {}) => {
    const [shoWEdit, setEdit] = useState(false);
    const [shoWId, setId] = useState(0);

    const dispatch = useAppDispatch();

    // const editUserRedux = (event: any, id: any) => {
    //     dispatch(
    //         postUpdated({
    //             id: id,
    //             fullName: event.fullName,
    //             detail: event.detail,
    //             status: event.status,
    //             access: event.access,
    //         }),
    //     );
    //     setEdit(false);
    // };
    // const dellUserRedux = (id: any) => {
    //     dispatch(userDel(id));
    // };
    const data = [
        {
            id: 1,
            image: "",
            title: "Stokvisstraat 132",
            price: "500.000",
            address: "1011 AA Amesterdam",
            bed: 1,
            bath: 1,
            meter: "120m2 ",
        },
        {
            id: 2,
            image: "",
            title: "Stokvisstraat 132",
            price: "500.000",
            address: "1011 AA Amesterdam",
            bed: 1,
            bath: 1,
            meter: "120m2 ",
        },

        {
            id: 3,
            image: "",
            title: "Stokvisstraat 132",
            price: "500.000",
            address: "1011 AA Amesterdam",
            bed: 1,
            bath: 1,
            meter: "120m2 ",
        },

        {
            id: 4,
            image: "",
            title: "Stokvisstraat 132",
            price: "500.000",
            address: "1011 AA Amesterdam",
            bed: 1,
            bath: 1,
            meter: "120 ",
        },

        {
            id: 5,
            image: "",
            title: "Stokvisstraat 132",
            price: "500.000",
            address: "1011 AA Amesterdam",
            bed: 1,
            bath: 1,
            meter: "120 ",
        },

        {
            id: 6,
            image: "",
            title: "Stokvisstraat 132",
            price: "500.000",
            address: "1011 AA Amesterdam",
            bed: 1,
            bath: 1,
            meter: "120 ",
        },

        {
            id: 7,
            image: "",
            title: "Stokvisstraat 132",
            price: "500.000",
            address: "1011 AA Amesterdam",
            bed: 1,
            bath: 1,
            meter: "120 ",
        },
    ];
    const navigate=useAppNavigate()
    return (
        <>
            {data.map((item) => {
                return (
                    <Link
                        to={`adv/${item.id}`}
                        className="d-flex flex-row bg-white text-black shadow-sm col-12 col-lg-8 my-2 rounded justify-content-between adv-card  p-3 "
                    >
                        <div className="d-flex flex-row    col-2 my-2 rounded">
                            <FontAwesomeIcon icon={faTrash} className="px-2" />
                            <FontAwesomeIcon
                            onClick={()=>navigate(`/adv/edit/${item.id}`)}
                                icon={faEdit}
                                color="red"
                                className="px-2"
                            />
                        </div>
                        <div className="d-flex flex-row  col-10 ">
                            <div className="d-flex flex-row     col-12 ">
                                <div className="d-flex flex-column  col-8 col-lg-10  align-items-end px-2 ">
                                    <span className="pt-2">{item.title}</span>
                                    <span className="pt-2">
                                        {" "}
                                        {item.price} $
                                    </span>

                                    <span className="pt-2">{item.address}</span>

                                    <div className="d-flex flex-row mt-2  ">
                                        <span>
                                            {" "}
                                            {item.meter}{" "}
                                            <FontAwesomeIcon
                                                icon={faSquare}
                                                className="px-2"
                                            />{" "}
                                        </span>
                                        <span>
                                            {item.bath}
                                            <FontAwesomeIcon
                                                icon={faBath}
                                                className="px-2"
                                            />{" "}
                                        </span>
                                        <span>
                                            {item.bed}{" "}
                                            <FontAwesomeIcon
                                                icon={faBed}
                                                className="px-2"
                                            />{" "}
                                        </span>
                                    </div>
                                </div>

                                <img
                                    src={pic}
                                    className=" col-4 col-lg-2 rounded "
                                />
                            </div>
                        </div>
                    </Link>
                );
            })}
        </>
    );
};
export default AdvCard;
