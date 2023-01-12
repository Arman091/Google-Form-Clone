import Header from "./Header";
import Layout from "./Layout";
import { useReducer } from "react";

const initialstate = {
  forms: [],
};

const reducerFunc = (state = 0, action) => {
  if (action.type === "Add") {
    const updatedItem = state.forms.concat(action.data);

    return {
      forms: updatedItem,
    };
  }

  return state;
};
const Home = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialstate);
  const getFormId = (data) => {
    dispatch({ type: "Add", data: data });
  };
  return (
    <>
      <Header forms={state} />
      <Layout getFormId={getFormId} />
    </>
  );
};

export default Home;
