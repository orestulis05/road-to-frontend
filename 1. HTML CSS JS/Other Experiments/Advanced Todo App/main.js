const taskList = document.querySelector(".task-list");
const tagSelectEl = document.getElementById("new-task-tag");
const newTaskField = document.getElementById("new-task-input");

const addTaskItem = () => {
  if (newTaskField.value === "") return;

  const desc = newTaskField.value;
  newTaskField.value = "";

  const tag = document.getElementById("new-task-tag").value;

  // Create and modify a new div element
  const container = document.createElement("div");
  container.className = "list-item";
  container.addEventListener("click", onListItemClick);

  // New children elements that will be inside of the new div

  const newDesc = document.createElement("p");
  newDesc.textContent = desc;
  container.appendChild(newDesc);

  const newTag = document.createElement("p");
  newTag.textContent = tag;
  container.appendChild(newTag);

  taskList.appendChild(container);
  updateEmptyMessage();
};

const addTaskItemOnEnterPress = (e) => {
  // If enter pressed in the input field, we try to add a new task
  if (e.code === "Enter") {
    addTaskItem();
  }
};

const onListItemClick = (e) => {
  e.preventDefault();
  const item = e.target.parentElement;
  const taskDescEl = item.getElementsByTagName("p")[0];

  // If ctrl+shift, we delete the list item.
  if (e.ctrlKey === true && e.shiftKey === true) {
    if (
      confirm(
        "Are you sure you want to DELETE '" +
          taskDescEl.textContent +
          "' task?",
      )
    ) {
      taskList.removeChild(item);
      updateEmptyMessage();
    }
    return;
  }

  // If ctrl, we edit the items name via prompt.
  if (e.ctrlKey === true) {
    let newName = prompt("Enter a new name", taskDescEl.textContent);
    if (newName === null) {
      return;
    }

    if (newName === "") {
      alert("Empty task names are not allowed!");
      return;
    }

    taskDescEl.textContent = newName;
    return;
  }
};

const createNewTag = () => {
  const tagName = prompt("Enter a name for a new tag");
  if (tagName === null) return;

  if (tagName === "") {
    alert("Empty tag names are not allowed.");
    return;
  }

  // Create an option in tag selection dropdown
  const optionEl = document.createElement("option");
  optionEl.setAttribute("value", tagName);
  optionEl.textContent = tagName;

  tagSelectEl.appendChild(optionEl);
  alert("Tag '" + tagName + "' was created successfully.");
};

const deleteSelectedTag = () => {
  // Don't let user delete all of the tags. At least one should stay.
  const tags = tagSelectEl.querySelectorAll("option");
  if (tags.length <= 1) {
    alert("Deleting only remaining tag is not allowed.");
    return;
  }

  // Get currently selected tag and delete it from the dropdown.
  const selectedTagEl = tagSelectEl.selectedOptions[0];
  if (
    confirm(
      "Are you sure you want to delete '" + selectedTagEl.value + "' tag?",
    )
  ) {
    tagSelectEl.removeChild(selectedTagEl);
    alert("Tag '" + selectedTagEl.value + "' was deleted successfully.");
  }
};

const updateEmptyMessage = () => {
  // Check if there are tasks and set the empty message accordingly
  const tasks = taskList.getElementsByTagName("div");
  if (tasks.length > 0) {
    document.querySelector(".list-empty").style.display = "none";
  } else {
    document.querySelector(".list-empty").style.display = "block";
  }
};

// Event connections
document.getElementById("submit-btn").addEventListener("click", addTaskItem);
newTaskField.addEventListener("keydown", addTaskItemOnEnterPress);
