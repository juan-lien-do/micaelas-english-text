function TestSelector({ tests, handleSelection }) {
  return (
    <>
      <h1 className="fs-2 my-4">Please select a test of your interest</h1>
      <div className="container ">
        <div className="row">
          {tests.map((x) => (
            <div className="card col-6 col-sm-3 my-1 mx-auto" style={{ width: "15rem" }}
              key={x.id}
            >
              <h5 className="card-title">{x.testName}</h5>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleSelection(x.id);
                }}
              >
                Start
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TestSelector;
