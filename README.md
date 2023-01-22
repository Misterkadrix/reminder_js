# Reminder JS.

## Ici se trouve un resume de tout ce qu'on a vu theoriquement en JS avec des cas pratiques.

Avant de commencer je vous invite personnelemment a repasser par le notion "revision js".

Vos meilleurs allies durant tout JS sera console.log et typeOf.
L'un pour afficher ce que vous faites et l'autre pour connaitre le type (on reviendra sur les types plus tard) que vous affichez.
====
# les variables

```
// declaration d'une variable et assignation de celle-ci.
// creation d'une variable const (constante) permet d'empecher de re assigner cette variable et aussi de la re declarer  

const nom = "sa";
const prenom = "kadri";

// creation d'une variable let, celle-ci et cependant tout a fait re assignable et peut etre redeclarer.
// ici je declare et assigne une variable
let age = 24;
// et ici je re assigne cette meme variable
age = 25;

// ceci est une variable avec plusieurs variable.
let identite = nom + ' ' + prenom + ' a ' + age;
console.log (identite);

let somme1 = 20;
let somme2 = 10;
// addition de 2 variables de type number.
let total = somme1 + somme2;
// affichage de celle-ci on va garder cette facon de log par faciliter.
console.log(`${somme1} + ${somme2} + ${total}`);

```
====

# les types de variables

c'est ce qui va permettre de mieux comprendre ce que notre code va retourner et du coup mieux comprendre prq il peut
y avoir des bugs si on utilise une fonction qui attends un string mais qu'on lui donne en parametre tout autre type.

```
// TYPE DE VARIABLES

// Type de String

let phrase = "Ceci est une variable de type String";
console.log(typeof phrase);

// Type nombre

let annee = 2023;
console.log(typeof annee);

// Type boolean

let vrai = true;
let faux = false;
let resultat = 8>4; // renvoi une reponse true ou false
console.log(typeof vrai);
console.log(typeof faux);
console.log(typeof resultat);

// Type object

let object = {};
console.log(typeof object);

// Type undefined & null
let vide;
console.log(vide); //renvoi undefined
console.log(typeof vide);

let rien = null;
console.log(rien);
console.log(typeof rien); //renvoi un type Object

```
# Les comparateurs

```
// == / === égalité
// != / !== différence

// 9 > 5 == 9 plus grand que 5 / < plus petit que
// >= plus grand ou égal à / <= plus petit ou égal à

// || == OR == "ou"
// true || true == true
// true || false == true
// false || true == true
// false || false == false

// ^ == XOR == "ou exclusif"
// true ^ true == false
// true ^ false == true
// false ^ true == true
// false ^ false == false

// && == AND == "et"
// true && true == true
// true && false == false
// false && true == false
// false && false == false

// ! == NOT == "non" -> le contraire de
// !true == false
// !false == true
```


# CONDITION

```
// La condition if.
// La condition if est l’une des conditions les plus utilisées. Elle va nous permettre d’exécuter un bloc de code si et seulement si le résultat d’un test vaut true.

if(condition){
    //instructions
}

// pour pouvoir rentrer dans le if il faut que la condition soit vrai (true).

let age = 25;

// ici je demande a l'ordinateur de verifier si age (la variable) est plus grand ou egale a 25. Si c'est le cas alors il me retourne true sinon il ne lis meme la condition. Du coup il rentre, dans la condition et j'applique les instructions.
if(age>=25){
    // la j incremente de 1 en gros je rajoute 1 a ma variable, ce qui va me donner 26 et non 261 car c'est un number et pas un string.
    age++;
}

```

