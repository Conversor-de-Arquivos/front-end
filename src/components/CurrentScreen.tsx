import { useContext } from "react";
import { SignContext } from "../store/sign-context";
import Login from "./Login";
import Register from "./Register";

export default function CurrentScreen() {
  const { action } = useContext(SignContext);
  const screens = {
    login: <Login />,
    register: <Register />,
  };
  return screens[action];
}
