document.querySelectorAll('nav a').forEach(a=>{
a.addEventListener('click',()=>{
document.querySelectorAll('nav a').forEach(x=>x.classList.remove('activo'));
a.classList.add('activo');
document.querySelectorAll('.seccion').forEach(s=>s.classList.remove('visible'));
document.getElementById(a.dataset.target).classList.add('visible');
window.scrollTo({top:0,behavior:'smooth'});
});
});