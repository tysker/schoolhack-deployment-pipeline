import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './styles/main.css'
// components
import Home from "./components/Home.jsx";
import Workshops from "./components/Workshops.jsx";
import About from "./components/About";
import Header from "./components/Header";
import Workshop from "./components/Workshop.jsx";
import Session from "./components/Session.jsx";
import Register from "./components/Register.jsx";
import Confirmation from "./components/Confirmation";
import {Login} from "./components/Login.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="main">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home title="Welcome to SchoolHacks"/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="workshops" element={<Workshops/>}>
                        <Route path=":workId" element={<Workshop/>}>
                            <Route path=":sessionId" element={<Session/>}/>
                        </Route>
                        <Route index element={<h3>Select a workshop from above</h3>}/>
                    </Route>
                    <Route path="*" element={<h1 className="not-found">Page Not Found</h1>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="confirmed" element={<Confirmation/>}/>
                    <Route path="login" element={<Login/>}/>
                </Routes>

                <footer className="container">
                    &copy;2022 | <a
                    href="https://workshop.schoolhacks.eu/"
                    target="_blank"
                    rel="noreferrer noopener"
                >SchoolHacks</a>
                </footer>
            </div>
        </BrowserRouter>
    </React.StrictMode>
)
