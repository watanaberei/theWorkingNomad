// import { createClient } from "contentful";

// const CONTENTFUL_SPACE_ID = "i1hcb4885ci0";
// const CONTENTFUL_ACCESS_TOKEN = "Bcy-B6Lvepv3RLYinX-rY9x4KDpxJcv8_IH0PgF6odw";
// const client = createClient({
//   space: CONTENTFUL_SPACE_ID,
//   accessToken: CONTENTFUL_ACCESS_TOKEN,
// });




import { createClient } from "contentful";

const client = createClient({
  space: "i1hcb4885ci0",
  accessToken: "Bcy-B6Lvepv3RLYinX-rY9x4KDpxJcv8_IH0PgF6odw",
});



export const getBlogs = async (limit = 6, skip = 0) => {
  try {
    // Pagination
    const response = await client.getEntries({
      content_type: "appFastFoodHomePage031523",
      limit,
      skip,
    });
    console.log(response);  
    let blogs = response.items;
    blogs = blogs.map((item) => {
      const { id, createdAt } = item.sys;
      const { header, title, slug, authorName, category, views } = item.fields; 
      const thumbnail = item.fields.thumbnail.fields.file.url;
      const authorImage = item.fields.authorImage.fields.file.url;
      return {
        id,
        title,
        thumbnail,
        slug,
        authorName,
        authorImage,
        createdAt,
        category,
        views,
      };
    });
    return blogs;
  } catch (err) {
    console.log(err);
    throw err; // re-throw the error to the caller
  }
};



export const getBlog = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "appFastFoodHomePage031523",
      "fields.slug": slug,
    });
    let blogdetails = response.items;
    blogdetails = blogdetails.map((item) => {
      const { id, createdAt } = item.sys;
      const { title, authorName, category } = item.fields;
      const details = item.fields.details;
      const featuredImage = item.fields.featuredImage.fields.file.url;
      return {
        id,
        title,
        thumbnail,
        slug,
        authorName,
        authorImage,
        createdAt,
        category,
        views,
      };
    });
    return blogdetails;
  } catch (err) {
    console.log(err);
    throw err; // re-throw the error to the caller
  }
};



export const getLatestBlog = async () => {
  try {
    const response = await client.getEntries({
      content_type: "appFastFoodHomePage031523",
      order: "-sys.createdAt", // Order by creation date, newest first
      limit: 1,
    });
    let latestBlog = response.items;
    latestBlog = latestBlog.map((item) => {
      const { id, createdAt } = item.sys;
      const { header, title, slug, authorName, category, views } = item.fields; 
      const thumbnail = item.fields.thumbnail.fields.file.url;
      const authorImage = item.fields.authorImage.fields.file.url;
      return {
        id,
        title,
        thumbnail,
        slug,
        authorName,
        authorImage,
        createdAt,
        category,
        views,
      };
    });
    return latestBlog;
  } catch (err) {
    console.log(err);
    throw err; // re-throw the error to the caller
  }
};



export const getBlogsByCategory = async (category) => {
  try {
    const response = await client.getEntries({
      content_type: "appFastFoodHomePage031523",
      "fields.category": category,
      order: "-sys.createdAt",
      limit: 6,
    });
    let blogs = response.items;
    blogs = blogs.map((item) => {
      const { id, createdAt } = item.sys;
      const { header, title, slug, authorName, category } = item.fields;
      const thumbnail = item.fields.thumbnail.fields.file.url;
      const authorImage = item.fields.authorImage.fields.file.url;
      return {
        id,
        title,
        thumbnail,
        slug,
        authorName,
        authorImage,
        createdAt,
        category,
      };
    });
    return blogs;
  } catch (err) {
    console.log(err);
    throw err; // re-throw the error to the caller
  }
};



export const getTopBlogsByCategory = async (category, limit) => {
  try {
    const response = await client.getEntries({
      content_type: "appFastFoodHomePage031523",
      "fields.category": category,
      order: "-fields.views",
      limit: limit,
    });
    let topBlogs = response.items;
    topBlogs = topBlogs.map((item) => {
      const { id, createdAt } = item.sys;
      const { header, title, slug, authorName, category, views } = item.fields;
      const thumbnail = item.fields.thumbnail.fields.file.url;
      return {
        id,
        title,
        thumbnail,
        slug,
        authorName,
        createdAt,
        category,
        views,
      };
    });
    return topBlogs;
  } catch (err) {
    console.log(err);
    throw err; // re-throw the error to the caller
  }
};



export const getRecentWork = async () => {
  try {
    const response = await client.getEntries({
      content_type: "your_content_type",
      order: "-sys.createdAt",
      limit: 3,
    });
    let recentWork = response.items;
    recentWork = recentWork.map((item) => {
      const { id, createdAt } = item.sys;
      const { title, slug, category } = item.fields;
      const thumbnail = item.fields.thumbnail.fields.file.url;
      return {
        id,
        title,
        thumbnail,
        slug,
        createdAt,
        category,
      };
    });
    return recentWork;
  } catch (err) {
    console.log(err);
    throw err;
  }
};





