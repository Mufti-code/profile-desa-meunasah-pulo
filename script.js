// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => { navLinks.classList.toggle('show'); });

// DARK MODE TOGGLE
const toggle = document.getElementById('dark-mode-toggle');
if(localStorage.getItem('theme')==='dark') document.body.classList.add('dark');
toggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark')?'dark':'light');
});

// COUNTER ANIMASI
const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
  const updateCounter=()=>{
    const target=+counter.getAttribute('data-target');
    let c=+counter.innerText;
    const increment=target/200;
    if(c<target){
      counter.innerText=`${Math.ceil(c+increment)}`;
      setTimeout(updateCounter,10);
    } else counter.innerText=target;
  };
  updateCounter();
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('section');
window.addEventListener('scroll',()=>{
  reveals.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 50) sec.style.opacity='1';
  });
});
// Semua section langsung visible (safe)
revealSections();
function revealSections(){reveals.forEach(sec=>sec.style.opacity='1');}
