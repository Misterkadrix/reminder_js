// Ce code sera optimise au fur et a mesure

let cours_math = '25%';
let cours_francais = '50%';
let cours_anglais = '60%';
let cours_reussis = 0;
let cours_rates = 0;


cours_math = parseInt(cours_math.substring(2,0))
cours_francais = parseInt(cours_francais.substring(2,0))
cours_math = parseInt(cours_anglais.substring(2,0))

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

console.log(`J'ai reussi ${cours_reussis} cours`);
console.log(`J'ai rate ${cours_rates} cours`);
