const form = document.getElementById('form');

const displayTitle = document.getElementsByClassName('display-title');
const displayName = document.getElementsByClassName('display-name');
const displayContent = document.getElementsByClassName('display-content');

form.addEventListener('submit', newPost)

function newPost(e) {
    e.preventDefault();
    //Grab post from API URL
    const url = '';
    
    fetch(url)
        .then 

    let title = document.getElementById('post-title')
        console.log(title.value)
    let name = document.getElementById('post-name')
        console.log(name.value)
    let content = document.getElementById('post-content')
        console.log(content.value)

        displayTitle.innerHTML = title.value
        displayName.innerHTML = name.value
        displayContent.innerHTML = content.value


    }
