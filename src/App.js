import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import ChangeFont from "./components/ChangeFont";
import ChangeAlign from "./components/ChangeAlign";
import Counter from "./components/Counter";


function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <br />
      <ChangeColor />
      <br />
      <ChangeFont />
      <br />
      <ChangeAlign />
      <br />
      <Counter />
    </div>
  );
}

export default App;