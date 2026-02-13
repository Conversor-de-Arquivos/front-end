import { createContext, useState, type ReactNode } from "react";

export const SignContext = createContext<{
  action: "login" | "register" | "home";
  switchScreen: (authorized?: boolean) => void;
}>({
  action: "login",
  switchScreen: () => {},
});

interface SignContextProviderProps {
  children: ReactNode;
}

export default function SignContextProvider({
  children,
}: SignContextProviderProps) {
  const [action, setAction] = useState<"login" | "register" | "home">("login");

  function switchScreen(authorized?: boolean) {
    if (authorized) setAction("home");
    else setAction((prev) => (prev === "login" ? "register" : "login"));
  }

  const ctxValue = {
    action,
    switchScreen,
  };

  return (
    <SignContext.Provider value={ctxValue}>{children}</SignContext.Provider>
  );
}
