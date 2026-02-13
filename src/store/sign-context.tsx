import { createContext, useState, type ReactNode } from "react";

type ActionType = "login" | "register" | "home";

export const SignContext = createContext<{
  action: ActionType;
  switchScreen: (screen: ActionType) => void;
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
  const [action, setAction] = useState<ActionType>("login");

  function switchScreen(screen: ActionType) {
    setAction(screen);
  }

  const ctxValue = {
    action,
    switchScreen,
  };

  return (
    <SignContext.Provider value={ctxValue}>{children}</SignContext.Provider>
  );
}
