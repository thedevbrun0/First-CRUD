import "../styles/Form.css";
import { useForm } from "react-hook-form";
import { LogoMark } from "./logo-mark";
import api from "../services/api";
import { useNavigate } from "react-router";

const Form = () => {
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
      await api.post("/users", data);
      reset();
    } catch (error) {
      alert("Erro ao Enviar:", error);
    }
  };

  return (
    <>
      <div className="form-container">
        <h3>Dados do Usuário</h3>
        <form
          autoComplete="off"
          className="form-form"
          onSubmit={handleSubmit(sendForm)}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Nome"
              {...register("name", { required: "Digite um nome" })}
            />
            {errors.name && (
              <p className="form-errorMessage">{errors.name.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: "Digite um email válido" })}
            />
            {errors.email && (
              <p className="form-errorMessage">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Senha"
              {...register("password", { required: "Senha Obrigatória" })}
            />
            {errors.password && (
              <p className="form-errorMessage">{errors.password.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Idade"
              {...register("age", {
                required: "A idade é necessária",
              })}
            />
            {errors.age && (
              <p className="form-errorMessage">{errors.age.message}</p>
            )}
          </div>

          <button className="form-send">Enviar Dados</button>
        </form>
        <button className="form-clearForm">Limpar Formulário</button>
        <button className="form-users" onClick={goToUsers}>
          Usuários Cadastrados
        </button>
      </div>

      <LogoMark />
    </>
  );
};
export { Form };
