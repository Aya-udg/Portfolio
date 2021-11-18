const button = document.querySelector('.hamburger');
const inside = document.querySelector('.mobile_menu__inside');
const bg = document.querySelector('.mobilebg');

button.addEventListener('touchstart',()=>{
    if(button.classList.contains('active') === false){
        button.classList.add('active');
        inside.classList.add('active');
        bg.classList.add('active');
    }else{
        button.classList.remove('active');
        inside.classList.remove('active');
        bg.classList.remove('active');
    }
});

bg.addEventListener('touchstart',()=>{
    if(button.classList.contains('active') === false){
        button.classList.add('active');
        inside.classList.add('active');
        bg.classList.add('active');
    }else{
        button.classList.remove('active');
        inside.classList.remove('active');
        bg.classList.remove('active');
    }
});
