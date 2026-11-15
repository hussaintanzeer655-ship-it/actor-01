(function(){
  const btn=document.getElementById('modeToggle');
  const root=document.documentElement;
  let light=true;
  btn.addEventListener('click',()=>{light=!light; if(light){ root.style.setProperty('--bg','#0b0f1a'); root.style.setProperty('--fg','#e6f0f9'); btn.textContent='Dark'; } else{ root.style.setProperty('--bg','#0c111b'); root.style.setProperty('--fg','#e7eaf2'); btn.textContent='Light'; } });
  document.getElementById('contact').addEventListener('click',()=>{ alert('Email: actors@example.com\nPhone: +1 555 0101'); });
})();