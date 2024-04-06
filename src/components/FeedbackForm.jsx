import { useState } from "react";

const FeedbackForm = () => {
  const [selectedFeedback, setSelectedFeedback] = useState("");
  const [comment, setComment] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <label>Feedback Type: </label>
      <select
        onChange={(e) => {
          setSelectedFeedback(e.target.value);
          setComment("");
          setFormSubmitted(false);
        }}
      >
        <option>--Select Feedback Type--</option>
        <option value="Compliment">Compliment</option>
        <option value="Complaint">Complaint</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Others">Others</option>
      </select>
      {selectedFeedback && (
        <form id="" onSubmit={formHandler}>
          <label htmlFor="comments">Comment: </label>
          <textarea
            id="comments"
            rows={4}
            cols={40}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
      {formSubmitted && (
        <div>
          <p>{comment}</p>
          <p>{selectedFeedback}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
