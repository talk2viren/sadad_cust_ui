import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-how-it-works-paybills", templateUrl: "./page-how-it-works-paybills.component.html", styleUrls: ["./page-how-it-works-paybills.component.scss"]})
export class PageHowItWorksPaybillsComponent implements OnInit {
  constructor() {}

  initialization() {
    // ============================
    // Nice Select
    // ============================
    $("select").niceSelect();
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
