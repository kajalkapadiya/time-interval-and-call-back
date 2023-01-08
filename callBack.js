const posts = [
    { title: "post one", body: "this is a post one", createdAt: new Date().getTime()},
    { title: "post two", body: "this is a post two", createdAt: new Date().getTime()}
]

let intervalId = 0;

function getPost() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
            let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} last updated ${(new Date().getTime() - post.createdAt)/1000} second ago</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
}

getPost();

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 2000)
}
createPost({ title: "post three", body: "this is a post three"} , getPost);

function create4thPost(post, callback0){
    setTimeout(( ) => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback0();
    }, 6000)
}
createPost({ title: "post four", body: "this is a post four"} , getPost);
