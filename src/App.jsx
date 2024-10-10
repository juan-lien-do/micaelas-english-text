import { useState } from "react";
import "./App.css";
import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import FailureModal from "./components/FailureModal";
import SuccessModal from "./components/SuccessModal";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import QuestionsPage from "./pages/QuestionsPage";

const respuestas = [
  { value: "gloves", isTrue: false },
  { value: "shorts", isTrue: true },
  { value: "jacket", isTrue: false },
  //{value:"", isTrue:true},
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/test" element={<QuestionsPage />}></Route>
        <Route path="/*" element={<Navigate to="/home" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
