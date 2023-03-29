// import { addSvgToPage } from "../atoms/logo.js";
import { addSvgToPage } from "./atoms/logo";

  const Header = {
    render: () => {
      return `
          <nav class="navigation container d-flex">
          HEADER HERE
            <!-- logo -->
            <a class="logo" href="#">theWorkingNomad<div id="svg-container"></div></a>
            <!-- menu -->
            <ul class="nav-list d-flex">
              <li><a href="/#/">Home</a></li>
              <li><a href="/#/work">Work</a></li>
              <li><a href="/#/about">About</a></li>
              <li><a href="/#/contact">Contact Us</a></li>
            </ul>

            <!-- hamburger -->
            <div class="hamburger"><i class="bx bx-menu-alt-right"></i></div>
          </nav>`;
    },
    after_render: () => {
      const navList = document.querySelector(".nav-list");
      const hamburger = document.querySelector(".hamburger");
      const navHeight = document.querySelector(".navigation").getBoundingClientRect().height;

      hamburger.addEventListener("click", () => {
        navList.classList.toggle("show");
      });

      window.addEventListener("scroll", () => {
        const scrollHeight = window.pageYOffset;
        if (scrollHeight > navHeight) {
          document.body.classList.add("fix");
        } else {
          document.body.classList.remove("fix");
        }
      });

      const links = [...document.querySelectorAll(".nav-list a")];
      links.map((link) => {
        link.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        });
      });

      addSvgToPage();
    },
  };

export default Header; // Make sure to export the Header component