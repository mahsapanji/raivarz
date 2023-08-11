import React from "react";
import { isString } from "lodash";
import logo from "../../asset/content/logo.png";
import { Nav } from "react-bootstrap";
import "./style.scss"
const Header: React.FC<{}> = ({}) => {
    return (
        <section className=" d-lg-flex d-none col-12  justify-content-center align-items-center  h10 shadow-sm">
            <div className="d-flex flex-row  col-8  my-2    justify-content-end align-items-center  ">
                <div className="d-flex flex-column  col-11 justify-content-end align-items-end   ">
                  <Nav>
                    
                    <Nav.Link href="/about">
                    <span className="navBar text-dark">

                        About
                        </span>
                    </Nav.Link>
                    <Nav.Link href="/">
                        <span className="navBar text-dark">

                        Houses
                        </span>
                    </Nav.Link>
                  </Nav>
                </div>
                <div className="d-flex flex-column  col-1  justify-content-center align-items-center   ">
                    <img src={logo} className="pic" />
                </div>
            </div>
        </section>
    );
};

export default Header;
