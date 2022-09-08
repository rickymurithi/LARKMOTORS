//GET
function getUSCarsData() {
   fetch('http://localhost:3000/USCarsData')
   .then(res => res.json())
   .then( USCarsData => console.log(USCarsData))
}
//Initialize rendering.
function initialize() {
   getUSCarsData()
}
initialize()


//Alert function
document.querySelector('#btn').addEventListener('click',
() => alert('subscribing to LARKMOTORS'))


//Add likes.
let numLikes = 69
let likes = document.querySelector('.likes')
function addLike() {
   numLikes ++
   likes.innerHTML = numLikes
}


//search list
document.addEventListener("DOMContentLoaded", () => {
   
   form = form.querySelector('form')
   form.addEventListener('submit', (e) => {
   e.preventDefault()
   searchCar(e.target.search.getUSCarsData)
   form.reset()
  })
})

function searchCar(browse) {
   let li = document.createElement('li')
   li.innerText = browse
   button = document.querySelector('button')
   button.innerText = 'x'
   button.addEventListener('click', handleDelete)
   button.style.color = 'orange'
   li.appendChild(button)
   document.querySelector('#btn').appendChild(button)
}
function handleDelete(e)  {
   e.target.parentNode.remove()
}



//Add feedback.
document.addEventListener("DOMContentLoaded", () => {
   // code!
   form = comment-sec.querySelector('form')
   form.addEventListener('submit', (e) => {
   e.preventDefault()
   buildToDo(e.target.com.value)
   form.reset()
  })
})
 
function buildToDo(todo) {
   const li = document.querySelector('li')
   li.innerText = `${todo}`
   button = document.createElement('button')
   button.innerText = '&#128686;'
   button.addEventListener('click', handleDelete)
   button.style.color = 'yellow'
   li.appendChild(button)
   document.querySelector('#post-button').appendChild(button)
}

//Remove feedback.
function handleDelete (e) {
   e.target.parentNode.remove()
}