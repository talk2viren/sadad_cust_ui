import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-coming-soon", templateUrl: "./page-coming-soon.component.html", styleUrls: ["./page-coming-soon.component.scss"]})
export class PageComingSoonComponent implements OnInit {
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
    //======================
    // Clock
    //======================
    $("#clock").countdown("2020/10/10").on("update.countdown", function (event) {
      var $this = $(this).html(event.strftime("" + "<p>week%!w <span>%-w</span> </p>" + "<p>day%!d <span>%-d</span> </p>" + "<p>hr <span>%H</span> </p>" + "<p>min <span>%M</span> </p>" + "<p>sec <span>%S</span> </p>"));
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
