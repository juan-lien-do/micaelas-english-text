import { useState } from "react";
import FailureModal from "./FailureModal";
import SuccessModal from "./SuccessModal";
import sonidoExito from '../assets/mixkit-gaming-lock-2848.mp3'
import sonidoError from '../assets/mixkit-tech-break-fail-2947.mp3'

const audioExito = new Audio(sonidoExito);
const audioError = new Audio(sonidoError);

function QuestionCard({agregarRespuestaCorrecta, agregarRespuestaIncorrecta, pregunta,}) {
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(false);

  const handleShowWrong = () => setWrongAnswer(true);
  const handleShowRight = () => setRightAnswer(true);

  function answer(ans) {
    if (ans) {
      handleShowRight(); // Mostrar el modal de éxito
      audioExito.play()
    } else {
      handleShowWrong(); // Mostrar el modal de error
      audioError.play();

    }
  }

  return (
    <>
      <FailureModal wrongAnswer={wrongAnswer} setWrongAnswer={setWrongAnswer} agregarRespuestaIncorrecta={agregarRespuestaIncorrecta}/>
      <SuccessModal show={rightAnswer} setRightAnswer={setRightAnswer} agregarRespuestaCorrecta={agregarRespuestaCorrecta} />

      <h1 className='mb-4'>English exam</h1>
      <h3>{pregunta?.question}</h3>
      {
        pregunta?.answers?.map((x, index) => (
          <div className='my-3' key={index}>
            <button className='btn btn-warning btn-lg' onClick={() => answer(x.isTrue)}>
              {x.value}
            </button>
          </div>
        ))
      }
    </>
  )
}


export default QuestionCard;
