import { createContext, useEffect, useReducer,useState } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";
//import { initialState, reducer } from "./utils/todo-reducer";

export const TodosContext = createContext({});

function App() {
  const initialState = {myTodos: []}
  const [GPA, setGPA] = useState(0.00);

  function calculateGPA(oop) {
    // TODO
    var gpa = 0
    var cre = 0
    var calu = 0
    oop.forEach((i) => {
      switch (i.grd) {
        case 'A':
          gpa = 4
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'B+':
          gpa = 3.5
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'B':
          gpa = 3
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'C+':
          gpa = 2.5
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'C':
          gpa = 2
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'D+':
          gpa = 1.5
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'D':
          gpa = 1
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'F':
          gpa = 0
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
      }
    })
    setGPA(calu / cre) 
  }


  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          myTodos: [...state.myTodos, action.payload],
        };
      case "SET":
        return {
          ...state,
          myTodos: action.payload,
        };
      case "DELETE":
        return {
          ...state,
          myTodos: state.myTodos.filter((item) => item.time !== action.payload),
        };
      default:
        throw new Error();
    }
  }
  

  //fetch todos from localstroage
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(fetchTodos, []);
  function fetchTodos() {
    const localTodos = localStorage.getItem("myTodos");
    if (localTodos) {
      dispatch({
        type: "SET",
        payload: JSON.parse(localTodos),
      });
    }
  }

  //use function fetchTodos() when page refresh and rendered
  useEffect(fetchTodos, []);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(state.myTodos));
    calculateGPA(state.myTodos)
  }, [state.myTodos]); //run when state.myTodos change

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>Todos</h1>

        <CourseCard todos={state.myTodos} />
        <h2 className="text-center bg-pink-200 rounded-3xl p-5 ">GPAX: {GPA.toFixed(2)}</h2>

        <CourseForm />
      </div>
    </TodosContext.Provider>
  );
}

export default App;