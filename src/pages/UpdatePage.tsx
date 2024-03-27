import React, { useEffect, useState } from "react";
import logo from "../images/20231223_170621_0000-removebg-preview.png";
import BlogForm from "../components/BlogForm";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../types/blog";

interface Category {
  ID: number;
  Nombre: string;
}

function UpdatePage() {
  let navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorId, setAuthorId] = useState<string>("");

  let { id } = useParams();

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
          throw new Error("Error al obtener las categorías");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const cargarDatosPost = async () => {
      if (id) {
        // Asegúrate de que el id existe
        const token = localStorage.getItem("token");
        try {
          const response = await fetch(
            `https://api.ax01.dev/posts/get/${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            const postData: Post = await response.json();
            setSelectedCategory(postData.category.toString());
            setTitle(postData.title);
            setDescription(postData.resume);
            setContent(postData.content);
            setAuthorId(postData.author.toString());
          } else {
            throw new Error("Error al obtener los datos del post");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    obtenerCategorias();
    cargarDatosPost(); // Llama a cargarDatosPost aquí
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) {
      alert("No se proporcionó un ID para la actualización.");
      return;
    }

    const formData = {
      id: parseInt(id, 10),
      Category: parseInt(selectedCategory, 10),
      Title: title,
      Resume: description,
      Content: content,
      Author: parseInt(authorId, 10),
    };

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`https://api.ax01.dev/posts/patch`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("La publicación del blog se actualizó con éxito.");
        navigate('/adminblog');
      } else {
        alert("Falló la actualización de la publicación del blog.");
      }
    } catch (error) {
      alert("Error de red al intentar actualizar la publicación del blog.");
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
export default UpdatePage;
