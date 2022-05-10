var rateNumbers = document.querySelectorAll(".rate__numbers li")
var choice = document.getElementById("choice");
var thank = document.querySelector(".thank");


rateNumbers.forEach((node) => {
    node.addEventListener("click", function(){
        var result =  node.innerText;
        choice.innerHTML = result;
    })
});

thank.addEventListener("click", function(){
    document.querySelector(".front").style.display ="none";
    setInterval(() => {
        location.reload();
    }, 5000);
})
// function submit(){
//    document.querySelector(".front").style.display ="none";
// }