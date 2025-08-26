const postListEl = document.querySelector('.post-list')

function onSearchChange(event) {
    console.log(event)
}

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    //fetches an api dynamically
    const postsData = await posts.json();

 postListEl.innerHTML = postsData.map(post => `
    <div class="post">
        <div class="post__title">
            ${post.title}
        </div>
        <p class="post__body">
            ${post.body}
        </p>
    </div>
 `).join('')
}

main()