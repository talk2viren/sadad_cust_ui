import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-login", templateUrl: "./page-login.component.html", styleUrls: ["./page-login.component.scss"]})
export class PageLoginComponent implements OnInit {
  constructor() {}

  initialization() {
    //======================
    // Preloder
    //======================
    $(window).on("load", function () {
      $("#status").fadeOut();
      $("#preloader").delay(500).fadeOut("slow");
      $("body").delay(500).css({overflow: "visible"});
    });
    $(".sl-slider-caro").owlCarousel({dots: true, items: 1, nav: false, smartSpeed: 500});
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
