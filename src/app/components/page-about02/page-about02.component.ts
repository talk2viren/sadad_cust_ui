import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-about02", templateUrl: "./page-about02.component.html", styleUrls: ["./page-about02.component.scss"]})
export class PageAbout02Component implements OnInit {
  constructor() {}

  initialization() {
    //======================
    // Testimonial 3
    //======================
    $(".test-caro-3").owlCarousel({
      dots: true,
      items: 1,
      nav: true,
      navText: [
        '<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'
      ],
      smartSpeed: 500
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
