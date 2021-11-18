document.addEventListener('DOMContentLoaded',()=>{
	const ob = new IntersectionObserver(cb);
	const anime = document.querySelectorAll(".fade");
	anime.forEach(el => ob.observe(el));
});

const cb = (entries, observer)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            observer.unobserve(entry.target);
        } else {
        }
    });
}

