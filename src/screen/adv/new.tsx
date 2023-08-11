import "bootstrap/dist/css/bootstrap.css";
import { Formik } from "formik";
import { postAdded } from "../../redux-config/entities/adv/slice";
import { useAppDispatch } from "../../redux-config/hooks";
import house from "../../asset/content/house.webp";
import { AdvForm } from "../../form";
import { useAppNavigate } from "../../route";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
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
    return (
        <section className="d-flex flex-column  col-12   justify-content-center align-items-center   ">
            <div
                className="d-flex flex-column   col-12 col-lg-8  align-items-end "
                style={{ backgroundImage: `url(${house})` }}
            >
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
