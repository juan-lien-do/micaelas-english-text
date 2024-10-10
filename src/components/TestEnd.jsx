import { NavLink } from "react-router-dom";

function TestEnd({ respuestasCorrectas, respuestasIncorrectas }) {
  const finalGrade = Math.round(
    (respuestasCorrectas / (respuestasCorrectas + respuestasIncorrectas)) * 100
  );

  return (
    <>
          <div className="">
            <div style={{ userSelect: "" }}>
              <h2 className="text-start fs-1">Thank you!</h2>
              <ul className="fs-5 text-start">
                <li>
                  <span className="text-success fw-bold">
                    {respuestasCorrectas}
                  </span>{" "}
                  right answers
                </li>
                <li>
                  <span className="text-danger fw-bold">
                    {respuestasIncorrectas}
                  </span>{" "}
                  wrong answers
                </li>
              </ul>

            </div>
            </div>  
           
            
            <span className="bg-warning card mx-1">
              <span className="fs-4 fw-bold">{finalGrade}%</span>
              <div>
                <div
                  style={{
                    height: `${(100 - finalGrade) * 2}px`,
                    width: "50px",
                  }}
                  className="bg-danger mx-auto"
                ></div>
                <div
                  style={{ height: `${finalGrade * 2}px`, width: "50px" }}
                  className="bg-success mx-auto"
                ></div>
              </div>
          </span>

        <NavLink className="btn btn-primary my-5" to="/home">
          Return
        </NavLink>
    </>
  );
}

export default TestEnd;
