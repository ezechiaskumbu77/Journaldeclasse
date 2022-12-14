import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  banner = [
    {
      img: "assets/img/banner/01.jpg",
      subtitle: "Secoundo",
      title: "Un journal de classe<br>Numérique"
    },
    {
      img: "assets/img/banner/02.jpg",
      subtitle: "Secoundo",
      title: "Utiliser<br> Le numérique<br>sous un autre angle"
    },
    {
      img: "assets/img/banner/03.jpg",
      subtitle: "Secoundo",
      title: "La puissance <br> du numérique <br> au bout des doigts"
    }
  ];
  settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    fade: false,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
    prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  };

  ngOnInit(): void {
  }

}
