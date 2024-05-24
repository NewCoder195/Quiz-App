import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data.json";
import "./CSS/Quiz.css"; // Importing Quiz CSS file

const Quiz = () => {
  const { subject } = useParams(); // Extract the 'subject' parameter from URL
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [showScore, setShowScore] = useState(false);

  const selectedSubject = Data.subjects.find(
    (item) => item.name.toLowerCase() === subject.toLowerCase()
  );

  if (!selectedSubject) {
    return <div>Subject not found</div>;
  }

  const { name, quiz } = selectedSubject;
  const totalQuestions = quiz.length;

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleOptionSelect = (questionIndex, selectedOption) => {
    setUserResponses({
      ...userResponses,
      [questionIndex]: selectedOption,
    });
  };

  const handleSubmitQuiz = () => {
    setShowScore(true);
  };

  const renderQuizContent = () => {
    if (showScore) {
      // Render scorecard
      const score = Object.values(userResponses).filter(Boolean).length;
      return (
        <div className="score-container">
          {/* Applying score-container class */}
          <h2>Your Quiz Score</h2>
          <p>Total Questions: {totalQuestions}</p>
          <p>Correct Answers: {score}</p>
        </div>
      );
    } else {
      // Render quiz question and options
      const currentQuestion = quiz[currentQuestionIndex];
      return (
        <div className="quiz-container">
          {/* Applying quiz-container class */}
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question_${currentQuestionIndex}`}
                    value={option}
                    onChange={() =>
                      handleOptionSelect(currentQuestionIndex, option)
                    }
                    checked={userResponses[currentQuestionIndex] === option}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {currentQuestionIndex > 0 && (
            <button onClick={handlePreviousQuestion}>Previous</button>
          )}
          {currentQuestionIndex < totalQuestions - 1 ? (
            <button onClick={handleNextQuestion}>Next</button>
          ) : (
            <button onClick={handleSubmitQuiz}>Submit</button>
          )}
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Quiz on {name}</h1>
      {renderQuizContent()}
    </div>
  );
};

export default Quiz;
