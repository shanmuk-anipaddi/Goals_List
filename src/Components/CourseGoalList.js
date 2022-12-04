import { React } from "react";
import CourseGoalItem from "./CourseGoalItems";
import CourseGoalListCss from "./CourseGoalList.module.css";

const CourseGoalList = (props) => {
 // console.log(props);
  return (
    <ul className={CourseGoalListCss.goal_list}>
      {props.goalList.map((goal) => (
        <CourseGoalItem onDelete={props.onDelete} key={goal.id} id={goal.id}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
