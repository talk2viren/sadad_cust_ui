import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-footer", templateUrl: "./page-footer.component.html", styleUrls: ["./page-footer.component.scss"]})
export class PageFooterComponent implements OnInit {
  constructor() {}

  initialization() {
    if ($(window).width() <= 575) {
      $(".footer .foo-nav h5").append('<i class="fas fa-plus fa-minus"></i>');
      $(".footer .foo-nav h5").on("click", function () {
        $(this).next("ul").slideToggle("");
        $(this).children("i").toggleClass("fa-plus");
      });
    }
  }

  ngOnInit() {
    this.initialization();
  }
}
