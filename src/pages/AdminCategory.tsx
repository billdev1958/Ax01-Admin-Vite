import logo from "../images/20231223_170621_0000-removebg-preview.png";
import TableComponent from "../components/Table";


function AdminCategory() {

    return(
        <div className="mainContent">
        <div className="Header">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="textTitle">
          <h1>Administrador del Categorias</h1>
        </div>

        <div className="tableContainer">
        <TableComponent/>
        </div>

      </div>
    )

}

export default AdminCategory