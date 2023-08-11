import "bootstrap/dist/css/bootstrap.css";

import { Formik } from "formik";
import { postAdded } from "../../redux-config/entities/adv/slice";
import { useAppDispatch, useAppSelector } from "../../redux-config/hooks";

import house from "../../asset/content/house.webp";
import { AdvForm } from "../../form";
import { AppUseParam, useAppNavigate } from "../../route";
import { useState } from "react";
import { selectAdv } from "../../redux-config/entities/adv";
export const EditAdv = (props: any) => {
    const [pic, setPic] = useState<string>("");
    const navigate = useAppNavigate();
    const dispatch = useAppDispatch();
    const { id } = AppUseParam();
    const adv = useAppSelector(selectAdv);

    return (
        <section className="d-flex flex-column  col-12   justify-content-center align-items-center   ">
            <div
                className="d-flex flex-column   col-12 col-lg-8  align-items-end "
                style={{ backgroundImage: `url(${house})` }}
            >
                <Formik<AdvForm.FormValues>
                    validationSchema={AdvForm.ValidationSchema}
                    initialValues={{
                        streetName: adv[Number(id)].streetName,
                        houseNumber: adv[Number(id)].houseNumber,
                        addition: adv[Number(id)].addition,
                        postalCode: adv[Number(id)].postalCode,
                        city: adv[Number(id)].city,
                        picture: "",
                        price: adv[Number(id)].price,
                        size: adv[Number(id)].size,
                        garage: adv[Number(id)].garage,
                        bedrooms: adv[Number(id)].bedrooms,
                        bathroom: adv[Number(id)].bathroom,
                        date: adv[Number(id)].date,
                        descripption: adv[Number(id)].descripption,
                    }}
                    onSubmit={(event) => {
                        navigate("/");
                    }}
                    component={(props: any) => (
                        <AdvForm.AdvForm
                            submitTxt="save"
                            pic={setPic}
                            {...props}
                        />
                    )}
                />
            </div>
        </section>
    );
};
