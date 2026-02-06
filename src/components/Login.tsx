import { useState, type ChangeEvent } from "react";
import user from "../test/userMock";

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [signIn, setSignIn] = useState(false);

  function mockTest(email: string, password: string) {
    if (
      !email ||
      !password ||
      email !== user.email ||
      password !== user.password
    )
      return (
        <p className="text-center text-red-500 text-lg font-semibold">
          Invalid credentials...
        </p>
      );

    if (email === user.email && password === user.password)
      return (
        <p className="text-center text-stone-800 text-lg font-semibold animate-pulse">
          Login was successfull! Redirecting...
        </p>
      );
  }

  function handleSignIn(event: any) {
    event.preventDefault();
    setSignIn((prev) => !prev);
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
          {/* TODO: Sign Up Page Redirect */}
          <button className="font-semibold text-black rounded-lg border border-zinc-400 h-10 cursor-pointer">
            Criar conta
          </button>
          {signIn &&
            mockTest(loginCredentials.email, loginCredentials.password)}
        </div>
      </form>
    </div>
  );
}
