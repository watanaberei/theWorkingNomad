// import { getBlogs } from "./api.js";

// function createArticle(blog, size) {
//   const { category, title, tags, date } = blog;
//   const article = document.createElement("article");
//   article.classList.add("article", size);

//   const image = document.createElement("img");
//   image.src = "img.png";
//   article.appendChild(image);

//   const content = document.createElement("div");
//   content.classList.add("content");
//   article.appendChild(content);

//   const categoryHeading = document.createElement("h4");
//   categoryHeading.classList.add("text_category_thumbnail_dynamic");
//   categoryHeading.textContent = category;
//   content.appendChild(categoryHeading);

//   const titleHeading = document.createElement("h3");
//   titleHeading.classList.add("text_title_thumbnail_dynamic");
//   titleHeading.textContent = title;
//   content.appendChild(titleHeading);

//   const tagsContainer = document.createElement("div");
//   tagsContainer.classList.add("tags_container");
//   content.appendChild(tagsContainer);

//   tags.forEach((tag) => {
//     const tagElement = document.createElement("span");
//     tagElement.classList.add("data_tag_thumbnail_dynamic");
//     tagElement.textContent = tag;
//     tagsContainer.appendChild(tagElement);
//   });

//   const dateHeading = document.createElement("h6");
//   dateHeading.classList.add("text_date_thumbnail_dynamic");
//   dateHeading.textContent = date;
//   content.appendChild(dateHeading);

//   return article;
// }

// const grid = document.querySelector("#grid");

// getBlogs().then((blogs) => {
//   blogs.forEach((blog) => {
//     const article = createArticle(blog, "large");
//     grid.appendChild(article);
//   });
// });

// (function () {
//   function isOnScreen(elem) {
//     var viewport_top = document.body.scrollTop;
//     var viewport_height = window.innerHeight;
//     var viewport_bottom = viewport_top + viewport_height;
//     var top = elem.offsetTop;
//     var height = parseInt(
//       d3.select(d3.select(elem).node().parentNode).style("height")
//     );
//     var bottom = top + height;
//     return (
//       (top >= viewport_top && top < viewport_bottom) ||
//       (bottom > viewport_top && bottom <= viewport_bottom) ||
//       (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
//     );
//   }

//   function onScreen() {
//     var grid = document.querySelector("#grid"),
//       onScreenContents = grid.querySelectorAll(".content");

//     [].forEach.call(onScreenContents, function (d, i) {
//       d.style.width = "0%";
//     });

//     [].filter
//       .call(onScreenContents, function (d) {
//         return isOnScreen(d);
//       })
//       .forEach(function (d, i) {
//         d.style.width = "100%";
//       });
//   }

//   window.addEventListener("load", onScreen);
//   window.addEventListener("scroll", onScreen);
//   window.addEventListener("resize", onScreen);
// })();
