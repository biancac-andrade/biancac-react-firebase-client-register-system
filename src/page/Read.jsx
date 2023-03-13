import React, { useEffect, useState } from "react";
import { Table, Button, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`https://63fcbd92677c41587312b9d8.mockapi.io/kabum`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((data) => {
        return Object.values(data)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };
  const setData = (data) => {
    console.log(data);
    let {
      id,
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
    } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Number Date", numberDate);
    localStorage.setItem("Number Cpf", numberCpf);
    localStorage.setItem("Number Rg", numberRg);
    localStorage.setItem("Number Phone", numberPhone);
    localStorage.setItem("Name House", nameHouse);
    localStorage.setItem("Number House", numberHouse);
    localStorage.setItem("Name City", nameCity);
    localStorage.setItem("Number CEP", numberCEP);
    localStorage.setItem("Name State", nameState);
    localStorage.setItem("Name Country", nameCountry);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const getData = () => {
    axios
      .get(`https://63fcbd92677c41587312b9d8.mockapi.io/kabum`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://63fcbd92677c41587312b9d8.mockapi.io/kabum/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <section>
      <div className=" h-screen items-center justify-center px-4 sm:px-6 lg:px-8 pt-30">
        <div>
          <Input
            icon={{ name: "search", circular: true, link: true }}
            placeholder="Pesquisar.."
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
        <Table compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
              <Table.HeaderCell>CPF</Table.HeaderCell>
              <Table.HeaderCell>RG</Table.HeaderCell>
              <Table.HeaderCell>Telefone</Table.HeaderCell>
              <Table.HeaderCell>Rua</Table.HeaderCell>
              <Table.HeaderCell>Numero</Table.HeaderCell>
              <Table.HeaderCell>Cidade</Table.HeaderCell>
              <Table.HeaderCell>CEP</Table.HeaderCell>
              <Table.HeaderCell>Estado</Table.HeaderCell>
              <Table.HeaderCell>Pais</Table.HeaderCell>
              <Table.HeaderCell>Checkup</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {searchInput.length > 1
              ? filteredResults.map((data) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{data.firstName}</Table.Cell>
                      <Table.Cell>{data.numberDate}</Table.Cell>
                      <Table.Cell>{data.numberCpf}</Table.Cell>
                      <Table.Cell>{data.numberRg}</Table.Cell>
                      <Table.Cell>{data.numberPhone}</Table.Cell>
                      <Table.Cell>{data.nameHouse}</Table.Cell>
                      <Table.Cell>{data.numberHouse}</Table.Cell>
                      <Table.Cell>{data.nameCity}</Table.Cell>
                      <Table.Cell>{data.numberCEP}</Table.Cell>
                      <Table.Cell>{data.nameState}</Table.Cell>
                      <Table.Cell>{data.nameCountry}</Table.Cell>

                      <Table.Cell>
                        {data.checkbox ? "Checked" : "Unchecked"}
                      </Table.Cell>
                      <Link to="/update">
                        <Table.Cell>
                          <Button onClick={() => setData(data)}>Update</Button>
                        </Table.Cell>
                      </Link>
                      <Table.Cell>
                        <Button onClick={() => onDelete(data.id)}>
                          Delete
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              : APIData.map((data) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{data.firstName}</Table.Cell>
                      <Table.Cell>{data.numberDate}</Table.Cell>
                      <Table.Cell>{data.numberCpf}</Table.Cell>
                      <Table.Cell>{data.numberRg}</Table.Cell>
                      <Table.Cell>{data.numberPhone}</Table.Cell>
                      <Table.Cell>{data.nameHouse}</Table.Cell>
                      <Table.Cell>{data.numberHouse}</Table.Cell>
                      <Table.Cell>{data.nameCity}</Table.Cell>
                      <Table.Cell>{data.numberCEP}</Table.Cell>
                      <Table.Cell>{data.nameState}</Table.Cell>
                      <Table.Cell>{data.nameCountry}</Table.Cell>

                      <Table.Cell>
                        {data.checkbox ? "Checked" : "Unchecked"}
                      </Table.Cell>
                      <Link to="/update">
                        <Table.Cell>
                          <Button onClick={() => setData(data)}>Update</Button>
                        </Table.Cell>
                      </Link>
                      <Table.Cell>
                        <Button onClick={() => onDelete(data.id)}>
                          Delete
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
          </Table.Body>
        </Table>
      </div>
    </section>
  );
};

export default List;
