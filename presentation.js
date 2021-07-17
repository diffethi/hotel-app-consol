// récupération du module `readline`
var readline = require('readline');

// creation de l'objet reader pour recuperer la saisie de l'utilisateur
var reader =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var reponse="";

function start(){
    console.log("1. Lister les clients")
    console.log("99. SORTIR")
}
//recuperation de la saisie de utilisateur
function choix(){
    reader.question('choix option',function(saisie){
        console.log('vous avez saisi: ${saisie}')
        if(saisie=="1"){
            console.log('liste des client')
        start();
        choix();
        }
        else if(saisie=="99"){
            console.log('bye')
            reader.close;

        }

    })
}

exports.start=start;
exports.menu=choix;