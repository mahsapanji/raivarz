import "bootstrap/dist/css/bootstrap.css";
import { Form, Button } from "react-bootstrap";
import { FormikProps } from "formik";
import { FormValues, PropType } from "./type";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const AdvForm = (props: PropType & FormikProps<FormValues>) => {
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        submitTxt,
        pic,
    } = props;

    const [selectedFile, setSelectedFile] = useState<string>("");
    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const objectUrl =
            e.currentTarget.files &&
            URL.createObjectURL(e.currentTarget.files[0]);
        objectUrl && setSelectedFile(objectUrl);
        //  pic(objectUrl);
    };

    const color1 = "#f6f6f6";
    const color2 = "#f6f6f800";
    return (
        <div
            className="d-flex  flex-column col-12  align-items-end  pt-3"
            style={{
                background: `linear-gradient(115deg,  ${color1} 45%,${color2} 100%)`,
            }}
        >
            <Form
                onSubmit={handleSubmit}
                className=" col-12 col-lg-5 align-items-start  "
            >
                <Form.Group
                    controlId="adv-streetName"
                    className="position-relative"
                >
                    <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                        {" "}
                        Street Name{" "}
                    </Form.Label>
                    <Form.Control
                        aria-label="streetName"
                        className="d-flex text-start"
                        type="string"
                        name="streetName"
                        placeholder="Azadi street"
                        onBlur={handleBlur}
                        value={values.streetName}
                        onChange={handleChange}
                        isInvalid={touched.streetName && !!errors.streetName}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.streetName}
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex flex-row col-12  justify-content-between mt-3">
                    <div className="d-flex flex-column col-6 ">
                        <Form.Group
                            controlId="adv-houseNumber"
                            className="position-relative"
                        >
                            <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                                {" "}
                                House Number{" "}
                            </Form.Label>
                            <Form.Control
                                aria-label="houseNumber"
                                className="d-flex text-start"
                                type="string"
                                name="houseNumber"
                                placeholder="132"
                                onBlur={handleBlur}
                                value={values.houseNumber}
                                onChange={handleChange}
                                isInvalid={
                                    touched.houseNumber && !!errors.houseNumber
                                }
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.houseNumber}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="d-flex flex-column col-5  ">
                        <Form.Group
                            controlId="adv-addition"
                            className="position-relative"
                        >
                            <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                                {" "}
                                Addition{" "}
                            </Form.Label>
                            <Form.Control
                                aria-label="addition"
                                className="d-flex text-start"
                                type="string"
                                name="addition"
                                placeholder="132"
                                onBlur={handleBlur}
                                value={values.addition}
                                onChange={handleChange}
                                isInvalid={
                                    touched.addition && !!errors.addition
                                }
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.addition}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                </div>

                <Form.Group
                    controlId="adv-postalCode"
                    className="position-relative mt-3"
                >
                    <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                        {" "}
                        Postal Code{" "}
                    </Form.Label>
                    <Form.Control
                        aria-label="postalCode"
                        className="d-flex text-start"
                        type="string"
                        name="postalCode"
                        placeholder="1100 AA"
                        onBlur={handleBlur}
                        value={values.postalCode}
                        onChange={handleChange}
                        isInvalid={touched.postalCode && !!errors.postalCode}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.postalCode}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                    controlId="adv-city"
                    className="position-relative mt-3"
                >
                    <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                        {" "}
                        City{" "}
                    </Form.Label>
                    <Form.Control
                        aria-label="city"
                        className="d-flex text-start"
                        type="string"
                        name="city"
                        placeholder="Amesterdam"
                        onBlur={handleBlur}
                        value={values.city}
                        onChange={handleChange}
                        isInvalid={touched.city && !!errors.city}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.city}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                    controlId="adv-price"
                    className="position-relative mt-3"
                >
                    <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                        {" "}
                        price{" "}
                    </Form.Label>
                    <Form.Control
                        aria-label="price"
                        className="d-flex text-start"
                        type="string"
                        name="price"
                        placeholder="500.000"
                        onBlur={handleBlur}
                        value={values.price}
                        onChange={handleChange}
                        isInvalid={touched.price && !!errors.price}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.price}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="col-12 mt-3 ">
                    <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                        Upload Image
                    </Form.Label>
                    <Form.Control
                        id="input-adv-picture"
                        className="d-none"
                        aria-label="adv-picture"
                        type="file"
                        name="picture"
                        title=" "
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onSelectFile(e)
                        }
                    ></Form.Control>

                    {selectedFile.length == 0 ? (
                        <div className="ol-12   d-flex flex-column justify-content-center align-items-end">
                            <Form.Label
                                style={{ cursor: "pointer" }}
                                htmlFor="input-adv-picture"
                                className="    rounded p-1 col-6  d-flex flex-column  "
                            >
                                <div className="border-dashed rounded px-2 d-flex flex-column col-12    justify-content-center align-items-center height">
                                    <FontAwesomeIcon icon={faPlus} size="xl" />
                                </div>
                            </Form.Label>
                        </div>
                    ) : (
                        <div className=" rounded  col-12   d-flex flex-column justify-content-start align-items-end">
                            <div className=" col-2 px-5 pt-1  d-flex flex-column  justify-content-start align-items-start close-icon">
                                <FontAwesomeIcon
                                    icon={faClose}
                                    className="bg-white rounded-circle p-1 pointer"
                                    onClick={() => setSelectedFile("")}
                                />
                            </div>
                            <img
                                src={selectedFile}
                                className="   rounded d-flex flex-column col-6     justify-content-center align-items-center picture  "
                            />
                        </div>
                    )}
                    <Form.Control.Feedback type="invalid">
                        {errors.picture}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex flex-row col-12  justify-content-between mt-3">
                    <div className="d-flex flex-column col-6 ">
                        <Form.Group
                            controlId="adv-size"
                            className="position-relative"
                        >
                            <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                                {" "}
                                Size{" "}
                            </Form.Label>
                            <Form.Control
                                aria-label="size"
                                className="d-flex text-start"
                                type="string"
                                name="size"
                                placeholder="120 m2"
                                onBlur={handleBlur}
                                value={values.size}
                                onChange={handleChange}
                                isInvalid={touched.size && !!errors.size}
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.size}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="d-flex flex-column col-5  ">
                        <Form.Group
                            controlId="adv-garage"
                            className="position-relative"
                        >
                            <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                                Garage
                            </Form.Label>
                            <Form.Select
                                className="d-flex text-start"
                                name="garage"
                                aria-label="garage"
                                value={values.garage}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.garage && !!errors.garage}
                            >
                                <option value="" label="choose">
                                    choose
                                </option>
                                <option value="yes" label="yes">
                                    yes
                                </option>
                                <option value="no" label="no">
                                    no
                                </option>
                            </Form.Select>

                            <Form.Control.Feedback type="invalid">
                                {errors.garage}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex flex-row col-12  justify-content-between mt-3">
                    <div className="d-flex flex-column col-6 ">
                        <Form.Group
                            controlId="adv-bedrooms"
                            className="position-relative"
                        >
                            <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                                {" "}
                                Bedrooms{" "}
                            </Form.Label>
                            <Form.Control
                                aria-label="bedrooms"
                                className="d-flex text-start"
                                type="string"
                                name="bedrooms"
                                placeholder="2"
                                onBlur={handleBlur}
                                value={values.bedrooms}
                                onChange={handleChange}
                                isInvalid={
                                    touched.bedrooms && !!errors.bedrooms
                                }
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.bedrooms}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="d-flex flex-column col-5  ">
                        <Form.Group
                            controlId="adv-bathroom"
                            className="position-relative"
                        >
                            <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                                {" "}
                                Bathroom{" "}
                            </Form.Label>
                            <Form.Control
                                aria-label="bathroom"
                                className="d-flex text-start"
                                type="string"
                                name="bathroom"
                                placeholder="3"
                                onBlur={handleBlur}
                                value={values.bathroom}
                                onChange={handleChange}
                                isInvalid={
                                    touched.bathroom && !!errors.bathroom
                                }
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.bathroom}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                </div>
                <Form.Group
                    controlId="adv-date"
                    className="position-relative mt-3"
                >
                    <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                        {" "}
                        Construction Date{" "}
                    </Form.Label>
                    <Form.Control
                        aria-label="date"
                        className="d-flex text-start"
                        type="string"
                        name="date"
                        placeholder="Amesterdam"
                        onBlur={handleBlur}
                        value={values.date}
                        onChange={handleChange}
                        isInvalid={touched.date && !!errors.date}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.date}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                    controlId="adv-descripption"
                    className="position-relative mt-3"
                >
                    <Form.Label className=" col-12 flex-row  d-flex justify-content-end">
                        {" "}
                        Descripption{" "}
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        aria-label="descripption"
                        className="d-flex text-start"
                        type="string"
                        name="descripption"
                        placeholder="Amesterdam"
                        onBlur={handleBlur}
                        value={values.descripption}
                        onChange={handleChange}
                        isInvalid={
                            touched.descripption && !!errors.descripption
                        }
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.descripption}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button
                    type="submit"
                    className="col-12 col-lg-5 bg-danger my-4"
                    variant="danger"
                >
                    {submitTxt}{" "}
                </Button>
            </Form>
        </div>
    );
};
