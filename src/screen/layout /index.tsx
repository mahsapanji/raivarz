
import { Container, ThemeProvider } from "react-bootstrap";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";

export default (props: any) => {
    return (
        <ThemeProvider>
            <Header />
            <Container fluid className="bg-light position-relative ">
                <div>
                    <Outlet />
                    {props.children}
                </div>
            </Container>
        </ThemeProvider>
    );
};
