let btns = document.querySelectorAll(".collapsible");
let p = document.querySelectorAll(".content") 


//go in each button and add accordion on click
btns.forEach(btn =>{

    btn.addEventListener('click', (e)=>{

        p.forEach((cont) => {
            if(e.target.nextElementSibling !== cont && cont.classList.contains('active')){
//remove active class when clicked other button.     
                cont.classList.remove('active');
                btns.forEach((btn) => { btn.classList.remove('active')})
            }
        })
// set active class when clicked.
        btn.classList.toggle('active');
        const next = btn.nextElementSibling;
        next.classList.toggle('active')

    })
})

 














