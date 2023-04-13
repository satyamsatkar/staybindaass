$('.product').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
  $('.deal').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  togglebtn.addEventListener("click",function(){
    document.getElementById("sidebar").classList.toggle("SideMenu2")
    

    if(document.getElementById("togglebtn").classList.contains("bi-list")){

      document.getElementById("togglebtn").classList.replace("bi-list","bi-x-square")
    }
    else{
      document.getElementById("togglebtn").classList.replace("bi-x-square","bi-list");
    }
  })