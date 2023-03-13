import React, {useEffect } from "react";
import Card from "../components/elements/Card";
import Text from "../components/elements/Text";

import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  
  const navigate = useNavigate();
  const handleTaskButtonCreate = () => {
    navigate("/create");
  }
  const handleTaskButtonRead = () => {
    navigate("/read");
  };


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });

    const intervalID = setInterval(() => {
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <section className="text-white pt-10 pb-20">
      <section className="grid grid-cols-2 gap-4">
        <Card className="py-4 col-span-2">
          <div className="flex justify-between">
            <Text className="text-lg font-semibold mb-10">Cadastro</Text>
          </div>

          <section className="flex justify-center items-center text-center">
            <div>
              <Text className="font-bold text-2xl">CADASTRAR CLIENTE</Text>

              <Text className="pt-2 pb-6 text-sm">
                {" "}
                Aqui você tem opção de cadastrar os dados do seu cliente
              </Text>

              <button
                className="rounded-lg py-2 px-8 text-white bg-secondary"
                onClick={handleTaskButtonCreate}
              >
                Cadastrar
              </button>
            </div>
          </section>
        </Card>
        <Card className="py-4 col-span-2">
          <div className="flex justify-between">
            <Text className="text-lg font-semibold mb-10">Consulta</Text>
          </div>

          <section className="flex justify-center items-center text-center">
            <div>
              <Text className="font-bold text-2xl">CONSULTAR CLIENTE</Text>

              <Text className="pt-2 pb-6 text-sm">
                Aqui você tem opção de alterar, deletar, filtrar os dados do seu
                cliente
              </Text>

              <button
                className="rounded-lg py-2 px-8 text-white bg-secondary"
                onClick={handleTaskButtonRead}
              >
                Visualizar
              </button>
            </div>
          </section>
        </Card>
      </section>
    </section>
  );
};

export default Home;
