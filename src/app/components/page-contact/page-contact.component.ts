import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-contact", templateUrl: "./page-contact.component.html", styleUrls: ["./page-contact.component.scss"]})
export class PageContactComponent implements OnInit {
  constructor() {}

  initialization() {
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
