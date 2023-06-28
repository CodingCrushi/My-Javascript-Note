//here is way to create element 
const h1 = document.createElement('h1')


//able to add class and id 
h1.className = "Homayoun"
h1.id = "Homi"

//fot class in the deep we use classLists 
h1.classList.add("Mohammadi")
// https://www.w3schools.com/jsref/prop_element_classlist.asp


//add content into text 
h1.innerHTML = "<b>Heading</b>"
h1.innerText = "Heading"

//here example of append
const ul = document.createElement("ul")
const li1 = document.createAttribute("li")
const li2 = document.createAttribute("li")

li1.appendChild(document.createTextNode("Homayoun"))
li2.appendChild(document.createTextNode("Mohammadi"))

ul.appendChild(li1)
ul.appendChild(li2)

h1.appendChild(ul)

//heres one way to delete element
li2.remove()