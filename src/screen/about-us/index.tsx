import "bootstrap/dist/css/bootstrap.css";
import logo from "../../asset/content/logo.png";
import "./style.scss";
const AboutUs = (props: any) => {
    return (
        
            <section className="d-flex flex-column  col-12 justify-content-start align-items-center  h90 bg-light ">
               <strong className="mt-4"><span className="d-lg-none d-sm-flex   text-center flex-column ">About</span></strong> 
                <div className="d-flex flex-column col-12  col-lg-8 my-4 justify-content-center align-items-end">
                    <span className="fs-4 ">ABOUT DTT REAL STATE</span>
                    <p className="fs-6 text-start py-3 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Natus deserunt reprehenderit dolor eligendi
                        laboriosam repellendus ad sapiente sequi, dignissimos
                        sint illo provident. Laudantium officia, voluptatem quam
                        veniam ab impedit nesciunt? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Perspiciatis praesentium
                        rerum nesciunt voluptas velit quae provident. Molestias,
                        obcaecati debitis provident quia tenetur sunt soluta,
                        harum sit magni ab rerum iusto!
                    </p>
                    <p className="fs-6 text-start -py-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Soluta harum ab unde similique.
                    </p>
                </div>

                <div className="d-flex flex-column col-12  col-lg-8  pt-5 justify-content-center align-items-end">
                    <span className="fs-4">Design and Development</span>
                    <div className="d-flex flex-row col-12  justify-content-end align-items-center my-3">
                        <div className="d-flex flex-column col-7 col-lg-2 mx-4  justify-content-center align-items-end">
                            <span>By DTT</span>
                            <a href="www.d-tt.nl">www.dd-tt.nt</a>{" "}
                        </div>

                        <img src={logo} className="col-4 col-lg-2" />
                    </div>
                </div>
            </section>
    );
};
export default AboutUs;
