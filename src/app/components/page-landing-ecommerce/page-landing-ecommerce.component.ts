import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-landing-ecommerce", templateUrl: "./page-landing-ecommerce.component.html", styleUrls: ["./page-landing-ecommerce.component.scss"]})
export class PageLandingEcommerceComponent implements OnInit {
  constructor() {}

  initialization() {
    //======================
    // Testimonial
    //======================
    $(".test-caro").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      margin: 30,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    });
    //======================
    // Partners carousel
    //======================
    $(".partners-logo").owlCarousel({
      autoplay: true,
      dots: false,
      items: 6,
      loop: true,
      margin: 60,
      nav: false,
      smartSpeed: 500,
      responsive: {
        0: {
          items: 2,
          margin: 30
        },
        400: {
          items: 3,
          margin: 40
        },
        768: {
          items: 4,
          margin: 50
        },
        992: {
          items: 5,
          margin: 50
        },
        1199: {
          items: 6
        }
      }
    });
    // ============================
    // Button Animation
    // ============================
    $(".btn").on("mouseenter mousemove", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".bh").css({top: relY, left: relX});
      var origin = relX + "px" + " " + relY + "px";
    }).on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".bh").css({top: relY, left: relX});
    });
  }

  ngOnInit() {
    this.initialization();
  }
}
