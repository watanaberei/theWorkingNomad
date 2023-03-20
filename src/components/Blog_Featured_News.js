import { format, parseISO } from "date-fns";

class Blog_Featured_News extends HTMLElement {
    constructor() {
      super();
  
      // Create the shadow root for the component
      this.attachShadow({ mode: "open" });
  
      // Get the props from the attributes
      const thumbnail = this.getAttribute("thumbnail");
      const category = this.getAttribute("category");
      const title = this.getAttribute("title");
      const tags = JSON.parse(this.getAttribute("tags"));
      const date = this.getAttribute("date");
  
      // Create the component's template
      const template = `
        <style>
          .media_img_thumbnail_dynamic {
            height: 50%;
            object-fit: cover;
            width: 100%;
          }
  
          .divider_rule_thumbnail_dynamic {
            border-top: 1px solid #ccc;
            width: 100%;
          }
  
          .text_category_thumbnail_dynamic {
            font-size: 14px;
            margin: 0;
          }
  
          .text_title_thumbnail_dynamic {
            font-size: 24px;
            margin: 0;
          }
  
          .data_tag_thumbnail_dynamic {
            background-color: #eee;
            border-radius: 20px;
            display: inline-block;
            font-size: 12px;
            margin-right: 5px;
            padding: 5px 10px;
          }
  
          .text_date_thumbnail_dynamic {
            font-size: 12px;
            margin: 0;
          }
        </style>
        <img class="media_img_thumbnail_dynamic" src="${thumbnail}">
        <hr class="divider_rule_thumbnail_dynamic">
        <h4 class="text_category_thumbnail_dynamic">${category}</h4>
        <h3 class="text_title_thumbnail_dynamic">${title}</h3>
        <div>
          ${tags.map((tag) => `<span class="data_tag_thumbnail_dynamic">${tag}</span>`).join("")}
        </div>
        <h6 class="text_date_thumbnail_dynamic">${date}</h6>
      `;
  
      // Set the component's template to the shadow root
      this.shadowRoot.innerHTML = template;
    }
  }
  
  // Define the component as a custom element
  window.customElements.define("blog-featured-news", Blog_Featured_News);
  