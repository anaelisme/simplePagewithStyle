import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import ChangeFont from "./components/ChangeFont";
import ChangeAlign from "./components/ChangeAlign";
import Counter from "./components/Counter";
import Gallery from "./components/buttonClick";
import BucketList from "./components/UseImmer";
import Form from "./components/InputOnChange";
import Comment from "./components/ExtractingComponents";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

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
      <br />
      <Gallery />
      <hr />
      <BucketList />
      <hr />
      <Form />
      <hr />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}

export default App;
