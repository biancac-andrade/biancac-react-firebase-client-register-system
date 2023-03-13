import React, { useState } from "react";
import Text from "../components/elements/Text";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <section>
        <div className="flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <Text className="text-4xl text-white text-center font-bold mb-2">
                CADASTRO DE <span className="text-tertiary"> CLIENTE</span>
              </Text>

              <h2 className="text-white text-center text-base  tracking-tight text-gray-900">
                Você é novo aqui? Cria uma conta agora: 
              </h2>
            </div>

            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <div className=" space-y-6 rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Nome
                  </label>
                  <input
                    label="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    name="firstname"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Nome"
                  />
                </div>

                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Sobrenome
                  </label>
                  <input
                    label="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    type="text"
                    name="lastname"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Sobrenome"
                  />
                </div>

                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Senha
                  </label>
                  <input
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Senha"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Criar Conta
                </button>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              Você já tem uma conta?{" "}
              <NavLink to="/login" className="underline text-tertiary">
                Logar
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
