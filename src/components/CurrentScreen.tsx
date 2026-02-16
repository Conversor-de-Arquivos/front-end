import { useContext } from "react";
import { SignContext } from "../store/sign-context";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

export default function CurrentScreen() {
  const { action } = useContext(SignContext);
  const screens = {
    login: <Login />,
    register: <Register />,
    home: <Dashboard />,
  };
  return screens[action];
}
