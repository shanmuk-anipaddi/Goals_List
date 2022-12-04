import React, { useState } from "react";
import Addform from "./Components/Addform";
import CourseGoalList from "./Components/CourseGoalList";

import "./App.css";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: 1, text: "Do the exercise test !" },
    { id: 2, text: "Finish the course !" },
  ]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        id: Math.random().toFixed(2).toString(),
        text: enteredGoal,
      });
      return updatedGoals;
    });
  };

  const deleteHandler = (goalId) => {
   // console.log("App Goal Id", goalId);
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = <p style={{ textAlign: "center" }}>No Goals Found</p>;

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList onDelete={deleteHandler} goalList={courseGoals} />
    );
  }

  //console.log("Course Goals", courseGoals);
  return (
    <div>
      <section id="goal-form">
        <Addform onAddGoal={addGoalHandler}></Addform>
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
