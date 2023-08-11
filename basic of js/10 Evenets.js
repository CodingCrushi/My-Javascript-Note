//here is way to event
document.querySelector(".btn").addEventListener("click" , (e)=>{
    e.preventDefault();
    console.log(e.target)
})

//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//list of all events
//https://www.w3schools.com/jsref/dom_obj_event.asp
//also we have more things like 
//accessKeys
//https://www.w3schools.com/jsref/prop_html_accesskey.asp