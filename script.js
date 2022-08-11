var dataBase={colaboradores:[
    {"pretitulo1":"dado11","pretitulo2":"dado21","pretitulo3":"dado31"},
    {"pretitulo1":"dado12","pretitulo2":"dado22","pretitulo3":"dado32"},
    {"pretitulo1":"dado13","pretitulo2":"dado23","pretitulo3":"dado33"},
    {"pretitulo1":"dado14","pretitulo2":"dado24","pretitulo3":"dado34"},
    {"pretitulo1":"dado15","pretitulo2":"dado25","pretitulo3":"dado35"},
    {"pretitulo1":"dado16","pretitulo2":"dado26","pretitulo3":"dado36"},]}
console.log(dataBase)
var titulo="algo"
dataBase.colaboradores.forEach(function (dados){
    document.body.innerHTML+=`<p class="teste"> algo:${dados.pretitulo1}-${dados.pretitulo2}-${dados.pretitulo3}</p>`;
    console.log(dados)
})

var dataBase1={colaboradores:[
    {"pretitulo1":"dado16","pretitulo2":"dado21","pretitulo3":"dado31"},
    {"pretitulo1":"dado12","pretitulo2":"dado22","pretitulo3":"dado32"},
    {"pretitulo1":"dado13","pretitulo2":"dado23","pretitulo3":"dado33"},
    {"pretitulo1":"dado14","pretitulo2":"dado24","pretitulo3":"dado34"},
    {"pretitulo1":"dado15","pretitulo2":"dado25","pretitulo3":"dado35"},
    {"pretitulo1":"dado16","pretitulo2":"dado26","pretitulo3":"dado36"},]}
    
dataBase1.colaboradores.forEach(function (dados){
    document.body.innerHTML+=`<div class="container">
    <div class="course">
        <div class="preview">
            <h6>BOOK 1</h6>
            <h2>UNIT 1</h2>
            <a href="#">
                home
            </a>
        </div>
        <div class="info">
            <div class="progress-wrapper">
                <div class="progress">
                </div>
                    <span class="progress-text">
                        1/4
                    PROGRESS</span>
                
            </div>
                <h6>${titulo}</h6>
                <h2>Conversation</h2>
                <P>
                    
                </P>
            <button class="btn">Next</button>
        </div>
    </div>
</div>`;
    console.log(dados)
})
