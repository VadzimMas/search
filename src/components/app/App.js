import "./app.scss"
import Sidebar from "../sidebar/Sidebar";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Sidebar className="sidebar"/>
            <div id="detail"><Outlet/></div>
        </div>
    );
}

export default App;
