import { useState } from "react";

const FoodSurveyApp = () => {
  const [cuisines, setCuisines] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const questions = [
    {
      question: "Which type of cuisine do you prefer?",
      options: {
        Asian: ["Chinese", "Japanese", "Indian"],
        European: ["Italian", "French", "Spanish"],
        American: ["Burgers", "Pizza", "BBQ"],
      },
    },
  ];

  const handleOptionCheckBox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (!selectedOptions.includes(value)) {
        setSelectedOptions((prevValue) => [...prevValue, value]);
      }
    } else {
      setSelectedOptions((prevValue) =>
        prevValue.filter((prev) => prev !== value),
      );
    }
  };

  const PreferredOptionComponent = () => {
    if (cuisines) {
      return (
        <>
          {questions.map((question, index) => (
            <div key={index}>
              <label>{question.question}</label> <br />
              {question.options[cuisines].map((option, optionIndex) => {
                return (
                  <div key={optionIndex}>
                    <input
                      type="checkbox"
                      value={option}
                      onChange={handleOptionCheckBox}
                    />{" "}
                    {option} <br />
                  </div>
                );
              })}
            </div>
          ))}
        </>
      );
    }
  };

  const onFormHandler = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      {!formSubmitted ? (
        <form onSubmit={onFormHandler}>
          <label>Select Your Preferred Cuisine: </label>
          <select onChange={(event) => setCuisines(event.target.value)}>
            <option>--Select Cuisines--</option>
            <option value="Asian">Asian</option>
            <option value="European">European</option>
            <option value="American">American</option>
          </select>
          <br />
          <br />
          <PreferredOptionComponent />
          <br />
          <br />
          <button>Submit</button>
        </form>
      ) : (
        <div>
          <h2>Thank you for Sharing Your Preference!</h2>
          <p>Cuisine: {cuisines}</p>
          <p>Cuisine: {selectedOptions.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <main>
      <FoodSurveyApp />
    </main>
  );
}
