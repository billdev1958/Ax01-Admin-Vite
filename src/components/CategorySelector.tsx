import React from 'react';
import { Category } from '../types/blog';


interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelector = ({ categories, selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  return (
    <select value={selectedCategory} onChange={onCategoryChange} className="selectField">
      {categories.map((category) => (
        <option key={category.ID} value={category.ID.toString()}>
          {category.Nombre}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;