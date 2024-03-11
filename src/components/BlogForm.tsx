import React from 'react';
import CategorySelector from './CategorySelector';
import { Category } from '../types/blog';

interface BlogFormProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  content: string;
  setContent: (value: string) => void;
  authorId: string;
  setAuthorId: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BlogForm = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  title,
  setTitle,
  description,
  setDescription,
  content,
  setContent,
  authorId,
  setAuthorId,
  handleSubmit
}: BlogFormProps) => {
    return(
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="inputGroup">
            <label htmlFor="categoria">Seleccione la categoría:</label>
            <CategorySelector
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={(e) => setSelectedCategory(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="authorId">ID del Autor:</label>
            <input
              type="text"
              id="authorId"
              className="inputField"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
              placeholder="Ingrese el ID del autor"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="title">Titulo del blog:</label>
            <input
              type="text"
              id="title"
              className="inputField"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingresa el título"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="description">Descripción del blog:</label>
            <input
              type="text"
              id="description"
              className="inputField"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ingresa la descripción"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="content">Contenido del blog:</label>
            <textarea
              id="content"
              className="textAreaField"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Ingrese el contenido"
            ></textarea>
          </div>
          <div className="inputGroup">
            <button type="submit" className="submitButton">Subir</button>
          </div>
        </form>
      );
};

export default BlogForm;