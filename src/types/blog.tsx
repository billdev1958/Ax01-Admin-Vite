export interface Category {
    ID: number;
    Nombre: string;
  }

  export interface Post {
    id: number;
    category: number;
    title: string;
    resume: string;
    content: string;
    author: number;
    createdAt: string;
  }