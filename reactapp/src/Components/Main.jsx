import React, { useEffect, useState } from "react";
import AddTask from "../Components/AddTask";
import TaskList from "../Components/TaskList";
import { useAlert } from "react-alert";


const Main = () => {
let cart_tasks = JSON.parse(localStorage.getItem("cart_tasks")) || [];



 let completeTaskList= cart_tasks.filter(task => task.status==="Completed");

 let pendingTaskList=cart_tasks.filter(task => task.status==="Pending");
 
 


  return (
  
    <div className="max-w-4xl  mt-20">
      <div>
        <h1 className="text-center text-2xl font-bold mb-4  ">
          To Do Application
        </h1>
        <div className="flex mb-4 pt-4 justify-around" >
        <h2>Completed TaskList  : {completeTaskList.length}</h2>
        <h4>Total Task : {cart_tasks.length}</h4>
        <h4>Pending Task : {pendingTaskList.length}</h4>
        </div>
        <AddTask />
      </div>

      <TaskList tasks={cart_tasks} />
    </div>
  );
};

export default Main;
