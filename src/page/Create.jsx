import { Button, Checkbox, Form, Select } from "semantic-ui-react";
import React, { useState, useMemo } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import "./Styles.css";
import MaskedInput from "react-text-mask";
import countryList from "react-select-country-list";

const Cadastro = () => {
  let history = useLocation();

  const [firstName, setFirstName] = useState("");
  const [numberDate, setNumberDate] = useState("");
  const [numberCpf, setNumberCpf] = useState("");
  const [numberRg, setNumberRg] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [nameHouse, setNameHouse] = useState("");
  const [numberHouse, setNumberHouse] = useState("");
  const [nameCity, setNameCity] = useState("");
  const [numberCEP, setNumberCEP] = useState("");
  const [nameState, setNameState] = useState("");
  const [nameCountry, setNameCountry] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const optionsCountry = useMemo(() => countryList().getData(), []);
  const genderStates = [
    { text: "Acre" },
    { text: "Alagoas" },
    { text: "Amapá" },
    { text: "Amazonas" },
    { text: "Bahia" },
    { text: "Ceará" },
    { text: "Distrito Federal" },
    { text: "Espírito Santo" },
    { text: "Goiás" },
    { text: "Maranhão" },
    { text: "Mato Grosso" },
    { text: "Mato Grosso do Sul" },
    { text: "Minas Gerais" },
    { text: "Pará" },
    { text: "Paraíba" },
    { text: "Paraná" },
    { text: "Pernambuco" },
    { text: "Piauí" },
    { text: "Rio de Janeiro" },
    { text: "Rio Grande do Norte" },
    { text: "Rio Grande do Sul" },
    { text: "Rondônia" },
    { text: "Roraima" },
    { text: "Santa Catarina" },
    { text: "São Paulo" },
    { text: "Sergipe" },
    { text: "Tocantins" },
  ];

  const postData = () => {
    axios
      .post(`https://63fcbd92677c41587312b9d8.mockapi.io//kabum`, {
        firstName,
        numberDate,
        numberCpf,
        numberRg,
        numberPhone,
        nameHouse,
        numberHouse,
        nameCity,
        numberCEP,
        nameState,
        nameCountry,
        checkbox,
      })
      .then(() => {
        history.push("/read");
      });
  };

  return (
    <section className="text-white pt-10 pb-20">
      <div className="flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <Form className="create-form">
          <Form.Field>
            <label>Nome Completo</label>
            <input
              placeholder="Nome"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Data de Nascimento</label>
            <MaskedInput
              mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
              placeholder="Data de Nascimento"
              onChange={(e) => setNumberDate(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>CPF</label>
            <MaskedInput
              mask={[
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
              placeholder="CPF"
              onChange={(e) => setNumberCpf(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>RG</label>
            <MaskedInput
              mask={[
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
              ]}
              placeholder="RG"
              onChange={(e) => setNumberRg(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Telefone</label>
            <MaskedInput
              mask={[
                "(",
                /[1-9]/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              placeholder="Telefone"
              onChange={(e) => setNumberPhone(e.target.value)}
            />
          </Form.Field>
          <div>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Rua</label>
                <input
                  placeholder="Rua"
                  onChange={(e) => setNameHouse(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Numero</label>
                <input
                  placeholder="Numero"
                  onChange={(e) => setNumberHouse(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Cidade</label>
                <input
                  placeholder="Cidade"
                  onChange={(e) => setNameCity(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>CEP</label>
                <MaskedInput
                  mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
                  placeholder="CEP"
                  onChange={(e) => setNumberCEP(e.target.value)}
                />
              </Form.Field>
              <Form.Field
                control={Select}
                options={genderStates}
                label={{
                  children: "Estado",
                }}
                placeholder="Estado"
                onChange={(e) => setNameState(e.target.value)}
              />

              <Form.Field
                control={Select}
                options={optionsCountry}
                label={{
                  children: "País",
                }}
                placeholder="País"
                onChange={(e) => setNameCountry(e.target.value)}
              />
            </Form.Group>
          </div>

          <Form.Field>
            <Checkbox
              label="I agree to the Terms and Conditions"
              onChange={(e) => setCheckbox(!checkbox)}
            />
          </Form.Field>
          <Button onClick={postData} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Cadastro;
