// Ce code sera optimise au fur et a mesure
// Le but de ce programme est de connaitre chaque valeur de tout les cours.

// on a rajoute des cours sans valeur de base.
let cours_math;
let cours_francais;
let cours_anglais;
let cours_physique;
let cours_science;
let cours_bio;

let cours_reussis = 0;
let cours_rates = 0;

let tableau_cours = [cours_bio,cours_francais,cours_math,cours_physique,cours_science];

//mauvaise facon de faire.
// tableau_cours.forEach(element => {
//     console.log(element);
//     element = prompt(`Quel note l'eleve as t il recu pour ${element}`);
// });

// on est face a 2 problemes ici le fait de demander sans savoir a quels cours on a affaire.
// et la non verification de ce qui passe dans le prompt deja le simple fait que ce soit un string cause probleme.
    // for (let i = 0; i < tableau_cours.length; i++) {
    //     tableau_cours[i]=prompt(`Quel note l'eleve as t il recu ?`);
    //     console.log(tableau_cours[i]);
    // }

// pour ce faire je vais creer un autre tableau avec chaque nom de cours.
let tableau_nom_cours = ["bio","francais","math","physique","science"];
let tableau_cours_note = [];

// ici je vais parcourir tout mon tableau_nom_cours afficher le nom du cours et mettre chaque note approprie a celui-ci.
for (let i = 0; i < tableau_nom_cours.length; i++) {
    let note_cours= parseInt(prompt(`Veuillez rentrer la note du cours ${tableau_nom_cours[i]} ?`));
    //avant de push quoi que ce soit il faut verifier ce que l'utilisateur a rentre.
    //on va utiliser le while et non le do while car l'action du prompt a deja ete faite.
    // je verifie si la note est plus petite que 0 OU plus grande que 100.
    while (note_cours < 0 || note_cours > 100 ) {
        note_cours = prompt(`Veuillez rentrer une note entre 0 et 100 pour le cours ${tableau_nom_cours[i]}`);
    }
    tableau_cours_note.push(note_cours);
}
// ici j'essaie de log note_cours sauf que cette variable n'existe que dans ma boucle.
// console.log(note_cours);

// verifier les cours nombre de cours reussis et rate.

// si on compare au code d'avant on remarque qu'on se trouve avec moins de ligne de code car on la demande.
for (let i = 0; i < tableau_cours_note.length; i++) {
    if (tableau_cours_note[i]>=50) {
        cours_reussis++;
    }else{
        cours_rates++;
    }
}

// A la fin je log pour voir le nombre de cours reussis/rates
console.log(`J'ai reussi ${cours_reussis} cours`);
console.log(`J'ai rate ${cours_rates} cours`);

switch (true) {
    case cours_reussis==0 && cours_rates==5:
        console.log(`Doit repasser son annee il a ${cours_rates} echecs`);
        break;
    case cours_reussis==1 && cours_rates==4:
        console.log(`Doit repasser son annee il a ${cours_rates} echecs et ${cours_reussis} reusssis`);
        break;
    case cours_reussis==2 && cours_rates==3:
        console.log(`Il rate moyennement avec ${cours_reussis} cours reussis. Cependant, il doit repasser ${cours_rates} cours cet ete`);
        break;
    case cours_reussis==3 && cours_rates==2:
        console.log(`Il reussit moyennement avec ${cours_reussis} cours reussis. Cependant, il doit repasser ${cours_rates} cours cet ete`);
        break;
    case cours_reussis==4 && cours_rates==1:
        console.log(`il reussit son annee avec ${cours_reussis} cours reussis. Cependant, il doit repasser ${cours_rates} cours cet ete`);
        break;
    case cours_reussis==5 && cours_rates==0:
        console.log(`il reussit son annee avec ${cours_reussis} cours reussis avec ${cours_rates} echecs`);
        break;
    default:
        console.log(`Appelez le technicien.`);
        break;
}

// On est tous d'accord de ce dire que le switch est tres peu scalable si dans le futur
// je rajoute d'autre classe avec des cours differents on verra comment le scale.