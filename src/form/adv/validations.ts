import * as Yup from "yup";

export const ValidationSchema = () =>
    Yup.object().shape({
        streetName: Yup.string().required(" this field is required ."),
        houseNumber: Yup.number().required(" this field is required .").min(1),
        postalCode: Yup.string().required(" this field is required ."),
        city: Yup.string().required(" this field is required ."),
            // picture: Yup.mixed()
            // .required(" this field is required ."),
        price: Yup.number().required(" this field is required .").min(1),
        size: Yup.number().required(" this field is required .").min(1),
        garage: Yup.string().required(" this field is required ."),
        bedrooms: Yup.number().required(" this field is required .").min(1),
        bathroom: Yup.number().required(" this field is required .").min(1),
        date: Yup.string().required(" this field is required ."),
        description: Yup.string().required(" this field is required ."),
    });
