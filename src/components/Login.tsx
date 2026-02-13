import { useContext, useState, type ChangeEvent } from "react";
import user from "../test/userMock";
import { SignContext } from "../store/sign-context";

export default function Login() {
  const { switchScreen } = useContext(SignContext);
  const [loginCredentials, setLoginCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  type LoginStatus = "idle" | "error" | "success";
  const [status, setStatus] = useState<LoginStatus>("idle");

  function mockTest(email: string, password: string) {
    if (!email || !password) return "error";
    if (email !== user.email || password !== user.password) return "error";
    return "success";
  }

  function handleSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const result = mockTest(loginCredentials.email, loginCredentials.password);

    if (result === "success") {
      setStatus(result);
      setTimeout(() => {
        setStatus("idle");
        switchScreen("home");
      }, 3000);
      return;
    }

    setStatus(result);

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  }

  function handleLoginFields(
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    setLoginCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="bg-zinc-50 flex flex-1 flex-col items-center justify-center h-screen w-full gap-6">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-black text-3xl underline">Bem-vindo!</h2>
        <p className="font-serif font-extralight opacity-70">
          Insira suas credenciais para fazer o login.
        </p>
      </div>
      <form className="flex flex-col items-center gap-4 w-100">
        <div className="flex flex-col gap-1 w-100">
          <label className="font-semibold">E-mail</label>
          <input
            onChange={(event) => handleLoginFields(event)}
            name="email"
            className="border-2 border-zinc-400 border-b-black shadow-md shadow-zinc-800 h-10 rounded-md p-2 focus:outline-none"
            type="email"
            placeholder="Ex: email@exemplo.com"
          />
        </div>
        <div className="flex flex-col gap-1 w-100">
          <label className="font-semibold">Senha</label>
          {/* TODO: Toggle Password Icon*/}
          <input
            onChange={(event) => handleLoginFields(event)}
            name="password"
            className="border-2 border-zinc-400 border-b-black shadow-md shadow-zinc-800 h-10 rounded-md p-2 focus:outline-none"
            type="password"
            placeholder="Ex: SenhaForte123!"
          />
        </div>
        <div className="flex flex-col gap-2 mt-2 w-100">
          <button
            onClick={(event) => handleSignIn(event)}
            className="font-semibold text-white bg-stone-950 rounded-lg h-10 cursor-pointer"
          >
            Entrar
          </button>
          <button
            onClick={() => switchScreen("register")}
            className="font-semibold text-black rounded-lg border border-zinc-400 h-10 cursor-pointer"
          >
            Criar conta
          </button>
          {status === "error" && (
            <p className="text-center text-red-500 text-lg font-semibold">
              Invalid credentials...
            </p>
          )}
          {status === "success" && (
            <p className="text-center text-green-500 text-lg font-semibold animate-pulse">
              Login was successfull! Redirecting...
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
