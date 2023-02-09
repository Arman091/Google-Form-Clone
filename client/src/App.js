
import "./App.css";
import Allroutes from "./components/services/Routes";
import { Provider } from "react-redux";
import { Store } from "./components/services/store";
// import Dashboard from "./components/test/Dashboard";
// import Login from "./components/test/Login";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Allroutes />
      </Provider>


      {/* <Dashboard/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
