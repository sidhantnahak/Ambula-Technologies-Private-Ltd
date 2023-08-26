

import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Task = ({ task }) => {
  const [openModelEdit, setOpenModelEdit] = useState(false);
  const [openModelDelete, setOpenModelDelete] = useState(false);
  const [taskTitleedit, setTaskTitleEdit] = useState(task.title);
  const [taskDescedit, setTaskDescEdit] = useState(task.description);
  const [taskStatusedit, setTaskStatusEdit] = useState(task.status);
  // edit a task function
  let cart_tasks = JSON.parse(localStorage.getItem("cart_tasks")) || [];
  const handleSubmitNewTaskEdit = async (e) => {
    e.preventDefault();
    for(let i=0;cart_tasks.length;i++){
      if(cart_tasks[i].id===task.id){
        let data={
          id:task.id,
          title:taskTitleedit,
          description:taskDescedit,
          status:taskStatusedit,

        }
        cart_tasks.splice(i,1,data);
        break;
      }
      
    }
    localStorage.setItem("cart_tasks", JSON.stringify(cart_tasks));
    setOpenModelEdit(false);
    window.location.reload(false);
  };
  // delete a task function
  const handleSubmitDeleteTask = async () => {
    // await DeleteTask(task);

    for(let i=0;cart_tasks.length;i++){
      if(cart_tasks[i].id===task.id){
        cart_tasks.splice(i,1);
        break;
      }
      
    }
    localStorage.setItem("cart_tasks", JSON.stringify(cart_tasks));
    setOpenModelDelete(false);
    window.location.reload(false);
  };
  return (
    <tr className="bg-base-200">
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.status}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModelEdit(true)}
          cursor="pointer"
          className="text-blue-800 hover:text-blue-700"
          size={25}
        />
        <dialog
          id="my_modal_3"
          className={`modal ${openModelEdit ? "modal-open" : ""} `}
        >
          <form
            method="dialog"
            className="modal-box"
            onSubmit={handleSubmitNewTaskEdit}
          >
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setOpenModelEdit(false)}
            >
              ✕
            </button>

            <h3 className="font-bold text-center">Edit Your TASK</h3>
            <div className="model-action mt-5">
              <input
                value={taskTitleedit}
                onChange={(e) => setTaskTitleEdit(e.target.value)}
                type="text"
                placeholder="Enter your Task here"
                className="input input-bordered w-full mb-5 "
              />
              <input
                value={taskDescedit}
                onChange={(e) => setTaskDescEdit(e.target.value)}
                type="text"
                placeholder="Enter your Description here"
                className="input input-bordered w-full mb-5  "
              />
             
                <select className="select select-bordered w-full mb-5 " value={taskStatusedit} onChange={(e) => setTaskStatusEdit(e.target.value)}>
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

        <RiDeleteBin6Fill 
          onClick={() => setOpenModelDelete(true)}
          cursor="pointer"
          className="text-red-600 hover:text-red-500"
          size={25}
        />

        <dialog
          id="my_modal_3"
          className={`modal ${openModelDelete ? "modal-open" : ""} `}
        >
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500"
              onClick={() => setOpenModelDelete(false)}
            >
              ✕ 
            </button>
            <h3 className="font-bold text-lg mb-5 text-red-500">
              Are You Sure, you want to Delete this task..?
            </h3>

            <button
              onClick={handleSubmitDeleteTask}
              type="submit"
              className="btn w-full text-white bg-lime-400"
            >
              YES
            </button>
          </div>
        </dialog>
      </td>
    </tr>
  );
};

export default Task;
