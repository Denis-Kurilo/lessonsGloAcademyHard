let imgAirplane = document.querySelector('.imgAirplane'),
  parachutel = document.querySelector('.parachutel'),
  btn = document.querySelector('.btnPlay'),
  reset = document.querySelector('.reset');

let count = 0;
let interval;
let stopAnimate = true;
let flyAnimate = () => {
    interval = requestAnimationFrame(flyAnimate);
    count++;
    console.log(count)
    if(count < 400){
      imgAirplane.style.left = count + 'px'; 
      parachutel.style.top = count + 'px'; 
      parachutel.style.display = 'block';
      if(count > 400){
        let setInt = setInterval(() => {
          parachutel.style.top = count + 'px'; 
          parachutel.style.display = 'block';
        }, 2);
      }
    }else if(count < 600){
      imgAirplane.style.left = count + 'px';
    } else{
      cancelAnimationFrame(interval);
      
    }
};

btn.addEventListener('click', () => {
  if(stopAnimate){
    interval = requestAnimationFrame(flyAnimate); 
    stopAnimate = false;
    btn.textContent = 'Стоп';
  } else{
    stopAnimate = true;
    btn.textContent = 'Вызов анимации';
    cancelAnimationFrame(interval);
  }
});

reset.addEventListener('click', () => {
  count = 0;
  if(stopAnimate){
    stopAnimate = true;
    btn.textContent = 'Вызов анимации';
  }else{
    stopAnimate = true;
    btn.textContent = 'Вызов анимации';
    cancelAnimationFrame(interval);
  }
  imgAirplane.style.left = count + 'px'; 
  parachutel.style.display = 'none';
});