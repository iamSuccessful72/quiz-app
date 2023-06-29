function QuizQuestion({
  alert,
  currentNumber,
  handleButtonClick,
  handleListItemClick,
  isSelected,
  options,
  question,
}: Props) {
  return (
    <div className="gap-4 lg:flex">
      <div className="basis-2/4 bg-zircon border p-2 rounded-md">
        <div className="h-32 lg:h-full">
          <p>{question}</p>
          <p>
            <span className="text-2xl text-dodger-blue">
              {currentNumber + 1}
            </span>
            /<span>10</span>
          </p>
        </div>
      </div>
      <div className="basis-2/4">
        <ol className="list-decimal list-inside">
          {options.map((option, index) => (
            <li
              className={`${
                option === isSelected
                  ? "border-dodger-blue"
                  : "border-shuttle-gray"
              } border  mt-2 p-2 rounded-md`}
              key={index}
              onClick={() => handleListItemClick(option)}
            >
              {option}
            </li>
          ))}
        </ol>
        <button
          className="bg-dodger-blue mt-2 p-2 rounded-md text-zircon w-full"
          onClick={handleButtonClick}
          type="button"
        >
          Next
        </button>
        <p className="absolute bg-white left-1/4 right-1/4 text-center text-red-500 top-2/4">
          {alert}
        </p>
      </div>
    </div>
  );
}

interface Props {
  alert: string;
  currentNumber: number;
  handleButtonClick: () => void;
  handleListItemClick: (option: string) => void;
  isSelected: string;
  options: string[];
  question: string;
}

export default QuizQuestion;
