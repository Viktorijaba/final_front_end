import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import mainStore from "./store/main";
import Toolbar from "./components/Toolbar";


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

                    </Routes>
                </BrowserRouter>

            </div>

        </div>

    );
}

export default App;