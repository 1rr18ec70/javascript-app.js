  var list= document.querySelector('ul')
 
  var arr=['go to college','have some knowledge','and be skilled person']

for (var i=0;i<arr.length;i++){
  var element= document.createElement('li')
  var textnode=document.createTextNode(arr[i])
  console.log(element)
element.appendChild(textnode)
console.log(element)
}