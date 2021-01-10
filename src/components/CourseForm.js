import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState } from "react";
import { TodosContext } from "../App";


const CourseForm = () => {
  const [inputData, setInputData] = useState({ sub: '', subID: '', grd: 'A', cred:1});
  const { dispatch } = useContext(TodosContext);
  function addCourse(e) {
    e.preventDefault();
    if (inputData !== "") {
      //add new todo to state
      dispatch({
        type: "ADD",
        payload: {
          time: Date.now(),
          sub: inputData.sub ,
          subID: inputData.subID,
          grd: inputData.grd,
          cred: inputData.cred
        },
      });
      //clear input
      setInputData("");
    } else {
      alert("please add something ?");
    }
  };
  return (
    <div className="bg-pink-100 rounded-3xl">
    <form onSubmit={addCourse}>
      <td className="w-full">
        <label className="m-5">Subject ID:</label>
        <input className="rounded-3xl" type="text" placeholder="add subject ID" value={inputData.subID} onChange={(e) => setInputData({ ...inputData, subID: e.target.value })} /><br />
        <label className="m-5">Subject:</label>
        <input className="rounded-3xl" type="text" placeholder="add subject" value={inputData.sub} onChange={(e) => setInputData({ ...inputData, sub: e.target.value })} /><br />
        <label className="m-5">Credit:</label>
        <select className="rounded-3xl" placeholder="choose credit" value={inputData.cred} onChange={(e) => setInputData({ ...inputData, cred: e.target.value })}>
        <option></option>
          {CREDITS.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select><br />
        <label className="m-5">Grade:</label>
        <select className="rounded-3xl" value={inputData.grd} onChange={(e) => setInputData({ ...inputData, grd: e.target.value })}>
        <option></option>
          {
            GRADES.map((i) => (
              <option value={i.name}>{i.name}</option>
            ))
          }
        </select><br />
      </td>
      <td >
        <button className="bg-pink-300 hover:bg-pink-400 rounded-3xl p-1" type='submit'  >{'\u2714'}</button>
      </td> 
    </form >
  </div>
  );
};

export default CourseForm;
