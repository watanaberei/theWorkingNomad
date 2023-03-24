// src/components/Comments.js
import { getComments } from "../api.js";
import { parseRequestUrl } from "../utils.js";

const Comments = {
  render: (comments) => {
    return comments
      .map(
        (comment) => `
        <div class="comment">
          <div class="comment-author">${comment.author}</div>
          <div class="comment-date">${comment.date}</div>
          <div class="comment-text">${comment.text}</div>
        </div>
      `
      )
      .join("");
  },
  after_render: async () => {
    const request = parseRequestUrl();
    const slug = request.slug;
    const comments = await getComments(slug);
    document.querySelector(".comment-section").innerHTML = Comments.render(comments);
  },
};

export default Comments;





















// // src/components/Comments.js


// // import { contentfulClient } from '../config/contentful.js';
// import { getComments } from "../api.js";
// import { parseRequestUrl } from "../utils.js";

// const Comments = {
//   state: {
//     authorName: '',
//     authorNameIsSet: false,
//   },

//   render: () => {
//     return `
//       <form id="authorForm">
//         <label for="authorName">Author name:</label>
//         <input type="text" id="authorName">
//         <button type="submit">Submit</button>
//       </form>
//       <div id="commentBox" style="display: none;">
//         <!-- The comment box will be displayed here -->
//       </div>
//     `;
//   },

//   after_render: () => {
//     const authorForm = document.getElementById('authorForm');
//     const authorNameInput = document.getElementById('authorName');
//     const commentBox = document.getElementById('commentBox');

//     authorForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const authorName = authorNameInput.value;

//       if (authorName) {
//         authorForm.style.display = 'none';
//         commentBox.style.display = 'block';

//         // Fetch and display comments using Contentful
//         Comments.fetchComments(authorName);
//       }
//     });
//   },

//   fetchComments: (authorName) => {
//     contentfulClient
//       .getEntries({
//         content_type: 'comment',
//         'fields.authorName': authorName,
//       })
//       .then((response) => {
//         const comments = response.items.map((item) => item.fields);
//         Comments.displayComments(comments);
//       })
//       .catch((error) => {
//         console.error('Error fetching comments:', error);
//       });
//   },

//   displayComments: (comments) => {
//     const commentBox = document.getElementById('commentBox');
//     comments.forEach((comment) => {
//       const commentElement = document.createElement('div');
//       commentElement.classList.add('comment');
//       commentElement.innerHTML = `
//           <h3>${comment.authorName}</h3>
//           <p>${comment.text}</p>
//       `;
//       commentBox.appendChild(commentElement);
//     });
//   },
// };

// export default Comments;











// // src/components/Comments.js
// export function initComments(spaceId, accessToken) {
//     const contentfulClient = contentful.createClient({
//         space: spaceId,
//         accessToken: accessToken
//     });

//     document.addEventListener('DOMContentLoaded', () => {
//         const authorForm = document.getElementById('authorForm');
//         const authorNameInput = document.getElementById('authorName');
//         const commentBox = document.getElementById('commentBox');

//         authorForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const authorName = authorNameInput.value;

//             if (authorName) {
//                 authorForm.style.display = 'none';
//                 commentBox.style.display = 'block';

//                 // Fetch and display comments using Contentful
//                 fetchComments(authorName);
//             }
//         });
//     });

//     function fetchComments(authorName) {
//         contentfulClient.getEntries({
//             content_type: 'comment',
//             'fields.authorName': authorName
//         })
//         .then((response) => {
//             const comments = response.items.map((item) => item.fields);
//             displayComments(comments);
//         })
//         .catch((error) => {
//             console.error('Error fetching comments:', error);
//         });
//     }

//     function displayComments(comments) {
//         const commentBox = document.getElementById('commentBox');
//         comments.forEach((comment) => {
//             const commentElement = document.createElement('div');
//             commentElement.classList.add('comment');
//             commentElement.innerHTML = `
//                 <h3>${comment.authorName}</h3>
//                 <p>${comment.text}</p>
//             `;
//             commentBox.appendChild(commentElement);
//         });
//     }
// }