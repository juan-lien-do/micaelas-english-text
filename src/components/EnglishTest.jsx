import { useState } from "react";
import QuestionCard from "./QuestionCard";
import TestEnd from "./TestEnd";

function EnglishTest({test, handleLeaveTest}){
    const [idPregunta, setIdPregunta] = useState(0)
    const [finalDelTest, setFinalDelTest] = useState(false)
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(false)
    const [respuestasIncorrectas, setRespuestasIncorrectas] = useState(false)



    function agregarRespuestaCorrecta(){
        if (idPregunta + 1 == test.questions.length){
            setFinalDelTest(true)
        }
        setRespuestasCorrectas(respuestasCorrectas + 1)
        setIdPregunta(idPregunta + 1)
    }

    function agregarRespuestaIncorrecta(){
        if (idPregunta + 1 == test.questions.length){
            setFinalDelTest(true)
        }
        setRespuestasIncorrectas(respuestasIncorrectas + 1)
        setIdPregunta(idPregunta + 1)
    }


    return (
        <>
          {test.questions.length > 0 ? (
            finalDelTest ? (
              <TestEnd
                respuestasCorrectas={respuestasCorrectas}
                respuestasIncorrectas={respuestasIncorrectas}
                handleLeaveTest={handleLeaveTest}
              />
            ) : (
              <QuestionCard
                agregarRespuestaCorrecta={agregarRespuestaCorrecta}
                agregarRespuestaIncorrecta={agregarRespuestaIncorrecta}
                pregunta={test.questions[idPregunta]}
              />
            )
          ) : (
            <p>No questions available.</p>
          )}
        </>
      );
      
}

export default EnglishTest;