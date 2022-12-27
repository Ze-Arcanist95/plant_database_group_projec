import React from "react";
import { Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthProvider.js";
import { PlantProvider } from "./context/PlantContext.js";
import { InputProvider } from "./context/InputContext.js";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About.js";
import Plant from "./pages/Plant.js";
import User from "./pages/User.js"


export default function App() {
    return (
        <div>
            <React.StrictMode>
                <AuthProvider>
                    <PlantProvider>
                        <InputProvider>
                            <Routes>
                                <Route path="/" element={<Homepage />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/user/:userId" element={<User />} />
                                <Route path="/plant/:plantId" element={<Plant />} />
                            </Routes>
                        </InputProvider>
                    </PlantProvider>
                </AuthProvider>
            </React.StrictMode>
        </div >
    );
};