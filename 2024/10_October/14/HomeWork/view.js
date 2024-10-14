// Elements
const tablePosts = document.getElementById("tableposts");
const fetchPostButton = document.getElementById("fetchPostButton");
const singlePostDiv = document.getElementById("singlePost");
const createPostForm = document.getElementById("createPostForm");
const createPostMessage = document.getElementById("createPostMessage");
const updatePostForm = document.getElementById("updatePostForm");
const updatePostMessage = document.getElementById("updatePostMessage");
const deletePostButton = document.getElementById("deletePostButton");
const deletePostMessage = document.getElementById("deletePostMessage");
const loadingIndicator = document.getElementById("loading");
const searchInput = document.getElementById("searchInput");
const sortButton = document.getElementById("sortButton");

// Posts Array
let posts = [];

// Fetch All Posts
const getAll = {
  method: "GET",
  url: "https://api-playground-ten.vercel.app/posts",
  params: {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
  },
};

axios
  .request(getAll)
  .then(function (response) {
    loadingIndicator.style.display = "none";
    posts = response.data;

    console.log(posts);

    renderPostsTable(posts);
  })
  .catch(function (error) {
    loadingIndicator.style.display = "none";
    console.error(error);
  });

function renderPostsTable(postsToRender) {
  tablePosts.innerHTML = `
    <tr>
      <th class="id">id</th>
      <th class="title">title</th>
      <th class="content">context</th>
      <th class="date">date</th>
    </tr>
  `;

  postsToRender.forEach((post) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${post._id}</td>
      <td>${post.title}</td>
      <td>${post.content}</td>
      <td>${post.date}</td>
    `;
    tablePosts.appendChild(row);
  });
}

fetchPostButton.addEventListener("click", () => {
  const postId = document.getElementById("postIdInput").value;
  if (!postId) {
    alert("Please enter a valid Post ID");
    return;
  }

  axios
    .get(`https://api-playground-ten.vercel.app/posts/${postId}`)
    .then(function (response) {
      const post = response.data;
      singlePostDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      `;
    })
    .catch(function (error) {
      console.error("Post not found", error);
      singlePostDiv.innerHTML = "<p>Post not found</p>";
    });
});

createPostForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newPostTitle = document.getElementById("newPostTitle").value;
  const newPostContent = document.getElementById("newPostContent").value;

  axios
    .post("https://api-playground-ten.vercel.app/posts", {
      title: newPostTitle,
      content: newPostContent,
    })
    .then(function (response) {
      createPostMessage.textContent = "Post created successfully!";
      createPostForm.reset();
    })
    .catch(function (error) {
      createPostMessage.textContent = "Error creating post";
      console.error(error);
    });
});

updatePostForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const updatePostId = document.getElementById("updatePostId").value;
  const updatePostTitle = document.getElementById("updatePostTitle").value;
  const updatePostContent = document.getElementById("updatePostContent").value;

  axios
    .patch(`https://api-playground-ten.vercel.app/posts/${updatePostId}`, {
      title: updatePostTitle,
      content: updatePostContent,
    })
    .then(function (response) {
      updatePostMessage.textContent = "Post updated successfully!";
      updatePostForm.reset();
    })
    .catch(function (error) {
      updatePostMessage.textContent = "Error updating post";
      console.error(error);
    });
});

deletePostButton.addEventListener("click", function () {
  const deletePostId = document.getElementById("deletePostId").value;

  axios
    .delete(`https://api-playground-ten.vercel.app/posts/${deletePostId}`)
    .then(function (response) {
      deletePostMessage.textContent = "Post deleted successfully!";
    })
    .catch(function (error) {
      deletePostMessage.textContent = "Error deleting post";
      console.error(error);
    });
});

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm)
  );
  renderPostsTable(filteredPosts);
});

sortButton.addEventListener("click", function () {
  posts.sort((a, b) => a.title.localeCompare(b.title));
  renderPostsTable(posts);
});

function renderLimitedPosts(limit = 5) {
  renderPostsTable(posts.slice(0, limit));

  const showMoreButton = document.createElement("button");
  showMoreButton.textContent = "Show More";
  document.body.appendChild(showMoreButton);

  showMoreButton.addEventListener("click", function () {
    const currentCount = document.querySelectorAll("#tableposts tr").length - 1;
    const nextPosts = posts.slice(currentCount, currentCount + 5);
    renderPostsTable(posts.slice(0, currentCount + 5));
    if (currentCount + nextPosts.length >= posts.length) {
      showMoreButton.remove();
    }
  });
}

renderLimitedPosts();
