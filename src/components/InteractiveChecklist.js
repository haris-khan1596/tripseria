import React, { useState } from 'react';


const InteractiveChecklist = () => {
    const [items, setItems] = useState([
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Clean the house', completed: false },
      { id: 3, text: 'Take out the trash', completed: false },
    ]);
  
    const handleToggle = (id) => {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      setItems(updatedItems);
    };
  
    const handleDelete = (id) => {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
    };
  
    return (
      <div className="checklist-container">
        <h2>Checklist</h2>
        <ul className="checklist">
          {items.map((item) => (
            <li
              key={item.id}
              className={`checklist-item ${item.completed ? 'completed' : ''}`}
            >
              <label className="checklist-label">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleToggle(item.id)}
                />
                {item.text}
              </label>
              <button
                className="checklist-delete-button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <form
          className="checklist-form"
          onSubmit={(e) => {
            e.preventDefault();
            const newItem = {
              id: items.length + 1,
              text: e.target.elements.text.value,
              completed: false,
            };
            setItems([...items, newItem]);
            e.target.reset();
          }}
        >
          <input type="text" name="text" placeholder="Add a new item" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };
  

export default InteractiveChecklist;



