console.log('active')

function displayPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postsShow(data))
}

function postsShow(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post);
        const postsDiv = document.createElement('div');
        postsDiv.classList.add('post')
        postsDiv.innerHTML = `
        
        <h3>User-${post.userId}</h3>
        <h5>Post-title:${post.title}</h5>
        <p>Post-Description:${post.body}</p>
    
        `;
        postContainer.appendChild(postsDiv)
    }
}

displayPosts()