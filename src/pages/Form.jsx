import "../styles/Form.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router";

const Form = () => {
  const [adress, setAdress] = useState("Endereço");
  const [city, setCity] = useState("Cidade");
  const navigate = useNavigate();

  const goToUsers = () => {
    return navigate("/users");
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendForm = async (data) => {
    try {
      const response = await api.post("/users", data)
      reset()
     ;
    } catch (error) {
      alert("Erro ao Enviar:", error);
    }
  };

  return (
    <>
      <div className="container-form">
        <h3>Dados do Usuário</h3>
        <form
          autoComplete="off"
          className="form"
          onSubmit={handleSubmit(sendForm)}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Nome"
              {...register("name", { required: "Digite um nome" })}
            />
            {errors.name && (
              <p className="errorMessage">{errors.name.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: "Digite um email válido" })}
            />
            {errors.email && (
              <p className="errorMessage">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Senha"
              {...register("password", { required: "Senha Obrigatória" })}
            />
            {errors.password && (
              <p className="errorMessage">{errors.password.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Idade"
              {...register("age", {
                required: "A idade é necessária",
              })}
            />
            {errors.age && <p className="errorMessage">{errors.age.message}</p>}
          </div>

          <button className="send">Enviar Dados</button>
        </form>
        <button className="clearForm">Limpar Formulário</button>
        <button className="users" onClick={goToUsers}>
          Usuários Cadastrados
        </button>
      </div>
    </>
  );
};
export { Form };
