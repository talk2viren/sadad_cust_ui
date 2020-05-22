import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-header", templateUrl: "./page-header.component.html", styleUrls: ["./page-header.component.scss"]})
export class PageHeaderComponent implements OnInit {
  constructor() {}

  initialization() {
    //======================
    // Sticky menu
    //======================

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 1) {
        $(".header").addClass("fixed-header");
      } else {
        $(".header").removeClass("fixed-header");
      }
    });

    //======================
    // Preloder
    //======================
    $(window).on("load", function () {
      $("#status").fadeOut();
      $("#preloader").delay(500).fadeOut("slow");
      $("body").delay(500).css({overflow: "visible"});
    });

    //======================
    // Mobile menu
    //======================
    $("#mobile-menu-toggler").on("click", function (e) {
      e.preventDefault();
      $(".primary-menu > ul").slideToggle();
    });
    $(".has-menu-child").append('<i class="menu-dropdown fas fa-angle-down"></i>');

    if ($(window).width() <= 991) {
      $(".menu-dropdown").on("click", function () {
        $(this).prev().slideToggle("slow");
        $(this).toggleClass("fa-angle-down fa-angle-up");
      });
    }
  }

  ngOnInit() {
    this.initialization();
  }
}
