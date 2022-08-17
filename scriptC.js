// var dataBase={colaboradores:[
//     {"pretitulo1":"dado11","pretitulo2":"dado21","pretitulo3":"dado31"},
//     {"pretitulo1":"dado12","pretitulo2":"dado22","pretitulo3":"dado32"},
//     {"pretitulo1":"dado13","pretitulo2":"dado23","pretitulo3":"dado33"},
//     {"pretitulo1":"dado14","pretitulo2":"dado24","pretitulo3":"dado34"},
//     {"pretitulo1":"dado15","pretitulo2":"dado25","pretitulo3":"dado35"},
//     {"pretitulo1":"dado16","pretitulo2":"dado26","pretitulo3":"dado36"},]}
// // console.log(dataBase)
// var titulo="algo"
// dataBase.colaboradores.forEach(function (dados){
//     document.body.innerHTML+=`<p class="teste"> algo:${dados.pretitulo1}-${dados.pretitulo2}-${dados.pretitulo3}</p>`;
//     // console.log(dados)
// })
fetch("db.json")
    .then(response=>response.json())
    .then(data=>{
    
    data.posts.forEach(function (dados){
       
        console.log(dados.comments)
        document.body.innerHTML+=`<h1>começo</h1>`;
        dados.comments.forEach(function(dados){
            console.log(dados)
            document.body.innerHTML+=`<p class="teste"> algo:${dados.pretitulo1}-${dados.pretitulo2}-${dados.pretitulo3}</p>`;
        })
        document.body.innerHTML+=`<h1>Fim</h1>`;
    })
});


// dataBase.colaboradores.forEach(function (dados){
//     document.body.innerHTML+=`<p class="teste"> algo:${dados.pretitulo1}-${dados.pretitulo2}-${dados.pretitulo3}</p>`;
//     // console.log(dados)
// })

// var dataBase1={colaboradores:[
//     {"pretitulo1":"dado16","pretitulo2":"dado21","pretitulo3":"dado31"},
//     {"pretitulo1":"dado12","pretitulo2":"dado22","pretitulo3":"dado32"},
//     {"pretitulo1":"dado13","pretitulo2":"dado23","pretitulo3":"dado33"},
//     {"pretitulo1":"dado14","pretitulo2":"dado24","pretitulo3":"dado34"},
//     {"pretitulo1":"dado15","pretitulo2":"dado25","pretitulo3":"dado35"},
//     {"pretitulo1":"dado16","pretitulo2":"dado26","pretitulo3":"dado36"},]}
    
   
// var valorrecebe
// dataBase1.colaboradores.forEach(function (dados){
    
    
//     fetch("db.json")
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data.posts)
//     });
    
//     document.body.innerHTML+=`${dados.pretitulo1} `
//     document.body.innerHTML+=`${valorrecebe} `
//     document.body.innerHTML+=`<h1>teste</h1>`
       
    
//     // console.log(dados)
// })


// // fetch("db.json")
// //     .then(response=>response.json())
// //     .then(data=>{
// //         console.log(data.posts)
// //         document.body.innerHTML+=`${data.posts[0].author}`;
// //     })
