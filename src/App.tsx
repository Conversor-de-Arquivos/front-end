import Login from "./components/Login";
import Body from "./components/ui/Body";
import Register from "./components/Register";

function App() {
  return (
    <div className="flex flex-row">
      <Body />
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
