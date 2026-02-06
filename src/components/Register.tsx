import { useState, type ChangeEvent } from "react";

export default function Register() {
  const [registerCredentials, setRegisterCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(registerCredentials);

  function handleRegisterFields(
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    setRegisterCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="bg-zinc-50 flex flex-1 flex-col h-screen w-full items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-black text-3xl">Crie uma conta</h2>
        <p className="font-serif font-extralight opacity-70">
          Insira as informações necessárias para se cadastrar
        </p>
      </div>
      <form className="flex flex-col items-center gap-4 w-100">
        <div className="flex flex-col gap-1 w-100">
          <label className="font-semibold">Nome Completo</label>
          <input
            onChange={(event) => handleRegisterFields(event)}
            name="name"
            className="border-2 border-zinc-400 border-b-black shadow-md shadow-zinc-800 h-10 rounded-md p-2 focus:outline-none"
            type="text"
            placeholder="Ex: João Leandro Silva"
          />
        </div>
        <div className="flex flex-col gap-1 w-100">
          <label className="font-semibold">E-mail</label>
          <input
            onChange={(event) => handleRegisterFields(event)}
            name="email"
            className="border-2 border-zinc-400 border-b-black shadow-md shadow-zinc-800 h-10 rounded-md p-2 focus:outline-none"
            type="email"
            placeholder="Ex: email@exemplo.com"
          />
        </div>
        <div className="flex flex-col gap-1 w-100">
          <label className="font-semibold">Senha</label>
          <input
            onChange={(event) => handleRegisterFields(event)}
            name="password"
            className="border-2 border-zinc-400 border-b-black shadow-md shadow-zinc-800 h-10 rounded-md p-2 focus:outline-none"
            type="password"
            placeholder="Ex: SenhaForte123!"
          />
        </div>
        <div className="flex flex-col gap-1 w-100">
          <label className="font-medium">Confirme sua Senha</label>
          <input
            onChange={(event) => handleRegisterFields(event)}
            name="confirmPassword"
            className="bg-zinc-100 border border-zinc-400 h-10 rounded-md p-2 focus:outline-none"
            type="password"
            placeholder="Repita sua senha aqui..."
          />
        </div>
        <div className="flex flex-col gap-4 mt-2 w-100">
          {/* TODO: Associate it with specific route */}
          <button className="font-semibold text-white bg-stone-950 rounded-lg h-10 cursor-pointer">
            Criar conta
          </button>
          <p className="text-center font-serif font-extralight">
            Já possui uma conta? Faça login clicando{" "}
            {/* TODO: Login Page Redirect */}
            <a className="font-extrabold underline" href="#">
              aqui!
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
