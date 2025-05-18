const input01 = document.querySelector('.input01');
const input_date01 = document.querySelector('.input-date01');
const myArray01 = [];
function todo_01(){
  if(input01.value != ''){
  myArray01.push( {
    name:input01.value,
    date:input_date01.value
  } );
  console.log(myArray01);
  input01.value = '';
  full_todo_list();
  }else{
    alert('Todo name is null !')
  }
}
function full_todo_list(){
  let todoListHTML = '';
  for(let i =0;i<myArray01.length;i++){
    const todoObject = myArray01[i];
    const {name,date} = todoObject;
    const html = `
    <div>${name}</div>
    <div> ${date}</div>
    <button class="delet-button" onclick="delete01(${i})" >Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML =  todoListHTML;
}
full_todo_list();
function delete01(element){
  myArray01.splice(element,1);
  full_todo_list();
}
