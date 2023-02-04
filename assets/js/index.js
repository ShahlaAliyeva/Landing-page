let toggleMenu = document.querySelector("i");
// let closeIcon = document.querySelector(".fa-xmark")

function openMenu() {
    //     toggleMenu.classList.remove("fa-bars");
    //     toggleMenu.classList.add("fa-xmark");
    // let closeIcon = toggleMenu.classList.add("fa-xmark");
    // closeIcon.addEventListener('click', function() {
    //     toggleMenu.classList.add("fa-bars");
    //     toggleMenu.classList.remove("fa-xmark");
    // })
    var element = document.querySelector('.menu-side')
    if(element.style.display == 'block') {
        // toggleMenu.style.color = '#A8A8A8'
        toggleMenu.classList.add("fa-bars");
        toggleMenu.classList.remove("fa-xmark");
        element.style.display = 'none'
    } else {
        // toggleMenu.style.color = '#000'
        element.style.display = 'block'
        toggleMenu.classList.remove("fa-bars");
        toggleMenu.classList.add("fa-xmark");
    }

}

// var opacity=0;
//     var intervalID=0;
//     window.onload=fadeout;
//         function fadeout(){
//             setInterval(hide, 200);
//         }
//     function hide(){
//         var menu=document.querySelector(".menu-side");
//         opacity =
//     Number(window.getComputedStyle(menu).getPropertyValue("opacity"))
      
//             if(opacity>0){
//                 opacity=opacity-0.1;
//                         body.style.opacity=opacity
//             }
//             else{
//                 clearInterval(intervalID);
//             }
//         }

// const myTimeout = setTimeout(openMenu, 3000);
