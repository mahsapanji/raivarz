import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import { useAppNavigate } from "../../route";
import { useAppSelector } from "../../redux-config/hooks";
import { selectAdv } from "../../redux-config/entities/adv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AdvCard from "../../components/adv-card";

export const AdvList = (props: any) => {
    const navigate = useAppNavigate();
    const adv = useAppSelector(selectAdv);
    return (
        <div className="d-flex flex-column col-12 bg-light h90">
            <section className="d-flex flex-column  col-12 mt-3  justify-content-center align-items-center  bg-light ">
                <div className="d-flex  flex-row col-12 col-lg-8 my-2   align-items-center justify-content-between  ">
                    <div className="d-flex flex-column col-lg-2 col-2  justify-content-center align-items-center">
                        <button
                            type="button"
                            onClick={() => navigate("/adv/new")}
                            className="d-none d-lg-flex  flex-row col-12 btn btn-danger text-center justify-content-center align-items-center"
                        >
                            Create New
                            <FontAwesomeIcon icon={faPlus} className="px-2" />
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
                        <span className=" d-flex flex-column col-6  bg-secondary text-center py-1 radius-right  shadow-sm text-white">
                            Price
                        </span>
                        <span className=" d-flex  flex-column col-6  bg-danger text-center py-1  radius-left  shadow-sm text-white">
                            Size
                        </span>
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
                <AdvCard />
            </section>
        </div>
    );
};
