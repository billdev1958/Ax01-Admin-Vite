import { useNavigate } from "react-router-dom";
import logo from "../images/20231223_170621_0000-removebg-preview.png";
import { AuthService } from "../services/authentication";


function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username: string = formData.get("username") as string;
    const password: string = formData.get("password") as string;

    const token = await AuthService.login(username, password);

    if (token) {
      // Redirigir a la página de inicio
      navigate("/");
    }else {
      console.log("Error durante la autenticacion")
    }
  };

  return (
    <div className="loginContent">
      <div className="Header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="textTitle">
        <h1>Bienvenido a Ax01</h1>

        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            className="loginInput"
            id="emailINput"
            type="text"
            name="username"
          />
          <label>Password:</label>
          <input
            className="loginInput"
            id="passwordInput"
            type="password"
            name="password"


          />
          <input className="buttonLogin" type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

export default Login;
