// let's start coding:
window.addEventListener("DOMContentLoaded", function(){
  let running = document.querySelector("#running");
  running.style.display = "flex";
  running.style.transition = ".5s";
  running.style.opacity = "0";
  running.style.height = "0px";
  let cnt = 0, timer = null;
  document.querySelector("button").addEventListener("click", function(){
    
    if (timer){
      document.querySelector("button").textContent = "START"
      clearInterval(timer);
      timer = null;
      
      running.style.opacity = "0";
      running.style.height = "0px";

    } else {
      running.style.display = "flex";
      running.style.opacity = "1";
      running.style.height = "40px";
      
      timer = window.setInterval(clock, 100)
      function clock() {
        document.querySelector("button").textContent = "PAUSE"
        cnt += 1;
        document.querySelector("#seconds").textContent = Math.floor(cnt/10);
        document.querySelector(".dots").prepend(document.querySelector(".dots div:last-child"))
        // running.classList.add("running-start")
        // running.classList.remove("running-end")
      }
    }
    
      
    })
    })
  


// $(window).ready(function(){
//   console.log("ready!");
//   let cnt = 0 ,timer = null;

//   $("button").click(function(){
//     console.log("clicked!");

//     if (timer){
//       $("running").slideUp()
//       clearInterval(timer)
//       timer = null
//     } else {
//       $("running").slideDown()
//       timer = setInterval(function() {
//         cnt += 1;
//         $("#seconds").text(Math.floor(cnt/10))
//         $(".dots div:last-child").prependTo($(".dots"))
//       }, 100)
//     }
//   })
// })