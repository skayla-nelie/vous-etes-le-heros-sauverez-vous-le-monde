let glove = 0;
yesno = function () {
  glove++;
};
debut = function () {
  glove++;
  gotochapter("pierres");

  (again= function () {
  if (glove > true) {
      gotochapter(`ending`);
    }  else {
      gotochapter(`pierres`);
    }
//chapitre 1//

let chaptersObj = {
  pierres: {
    subtitle: "Les pierres de l'infini",
    text: "Votre rêve depuis que vous êtes jeune est de devenir un super-héros. Vous ne posséder pas de pouvoir. Le directeur Fury (qui est en manque de soldat) vous confit alors la mission d'apporter les pierres de l'infini à Hulk afin qu'il puisse sauvez le monde, sans oublier que vous devez retrouvez le gant de l'infinie.",
    img: "img/infinity_stone.jpg",
    options: [
      {
        text: "Vous rouler à toutes vitesse dans les rues de New york, losrque...",
        action: "goToChapter(`sbires`)",
      },
    ],
  },

  //chapitre 2//
  sbires: {
    subtitle: "Pris au piège",
    text: "Vous rouler à toutes vitesse dans les rues de New york lorsque tout à coup, vous êtes attaqué par les sbires de thanos. ",
    img: "img/black_order.jpg",
    options: [
      {
        text: "s'enfuir",
        action: "goToChapter(`fuire`)",
      },
      {
        text: "combattre",
        action: "goToChapter(`fight`)",
      },
      {
        text: "aller chercher de l'aide",
        action: "goToChapter(`help`)",
      },
    ],
  },
  //choix 2.1//
  fuire: {
    subtitle: "Get out",
    text: "Les sbires de thanos sont nombreux, vous êtes seul. La peur augmente et vous décidez de fuir par les ruelle vers votre gauche. Malheureusement, les sbires vous attrapent, vous volent les pierres et les offres à thanos qui vous efface de l'univers. ",
    img: "img/flee.jpg",
    options: [
      {
        text: "retour au début de la mission",
        action: again(),
      },
    ],
  },
  //chapitre 3//
  help: {
    subtitle: "The mad titan",
    text: "Vous savez que vous n'êtes pas de taille contre tous les sbires de thanos, alors vous décidez d'aller chercher de l'aide en passant dans les ruelles de droite, mais vous finissez devant Thanos. ",
    img: "img/thanos.jpg",
    options: [
      {
        text: "prendre la fuite",
        action: "goToChapter(`fuire2`)",
      },
      {
        text: "combattre",
        action: "goToChapter(`fight`)",
      },
    ],
  },
  //choix 3.1//
  fight: {
    subtitle: "Fight of your life",
    text: "Vous décidez de combattre thanos, même si vous savez que cela peut vous couter votre vie, et c'est ce qui est arrivé. Malgré l'aide des pierres, le combat entre vous et thanos fini en match nulle. Vous êtes tous les deux sout le point de sombrer dans un sommeil éternel qui vous fera recommencer votre mission, mais cette fois- ci vous posséder le gant de l'infini",
    img: "img/me_vs_thanos.jpg",
    options: [
      {
        text: "retour debut mision",
        action:again(),
      },
    ],
  },
  //choix 3.2//
  fuire2: {
    subtitle: "Fear",
    text: "COMBATTRE THANOS?!?! Vous n'êtes pas fou au point de risqué votre vie, vous êtes terrifié, vore seul reflexe est de fuire mais thanos vour rattrape, vous vole les pierres et vou efface de l'univers",
    img: "img/fear.jpg",
    options: [
      {
        text: "retour au début de la mission",
        action: again(),
      },
    ],
  },
  //chapitre 4//
  fight2: {
    subtitle: "Le pouvoir des pierres",
    text: "Vous n'avez pas peur, vous savez que ceci est le moment parfait pour prouver de quoi vous êtes capable.Vous repensez au parole de Fury et vous rendez compte que la situation est urgente. Vous décidez d'utiliser la pierre du pouvoir (qui bizarrement ne vous tue pas), et pulvériser les sbires de thanos.",
    img: "img/power.jpg",
    options: [
      {
        text: "continuer la mission",
        action: "goToChapter(`fly`)",
      },
    ],
  },
  //chapitre 5//
  fly: {
    subtitle: "Les vaisseaux",
    text: "Votre auto à été détruite durant la bataille précédente, après une bonne heure de marche, vous tomber sur de vaisseaux, le Milano(peter quill) et un vaisseau du Wakanda.",
    img: "img/milano.jpg", //wakanda.jpg//,
    options: [
      {
        text: "vaisseau Quill",
        action: "goToChapter(`nebula`)",
      },
      {
        text: "vaisseau Wakanda",
        action: "goToChapter(`wakanda`)",
      },
    ],
  },
  //choix 5.2//
  nebula: {
    subtitle: "Nebula",
    text: "Vous décidez d'embarquer dans le Milano, le vaisseau de Peter Quill. Vous n'aviez pas prévue que la nebula qui se trouve a bord était celle du passé. Cette dernière contacte thanos qui vous vole les pierres et vous efface de ce monde.",
    img: "img/nebula.jpg",
    options: [
      {
        text: "Retour au début de la mission",
        action: again(),
      },
    ],
  },
  //choix 5.1//
  wakanda: {
    subtitle: "Wakanda forever",
    text: "Vous décidez d'embarquer dans le vaisseau du wakanda qui vous emmene à la localisation de hulk.",
    img: "img/wakanda.jpg",
    options: [
      {
        text: "continuer la mission",
        action: "goToChapter(`gantelet`)",
      },
    ],
  },
  //chapitre 6//
  gantelet: {
    subtitle: "Le gant de l'infini",
    text: "Vous arrivez devant hulk qui est le seul capable de supporter le douleur du gants combiné au pierre. Vous lui remettez toutes les pierres. Ce dernier vous demande si vous avez aussi le gant.",
    img: "img/hulk.jpg",
    options: [
      {
        text: "oui",
        action: "goToChapter(`victoire`)",
      },
      {
        text: "non",
        action: again(),
      },
    ],
  },
  //chapitre 7//
  victoire: {
    subtitle: "Bravo",
    text: "Vous remettez le gant à hulk. Il dépose les pierres sur celui-ci et fini par claquer du doigt. Le monde est sauvé.",
    img: "img/victoire.jpg",
    options: [
      {
        text: "Recommencer",
        action: again(),
      },
    ],
  },
};

function goToChapter(chapterName) {
  let chapitre = document.querySelector(".titre");
  let img = document.querySelector(".img");
  let texte = document.querySelector(".texte");
  chapitre.innerText = chaptersObj[chapterName].subtitle;
  texte.innerText = chaptersObj[chapterName].text;
  img.innerHTML = `<img src="${chaptersObj[chapterName].img}" alt= "chapter_img" />`;
  for (
    let index = 0;
    index < chaptersObj[chapterName].options.length;
    index++
  ) {
    let txtButton = "";
    let decision = chaptersObj[chapterName].options[index].action;
    txtButton += `<div class="button"><button type="button" onclick="${chaptersObj[chapterName].options[index].action}">${chaptersObj[chapterName].options[index].text}</button></div>`;
  }
  decision.innerHTML = txtButton;
}
goToChapter("Les pierres de l'infini");
