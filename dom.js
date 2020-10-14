const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addTask);

// Delete Event
itemList.addEventListener('click', removeTask);

// Filter Event
filter.addEventListener('keyup', filterTasks);

function addTask(e){
    e.preventDefault();
    // input value
    let newTask = document.getElementById('item').value;
  
    
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newTask));

    // create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
   itemList.appendChild(li);
}

    // remove item function
    function removeTask(e){
        if(e.target.classList.contains('delete')){
            if(confirm('are you sure')){
                let li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }

    // Filter tasks function
    function filterTasks(e){
        let text = e.target.value.toLowerCase();
        let tasks = itemList.getElementsByTagName('li');
        Array.from(tasks).forEach(function(task){
            let taskName = task.firstChild.textContent;
            if(taskName.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        })
    }
