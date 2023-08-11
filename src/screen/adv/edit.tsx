import "bootstrap/dist/css/bootstrap.css";

import { Formik } from "formik";
import { postAdded } from "../../redux-config/entities/adv/slice";
import { useAppDispatch } from "../../redux-config/hooks";

import { AppUseParam, useAppNavigate } from "../../route";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import logo from "../../asset/content/logo.png"
export const EditAdv = (props: any) => {
    const { id } = AppUseParam();

    const navigate = useAppNavigate();
    const [showId, setId] = useState<number>(0);
    const dispatch = useAppDispatch();
    const addUserRedux = (event: any) => {
        setId(showId + 1);
        dispatch(
            postAdded({
                id: nanoid(),
                fullName: event.fullName,
                email: event.email,
                detail: event.detail,
                status: event.status,
                access: event.access,
            }),
        );

        navigate("/");
    };
    return (
        <section className="d-flex flex-column  col-12   justify-content-center align-items-center  bg-light ">
        <div className="d-flex flex-column flex-lg-row col-8 bg-light">
           new
           </div>
        </section>
    );
};