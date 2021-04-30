const BREEDS_URL ="https://dog.ceo/api/breeds/image/random";

const swiper=new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 'auto',
    spaceBetween:10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }); 

  const { styler, spring, listen, pointer, value } = window.popmotion;

const logo = document.querySelector('.brand');
const divStyler = styler(logo);
const logoXY = value({ x: 0, y: 0 }, divStyler.set);

listen(logo, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(logoXY.get()).start(logoXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: logoXY.get(),
      velocity: logoXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      mass: 5,
      damping: 10
    }).start(logoXY);
  });

  function fetch_dogs(){
    fetch(BREEDS_URL).then(function(response){
      return response.json();
    }).then(function(data){
      const div = document.createElement('div');
      div.classList.add('swiper-slide');
      const img = document.createElement('img'); 
      img.src=data.message;
      img.alt ="dog";
      document.querySelector('.swiper-wrapper').appendChild(div).appendChild(img);
      swiper.update();
    })
  }

  const next=document.querySelector('.swiper-button-next');
  next.addEventListener('click',function(){
     fetch_dogs();
  });
  setInterval(() => {
    fetch_dogs();
  }, 2000);


  