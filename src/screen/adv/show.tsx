import "bootstrap/dist/css/bootstrap.css";

import logo from "../../asset/content/logo.png"

export const Show = (props: any) => {
   
   
    return (
        <section className="d-flex flex-column  col-12   justify-content-center align-items-center  bg-light ">
        <div className="d-flex flex-column flex-lg-row col-8 bg-light">
            <div className="d-flex  flex-row col-12 col-lg-8 my-2   align-items-center justify-content-between  ">
                </div>
           </div>

           <div className="d-flex flex-column col-8 bg-warning">
           <img src={logo} className="col-12" />


           </div>
        </section>
    );
};
