import { useContext } from "react";
import { SignContext } from "../store/sign-context";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

export default function CurrentScreen() {
  const { action } = useContext(SignContext);
  const screens = {
    login: <Login />,
    register: <Register />,
    home: <Home />,
  };
  return screens[action];
}
