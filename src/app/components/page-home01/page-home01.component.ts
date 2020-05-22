import {Component, OnInit} from "@angular/core";
import {TimelineMax, Power1, Power2, Power4, Linear} from "gsap/all";

declare let $: any;

@Component({selector: "app-page-home01", templateUrl: "./page-home01.component.html", styleUrls: ["./page-home01.component.scss"]})
export class PageHome01Component implements OnInit {
  constructor() {}

  initialization() {
    //======================
    // Testimonial
    //======================
    $(".test-caro").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      margin: 30,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
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
    // Tweenmax
    // ============================

    let tB = new TimelineMax({repeat: -1, yoyo: true});
    tB.add("f1").to(".animg1, .ani4img1", 3, {
      rotation: "20",
      ease: Power2.easeNone
    }, "f1").to(".animg2, .ani4img2", 3, {
      rotation: "-20",
      ease: Power2.easeNone
    }, "f1").to(".rcvMobile", 0.7, {
      y: "30",
      ease: Linear.easeNones
    }, "f1").to(".rcvMobile", 0.7, {
      y: "0",
      ease: Linear.easeNones
    }, "-=.5");

    let tC = new TimelineMax({});
    tC.add("f2").to(".ani5img2, .ani7img1", 10, {
      rotation: "360",
      ease: Linear.easeNone,
      repeat: -1
    }, "f2").to(".ani5img3, .ani7img2", 15, {
      rotation: "360",
      ease: Linear.easeNone,
      repeat: -1
    }, "f2").to(".ani5img4, .ani7img3", 20, {
      rotation: "360",
      ease: Linear.easeNone,
      repeat: -1
    }, "f2").to(".ani7img4", 5, {
      rotation: "360",
      ease: Linear.easeNone,
      repeat: -1
    }, "f2");

    let tA = new TimelineMax({paused: true});
    tB = new TimelineMax({paused: true});
    tA.add("f2").to(".animg5", 1.5, {
      top: "0",
      ease: Power1.easeOut
    }, "f2").to(".animg5", 1.5, {
      left: "30%",
      ease: Power4.easeOut,
      delay: 1
    }).from(".abs-img", 1.5, {
      left: "-20px",
      opacity: 0,
      ease: Power4.easeOut,
      delay: 1
    }, "f2").from(".ani5img5", 1.5, {
      right: "-20%",
      opacity: 0,
      ease: Power4.easeOut
    }, "f2").from(".ani7img5", 1.5, {
      left: "-20%",
      opacity: 0,
      ease: Power4.easeOut
    }, "f2").staggerTo(".an3", 1.5, {
      scale: 1,
      ease: Power4.easeOut
    }, 0.3, "f2").staggerFrom(".scrn-1, .scrn-2, .scrn-3", 1, {
      y: 300,
      ease: Power2.easeOut
    }, 0.3, "f2").staggerFrom(".speciality .iconBox", 1, {
      y: 50,
      opacity: 0.5,
      ease: Power1.easeOut
    }, 0.3, "f2");
    $(".an3, .animg5, .scrn-1, .scrn-2, .scrn-3, .abs-img, .ani5img5").onScreen({
      container: window,
      direction: "vertical",
      doIn: function () {
        tA.restart();
        tB.restart();
      },
      doOut: function () {
        // console.log("Out");
        // Do something to the matched elements as they get off scren
      }
    });
    $(".iconBox").onScreen({
      container: window,
      direction: "vertical",
      doIn: function () {
        tA.restart();
        tB.restart();
      },
      doOut: function () {
        // console.log('Out')
        // Do something to the matched elements as they get off scren
      }
    });
  }

  ngOnInit() {
    this.initialization();
  }
}
