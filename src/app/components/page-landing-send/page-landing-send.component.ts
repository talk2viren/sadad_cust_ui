import {Component, OnInit} from "@angular/core";

declare let $: any;

@Component({selector: "app-page-landing-send", templateUrl: "./page-landing-send.component.html", styleUrls: ["./page-landing-send.component.scss"]})
export class PageLandingSendComponent implements OnInit {
  amount: String = "$ 1000.00";
  givenAmount: number = 1000;

  main: string = "usa";
  second: string = "australia";
  third: string = "canada";

  mainC: string = "usd";
  secondC: string = "aud";
  thirdC: string = "cad";

  constructor() {}

  amountChanged(a) {
    if (this.main == "usa") {
      this.givenAmount = a.target.value;
    } else if (this.main == "australia") {
      this.givenAmount = Math.round(a.target.value * 0.69);
    } else if (this.main == "canada") {
      this.givenAmount = Math.round(a.target.value * 0.76);
    }
  }

  selectedCurrency(country) {
    if (country === "usa") {
      this.amount = "$ " + this.givenAmount + ".00";
      this.main = "usa";
      this.second = "australia";
      this.third = "canada";
      this.mainC = "usd";
      this.secondC = "aud";
      this.thirdC = "cad";
    } else if (country === "canada") {
      this.amount = "$ " + Math.round(this.givenAmount / 0.76) + ".00";
      this.main = "canada";
      this.second = "usa";
      this.third = "australia";
      this.mainC = "cad";
      this.secondC = "usd";
      this.thirdC = "aud";
    } else if (country === "australia") {
      this.amount = "$ " + Math.round(this.givenAmount / 0.69) + ".00";
      this.main = "australia";
      this.second = "usa";
      this.third = "canada";
      this.mainC = "aud";
      this.secondC = "usd";
      this.thirdC = "cad";
    }
  }

  initialization() {
    //======================
    // Testimonial 2
    //======================
    $(".test-caro-2").owlCarousel({
      dots: false,
      items: 1,
      nav: true,
      navText: [
        '<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'
      ],
      smartSpeed: 500,
      thumbs: true,
      thumbsPrerendered: true
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
    // ============================
    // Nice Select
    // ============================
    $("select").niceSelect();
    //======================
    // Select currency
    //======================
    $(".curr-select").on("click", function () {
      $(this).children("ul").slideToggle();
    });
  }

  ngOnInit() {
    this.initialization();
  }
}
