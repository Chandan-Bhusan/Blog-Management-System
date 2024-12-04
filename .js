

    let file = "http://127.0.0.1:8000/api/post_blog"
    fetch (file)
    .then(x => x.text())
    .then(y => document.getElementById("demo").innerHTML = y )

