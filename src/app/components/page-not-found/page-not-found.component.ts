import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

declare let $: any;

@Component({selector: "app-page-not-found", templateUrl: "./page-not-found.component.html", styleUrls: ["./page-not-found.component.scss"]})
export class PageNotFoundComponent implements OnInit {
  route: ActivatedRoute;

  constructor(route : ActivatedRoute) {
    this.route = route;
  }

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
