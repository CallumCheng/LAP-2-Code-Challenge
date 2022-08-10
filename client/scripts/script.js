const form = document.getElementById('form');

//May need to change root URL
const rootUrl = 'http://localhost:3000/results';

form.addEventListener('submit', newPost, sendPostToServer);

function newPost(e) {

    e.preventDefault();
    const title = document.getElementById('post-title')
        console.log(title.value)
    const name = document.getElementById('post-name')
        console.log(name.value)
    const content = document.getElementById('post-content')
        console.log(content.value)


}git 

function sendPostToServer(form) {
    fetch(rootUrl,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form)
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
}


//Grab post from API URL
fetch(rootUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err));
