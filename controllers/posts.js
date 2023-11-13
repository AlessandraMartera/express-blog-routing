// collego il json dei posts dentro la carte db a post.js

const posts = require("../db/db.js");

// prova di collegamento
// posts.forEach(post => console.log(post));

module.exports.index = function(req, res) {
    /*
    const html = [];
    html.push("<ul>")
    for (const post of posts){
        // html.push(post.name);
        html.push(`<li>${post.titolo}</li>`);
    }
    html.push("</ul>")
    res.send(html); */

    res.format({
        html: () => {
            const html = [];
            html.push("<ul>");

            for (const post of posts) {
                html.push(`<li>
                <h1>${post.title}</h1>
                <img style="width: 250px;" src="/posts/${post.image}">
                <p>${post.content}</p>
                <ul>
                    <li>${post.tags.join(", ")}</li>
                </ul>
                </li>`);
            }

            html.push("</ul>");
            res.send(html.join(""));
        },
        json: () => {
            res.send(posts);
        }
    })
   
}