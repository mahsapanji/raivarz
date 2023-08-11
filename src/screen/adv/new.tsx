import "bootstrap/dist/css/bootstrap.css";

import { Formik } from "formik";
import { postAdded } from "../../redux-config/entities/adv/slice";
import { useAppDispatch } from "../../redux-config/hooks";


import house from "../../asset/content/house.webp"
import { AdvForm } from "../../form";
import { AdvType } from "../../dto";
import { useAppNavigate } from "../../route";
export const NewAdv = (props: any) => {

    const navigate = useAppNavigate();
    const dispatch = useAppDispatch();
    const addAdvRedux = (event:AdvType) => {
        dispatch(
            postAdded({
                streetName: event.streetName,
    houseNumber: event.houseNumber,
    addition: event.addition,
    postalCode:event.postalCode,
    city:event.city,
    picture:event.picture,
    price:event.price,
    size:event.size ,
    garage:event.garage,
    bedrooms:event.bedrooms,
    bathroom:event.bathroom,
    date:event.date,
    descripption:event.descripption,            })
        )

        navigate("/");
    };
    return (
        <section className="d-flex flex-column  col-12   justify-content-center align-items-center   " >

            <div className="d-flex flex-column   col-8  align-items-end " style={{ backgroundImage: `url(${house})` }}>
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
                        console.log( "pic",event)
                        // addAdvRedux(event)                 
                       
                    }}
                    component={(props: any) => (
                        <AdvForm.AdvForm submitTxt="send" {...props}  />
                    )}
                />
            </div>
        </section>
    );
};
