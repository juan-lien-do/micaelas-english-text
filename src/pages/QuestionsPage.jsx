import { useState } from "react";
import questions from "../constants/Questions";
import QuestionCard from "../components/QuestionCard";
import TestEnd from "../components/TestEnd";

function QuestionsPage(){
    const [idPregunta, setIdPregunta] = useState(0)
    const [finalDelTest, setFinalDelTest] = useState(false)
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(false)
    const [respuestasIncorrectas, setRespuestasIncorrectas] = useState(false)

    function agregarRespuestaCorrecta(){

        setRespuestasCorrectas(respuestasCorrectas + 1)
        if (idPregunta + 1 == questions.length){
            setFinalDelTest(true)
        }
        setIdPregunta(idPregunta + 1)
    }

    function agregarRespuestaIncorrecta(){
        setRespuestasIncorrectas(respuestasIncorrectas + 1)
        if (idPregunta + 1 == questions.length){
            setFinalDelTest(true)
        }
        setIdPregunta(idPregunta + 1)
    }


    return (
        <>
        {
            finalDelTest ? 
            <TestEnd respuestasCorrectas={respuestasCorrectas} respuestasIncorrectas={respuestasIncorrectas}/>
            :
            <QuestionCard agregarRespuestaCorrecta={agregarRespuestaCorrecta} agregarRespuestaIncorrecta={agregarRespuestaIncorrecta} pregunta={questions[idPregunta]}/>
        }
        </>
    )
}

export default QuestionsPage;