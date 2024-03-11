import IonIcon from "@reacticons/ionicons";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthService } from "../services/authentication";

interface CustomStyleProps {
    isActive: boolean;
  }
  

  function SideBar() {
    const navigate = useNavigate();
  
    const menuOptions = ["Home", "Blog", "Admin panel"];
    const logoutOption = "Logout";
    const logoutIcon = "log-out-sharp";
    const iconsMenu: (
      | "home-sharp"
      | "newspaper-sharp"
      | "shield-sharp"
      | "log-out-sharp"
    )[] = ["home-sharp", "newspaper-sharp", "shield-sharp", "log-out-sharp"];
    const urlPages = ["/", "/blog", "/admin", "/login"];
  
    const customStyle = ({ isActive }: CustomStyleProps) => ({
      backgroundColor: isActive ? "#e0e0e0" : "", // Cambia el color de fondo solo cuando el enlace está activo
    });
  
    const handleLogout = () => {
      console.log("Logging out...");
      AuthService.logout();
      navigate("/login", { replace: true }); // Redirige a /login y reemplaza la página actual sin mostrar la barra lateral.
    };
  
    return (
<nav className="NavMenu">
    <ul>
      {menuOptions.map((option, index) => (
        <NavLink
          to={urlPages[index]}
          key={index}
          className="urlPages"
          style={customStyle}
        >
          <div className="buttonMenu">
            <IonIcon className="iconsMenu" name={iconsMenu[index]}></IonIcon>
            <li key={index}>{option}</li>
          </div>
        </NavLink>
      ))}
      <div className="buttonMenu" onClick={handleLogout}>
        <IonIcon className="iconsMenu" name={logoutIcon}></IonIcon>
        <li>{logoutOption}</li>
      </div>
    </ul>
  </nav>
    );
  }
  
  

export default SideBar;
