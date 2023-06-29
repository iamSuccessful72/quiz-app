import { useEffect, useState } from "react";
import { Questions, quetions } from "../data/questions";
import QuizQuestion from "./QuizQuestion";
import Result from "./Result";

function Quiz() {
  const [alert, setAlert] = useState<string>("");
  const [answeredQuestion, setAnsweredQuestion] = useState<Questions>([]);
  const [completed, setCompleted] = useState<boolean>(true);
  const [currentNumber, setCurentNumber] = useState<number>(0);
  const [isSelected, setIsSelected] = useState<string>("");
  const [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * quetions.length)
  );
  const [selectedAnswers, setSelectedAnswer] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const { correctAnswer, options, question } = quetions[randomNumber];

  useEffect(() => {
    if (currentNumber === 10) {
      setCompleted(false);
    }
  }, [completed, currentNumber]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(""), 1000);
    }
  }, [alert]);

  return (
    <div className="2xl:w-8/12 font-Kanit lg:w-10/12 mx-auto p-2">
      <h1 className="bg-zircon border-b font-bold mb-2 p-2 text-2xl text-center">
        Random Quiz
      </h1>
      {completed ? (
        <QuizQuestion
          alert={alert}
          currentNumber={currentNumber}
          handleButtonClick={handleButtonClick}
          handleListItemClick={handleListItemClick}
          isSelected={isSelected}
          options={options}
          question={question}
        />
      ) : (
        <Result
          answeredQuestion={answeredQuestion}
          handleRestart={handleRestart}
          score={score}
          selectedAnswers={selectedAnswers}
        />
      )}
    </div>
  );

  function handleButtonClick(): void {
    if (isSelected !== "") {
      if (correctAnswer === isSelected) {
        setScore((prevState) => prevState + 1);
      }
      setSelectedAnswer((prevState) => [...prevState, isSelected]);
      setCurentNumber((prevState) => prevState + 1);
      setIsSelected("");
      setAnsweredQuestion((prevState) => [
        ...prevState,
        quetions[randomNumber],
      ]);
      setRandomNumber(Math.floor(Math.random() * quetions.length));
    } else {
      setAlert("Please select one of the options!!");
    }
  }

  function handleListItemClick(option: string): void {
    setIsSelected(option);
  }

  function handleRestart(): void {
    setAnsweredQuestion([]);
    setCompleted(true);
    setCurentNumber(0);
    setScore(0);
  }
}

export default Quiz;
