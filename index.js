//Alert function
document.querySelector('#btn').addEventListener('click',
() => alert('subscribing to LARKMOTORS'))

//Add likes.
let numLikes = 0
let likes = document.querySelector('.likes')
function addLike() {
   numLikes ++
   likes.innerHTML = numLikes
}

//search list
document.addEventListener('DOMContentLoaded', () => {
   let form = document.querySelector('form')
   form.addEventListener('submit', (e) => {
      e.preventDefault()
      e.target.search.value
      form.rest()
   })
})

//Add feedback.
document.addEventListener("DOMContentLoaded", () => {
   // code!
   form = document.querySelector('form')
   form.addEventListener('submit', (e) => {
   e.preventDefault()
   myTodoList(e.target.newTask.value)
   form.reset()
  })
 });
 
 function buildTodoList(todo) {
   let li = document.createElement('li')
   let btn = document.createElement('button')
   btn.addEventListener('click', handleDelete)
   btn.textContent = 'x'
   li.textContent = `${todo}`
   li.appendChild(btn)
   document.querySelector('#tasks').appendChild(li)
 }

//Remove feedback.


 function handleDelete (e) {
   e.target.parentNode.remove()
 }