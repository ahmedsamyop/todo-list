// variables
const inputTask = document.querySelector('.add-task input');
const btnPlus = document.querySelector('.add-task .plus');
const taskContainer = document.querySelector('.tasks-content');
const noTasksMsg = document.querySelector('.no-tasks-message');
const fullTasks = document.querySelector('.tasks-count span');
const completedTasks = document.querySelector('.tasks-completed span');

// Event Button To Add New Task
btnPlus.addEventListener('click', (e) => {
  // Input Value
  let newtask = inputTask.value;
  // Check Value
  if (!newtask == '') {
    // Remove No Tasks Massage
    noTasksMsg.remove();
    //  Func =>  Add New Task
    addNewTask(newtask, taskContainer);
    // Number Of Tasks
    fullTasks.innerHTML = parseInt(fullTasks.innerHTML) + 1;
    // Add Event Click && Number Of Completed Task
    btnCompleted();
  }
});
// ----------------
// Functions
//-----------------
function addNewTask(taskcontent, target) {
  //create
  let span = document.createElement('span');
  let delSpan = document.createElement('span');
  let mainText = document.createTextNode(taskcontent);
  //ClassName
  span.className = 'task-box';
  delSpan.className = 'delete';
  //text
  delSpan.textContent = 'Delete';
  span.appendChild(mainText);
  //Append Element
  span.append(delSpan);
  target.append(span);
}

function btnCompleted() {
  // Select all buttons have Class "delete"
  let btnDelete = Array.from(document.querySelectorAll('.delete'));
  // ForEach => Buttons
  btnDelete.forEach((btn) => {
    // Add Event Click
    btn.addEventListener('click', (e) => {
      // add class "finished" to [parentElement]
      e.currentTarget.parentElement.classList.add('finished');
      // func add Number's Of Completed Tasks
      complete();
    })
  })
}

function complete() {
  let taskCompletedLength = document.querySelectorAll('.task-box.finished').length;
  completedTasks.innerHTML = taskCompletedLength;
}