let claphrase        = document.querySelector('.claphrase');
let cadreCoupRestant = document.querySelector('.cadreCoupRestant');
let coupRestant      = document.querySelector('.coupRestant');
let carre            = document.querySelector('.carre');
let mystere          = document.querySelector(".mystere");
let dejaTrouver      = document.querySelector(".dejaTrouver");
let rejouer          = document.querySelector(".rejouer");


liste =['imposteur',    'photographe',    'guerisseuse',    'manuscrite',    'pigeons',    'artichaut',
    'homard',    'nectarine',    'mandarine',    'champignon',    'kaki',    'moineau',    'grenouille',
    'lemurien',    'canari',    'carpe',    'perruche',    'langouste',    'sphere',    'parabole',
    'prisme',    'ellipse',    'trottinette',    'chariot',    'radeau',    'dirigeable',    'motoneige',
    'compartiment',    'suffoquer',    'augmenter',    'escargot',    'pectoral',    'imagination',
    'concave',    'tissage',    'turbulence',    'dispositif',    'contractuel',    'empaillage',
    'purificateur',    'phenix',    'cryptide',     'presentateur',   'veterinaire',     'militaire',
    'pompier',    'taxidermiste',     'courge',    'bambou',     'salsifi',   'courgette',     'wasabi',
    'poireau',   'nenuphar',   'telepathe',    'chimpanze',   'politesse',    'clochette',   'circuit',
    'horizon',    'explorer',    'aerogare',   'bicyclette',    'archeologie',   'jungle',   'azteque',
    'mesopotamie',   'litteralement',   'enervement',   'rejouissement'];

    
/************************************************************* */
let lettreProposee  ;     //clavier 3.js j


