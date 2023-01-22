// Ce code sera optimise au fur et a mesure
// Le but de ce programme sera de savoir combien de cours l'eleve a reussis.
// ici on cree les variables pour chaque cours on va se limiter a 3 pour l'instant.
let cours_math = '25%';
let cours_francais = '50%';
let cours_anglais = '60%';
let cours_reussis = 0;
let cours_rates = 0;


// Ok. Premier probleme on recoit un string avec % ce qui nous interesse pas(On veut un number).
// Pour se faire on utilise substring (permet de supprimer n'importe quel caractere) cette fonction attends 2 parametre
// Le premier parametre la ou on va commencer a suppriner le second la ou on va s'arreter.
// Ici j'ai besoin de supprimer a partir du 2 ieme caractere et pas plus (d'ou le 0).  
cours_math = parseInt(cours_math.substring(2,0))
cours_francais = parseInt(cours_francais.substring(2,0))
cours_math = parseInt(cours_anglais.substring(2,0))

// Maintenant on fais de la verification de note si j'ai plus de 50 au cours de math alors j'incremente cours reussis.
// et si ce n'est pas le cas alors on incremente cours rates.
if (cours_math >= 50) {
    cours_reussis++;
} else {
    cours_rates++;
}
// on fait de meme pour le cours de francais
if (cours_francais >= 50) {
    cours_reussis++;
} else {
    cours_rates++;
}
// et encore une fois pour le cours d'anglais.
if (cours_anglais >= 50) {
    cours_reussis++;
} else {
    cours_rates++;
}
// A la fin je log pour voir le nombre de cours reussis/rates
console.log(`J'ai reussi ${cours_reussis} cours`);
console.log(`J'ai rate ${cours_rates} cours`);

