//array within object |  when we call from | rest api- add delete show update
tasks = [
        {id:"1",taskName:"frontend", description:"dhjfghgfhgfhdgfsjf", status:"dsd",action:"dhsjh"},
        {id:"2",taskName:"backend", description:"kfjkdjfkhf",status:"dsd",action:"dhsjh"}
    ]
//render code
function renderList(){
    document.querySelector(`#taskList`).innerHTML =
    tasks.map((task)=>`
                    <tr>
            <th scope="row">${task.id}</th>
            <td>${task.taskName}</td>
            <td>${task.description}</td>
            <td>${task.status}</td>
            <td>${task.action}</td>
            <td>
                <button class='btn btn-dark' ionclick='deleteTaskWithIndex(${index})'></button>
            </td>
          </tr>`
    ).join('');
}renderList();


//deletbyindex - frontend
//deletebyid - mern


 
    //geting single task so we will take task for tasks

//CRUD