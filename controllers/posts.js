// collego il json dei posts dentro la carte db a post.js
const posts = require("../db/db.js");


// INDEx
module.exports.index = function(req, res) {
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

// SHOW
module.exports.show = function(req, res) {
  
   const postSlug = req.params.slug;

// creo una nuova costante in cui mettere il json che mi serve
// prendo l'array principale e vedo se è presente uno slug ugale a quello che sto cercando
// quando lo trovo lo metto dentro alla costante appena creata

   const post = posts.find(post => post.slug === postSlug);

// controllo se effettivamente estiste il json che ho appena cercato 
   if(post){
    res.json(post);
   } else{
    res.status(404).send(`<h1 style="text-align: center;"> il post relativo a ${postSlug} non è stato trovato </h1>`)
   }
  
    // res.send('<h1> Dettagli del posto relativo a: ' + post.slug + '</h1>');

    
}

// function findOrFail(req, res) {
//     // recupero l'id dalla richiesta
//     const slugPost = req.params.slug;
   
//     // recupero la pizza dal menu
//     const post = menu.find((post) => post.slug == slugPost);
  
//     // Nel caso in cui non sia stata trovata la post ritorno un 404
//     if (!post) {
//       res.status(404).send(`post con id ${slugPost} non trovata`);
//       return; // interrompo l'esecuzione della funzione
//     }
  
//     return post;
//   }