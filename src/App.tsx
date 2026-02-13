import Hero from "./components/Hero";
import SignContextProvider from "./store/sign-context";
import CurrentScreen from "./components/CurrentScreen";

function App() {
  return (
    <div className="flex flex-row">
      <SignContextProvider>
        <Hero />
        <CurrentScreen />
      </SignContextProvider>
    </div>
  );
}

export default App;