let leMotATrouver = document.querySelector('.leMotATrouver');
let dernier = 0;
let nombreAleatoire = 0;
let motDecompose;
let lettreTrouvee = 0;


    // Fonction permettant de générer un nombre aléatoire
    function genererNombreEntier(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function genererMot () {
        do{
            nombreAleatoire = genererNombreEntier(liste.length);}
        while(nombreAleatoire == dernier);
        //    leMotATrouver.textContent = liste[nombreAleatoire];//Le mot à trouver va s'afficher dans la class du même nom
            leMotATrouver = liste[nombreAleatoire];//Si j'enlève cette ligne, ça ne fonctionne pas et je ne sais même plus pourquoi
                console.log(leMotATrouver)
            motDecompose = [...leMotATrouver];// Ici, on décompose le mot
                console.log("le mot décomposé " + motDecompose + ". Il y a " + leMotATrouver.length + " lettres dans ce mot.");//j'affiche dans la console une petite phrase avec le mot décomposé 
            dernier = nombreAleatoire;
        return//
    }
    genererMot ()

//console.log(motDecompose);// Affiche le mot décomposé dans la console avec les crochets
/**************************************************************************************************************** */
// Voici le clavier virtuel
let a = document.querySelector('.a');a.addEventListener('click', ()=> {lettreProposee = "a"; verifions(lettreProposee); console.log(lettreProposee); a.remove()} )
let z = document.querySelector('.z');z.addEventListener('click', ()=> {lettreProposee = "z"; verifions(lettreProposee); console.log(lettreProposee); z.remove()} )
let e = document.querySelector('.e');e.addEventListener('click', ()=> {lettreProposee = "e"; verifions(lettreProposee); console.log(lettreProposee); e.remove()} )
let r = document.querySelector('.r');r.addEventListener('click', ()=> {lettreProposee = "r"; verifions(lettreProposee); console.log(lettreProposee); r.remove()} )
let t = document.querySelector('.t');t.addEventListener('click', ()=> {lettreProposee = "t"; verifions(lettreProposee); console.log(lettreProposee); t.remove()} )
let y = document.querySelector('.y');y.addEventListener('click', ()=> {lettreProposee = "y"; verifions(lettreProposee); console.log(lettreProposee); y.remove()} )
let u = document.querySelector('.u');u.addEventListener('click', ()=> {lettreProposee = "u"; verifions(lettreProposee); console.log(lettreProposee); u.remove()} )
let i = document.querySelector('.i');i.addEventListener('click', ()=> {lettreProposee = "i"; verifions(lettreProposee); console.log(lettreProposee); i.remove()} )
let o = document.querySelector('.o');o.addEventListener('click', ()=> {lettreProposee = "o"; verifions(lettreProposee); console.log(lettreProposee); o.remove()} )
let p = document.querySelector('.p');p.addEventListener('click', ()=> {lettreProposee = "p"; verifions(lettreProposee); console.log(lettreProposee); p.remove()} )

let q = document.querySelector('.q');q.addEventListener('click', ()=> {lettreProposee = "q"; verifions(lettreProposee); console.log(lettreProposee); q.remove()} )
let s = document.querySelector('.s');s.addEventListener('click', ()=> {lettreProposee = "s"; verifions(lettreProposee); console.log(lettreProposee); s.remove()} )
let d = document.querySelector('.d');d.addEventListener('click', ()=> {lettreProposee = "d"; verifions(lettreProposee); console.log(lettreProposee); d.remove()} )
let f = document.querySelector('.f');f.addEventListener('click', ()=> {lettreProposee = "f"; verifions(lettreProposee); console.log(lettreProposee); f.remove()} )
let g = document.querySelector('.g');g.addEventListener('click', ()=> {lettreProposee = "g"; verifions(lettreProposee); console.log(lettreProposee); g.remove()} )
let h = document.querySelector('.h');h.addEventListener('click', ()=> {lettreProposee = "h"; verifions(lettreProposee); console.log(lettreProposee); h.remove()} )
let j = document.querySelector('.j');j.addEventListener('click', ()=> {lettreProposee = "j"; verifions(lettreProposee); console.log(lettreProposee); j.remove()} )
let k = document.querySelector('.k');k.addEventListener('click', ()=> {lettreProposee = "k"; verifions(lettreProposee); console.log(lettreProposee); k.remove()} )
let l = document.querySelector('.l');l.addEventListener('click', ()=> {lettreProposee = "l"; verifions(lettreProposee); console.log(lettreProposee); l.remove()} )
let m = document.querySelector('.m');m.addEventListener('click', ()=> {lettreProposee = "m"; verifions(lettreProposee); console.log(lettreProposee); m.remove()} )

let w = document.querySelector('.w');w.addEventListener('click', ()=> {lettreProposee = "w"; verifions(lettreProposee); console.log(lettreProposee); w.remove()} )
let x = document.querySelector('.x');x.addEventListener('click', ()=> {lettreProposee = "x"; verifions(lettreProposee); console.log(lettreProposee); x.remove()} )
let c = document.querySelector('.c');c.addEventListener('click', ()=> {lettreProposee = "c"; verifions(lettreProposee); console.log(lettreProposee); c.remove()} )
let v = document.querySelector('.v');v.addEventListener('click', ()=> {lettreProposee = "v"; verifions(lettreProposee); console.log(lettreProposee); v.remove()} )
let b = document.querySelector('.b');b.addEventListener('click', ()=> {lettreProposee = "b"; verifions(lettreProposee); console.log(lettreProposee); b.remove()} )
let n = document.querySelector('.n');n.addEventListener('click', ()=> {lettreProposee = "n"; verifions(lettreProposee); console.log(lettreProposee); n.remove()} )

/**************************************************************************************************************** */

let nombreDeLettres = motDecompose.length;

function verifions(lettre){
    for (let zero = 0; zero < nombreDeLettres; zero++){
        if (lettre == motDecompose[zero]){
            console.log('La lettre proposée ' + lettre + ' est BIEN dans le mot mystère ')
            neCorrespondPas = 0 ;// Important de remettre ce compteur à zéro à chaque tentative. Sans quoi, ça bug.
            siCestBon()
            console.log("L'utilisateur a trouvé " + lettreTrouvee + " lettres sur " + nombreDeLettres)

                if(lettreTrouvee == nombreDeLettres){
                    document.querySelector(".coupRestant").textContent = "Vous avez gagné !";
                    document.querySelector('.clavier').style.display = 'none';      //  Le clavier disparait
                    document.querySelector('.dejaTrouver').style.display = 'none';  //  La phrase dessous aussi
                    claphrase.style.animation   = " reduit 1s forwards ";
                    document.querySelector('.rejouer').style.display = "block"
                }
            return 
        }else{
            //    console.log(neCorrespondPas + " à l'intérieur de la fonction juste avant l'incrémentation")
                console.log('La lettre proposée ' + lettre + ' ne correspond pas à celle comparée maintenant : le ' +  motDecompose[zero]);
            neCorrespondPas++
            //    console.log(neCorrespondPas + " à l'intérieur de la fonction juste APRES l'incrémentation")          
            absente()
                //  console.log("La dernière lettre comparée à celle proposée était le " + motDecompose[zero]);
                  console.log("La lettre proposée "+ lettreProposee +" vient d'être comparée à l'élément " + zero + " de la variable motDecompose. Et cet élément " + zero + " est donc " + motDecompose[zero] + "\n");
        }
    }
}
/******************************************************************************************************** */

let nombreTentativeRestante = 9;   // le nombre de tentatives accordées au joueur
let neCorrespondPas = 0;           // Ce nombre augmente pendant les tours de la boucle Verifions ci-dessus

function absente(){
    if((neCorrespondPas == nombreDeLettres)){
        //  console.log("La variable ne correspond pas est à " + neCorrespondPas + " à l'intérieur de la fonction Absente.")
        //  console.log("La variable concernant le nombre de lettres est de " + nombreDeLettres + "\n")
        console.log("Aucune correspondance")
      nombreTentativeRestante--
      neCorrespondPas = 0 ;// Important de remettre ce compteur à zéro à chaque tentative. Sans quoi, ça bug.
      moinsUn()
  
        return 
    }
}
        console.log("C'est le début. il y a "+ nombreTentativeRestante +" tentatives")
        
/************************************************************************************************************ */
// Cette fonction va se déclencher soit quand 
//  1  la fonction absente() est elle-même déclenchée ou
//  2  la fonction dejaTrouver() est elle-même déclenchée
// Avant, ce switch ci dessous était placé dans le fonction absente () 
function moinsUn(){    switch (nombreTentativeRestante){//Je change de fond d'écran à chaque tentative ratée
    case 9 ://  Le joueur n'a pas encore fait d'erreur. Il est à 9, donc l'image de départ est affichée
        document.body.style.background = 'url(fond/d00.jpg)';
        document.body.style.backgroundSize = '100vw 100vh'
        break;
    case 8 ://  Le joueur a fait sa première erreur...
        document.body.style.background = 'url(fond/d01.jpg)';
        document.body.style.backgroundSize = '100vw 100vh';
        break;
    case 7 :
        document.body.style.background = 'url(fond/d02.jpg)';
        document.body.style.backgroundSize = '100vw 100vh';
        break;
    case 6 :
        document.body.style.background = 'url(fond/d03.jpg)';
        document.body.style.backgroundSize = '100vw 100vh'
        break;
    case 5 :
        document.body.style.background = 'url(fond/d04.jpg)';
        document.body.style.backgroundSize = '100vw 100vh';
        break;
    case 4 :
        document.body.style.background = 'url(fond/d05.jpg)';
        document.body.style.backgroundSize = '100vw 100vh';
        break;
    case 3 :
        document.body.style.background = 'url(fond/d06.jpg)';
        document.body.style.backgroundSize = '100vw 100vh';
        break;
    case 2 :
        document.body.style.background = 'url(fond/d07.jpg)';
        document.body.style.backgroundSize = '100vw 100vh';
        break;
    case 1 :
        document.body.style.background = 'url(fond/d08.jpg)';
        document.body.style.backgroundSize = '100vw 100vh';
        break;
    case 0 :
        document.body.style.background = 'url(fond/d09.jpg)';
        document.body.style.backgroundSize = '100vw 100vh';
        claphrase.style.animation   = " reduit 1s forwards ";

    break;
}

console.log("Nombre de tentatives restantes : " + nombreTentativeRestante)
document.querySelector(".coupRestant").textContent = "Il vous reste " + nombreTentativeRestante + " tentatives.";//Comptons les points.

    if(nombreTentativeRestante == 0){// Le joueur arrive à zéro point. Fin de la partie.
            document.querySelector(".coupRestant").textContent = "Perdu ! Le pendu est... mort.";
            document.querySelector('.clavier').style.display = 'none';      //  Le clavier disparait
            document.querySelector('.dejaTrouver').style.display = 'none';  //  La phrase dessous aussi
            document.querySelector('.leMotATrouver').textContent = "Le mot mystère était : " + leMotATrouver;
            document.querySelector('.rejouer').style.display = "block"
    }
}    
/**************************************************************************************************************** */
// Voici la cadre dans lequel vont s'afficher les lettres
/*
switch (nombreDeLettres){
    case 22 : console.log(motDecompose[21] + " vingt-deux");    let l22 = document.createElement("div");mystere.append(l22);l22.textContent = motDecompose[21]; l22.className = 'carre';
    case 21 : console.log(motDecompose[20] + " vingt-et-un");   let l21 = document.createElement("div");mystere.append(l21);l21.textContent = motDecompose[20]; l21.className = 'carre';
    case 20 : console.log(motDecompose[19] + " vingt");         let l20 = document.createElement("div");mystere.append(l20);l20.textContent = motDecompose[19]; l20.className = 'carre';
    case 19 : console.log(motDecompose[18] + " dix-neuf");      let l19 = document.createElement("div");mystere.append(l19);l19.textContent = motDecompose[18]; l19.className = 'carre';
    case 18 : console.log(motDecompose[17] + " dix-huit");      let l18 = document.createElement("div");mystere.append(l18);l18.textContent = motDecompose[17]; l18.className = 'carre';
    case 17 : console.log(motDecompose[16] + " dix-sept");      let l17 = document.createElement("div");mystere.append(l17);l17.textContent = motDecompose[16]; l17.className = 'carre';
    case 16 : console.log(motDecompose[15] + " seize");         let l16 = document.createElement("div");mystere.append(l16);l16.textContent = motDecompose[15]; l16.className = 'carre';
    case 15 : console.log(motDecompose[14] + " quinze");        let l15 = document.createElement("div");mystere.append(l15);l15.textContent = motDecompose[14]; l15.className = 'carre';
    case 14 : console.log(motDecompose[13] + " quatorze");      let l14 = document.createElement("div");mystere.append(l14);l14.textContent = motDecompose[13]; l14.className = 'carre';
    case 13 : console.log(motDecompose[12] + " treize");        let l13 = document.createElement("div");mystere.append(l13);l13.textContent = motDecompose[12]; l13.className = 'carre';
    case 12 : console.log(motDecompose[11] + " douze");         let l12 = document.createElement("div");mystere.append(l12);l12.textContent = motDecompose[11]; l12.className = 'carre';
    case 11 : console.log(motDecompose[10] + " onze");          let l11 = document.createElement("div");mystere.append(l11);l11.textContent = motDecompose[10]; l11.className = 'carre';
    case 10 : console.log(motDecompose[9]  + " dix");           let l10 = document.createElement("div");mystere.append(l10);l10.textContent = motDecompose[9];  l10.className = 'carre';
    case 9  : console.log(motDecompose[8]  + " neuf");          let l09 = document.createElement("div");mystere.append(l09);l09.textContent = motDecompose[8];  l09.className = 'carre';
    case 8  : console.log(motDecompose[7]  + " huit");          let l08 = document.createElement("div");mystere.append(l08);l08.textContent = motDecompose[7];  l08.className = 'carre';
    case 7  : console.log(motDecompose[6]  + " sept");          let l07 = document.createElement("div");mystere.append(l07);l07.textContent = motDecompose[6];  l07.className = 'carre';
    case 6  : console.log(motDecompose[5]  + " six");           let l06 = document.createElement("div");mystere.append(l06);l06.textContent = motDecompose[5];  l06.className = 'carre';
    case 5  : console.log(motDecompose[4]  + " cinq");          let l05 = document.createElement("div");mystere.append(l05);l05.textContent = motDecompose[4];  l05.className = 'carre';
    case 4  : console.log(motDecompose[3]  + " quatre");        let l04 = document.createElement("div");mystere.append(l04);l04.textContent = motDecompose[3];  l04.className = 'carre';
    case 3  : console.log(motDecompose[2]  + " trois");         let l03 = document.createElement("div");mystere.append(l03);l03.textContent = motDecompose[2];  l03.className = 'carre';
    case 2  : console.log(motDecompose[1]  + " deux");          let l02 = document.createElement("div");mystere.append(l02);l02.textContent = motDecompose[1];  l02.className = 'carre';
    case 1  : console.log(motDecompose[0]  + " un");            let l01 = document.createElement("div");mystere.append(l01);l01.textContent = motDecompose[0];  l01.className = 'carre';
}
*/
/************************************************************************************************************** */
/*
let l01; let l02; let l03; let l04; let l05; let l06; let l07; let l08; let l09; let l10;
let l11; let l12; let l13; let l14; let l15; let l16; let l17; let l18; let l19; let l20;
*/

switch (nombreDeLettres){

    case 20 : l20 = document.createElement("div");mystere.append(l20);  l20.className = 'carre';
    case 19 : l19 = document.createElement("div");mystere.append(l19);  l19.className = 'carre';
    case 18 : l18 = document.createElement("div");mystere.append(l18);  l18.className = 'carre';
    case 17 : l17 = document.createElement("div");mystere.append(l17);  l17.className = 'carre';
    case 16 : l16 = document.createElement("div");mystere.append(l16);  l16.className = 'carre';
    case 15 : l15 = document.createElement("div");mystere.append(l15);  l15.className = 'carre';
    case 14 : l14 = document.createElement("div");mystere.append(l14);  l14.className = 'carre';
    case 13 : l13 = document.createElement("div");mystere.append(l13);  l13.className = 'carre';
    case 12 : l12 = document.createElement("div");mystere.append(l12);  l12.className = 'carre';
    case 11 : l11 = document.createElement("div");mystere.append(l11);  l11.className = 'carre';
    case 10 : l10 = document.createElement("div");mystere.append(l10);  l10.className = 'carre';
    case 9  : l09 = document.createElement("div");mystere.append(l09);  l09.className = 'carre';
    case 8  : l08 = document.createElement("div");mystere.append(l08);  l08.className = 'carre';
    case 7  : l07 = document.createElement("div");mystere.append(l07);  l07.className = 'carre';
    case 6  : l06 = document.createElement("div");mystere.append(l06);  l06.className = 'carre';
    case 5  : l05 = document.createElement("div");mystere.append(l05);  l05.className = 'carre';
    case 4  : l04 = document.createElement("div");mystere.append(l04);  l04.className = 'carre';
    case 3  : l03 = document.createElement("div");mystere.append(l03);  l03.className = 'carre';
    case 2  : l02 = document.createElement("div");mystere.append(l02);  l02.className = 'carre';
    case 1  : l01 = document.createElement("div");mystere.append(l01);  l01.className = 'carre';
}
/*
function siCestBon(){
    switch (lettreProposee){
        case motDecompose[19] : l20.textContent = motDecompose[19];    //   break
        case motDecompose[18] : l19.textContent = motDecompose[18];    //   break
        case motDecompose[17] : l18.textContent = motDecompose[17];    //   break
        case motDecompose[16] : l17.textContent = motDecompose[16];    //   break
        case motDecompose[15] : l16.textContent = motDecompose[15];    //   break
        case motDecompose[14] : l15.textContent = motDecompose[14];    //   break
        case motDecompose[13] : l14.textContent = motDecompose[13];    //   break
        case motDecompose[12] : l13.textContent = motDecompose[12];    //   break
        case motDecompose[11] : l12.textContent = motDecompose[11];    //   break
        case motDecompose[10] : l11.textContent = motDecompose[10];    //   break
        case motDecompose[9]  : l10.textContent = motDecompose[9];     //   break
        case motDecompose[8]  : l09.textContent = motDecompose[8];     //   break
        case motDecompose[7]  : l08.textContent = motDecompose[7];     //   break
        case motDecompose[6]  : l07.textContent = motDecompose[6];     //   break  
        case motDecompose[5]  : l06.textContent = motDecompose[5];     //   break
        case motDecompose[4]  : l05.textContent = motDecompose[4];     //   break
        case motDecompose[3]  : l04.textContent = motDecompose[3];     //   break
        case motDecompose[2]  : l03.textContent = motDecompose[2];     //   break
        case motDecompose[1]  : l02.textContent = motDecompose[1];     //   break
        case motDecompose[0]  : l01.textContent = motDecompose[0];     //   break
    }
}
*/
    function siCestBon(){
        if (lettreProposee == motDecompose[19]){l20.textContent = motDecompose[19];    lettreTrouvee++}
        if (lettreProposee == motDecompose[18]){l19.textContent = motDecompose[18];    lettreTrouvee++}
        if (lettreProposee == motDecompose[17]){l18.textContent = motDecompose[17];    lettreTrouvee++}
        if (lettreProposee == motDecompose[16]){l17.textContent = motDecompose[16];    lettreTrouvee++}
        if (lettreProposee == motDecompose[15]){l16.textContent = motDecompose[15];    lettreTrouvee++}
        if (lettreProposee == motDecompose[14]){l15.textContent = motDecompose[14];    lettreTrouvee++}
        if (lettreProposee == motDecompose[13]){l14.textContent = motDecompose[13];    lettreTrouvee++}
        if (lettreProposee == motDecompose[12]){l13.textContent = motDecompose[12];    lettreTrouvee++}
        if (lettreProposee == motDecompose[11]){l12.textContent = motDecompose[11];    lettreTrouvee++}
        if (lettreProposee == motDecompose[10]){l11.textContent = motDecompose[10];    lettreTrouvee++}
        if (lettreProposee == motDecompose[9]){l10.textContent = motDecompose[9];    lettreTrouvee++}
        if (lettreProposee == motDecompose[8]){l09.textContent = motDecompose[8];    lettreTrouvee++}
        if (lettreProposee == motDecompose[7]){l08.textContent = motDecompose[7];    lettreTrouvee++}
        if (lettreProposee == motDecompose[6]){l07.textContent = motDecompose[6];    lettreTrouvee++}
        if (lettreProposee == motDecompose[5]){l06.textContent = motDecompose[5];    lettreTrouvee++}
        if (lettreProposee == motDecompose[4]){l05.textContent = motDecompose[4];    lettreTrouvee++}
        if (lettreProposee == motDecompose[3]){l04.textContent = motDecompose[3];    lettreTrouvee++}
        if (lettreProposee == motDecompose[2]){l03.textContent = motDecompose[2];    lettreTrouvee++}
        if (lettreProposee == motDecompose[1]){l02.textContent = motDecompose[1];    lettreTrouvee++}
        if (lettreProposee == motDecompose[0]){l01.textContent = motDecompose[0];    lettreTrouvee++}
    }
/**************************************************************************************************************** */
//  Quand je clique la phrase "déjà trouver le mot mystère" en bas de l'écran, cela fait apparaitre la fenêtre prompt

let motPropose ; // Ces deux variables 

dejaTrouver.addEventListener('click',                                   // Quand je clique sur la phrase en bas
function (){motPropose = prompt("Proposez votre mot s'il vous plait."); // La fenêtre prompt apparait
 console.log(motPropose);
        let sansAigu  = motPropose.replace(/é/g, "e");                  // J'enlève les éventuels accents aigus
        let sansGrave = sansAigu.replace(/è/g, "e");                    // J'enlève les éventuels accents graves
        let sansCirconflexe = sansGrave.replace(/ê/g, "e");             // J'enlève les éventuels accents circonflexes
            console.log(sansCirconflexe);
            if(sansCirconflexe == leMotATrouver){                       // Si le mot proposé n'est pas le bon
                document.querySelector(".coupRestant").textContent = "Vous avez gagné !"; // Ceci apparait dans l'encadré
                document.querySelector('.clavier').style.display = 'none';                // Le clavier disparait
                document.querySelector('.dejaTrouver').style.display = 'none';            // La phrase dessous aussi
                claphrase.style.animation   = " reduit 1s forwards ";   // Cette animation va réduire la contenant du clavier en hauteur
                document.querySelector('.rejouer').style.display = "block"
            return
        }
        else{
            sansCirconflexe != leMotATrouver;                           // Si le mot est différent
            console.log('nombre de tentatives indiquées dans cette condition qui ne fonctionne avant l\'exécution absente ' + nombreTentativeRestante)
            nombreTentativeRestante--

            moinsUn()                                                   // On va déclencher la fonction absente()
            console.log('nombre de tentatives indiquées dans cette condition qui ne fonctionne après l\'exécution absente ' + nombreTentativeRestante)
        }
    }
)

