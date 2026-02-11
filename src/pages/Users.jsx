import { useNavigate } from "react-router";
import { useState } from "react";
import "../styles/Users.css";
import { useForm } from "react-hook-form";
import api from "../services/api";
import { IoReturnDownBack } from "react-icons/io5";

const Users = () => {
  const [list, setList] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/");
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getUsers = async (value) => {
    setError("");
    setList({});

    try {
      const response = await api.get("/users");
      const filteredUser = response.data.find((user) =>
        user.name.toLowerCase().includes(value.name.toLowerCase()),
      );

      reset();

      if (!filteredUser) {
        setError("Usuário não Encontrado");
        return;
      }
      setList(filteredUser);
    } catch (error) {
      console.error(error);
    }
  };

  const clear = () => {
    setList({});
  };

  return (
    <>
      <button className="back" onClick={handleBack}>
        <IoReturnDownBack className="back-icon" />
      </button>
      <div className="containerUsers">
        <h2>Usuários Cadastrados</h2>
        <form onSubmit={handleSubmit(getUsers)} className="form">
          <input
            type="text"
            placeholder="Digite o Nome do Usuário"
            {...register("name", { required: "Digite um nome" })}
            autoComplete="off"
          />
          <p>{error}</p>
          <button className="search">Buscar</button>
        </form>
        <div className="buttons">
          <button onClick={clear} className="clear">
            Limpar
          </button>
        </div>
        {list.id && (
          <ul className="user">
            <li key={list.id}>
              <p>Nome: {list.name}</p>
              <p>Email: {list.email}</p>
              <p>Idade: {list.age} anos</p>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export { Users };
