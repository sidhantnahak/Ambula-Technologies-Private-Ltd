

import React, { useState } from "react";
import { useAlert } from "react-alert";
// this is model open when you click the add task button
const Model = ({ modelOpen, setModelOpen }) => {


  let cart_tasks = JSON.parse(localStorage.getItem("cart_tasks")) || [];
  const alert=useAlert();

  const [newTitleValue, setnewTitleValue] = useState("");
  const [newDesValue, setnewDesValue] = useState("");
  const [newStatusValue, setnewStatusValue] = useState("");


  const addTask = (id) => {
    for (let i = 0; i < cart_tasks.length; i++) {
      if (cart_tasks[i].id === id) {
        return false;
      }
    }
    return true;
  };
  const handleSubmitNewTask = async (e) => {
    e.preventDefault();
    if (
      newTitleValue.length > 0 &&
      newDesValue.length > 0 &&
      newStatusValue.length > 0
    ) {
      var data = {
        title: newTitleValue, description: newDesValue, status: newStatusValue, id: Date.now().toString()
      }

      if (addTask(data) == true) {
        cart_tasks.push(data);
        localStorage.setItem("cart_tasks", JSON.stringify(cart_tasks));
      }
      setnewTitleValue("");
      setnewDesValue("");
      setnewStatusValue("");
      window.location.reload(false);
      setModelOpen(false);
    }else{
      alert.error("enter valid data")
    }
  };


  return (
    <dialog
      id="my_modal_3"
      className={`modal ${modelOpen ? "modal-open" : ""} `}
    >
      <form
        method="dialog"
        className="modal-box"
        onSubmit={handleSubmitNewTask}
      >
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setModelOpen(false)}
        >
          ✕
        </button>

        <h3 className="font-bold text-center">ADD NEW TASK</h3>
        <div className="model-action mt-5">
          <input
            value={newTitleValue}
            onChange={(e) => setnewTitleValue(e.target.value)}
            type="text"
            placeholder="Enter your Task here"
            className="input input-bordered w-full mb-5 "
          />
          <input
            value={newDesValue}
            onChange={(e) => setnewDesValue(e.target.value)}
            type="text"
            placeholder="Enter your Description here"
            className="input input-bordered w-full mb-5  "
          />

          <select className="select select-bordered w-full mb-5 " onChange={(e) => setnewStatusValue(e.target.value)}>
            <option disabled selected>Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completd</option>
          </select>
        </div>
        <button type="submit" className="btn w-full">
          Submit
        </button>
      </form>
    </dialog>
  );
};

export default Model;
