
(function(){
  const a = document.getElementById('bgAudio');
  const btn = document.getElementById('audioToggle');
  function fade(to, dur=1200){
    const from = a.volume; const steps=24, dt = dur/steps, dv=(to-from)/steps;
    let i=0; const id=setInterval(()=>{ i++; a.volume = Math.max(0, Math.min(1, a.volume + dv)); if(i>=steps){ clearInterval(id); a.volume = to; }}, dt);
  }
  function tryPlay(){ a.muted=false; a.volume=0; a.play().then(()=>fade(0.35,1500)).catch(()=>{}); }
  document.addEventListener('click', function once(){ tryPlay(); document.removeEventListener('click', once); });
  window.addEventListener('load', ()=>{ a.muted=true; a.play().then(()=>{ a.pause(); a.muted=false; }).catch(()=>{}); });
  btn.addEventListener('click', (e)=>{ e.stopPropagation(); if(a.paused){ tryPlay(); btn.textContent='⏸️'; } else { fade(0,600); setTimeout(()=>{ a.pause(); btn.textContent='🔊'; },650); } });
})();
