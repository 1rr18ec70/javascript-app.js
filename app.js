
var heading = document.getElementById('heading')
var body = document.querySelector('body')

console.log(heading)

heading.innerHTML="i was added by you "
heading.style="color:red;font-size:2rem"

heading.classList.add('five')
heading.classList.remove('two')
body.classList.add('dark')

console.log(heading.classList)

