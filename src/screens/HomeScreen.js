import { getLatestBlog, getBlogsByCategory, getTopBlogsByCategory, getRecentWork } from "../api.js";
import Blog from "../components/Blog.js";

const HomeScreen = {
  render: async () => {
    // Section 1: Most recent post
    const latestBlog = await getLatestBlog();
    const latestPostSection = Blog.render(latestBlog[0]);

    // Section 2: Posts under the "work" category
    const workBlogs = await getBlogsByCategory("work");
    const workSection = workBlogs.map((blog) => Blog.render(blog)).join("");

    // Section 3: Top posts under "rest" and top 2 under "explore"
    const restBlogs = await getTopBlogsByCategory("rest", 3);
    const exploreBlogs = await getTopBlogsByCategory("explore", 2);
    const topBlogsSection = `
      <div class="section">
        <div class="title">Top Blogs</div>
        <div class="top-blogs">
          <div class="rest">
            <h2>Rest</h2>
            ${restBlogs.map((blog) => Blog.render(blog)).join("")}
          </div>
          <div class="explore">
            <h2>Explore</h2>
            ${exploreBlogs.map((blog) => Blog.render(blog)).join("")}
          </div>
        </div>
      </div>
    `;

    // Section 4: Recent Work Articles
    const recentWork = await getRecentWork();
    const recentWorkBlogs = recentWork.items;
    const recentWorkSection = `
      <div class="section" id="recent-work-section">
        <div class="title">Recent Work</div>
        <div class="card-grid">
          ${recentWorkBlogs.map((blog) => Blog.render(blog)).join("")}
        </div>
        <div class="cta">
          <a href="/work">See all</a>
        </div>
      </div>
    `;

    // Section 5: Load More All Blogs
    const allBlogs = await getBlogs(6, 0);
    const allBlogsSection = `
      <div class="section">
        <div class="title">All Blogs</div>
        <div class="card-grid">
          ${allBlogs.map((blog) => Blog.render(blog)).join("")}
        </div>
        <div class="cta">
          <a href="/blog">See all</a>
        </div>
      </div>
    `;

    return `
      <div>
        <!-- Section 1: Most Recent Article -->
        <div class="section" id="most-recent-section">
          ${latestPostSection}
        </div>

        <!-- Section 2: All Work Category Articles -->
        <div class="section" id="work-section">
          <div class="title">Work</div>
          <div class="card-grid">
            ${workSection}
          </div>
        </div>

        <!-- Section 3: Top Rest Category Articles and Top 2 Explore Category Articles -->
        <div class="top-blogs-section" id="top-blogs-section">
        ${topBlogsSection}
        </div>
        <!-- Section 4: Recent Work Articles -->
        ${recentWorkSection}
    
        <!-- Section 5: Load More All Blogs -->
        ${allBlogsSection}
      </div>
    `;
  },
  after_render: async () => {
    // Section 1: 
    const latestBlog=await getLatestBlog();
    const latestPostSection=document.getElementById("most-recent-section");
    latestPostSection.innerHTML=Blog.render(latestBlog[0]);




    // Section 2: Posts under the "work" category
    const workBlogs=await getBlogsByCategory("work");
    const workSection=document.getElementById("work-section");
    workSection.innerHTML=workBlogs.map((blog) => Blog.render(blog)).join("");

    // Section 3: Top Rest Category Articles and Top 2 Explore Category Articles
    const restBlogs=await getTopBlogsByCategory("rest", 3);
    const exploreBlogs=await getTopBlogsByCategory("explore", 2);

    const topBlogsSection=`
      <div class="top-blogs-section">
        <div class="title">Nomads Blog</div>
        <div class="top-blogs">
          <div class="rest">
            <h2>Rest</h2>
            ${restBlogs.map((blog) => Blog.render(blog)).join("")}
          </div>
          <div class="explore">
            <h2>Explore</h2>
            ${exploreBlogs.map((blog) => Blog.render(blog)).join("")}
          </div>
        </div>
      </div>
    `;

    // Section 4: Recent Work Articles
    const recentWorkBlogs = await getRecentWork();
    const recentWorkSection = `
      <div class="section" id="recent-work-section">
        <div class="title">Recent Work</div>
        <div class="card-grid">
          ${recentWorkBlogs.map((blog) => Blog.render(blog)).join("")}
        </div>
        <div class="cta">
          <a href="/work">See all</a>
        </div>
      </div>
    `;


    // Section 4: Load more posts
    const loadMoreBtn = document.getElementById("load-more");
    let skip = 6;
    loadMoreBtn.addEventListener("click", async () => {
      const moreBlogs = await getBlogs(9, skip);
      const blogGrid = document.getElementById("blog-grid");
      blogGrid.insertAdjacentHTML(
        "beforeend",
        moreBlogs.map((blog) => Blog.render(blog)).join("")
      );
      skip += 9;
      if (moreBlogs.length === 0) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.innerText = "No more posts";
      }
    });
    

  }
};

export default HomeScreen;











