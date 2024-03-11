import React, { useEffect, useState } from "react";
import IonIcon from "@reacticons/ionicons";

interface Category {
  ID: number;
  Nombre: string;
}
function TableComponent() {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Get categories
  useEffect(() => {
    const obtenerCategorias = async () => {
      const token = localStorage.getItem("token"); // Obtén el token desde donde lo tengas almacenado
      try {
        const response = await fetch(
          "http://localhost:8080/api/categories/get",
          {
            method: "GET", // Método HTTP
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Usa el token en el encabezado Authorization
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
          console.log(data);
        } else {
          throw new Error("Error al obtener las categorías");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    obtenerCategorias();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(event.target.value);
  };

  const crearCategoria = async (nombre: string) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:8080/api/category/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ Nombre: nombre }), // Ajusta según el modelo de datos esperado por tu API
        }
      );

      if (response.status === 201) {
        alert("Categoría añadida con éxito!");
        window.location.reload();
        setNewCategoryName(""); // Reinicia el valor del input
        setShowInput(false); // Oculta el input después de enviar
      } else {
        // Maneja otros códigos de estado y errores potenciales
        alert(
          "Error al añadir la categoría. Código de estado: " + response.status
        );
      }
    } catch (error) {
      console.error("Error al crear la categoría:", error);
      alert("Error al enviar la categoría. Ver consola para más detalles.");
    }
  };

  const handleClick = () => {
    if (showInput && newCategoryName.trim() !== "") {
      crearCategoria(newCategoryName.trim());
    } else {
      setShowInput(true); // Muestra el input si aún no es visible
    }
  };

  const eliminarCategoria = async (id: number) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:8080/api/category/delete?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // Actualiza el estado para reflejar la eliminación
        setCategories(categories.filter((category) => category.ID !== id));
        alert("Categoría eliminada con éxito");
      } else {
        alert("Error al eliminar la categoría");
      }
    } catch (error) {
      console.error("Error al eliminar la categoría:", error);
      alert("Error al eliminar la categoría. Ver consola para más detalles.");
    }
  };

  return (
    <div>
      <table className="tableComponent">
        <thead>
          <tr>
            <th className="tableHeader">ID</th>
            <th className="tableHeader">Name</th>
            <th className="tableHeader">Acciones</th>{" "}
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.ID}>
              <td className="tableCampos">{category.ID}</td>
              <td className="tableCampos">{category.Nombre}</td>
              <td className="tableCampos">
                <IonIcon
                  name="create"
                  style={{ marginRight: "10px", fontSize: "20px" }}
                />
                <IonIcon
                  name="trash"
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  onClick={() => eliminarCategoria(category.ID)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <button onClick={handleClick}>
          <IonIcon
            name={showInput ? "send" : "add"}
            style={{ fontSize: "20px" }}
          />
        </button>
        {showInput && (
          <input
            type="text"
            placeholder="Nombre de la categoría"
            value={newCategoryName}
            onChange={handleInputChange}
            style={{ marginLeft: "10px" }}
          />
        )}
      </div>
    </div>
  );
}

export default TableComponent;
