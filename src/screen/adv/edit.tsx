import "bootstrap/dist/css/bootstrap.css";

import { Formik } from "formik";
import { postAdded, postUpdated } from "../../redux-config/entities/adv/slice";
import { useAppDispatch, useAppSelector } from "../../redux-config/hooks";

import house from "../../asset/content/house.webp";
import { AdvForm } from "../../form";
import { AppUseParam, useAppNavigate } from "../../route";
import { useState } from "react";
import { selectAdv } from "../../redux-config/entities/adv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
export const EditAdv = (props: any) => {
    const [pic, setPic] = useState<string>("");
    const navigate = useAppNavigate();
    const dispatch = useAppDispatch();
    const { id } = AppUseParam();
    const adv = useAppSelector(selectAdv);
    const color1 = "#f6f6f6";
    const color2 = "#f6f6f800";

    const editUserRedux = (event: any, id: any) => {
        console.log("id",id)
        dispatch(
            postUpdated({
                id: id,
                streetName: event.streetName,
                        houseNumber: event.houseNumber,
                        addition: event.addition,
                        postalCode: event.postalCode,
                        city: event.city,
                        picture: event.picture,
                        price: event.price,
                        size: event.size,
                        garage: event.garage,
                        bedrooms: event.bedrooms,
                        bathroom: event.bathroom,
                        date: event.date,
                        descripption:event.description
            })
        )
    };
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
                            <strong>Edit New Listing</strong>
                        </span>
                    </div>
                </div>
                <Formik<AdvForm.FormValues>
                    validationSchema={AdvForm.ValidationSchema}
                    initialValues={{
                        id:adv[Number(id)].id,
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
                        description: adv[Number(id)].descripption,
                    }}
                    onSubmit={(event) => {
                        editUserRedux(event,adv[Number(id)].id)
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
