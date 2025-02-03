import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import PeopleList from "./pages/PeopleList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/dashboard" element={<UserDashboardPage />} />
                <Route path="/users" element={<PeopleList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;