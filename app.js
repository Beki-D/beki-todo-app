//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteNCheck);

/*
 * Functions
 */

function addTodo(e) {
  //Prevent natural browser behaviour of reloading when pressing button(since form automatically submits)
  e.preventDefault();

//Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="btn btn-check">
  <svg height="20" width="20">
    <polyline points="5,9 8,13 15,6" style="fill:none;stroke:lime;stroke-width:2" />
  </svg>
  </i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Create Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="btn btn-trash">
  <svg 
  height="20" width="20">
    <line x1="5" y1="5" x2="15" y2="15" style="stroke:rgb(255, 230, 230);stroke-width:4" />
    <line x1="5" y1="15" x2="15" y2="5" style="stroke:rgb(255, 230, 230);stroke-width:4" />
  </svg>
  </i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  if(todoInput.value!=''){
    //Append to List
    todoList.appendChild(todoDiv);
  
    //Clear input field after it has been added to the list
    todoInput.value='';
  }else {
    todoInput.value='write something first...';
    setTimeout(() => {
      console.log("error! empty field");
      todoInput.value='';
    }, 1500);
  }
}

function deleteNCheck(e){
  console.log(e.target);//log which item is being clicked
  const item = e.target;
  //Delete one of the todo div
  if(item.classList[0]=='trash-btn'){
    const todo=item.parentElement;
    //Transition effect is set by the class 'fall' on the css 
    todo.classList.add('fall');
    //Wait for transition effect to end to remove the item 
    todo.addEventListener('transitionend', remover);
  }
  //remover function to be called when 'transitionend' condition is met
  function remover(){
    this.remove();
  }
  
  //check mark
  if(item.classList[0]=='complete-btn'){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
  }
}

