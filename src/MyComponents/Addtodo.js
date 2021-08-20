import React, { useState } from "react";
export const Addtodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-4">
      <form onSubmit={submit}>
        <div className=" mb-3">
          <label htmlFor="title" className="form-label">
            Add todo
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Add description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add to list
        </button>
      </form>
    </div>
  );
};
