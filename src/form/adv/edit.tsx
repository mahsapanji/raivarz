import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { Form, Button } from "react-bootstrap";
import { Field, FormikProps } from "formik";

import { FormValues, PropType } from "./type";
import "./style.scss";
export const AdvFormEdit = (props: PropType & FormikProps<FormValues>) => {
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        submitTxt,
    } = props;

    return (
        <div className="d-flex flex-column col-12 ">
            <Form onSubmit={handleSubmit} className="bg-light p-4">
                <Form.Group
                    controlId="user-streetName"
                    className="position-relative"
                >
                    <Form.Label> Street Name : </Form.Label>
                    <Form.Control
                        aria-label="streetName"
                        className="h3"
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
                <div className="d-flex flex-row col-12 ">
                <Form.Group
                    controlId="user-houseNumber"
                    className="position-relative"
                >
                    <Form.Label>houseNumber :</Form.Label>
                    <Form.Control
                        aria-label="houseNumber"
                        className="h3"
                        type="string"
                        name="houseNumber"
                        placeholder="132"
                        onBlur={handleBlur}
                        value={values.houseNumber}
                        onChange={handleChange}
                        isInvalid={touched.houseNumber && !!errors.houseNumber}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.houseNumber}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    controlId="user-addition"
                    className="position-relative"
                >
                    <Form.Label>addition :</Form.Label>
                    <Form.Control
                        // as="textarea"
                        aria-label="addition"
                        className=" h3"
                        type="string"
                        name="addition"
                        onBlur={handleBlur}
                        value={values.addition}
                        onChange={handleChange}
                        isInvalid={touched.addition && !!errors.addition}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.addition}
                    </Form.Control.Feedback>
                </Form.Group>
                </div>
                {/* <Form.Group
                    controlId="user-access"
                    className="position-relative"
                >
                    <Form.Label>دسترسی ها :</Form.Label>
                    <table className="col-12">
                        <tr>
                            <th>نام دسترسی</th>
                            <th>دیدن</th>

                            <th> ویرایش</th>

                            <th> حذف </th>
                        </tr>
                        <tr>
                            <td>صفحه مقالات </td>
                            <td>
                                <Field
                                    type="checkbox"
                                    value="see"
                                    name="access.assay"
                                />
                            </td>

                            <td>
                                {" "}
                                <Field
                                    type="checkbox"
                                    value="edit"
                                    name="access.assay"
                                />
                            </td>

                            <td>
                                {" "}
                                <Field
                                    type="checkbox"
                                    value="delete"
                                    name="access.assay"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td> صفحه محصولات</td>
                            <td>
                                {" "}
                                <Field
                                    type="checkbox"
                                    value="see"
                                    name="access.page"
                                />
                            </td>

                            <td>
                                {" "}
                                <Field
                                    type="checkbox"
                                    value="edit"
                                    name="access.page"
                                />
                            </td>

                            <td>
                                {" "}
                                <Field
                                    type="checkbox"
                                    value="delete"
                                    name="access.page"
                                />{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> صفحه مارکت </td>
                            <td>
                                <Field
                                    type="checkbox"
                                    value="see"
                                    name="access.market"
                                />
                            </td>

                            <td>
                                {" "}
                                <Field
                                    type="checkbox"
                                    value="edit"
                                    name="access.market"
                                />
                            </td>

                            <td>
                                {" "}
                                <Field
                                    type="checkbox"
                                    value="delete"
                                    name="access.market"
                                />{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> صفحه خرید و فروش </td>
                            <td>
                                <Field
                                    type="checkbox"
                                    value="see"
                                    name="access.sell"
                                />
                            </td>

                            <td>
                                {" "}
                                <Field
                                    type="checkbox"
                                    value="edit"
                                    name="access.sell"
                                />
                            </td>

                            <td>
                                {" "}
                                <Field
                                    type="checkbox"
                                    value="delete"
                                    name="access.sell"
                                />{" "}
                            </td>
                        </tr>
                    </table>
                </Form.Group>

                <Form.Group
                    controlId="user-status"
                    className="position-relative py-1 "
                >
                    <Form.Label>وضعیت : </Form.Label>
                    <br />
                    <Field type="radio" name="status" value="active" />
                    فعال
                    <Field type="radio" name="status" value="deactive" />
                    غیر فعال
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.status}
                    </Form.Control.Feedback>
                </Form.Group> */}
                <Button type="submit" className="col-12 mt-4">
                    {submitTxt}{" "}
                </Button>
            </Form>
        </div>
    );
};
