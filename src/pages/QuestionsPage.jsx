import { useState } from "react";
import tests from "../constants/Tests";
import EnglishTest from "../components/EnglishTest";
import TestSelector from "../components/TestSelector";
import Breadcrumb from "../components/Breadcrumb";

function QuestionsPage() {
  const [hasSelectedATest, setHasSelectedATest] = useState(false);
  const [chosenTest, setChosenTest] = useState([]);

  const paths = [
    { name: "Home", link: "/" },
    { name: "Tests", link: "/test" },
    { name: hasSelectedATest ? chosenTest.name : "Select a Test", link: "#" },
  ];

  function handleSelection(testId) {
    console.log(testId)
    setHasSelectedATest(true);
    setChosenTest(tests[testId-1]);
  }
  function handleLeaveTest() {
    setHasSelectedATest(false);
    setChosenTest([]);
  }

  return (
    <>
          <Breadcrumb paths={paths} />

      {hasSelectedATest ? (
        <EnglishTest test={chosenTest} handleLeaveTest={handleLeaveTest} />
      ) : (
        <TestSelector tests={tests} handleSelection={handleSelection} />
      )}
    </>
  );
  
}

export default QuestionsPage;
