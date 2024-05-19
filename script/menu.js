const mobileBtn = () =>{
     const mobileBtn = document.querySelector(".mobile-menu__btn");
     const mobileMain = document.querySelector(".mobile-nav");
     const mobileInner = document.querySelector(".mobile-menu__main");
     const blackbg = document.querySelector(".black-bg");

     mobileBtn.addEventListener('touchstart',()=>{
        mobileMain.classList.toggle("menu-open");
        mobileInner.classList.toggle("active"); 
        blackbg.classList.toggle("bg-open");
     });

     blackbg.addEventListener('touchstart',()=> {
         mobileMain.classList.remove("menu-open");
         mobileInner.classList.remove("active"); 
         blackbg.classList.remove("bg-open");
    });
 }
 mobileBtn();