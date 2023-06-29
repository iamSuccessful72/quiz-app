import { Questions } from "../data/questions";

function Result({
  answeredQuestion,
  handleRestart,
  score,
  selectedAnswers,
}: Props) {
  return (
    <div>
      <h2 className="font-bold text-cente text-xl">Quiz Result</h2>
      <div className="gap-2 grid lg:grid-cols-2">
        {answeredQuestion.map((question, index) => (
          <div
            className={`${
              selectedAnswers.includes(question.correctAnswer)
                ? "bg-zircon"
                : "bg-red-100"
            } p-2 rounded-md`}
            key={index}
          >
            <p>{question.question}</p>
            <p className="font-bold">
              <span>Answer:</span>
              <span className="ml-2 text-dodger-blue">
                {question.correctAnswer}
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p>You Scored: {score} / 10</p>
        <button
          className="bg-dodger-blue mt-2 p-2 rounded-md text-zircon"
          onClick={handleRestart}
          type="button"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

interface Props {
  answeredQuestion: Questions;
  handleRestart: () => void;
  score: number;
  selectedAnswers: string[];
}

export default Result;
