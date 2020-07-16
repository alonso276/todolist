//selectors:

const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const filterOption= document.querySelector('.filter-todo')

//event listeners

todoButton.addEventListener("click", addTodo);


todoList.addEventListener('click',deleteCheck);

filterOption.addEventListener('input', filterTodo);


//functions

function addTodo (event){

    event.preventDefault();

    //1- create todo div

    const todoDiv= document.createElement('div');
      //add classList
      todoDiv.classList.add('todo');

    //2-create LI

    const newTodo= document.createElement('li');
       //add classList
       newTodo.classList.add('todo-item');
       //add text to test
       newTodo.innerText= todoInput.value;
       //append li to div
       todoDiv.appendChild(newTodo);

    //3. check mark button

    const completedButton= document.createElement('button');
    //add icon to button
    completedButton.innerHTML= '<i class="fas fa-check"> </i>'
    //add classlist
    completedButton.classList.add("complete-btn");
    //append button to div
     todoDiv.appendChild(completedButton);

      //4. check trash button

    const trashButton= document.createElement('button');
    //add icon to button
    trashButton.innerHTML= '<i class="fas fa-trash"> </i>'
    //add classlist
    trashButton.classList.add("trash-btn");
    //append button to div
     todoDiv.appendChild(trashButton);

     //5. append to List

     todoList.appendChild(todoDiv);

     //6. clear todoInput.value

     todoInput.value='';



}


//delete function
function deleteCheck(e){

    const item =e.target;

    //DELETE TODO

   if (item.classList[0]==="trash-btn"){

    const todo= item.parentElement;
    todo.classList.add('fall');//add for animation
    todo.addEventListener("transitioned",function (){
        todo.remove()
   });

    };
    

   //CHECK MARK

   if(item.classList[0]==="complete-btn"){
       const todo=item.parentElement;
                      //convertirse en:
       todo.classList.toggle("completed")
   }
}


function filterTodo(e){

    const todos= todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;

            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex"; 
                }else{
                    todo.style.display="none";
                }
                break;

                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display="flex"; 
                    }else{
                        todo.style.display="none";
                    }
                    break;
    }
});

}