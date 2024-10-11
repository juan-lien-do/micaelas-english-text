import { NavLink } from "react-router-dom";
import PieChartGrade from "./PieChartGrade";
import { useState, useEffect } from "react";

function TestEnd({ respuestasCorrectas, respuestasIncorrectas, handleLeaveTest }) {
  const [finalGrade, setFinalGrade] = useState(0);

  useEffect(() => {
    const totalRespuestas = respuestasCorrectas + respuestasIncorrectas;
    if (totalRespuestas > 0) {
      const grade = Math.round((respuestasCorrectas / totalRespuestas) * 100);
      setFinalGrade(grade);
    }
  }, [respuestasCorrectas, respuestasIncorrectas]);

  return (
    <>
      <div className="">
        <div style={{ userSelect: "" }}>
          <h2 className="text-start fs-1">Thank you!</h2>
          <ul className="fs-5 text-start">
            <li>
              <span className="text-success fw-bold">
                {respuestasCorrectas ? respuestasCorrectas : "No"}
              </span>{" "}
              right answers
            </li>
            <li>
              <span className="text-danger fw-bold">
                {respuestasIncorrectas ? respuestasIncorrectas : "No"}
              </span>{" "}
              wrong answers
            </li>
          </ul>
        </div>
      </div>

      {/* Renderizamos el gráfico de torta */}
      <PieChartGrade finalgrade={finalGrade} />
      <br />
      <NavLink className="btn btn-secondary mt-5" to="/home">
        Return to Home
      </NavLink>
      <br />
      <button className="btn btn-primary my-2" onClick={handleLeaveTest}>
        See more tests
      </button>
    </>
  );
}

export default TestEnd;
