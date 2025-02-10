import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import mainStore from "./store/main";
import InventoryPage from "./pages/InventoryPage";
import Toolbar from "./components/Toolbar";
import Requests from "./pages/Requests";
import Users from "./pages/Users";
import UserPage from "./pages/UserPage";

function App() {
    const {user} = mainStore(state => state)


    return (
        <div>
            {/*{error && <ErrorMessage/> }*/}

            <div className=" p-5">

                <BrowserRouter>
                    {user &&  <Toolbar/>}

                    <Routes>
                        <Route path="/" element={<IndexPage/>}></Route>
                        <Route path="/inventory" element={<InventoryPage/>}></Route>
                        <Route path="/requests" element={<Requests/>}></Route>
                        <Route path="/users" element={<Users/>}></Route>
                        <Route path="/user/:username" element={<UserPage/>}></Route>

                    </Routes>
                </BrowserRouter>

            </div>

        </div>

    );
}

export default App;