import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-blog-details", templateUrl: "./page-blog-details.component.html", styleUrls: ["./page-blog-details.component.scss"]})
export class PageBlogDetailsComponent implements OnInit {
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
