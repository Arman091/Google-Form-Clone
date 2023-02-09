import Header from "./Header";
import Layout from "./Layout";

import { useEffect,useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);
  const[forms,setforms]=useState("")
 

  useEffect(() => {
    async function allForms() {
      const res = await fetch("http://localhost:6001/forms/data");
      const data = await res.json()
      setforms(data)

    }
    allForms();
  }, [state]);
  console.log(forms)
   
  return (
    <>
      <Header />
      <Layout forms={forms} />
    </>
  );
};

export default Home;
