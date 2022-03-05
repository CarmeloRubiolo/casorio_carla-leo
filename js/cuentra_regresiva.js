const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `<div class="fst-italic h1" style="font-weight: bold;">${t.remainDays} : ${t.remainHours} : ${t.remainMinutes} : ${t.remainSeconds}</div>
      <div class="fst-italic h2" style="font-family:'Tangerine', cursive; font-weight: bold;">Días Horas Minutos Segundos</div>`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };
  
  countdown('Sep 17 2022 18:00:00 GMT-0500', 'clock', 'Nos casamoss!!');

let subirATope = document.getElementById("subir");
subirATope.addEventListener("click", subir);
function subir(){
    $("body,html").animate({
        scrollTop:0
    },500)
}