document.addEventListener('DOMContentLoaded',()=>{
    const ob = new IntersectionObserver(callback);
    const targets = document.querySelectorAll(".fadeinAnime");
    targets.forEach(el => ob.observe(el));
       
})


const callback = (entries, observer)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            observer.unobserve(entry.target);
        } else {
        }
    });
}





