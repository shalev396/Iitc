//get elements from document
const tablePosts = document.getElementById("tableposts");
//gets posts
let posts = [];
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
    //task 8
    console.log(response.data);
    posts = response.data;
    //activate render table//task 9
    tableQuestionsContractor();
  })
  .catch(function (error) {
    console.error(error);
  });

//render table
function tableQuestionsContractor() {
  const tempPosts = posts;
  const table = tablePosts;

  for (let i = 0; i < tempPosts.length; i++) {
    const row = document.createElement("tr");
    //id
    const id = document.createElement("td");
    id.textContent = tempPosts[i]._id;
    row.appendChild(id);
    //title
    const title = document.createElement("td");
    title.textContent = tempPosts[i].title;
    row.appendChild(title);
    //content
    const content = document.createElement("td");
    content.textContent = tempPosts[i].content;
    row.appendChild(content);
    //date
    const date = document.createElement("td");
    date.textContent = tempPosts[i].date;
    row.appendChild(date);
    table.appendChild(row);
  }
}
