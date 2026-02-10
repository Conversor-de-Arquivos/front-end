import CurrentScreen from "./components/CurrentScreen";
import Hero from "./components/Hero";
import SignContextProvider from "./store/sign-context";

function App() {
  return (
    <div className="flex flex-row">
      <Hero />
      <SignContextProvider>
        <CurrentScreen />
      </SignContextProvider>
    </div>
  );
}

export default App;
