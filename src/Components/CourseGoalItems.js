import { React } from "react";
import CourseGoalItemCss from "./CourseGoalItem.module.css";
const CourseGoalItems = (props) => {
  const deleteHandler = () => {
   // console.log("Clicked Id :",props.id);
    props.onDelete(props.id);
  };

  return (
    <li
      key={props.id}
      onClick={deleteHandler}
      id={props.id}
      className={CourseGoalItemCss.goal_item}
    >
      {props.children}
    </li>
  );
};

export default CourseGoalItems;
