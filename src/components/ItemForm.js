import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
          />
      </label>

      <label>
        Category:
        <select 
          name="category"
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
