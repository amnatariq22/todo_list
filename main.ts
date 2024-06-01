#! /usr/bin/env node
import inquirer from "inquirer";
let todos: string []= [];
let condition = true;
console.log("\n \t Welcome to the - Todos-list application\n");

let main = async () => {
  while (condition) {
    let option = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "select an option you want to do:",
        choices: [
          "Add Task",
          "Delete Task",
          "Update Task",
          "View Todo-list",
          "Exit",
        ],
      },
    ]);
    if (option.choice === "Add Task") {
      await addTask();
    } 
    else if(option.choice === "Delete Task"){
      await Deletetask();
    }
          else if(option.choice === "Update Task"){
            await UpdateTask();
          }
    else if(option.choice === "View Todo-list") {
      await viewTask();
    } 
    else if(option.choice === "Exit"){
      condition = false;
    }
  }
};
let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new task :",
    },
  ]);
  todos.push(newTask.task);
  console.log(`\n ${newTask.task} task successfully in Todo-list`);
};

let viewTask = async () => {
  console.log("\n Your Todo-list \n");
  todos.forEach((task, index) => {
    console.log(`${index}: ${task}`);
  });
}

let Deletetask = async () => {
  await viewTask ();
  let taskindex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the `index no.` of the task you want to delete ",
    }
  ]);
   let Deletetask = todos.splice(taskindex.index, 1);
   console.log(`\n ${Deletetask} This task has been deleted successfully from your Todo-list\n`);
  
}
 let UpdateTask = async () => {
  await viewTask();
  let Update_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the `index no` of the task you want to update : ",
    },
    {
      name: "new_task",
      type: "input",
      message: "Now Enter new task name :",
    }
  ]);
  todos[Update_task_index.index] = Update_task_index.new_task
  console.log(`\n Task at index no. ${Update_task_index.index} updated successfully [for updated list check option: view Todo-list]`)
}

main();
