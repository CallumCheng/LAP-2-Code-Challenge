const getFormData = () => {
  const title = document.getElementById("post-title").value;
  const author = document.getElementById("post-name").value;
  const post = document.getElementById("post-content").value;

  const formData = { title, author, post };
  return formData;
};

async function requestThoughtById(id) {
  const endpoint = new URL(`http://localhost:3000/thought/${id}`);
  const response = await fetch(endpoint);
  const thoughtData = await response.json();

  return thoughtData;
}
// update page content with thoughtData

const publishOnClick = async (e) => {
  const data = getFormData();
  const endpoint = new URL("http://localhost:3000/thought");
  const options = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    body: JSON.stringify(data),
  };

  const response = await fetch(endpoint, options);
  const resData = await response.json();

  // get current date of post
  const date = new Date(Date.now())
    .toLocaleString()
    .split(",")[0]
    .replaceAll("/", "_");

  // change hash to date
  window.location.hash = date;

  return resData;
};

window.addEventListener("hashchange", () => {
  let hash = window.location.hash.substring(1);
  requestThoughtById(hash);
});
