"use strict";

(function() {
    // navbar contrle buttons
    let open_button  = document.querySelector('.open-navbar'),
        close_button = document.querySelector('.close-navbar'),
        navbar       = document.querySelector('.navbar');

    open_button.addEventListener("click", () => {
        navbar.style.display = 
        close_button.style.display = "inline-block";
        open_button.style.display = "none"
    });
    close_button.addEventListener("click", () => {
        navbar.style.display = 
        close_button.style.display = "none";
        open_button.style.display = "inline-block"
    })

    // navbar slide links
    let links = document.querySelectorAll('.link');
    links.forEach(link => link.addEventListener('click', () => { 
        
        if(link.parentElement.className == 'open') {
            link.parentElement.classList.toggle('open');
        }else {

            let opend = document.querySelector('.open');

            if (opend) {
                opend.classList.remove('open');
            }
            
            link.parentElement.classList.add('open');
        }
        
    }))
})()
