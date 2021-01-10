import { useContext , useState } from "react";
import {TodosContext } from "../App";

export const CourseCard = (props) => {
  const { dispatch } = useContext(TodosContext)
  return ( props.todos.map (item => {
    return (
      <div className="bg-pink-100 rounded-3xl p-5">
        <td className="w-full ">
          <div>
            <h3>Subject : {item.sub}</h3>
            <h3>SubjectID : {item.subID}</h3>
            <h3>Credit : {item.cred}</h3>
            <h3>Grade : {item.grd}</h3>
          </div>
        </td>
      <td>
        <button className="bg-pink-300 hover:bg-pink-400 rounded-3xl p-1 " onClick = {() => {
          dispatch({
            type: "DELETE",
            payload: item.time,
          });
        }}>{'\u2716'}</button>
      </td>
    </div>
    )}));
}

export default CourseCard;