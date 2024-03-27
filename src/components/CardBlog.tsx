import IonIcon from "@reacticons/ionicons";
import { NavLink } from "react-router-dom";

interface CardBlogProps {
  id: number;
  title: string;
  author: string;
  category: string;
  createdAt: string;
  onDelete: () => void; 
}

const CardBlog = ({
  id,
  title,
  author,
  category,
  createdAt,
  onDelete
}: CardBlogProps) => {
  return (
    <div className="cardBlog-container">
      <div className="cardBlog-image">
      <div className="cardBlog-icons">
        <NavLink to={`/update/${id}`}>
        <IonIcon className="icon-edit" name="create" />
        </NavLink>
        <IonIcon className="icon-delete" name="trash" onClick={onDelete}/>
      </div>
      </div>
      <div className="cardBlog-content">
        <h3 className="cardBlog-title">{title}</h3>
      </div>
      <div className="cardBlog-footer">
        <span className="cardBlog-author">Autor: {author}</span>
        <span className="cardBlog-category">Categoría: {category}</span>
        <span className="cardBlog-published">
          Publicado: {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default CardBlog;
