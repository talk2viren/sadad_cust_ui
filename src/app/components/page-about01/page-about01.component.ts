import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-about01", templateUrl: "./page-about01.component.html", styleUrls: ["./page-about01.component.scss"]})
export class PageAbout01Component implements OnInit {
  constructor() {}

  initialization() {
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
