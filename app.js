let show = function()
{
    let burger=document.querySelector('.burger');
    let nav=document.querySelector('.nav');

    burger.addEventListener('click', () => 
    {
       nav.classList.toggle('nav-show');
    });

}

show();
