// 1. Select DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMessage = document.getElementById('emptyMessage');

// Helper: Toggle empty state visibility
function updateEmptyState() {
  emptyMessage.style.display = taskList.children.length === 0 ? 'block' : 'none';
}

// 2. Create dynamic elements
function createItemElement(text) {
  const li = document.createElement('li');
  li.className = 'item';

  const span = document.createElement('span');
  span.textContent = text;
  
  // Toggle strikethrough when clicked
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  
  // Remove item on delete click
  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateEmptyState();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

// 3. Main Action Handler
function addItem() {
  const text = taskInput.value.trim();
  if (!text) return;

  const itemNode = createItemElement(text);
  taskList.appendChild(itemNode);

  taskInput.value = '';
  updateEmptyState();
}

// 4. Attach Event Listeners
addBtn.addEventListener('click', addItem);

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addItem();
});