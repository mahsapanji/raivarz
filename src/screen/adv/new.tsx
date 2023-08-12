import "bootstrap/dist/css/bootstrap.css";
import { Formik } from "formik";
import { postAdded } from "../../redux-config/entities/adv/slice";
import { useAppDispatch } from "../../redux-config/hooks";
import house from "../../asset/content/house.webp";
import { AdvForm } from "../../form";
import { useAppNavigate } from "../../route";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
export const NewAdv = (props: any) => {
    const [pic, setPic] = useState<string>("");
    const navigate = useAppNavigate();
    const dispatch = useAppDispatch();
    const addAdvRedux = (event: any) => {
        dispatch(
            postAdded({
                id: nanoid(),
                streetName: event.streetName,
                houseNumber: event.houseNumber,
                addition: event.addition,
                postalCode: event.postalCode,
                city: event.city,
                picture: pic,
                price: event.price,
                size: event.size,
                garage: event.garage,
                bedrooms: event.bedrooms,
                bathroom: event.bathroom,
                date: event.date,
                descripption: event.descripption,
            }),
        );

        navigate("/");
    };
    const color1 = "#f6f6f6";
    const color2 = "#f6f6f800";
    return (
        <section className="d-flex flex-column  col-12   justify-content-center align-items-center   ">
            <div
                className="d-flex flex-column   col-12 col-lg-8  align-items-end "
                style={{ backgroundImage: `url(${house})` }}
            >
                <div
                    className="d-flex flex-row-reverse flex-lg-column col-12   col-lg-12  align-items-center justify-content-start pt-1 "
                    style={{
                        background: `linear-gradient(115deg,  ${color1} 74%,${color2} 149%)`,
                    }}
                >
                    <div className="d-flex flex-column-reverse flex-lg-row col-1 col-lg-12   justify-content-end pt-3 align-items-start ">
                        <span className="d-none d-lg-flex ">
                            <small>Back to preview</small>
                        </span>
                        <FontAwesomeIcon
                            icon={faArrowLeftLong}
                            className="pe-2 pointer"
                            size="sm"
                            onClick={() => navigate(-1)}
                        />
                    </div>
                    <div className="d-flex flex-column  col-8 col-lg-12   justify-content-start  align-items-start pt-3 ">
                        <span className="text-start col-lg-12 ">
                            <strong>Create New Listing</strong>
                        </span>
                    </div>
                </div>
                <Formik<AdvForm.FormValues>
                    validationSchema={AdvForm.ValidationSchema}
                    initialValues={{
                        streetName: "",
                        houseNumber: "",
                        addition: "",
                        postalCode: "",
                        city: "",
                        picture: "",
                        price: "",
                        size: "",
                        garage: "",
                        bedrooms: "",
                        bathroom: "",
                        date: "",
                        descripption: "",
                    }}
                    onSubmit={(event) => {
                        addAdvRedux(event);
                        // console.log("event pic", event.picture);
                    }}
                    component={(props: any) => (
                        <AdvForm.AdvForm
                            submitTxt="send"
                            pic={setPic}
                            {...props}
                        />
                    )}
                />
            </div>
        </section>
    );
};
