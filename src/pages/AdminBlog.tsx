import CardBlog from "../components/CardBlog";
import  { useEffect, useState } from "react";
import logo from "../images/20231223_170621_0000-removebg-preview.png";

interface BlogPost {
  id: number;
  category: number;
  title: string;
  resume: string;
  content: string;
  author: number;
  createdAt: string;
}

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/api/posts/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data: BlogPost[] = await response.json();
        setPosts(data);
      } else {
        console.error("Error al cargar los posts del blog");
      }
    };

    fetchBlogPosts();
  }, []);
  const deleteBlogPost = async (id: number) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8080/api/posts/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // Elimina el post del estado para actualizar la UI
      setPosts(posts.filter(post => post.id !== id));
    } else {
      console.error("Error al eliminar el post");
    }
  };

  return (
    <div className="gridContent">
      <div className="headerV">
        <div className="ImageHeader">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="TitleHeaderV">
          <h1>Administrador de articulos</h1>
        </div>
      </div>
      <div className="section-grid">
        {posts.length ? (
          posts.map((post) => (
            <CardBlog
              id={post.id}
              key={post.id}
              title={post.title}
              resume={post.resume}
              author={post.author.toString()}
              category={post.category.toString()}
              createdAt={post.createdAt}
              onDelete={() => deleteBlogPost(post.id)}
            />
          ))
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;
