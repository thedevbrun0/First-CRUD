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
  const { register, reset, handleSubmit } = useForm();

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
      <div className="user-container">
        <div className="user-containerUsers">
          <h3>Usuários Cadastrados</h3>
          <form onSubmit={handleSubmit(getUsers)} className="user-form">
            <input
              type="text"
              placeholder="Digite o Nome do Usuário"
              {...register("name", { required: "Digite um nome" })}
              autoComplete="off"
            />
            <p>{error}</p>
            <button className="user-search">Buscar</button>
          </form>
          <div className="user-buttons">
            <button onClick={clear} className="user-clear">
              Limpar
            </button>
            <button className="user-back" onClick={handleBack}>
              <IoReturnDownBack className="user-back-icon" />
            </button>
          </div>
          {list.id && (
            <div className="user-list-container">
              <ul className="user-user">
                <li key={list.id}>
                  <p>Nome: {list.name}</p>
                  <p>Email: {list.email}</p>
                  <p>Idade: {list.age} anos</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Users };
