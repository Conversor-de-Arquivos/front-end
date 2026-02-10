import CurrentScreen from "./components/CurrentScreen";
import Body from "./components/ui/Body";
import SignContextProvider from "./store/sign-context";

function App() {
  return (
    <div className="flex flex-row">
      <Body />
      <SignContextProvider>
        <CurrentScreen />
      </SignContextProvider>
    </div>
  );
}

export default App;
