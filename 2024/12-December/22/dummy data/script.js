const dummyPosts = Array.from({ length: 4294967295 }, (_, index) => ({
  //for fun set the length to MAX_VALUE, 100
  title: `Sample Blog Post ${index + 1}`,
  content: `This is the content for blog post ${
    index + 1
  }. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Post number ${
    index + 1
  } demonstrates how we can generate dummy content programmatically.`,
}));

document.getElementById("generateBtn").addEventListener("click", async () => {
  const statusDiv = document.getElementById("status");
  statusDiv.textContent = "Adding posts...";

  try {
    for (const post of dummyPosts) {
      await fetch("http://localhost:3000/posts", {
        //http://localhost:5000/api/posts
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
    }
    statusDiv.textContent = "Successfully added 100 posts!";
    statusDiv.style.color = "green";
  } catch (error) {
    statusDiv.textContent = "Error adding posts: " + error.message;
    statusDiv.style.color = "red";
  }
});
