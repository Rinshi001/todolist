const butt=document.getElementById('button');
const inp=document.getElementById('text');
const ul=document.getElementById('ul');
butt.addEventListener('click',addtodo);
function addtodo(){
    const textin=inp.value.trim();
    if( textin===''){
        alert('Please enter a task');
        return
    }
  const todoitem=document.createElement('li');
  todoitem.className='todo-item';
  todoitem.innerHTML=
 ` <span>${textin}</span>
 <button class="dlbutt">Delete</button>
`;
const delet=todoitem.querySelector('.dlbutt');
delet.addEventListener('click',()=>{
    todoitem.remove();
});
  ul.appendChild(todoitem);
  inp.value=''
}


