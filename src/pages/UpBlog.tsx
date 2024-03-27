import React, { useEffect, useState } from "react";
import logo from "../images/20231223_170621_0000-removebg-preview.png";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

interface Category {
  ID: number;
  Nombre: string;
}

function UpBlog() {
  let navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorId, setAuthorId] = useState<string>("");

  useEffect(() => {
    const obtenerCategorias = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "https://api.ax01.dev/categories/get",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          alert("Error al obtener las categorías.");
        }
      } catch (error) {
        alert("Error al obtener las categorías.");
      }
    };

    obtenerCategorias();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      Category: parseInt(selectedCategory, 10),
      Title: title,
      Content: content,
      Author: parseInt(authorId, 10),
    };

    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://api.ax01.dev/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("La publicación del blog se ha creado con éxito.");
        navigate('/adminblog'); // Redirige al usuario
      } else {
        alert("Falló la creación de la publicación del blog.");
      }
    } catch (error) {
      alert("Error al crear la publicación del blog.");
    }
  };

  return (
    
    <div className="mainContent">
      <div className="HeaderG">
      <div className="Header">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="textTitle">
          <h1>Administrador del Categorias</h1>
        </div>
      </div>
      <BlogForm
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        authorId={authorId}
        setAuthorId={setAuthorId}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default UpBlog