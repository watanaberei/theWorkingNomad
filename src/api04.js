







// import { createClient } from "contentful";
// CONTENTFUL_BLOG_ARTICLE_ID_20231903 = i1hcb4885ci0;
// CONTENTFUL_BLOG_ARTICLE_TOKEN_20231903 = Bcy-B6Lvepv3RLYinX-rY9x4KDpxJcv8_IH0PgF6odw;

// const client = createClient({
//   space: "i1hcb4885ci0",
//   accessToken: "Bcy-B6Lvepv3RLYinX-rY9x4KDpxJcv8_IH0PgF6odw",
// });

// export const getBlogs = async (limit = 6, skip = 0) => {
//   try {
//     // Pagination
//     const response = await client.getEntries({
//       content_type: "appFastFoodHomePage031523",
//       limit,
//       skip,
//     });
//     console.log(response);  
//     let blogs = response.items;
//     blogs = blogs.map((item) => {
//       const { id, createdAt } = item.sys;
//       const { header, title, slug, authorName, category } = item.fields;
//       const thumbnail = item.fields.thumbnail.fields.file.url;
//       const authorImage = item.fields.authorImage.fields.file.url;
//       return {
//         id,
//         title,
//         thumbnail,
//         slug,
//         authorName,
//         authorImage,
//         createdAt,
//         category,
//       };
//     });
//     return blogs;
//   } catch (err) {
//     console.log(err);
//   }
// };


import { createClient } from "contentful";

const CONTENTFUL_SPACE_ID = "your_space_id";
const CONTENTFUL_ACCESS_TOKEN = "your_access_token";

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export const getBlogs = async (category, limit = 6, skip = 0) => {
  try {
    const response = await client.getEntries({
      content_type: "appFastFoodHomePage031523",
      "fields.category": category, // Add category filter to the query
      limit,
      skip,
    });
    console.log(response);  
    let blogs = response.items;
    blogs = blogs.map((item) => {
      const { id, createdAt } = item.sys;
      const { header, title, slug, authorName } = item.fields;
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
        featuredImage,
        details,
        authorName,
        createdAt,
        category,
      };
    });
    return blogdetails;
  } catch (err) {
    console.log(err);
  }
};
