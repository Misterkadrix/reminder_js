// on reprends une parti du code des conditions et on va scale notre programme.
// Sauf que maintenant on veut savoir si il a bien passe son annee moyennement passe ou bien rate moyennement voir rate completement.
// On rajoute un nouveau cours cette sauf que les donnees de celle ci ne sont pas encore rentrees.
let cours_physique;
let cours_math = '25%';
let cours_francais = '50%';
let cours_anglais = '60%';
let cours_reussis = 0;
let cours_rates = 0;

cours_math = parseInt(cours_math.substring(2,0))
cours_francais = parseInt(cours_francais.substring(2,0))
cours_math = parseInt(cours_anglais.substring(2,0))
// Ici on demande a l'utilisateur du programme d'entrer une valeur  
// on ne va pas verifier si la valeur rentrer est correcte.
cours_physique = prompt();

// on regarde de quel type est la variable prompt.
console.log(typeof cours_physique);

// on remarque que celle ci est un string car elle est faire pour retourner des strings.
// pour eviter ceci on va re affecter cette variable grace a parseInt pour la transformer en entier.
cours_physique = parseInt(cours_physique);
console.log(typeof cours_physique);
// OK. la variable est un devenu un number on peut continuer

//on reverife si chaque cours est ok 
if (cours_math >= 50) {
    cours_reussis++;
} else {
    cours_rates++;
}
if (cours_francais >= 50) {
    cours_reussis++;
} else {
    cours_rates++;
}
if (cours_anglais >= 50) {
    cours_reussis++;
} else {
    cours_rates++;
}
// On rajoute le cours de PHYSIQUE.
if (cours_physique >= 50) {
    cours_reussis++;
} else {
    cours_rates++;
}

// A la fin je log pour voir le nombre de cours reussis/rates
console.log(`J'ai reussi ${cours_reussis} cours`);
console.log(`J'ai rate ${cours_rates} cours`);

// Mais mon programme ne me dis pas si j'ai reussi ou rate.
// ici je vais utiliser un switch pour essayer de voir tout les cas possibles.

switch (true) {
    case cours_reussis==0 && cours_rates==4:
        console.log(`Doit repasser son annee il a ${cours_rates} echecs`);
        break;
    case cours_reussis==1 && cours_rates==3:
        console.log(`Doit repasser son annee il a ${cours_rates} echecs et ${cours_reussis} reusssis`);
        break;
    case cours_reussis==2 && cours_rates==2:
        console.log(`Il reussit moyennement avec ${cours_reussis} cours reussis. Cependant, il doit repasser ${cours_rates} cours cet ete`);
        break;
    case cours_reussis==3 && cours_rates==1:
        console.log(`il reussit son annee avec ${cours_reussis} cours reussis. Cependant, il doit repasser ${cours_rates} cours cet ete`);
        break;
    case cours_reussis==4 && cours_rates==0:
        console.log(`il reussit son annee avec ${cours_reussis} cours reussis avec ${cours_rates} echecs`);
        break;
    default:
        console.log(`Appelez le technicien.`);
        break;
}

//programme switch finis on passe au for pour eviter toute redondance.