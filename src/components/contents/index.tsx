import { FormikErrors } from "formik";
import React, { useEffect, useState } from "react";
import { Badge, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
export const Contents = (props: {
    setContents: string;
}) => {
    const [selectedFile, setSelectedFile] = useState<string>("");
    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const objectUrl =
            e.currentTarget.files &&
            URL.createObjectURL(e.currentTarget.files[0]);
        objectUrl && setSelectedFile(objectUrl);
    };

    return (
        <div>
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
                        // defaultValue={values.picture}
                        // value={selectedFile}
                    ></Form.Control>

                    {selectedFile.length == 0 ? (
                        <Form.Label
                            style={{ cursor: "pointer" }}
                            htmlFor="input-adv-picture"
                            className="    rounded p-1 col-12   d-flex flex-column justify-content-center align-items-end "
                        >
                            <div className="border-dashed rounded px-2 d-flex flex-column col-6     justify-content-center align-items-center height">
                                <FontAwesomeIcon icon={faPlus} size="xl" />
                            </div>
                        </Form.Label>
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
                    {/* <Form.Control.Feedback type="invalid">
                        {errors.picture}
                    </Form.Control.Feedback> */}
                </Form.Group>

        </div>
    );
};

