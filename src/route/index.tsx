import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import * as Screen from "../screen";

export * from "./hooks";

export default () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Screen.Layout></Screen.Layout>}>
                    <Route path="" element={<Screen.Adv.AdvList />}/>

                        <Route path="/adv/:id" element={<Screen.Adv.Show />} />
                        <Route path="/adv/new" element={<Screen.Adv.NewAdv/>} />
                        <Route path="/adv/edit/:id" element={<Screen.Adv.EditAdv/>} />


                    <Route path="about" element={<Screen.AboutUs />} />
                </Route>
            </Routes>
        </Router>
    );
};
