import React, { useState } from "react";
import Tutorials from "../Tutorials.json";
import "./CSS/Tutorial.css"; // Importing Tutorial CSS file

const Tutorial = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subjectName) => {
    setSelectedSubject(subjectName);
  };

  return (
    <div className="tutorial-container">
      <div className="navbar-container">
        {Tutorials.subjects.map((subject, index) => (
          <button
            key={index}
            onClick={() => handleSubjectClick(subject.name)}
            className={selectedSubject === subject.name ? "active" : ""}
          >
            {subject.name}
          </button>
        ))}
      </div>
      {selectedSubject && (
        <div className="selected-subject-container">
          <h3>{selectedSubject} Tutorials</h3>
          {Tutorials.subjects
            .find((subject) => subject.name === selectedSubject)
            .tutorial.topics.map((item, index) => (
              <div key={index} className="tutorial-topic">
                <h4>{item.topic}</h4>
                <p>{item.content}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Tutorial;
