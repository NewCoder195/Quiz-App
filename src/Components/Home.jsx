import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../Data.json";
import "./CSS/Home.css"; // Importing Home CSS file

const Home = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="home-container">
      <div className="content-container">
        {quizStarted ? (
          <div className="subject-list-container">
            <h2>Select a Subject</h2>
            {Data.subjects.map((subject) => (
              <Link
                key={subject.name}
                to={`/quiz/${subject.name.toLowerCase()}`}
              >
                <button>{subject.name}</button>
              </Link>
            ))}
          </div>
        ) : (
          <div className="welcome-container">
            <h1>Welcome to the quiz app</h1>
            <p>
              Test your knowledge with our fun and challenging quizzes! Choose
              from a variety of topics and start learning.
            </p>
            <button onClick={handleStartQuiz}>Start Quiz</button>
          </div>
        )}
      </div>
      {quizStarted && (
        <div className="back-container">
          <button className="back-button" onClick={() => setQuizStarted(false)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
