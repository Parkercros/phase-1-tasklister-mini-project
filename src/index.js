document.addEventListener("DOMContentLoaded", () => {

  document.querySelector('form').removeEventListener('submit', (e) => {
    e.preventDefault(e.target.create-task-form.value);
  })

});

function handleToDo (todo) {
  let p = document. createElement ('p')
  p. textContent = todo
  document. querySelector ('#list') .appendchild(p)
}