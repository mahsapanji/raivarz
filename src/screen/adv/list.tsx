import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import { useAppNavigate } from "../../route";
import { useAppDispatch, useAppSelector } from "../../redux-config/hooks";
import { advDel, selectAdv } from "../../redux-config/entities/adv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AdvCard from "../../components/adv-card";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { AdvType } from "../../dto";

export const AdvList = (props: any) => {
    const navigate = useAppNavigate();
    const adv = useAppSelector(selectAdv);
    const [show, setShow] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
    const [showSort, setSort] = useState<AdvType[]>([]);

    const dispatch = useAppDispatch();
    const dellAdvRedux = (id: any) => {
        dispatch(advDel(id));
    };

    const sortPrice = () => {
        var priceAdv = adv.slice();
        priceAdv.sort((a, b) => {
            if (Number(a.price) < Number(b.price)) {
                return -1;
            }
            if (Number(a.price) > Number(b.price)) {
                return 1;
            }
            return 0;
        });
        setSort(priceAdv);
    };

    const sortSize = () => {
        var sizeAdv = adv.slice();
        sizeAdv.sort((a, b) => {
            if (Number(a.size) < Number(b.size)) {
                return -1;
            }
            if (Number(a.size) > Number(b.size)) {
                return 1;
            }
            return 0;
        });
        setSort(sizeAdv);
    };
    return (
        <>
            <div className="d-flex flex-column col-12 bg-light h90">
                <section className="d-flex flex-column  col-12 mt-3  justify-content-center align-items-center  bg-light ">
                    <div className="d-flex  flex-row col-12 col-lg-8 my-2   align-items-center justify-content-between  ">
                        <div className="d-flex flex-column col-lg-2 col-2  justify-content-center align-items-center">
                            <button
                                type="button"
                                onClick={() => navigate("/adv/new")}
                                className="d-none d-lg-flex  flex-row col-12  text-white bg-danger rounded p-1 text-center justify-content-center align-items-center"
                            >
                                Create New
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="px-2"
                                />
                            </button>

                            <FontAwesomeIcon
                                onClick={() => navigate("/adv/new")}
                                icon={faPlus}
                                className=" d-sm-flex d-lg-none px-2"
                            />
                        </div>
                        <div className="d-flex flex-column col-lg-1 col-10 align-items-center justify-content-center">
                            <h5>Houses</h5>
                        </div>
                    </div>
                    <div className="d-flex flex-lg-row flex-column-reverse  col-12 col-lg-8    justify-content-between    ">
                        <div className="d-flex flex-row col-lg-3 col-sm-12 align-items-center justify-content-center my-2 ">
                            <button
                                className=" d-flex flex-column col-6  bg-secondary text-center py-1 radius-right  text-white"
                                onClick={() => sortPrice()}
                                
                            >
                                Price
                            </button>
                            <button
                                className=" d-flex  flex-column col-6  bg-danger text-center py-1  radius-left   text-white"
                                onClick={() => sortSize()}
                            >
                                Size
                            </button>
                        </div>

                        <div className="d-flex flex-column col-lg-4 col-sm-12 my-2 ">
                            <div className="">
                                <input
                                    className=" border rounded  bg-secondary col-12 text-start p-1 "
                                    type="text"
                                    placeholder="Saerch for a house"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="d-flex flex-column  col-12  justify-content-center align-items-center  bg-light ">
                    {showSort.length == 0 ? (
                        <AdvCard setModal={setShow} id={setId} item={adv} />
                    ) : (
                        <AdvCard
                            setModal={setShow}
                            id={setId}
                            item={showSort}
                        />
                    )}
                </section>
            </div>
            <Modal
                show={show}
                className="d-flex flex-column col-12 justify-content-center align-items-center"
            >
                <div className="d-flex flex-column col-12 justify-content-center align-items-center p-5">
                    <span className="mb-3">
                        <strong>Deleting Listing</strong>
                    </span>
                    <span className="text-center">
                        {" "}
                        Are you sure you want to delete this listing{" "}
                    </span>
                    <span> This action cannot be undone </span>
                    <button
                        type="button"
                        onClick={() => {
                            dellAdvRedux(id);
                            setShow(false);
                        }}
                        className=" d-flex  flex-column col-12 btn btn-danger mt-5 text-center justify-content-center align-items-center"
                    >
                        yes, delete
                    </button>
                    <button
                        type="button"
                        onClick={() => setShow(false)}
                        className=" d-flex  flex-column col-12 btn btn-secondary mt-3 text-center justify-content-center align-items-center"
                    >
                        Go Back
                    </button>
                </div>
            </Modal>
        </>
    );
};
