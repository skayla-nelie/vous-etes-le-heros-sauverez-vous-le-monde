let glove = 0;
if (localStorage.getItem("glove") != null) {
  // Est-ce que glove est sauvegardé dans localStorage?
  glove = localStorage.getItem("glove"); // Si oui, donnons la valeur à glove de ce qu'il y a de sauvegardé.
}

function debut() {
  glove++;
  localStorage.setItem("glove", glove); // La valeur de glove vient de changer, donc on la sauvegarde
  goToChapter("pierres");
}

function again() {
  if (glove > 4) {
    goToChapter("ending");
  } else {
    goToChapter("pierres");
  }
}

let chaptersObj = {
  pierres: {
    subtitle: "Les pierres de l'infini",
    text: "Votre rêve depuis que vous êtes jeune est de devenir un super-héros. Vous ne posséder pas de pouvoir. Le directeur Fury (qui est en manque de soldat) vous confit alors la mission d'apporter les pierres de l'infini à Hulk afin qu'il puisse sauvez le monde, sans oublier que vous devez retrouvez le gant de l'infinie.",
    img: "assets/img/infinity_stone.jpg",
    options: [
      {
        text: "Vous rouler à toutes vitesse dans les rues de New york, losrque...",
        action: "goToChapter(`sbires`)",
      },
    ],
  },

  sbires: {
    subtitle: "Pris au piège",
    text: "Vous rouler à toutes vitesse dans les rues de New york lorsque tout à coup, vous êtes attaqué par les sbires de thanos. ",
    img: "assets/img/black_order.jpg",
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

  fuire: {
    subtitle: "Get out",
    text: "Les sbires de thanos sont nombreux, vous êtes seul. La peur augmente et vous décidez de fuir par les ruelle vers votre gauche. Malheureusement, les sbires vous attrapent, vous volent les pierres et les offres à thanos qui vous efface de l'univers. ",
    img: "assets/img/flee.jpg",
    options: [
      {
        text: "retour au début de la mission",
        action: "again()",
      },
    ],
  },

  help: {
    subtitle: "The mad titan",
    text: "Vous savez que vous n'êtes pas de taille contre tous les sbires de thanos, alors vous décidez d'aller chercher de l'aide en passant dans les ruelles de droite, mais vous finissez devant Thanos. ",
    img: "assets/img/thanos.jpg",
    video: "assets/thanos.mp4",
    options: [
      {
        text: "prendre la fuite",
        action: "goToChapter(`fuire2`)",
      },
      {
        text: "combattre",
        action: "goToChapter(`fight2`)",
      },
    ],
  },

  fight: {
    subtitle: "Fight of your life",
    text: "Vous affrontez les sbires de thanos et vous finissez par les vaincre, mais thanos apparait alors que vous etes exténuer de votre combat précédent. Vous décidez de combattre thanos, même si vous savez que cela peut vous coûter votre vie, et c'est ce qui est arrivé. Le combat entre vous et thanos fini en match nulle. Vous êtes tous les deux sur le point de sombrer dans un sommeil qui vous fera recommencer votre mission, mais cette fois- ci vous posséder le gant de l'infini",
    img: "assets/img/me_vs_thanos.jpg",
    options: [
      {
        text: "retour debut mision",
        action: "again()",
      },
    ],
  },

  fuire2: {
    subtitle: "Fear",
    text: "COMBATTRE THANOS?!?! Vous n'êtes pas fou au point de risqué votre vie, vous êtes terrifié, votre seul reflexe est de fuire mais thanos vous rattrape, vous vole les pierres et vous efface de l'univers",
    img: "assets/img/fear.jpg",
    options: [
      {
        text: "retour au début de la mission",
        action: "again()",
      },
    ],
  },

  fight2: {
    subtitle: "Le pouvoir des pierres",
    text: "Vous n'avez pas peur, vous savez que ceci est le moment parfait pour prouver de quoi vous êtes capable. Vous repensez au parole de Fury et vous rendez compte que la situation est urgente. Vous décidez d'utiliser la pierre du pouvoir (qui bizarrement ne vous tue pas), et pulvériser thanos.",
    img: "assets/img/power.jpg",
    options: [
      {
        text: "continuer la mission",
        action: "goToChapter(`fly`)",
      },
    ],
  },

  fly: {
    subtitle: "Les vaisseaux",
    text: "Votre auto à été détruite durant la bataille précédente, après une bonne heure de marche, vous tomber sur deux vaisseaux, le Milano(peter quill) et un vaisseau du Wakanda.",
    img: "assets/img/milano.jpg", //wakanda.jpg//,
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

  nebula: {
    subtitle: "Nebula",
    text: "Vous décidez d'embarquer dans le Milano, le vaisseau de Peter Quill. Vous n'aviez pas prévue que la nebula qui se trouvait à bord était celle du passé. Cette dernière contacte thanos qui vous vole les pierres et vous efface de ce monde.",
    img: "assets/img/nebula.jpg",
    options: [
      {
        text: "Retour au début de la mission",
        action: "again()",
      },
    ],
  },

  wakanda: {
    subtitle: "Wakanda forever",
    text: "Vous décidez d'embarquer dans le vaisseau du wakanda qui vous emmene à la localisation de hulk.",
    img: "assets/img/wakanda.jpg",
    video: "assets/wakanda.mp4",
    options: [
      {
        text: "continuer la mission",
        action: "goToChapter(`gantelet`)",
      },
    ],
  },

  gantelet: {
    subtitle: "Le gant de l'infini",
    text: "Vous arrivez devant hulk qui est le seul capable de supporter le douleur du gants combiné au pierre. Vous lui remettez toutes les pierres. Ce dernier vous demande si vous avez aussi le gant.",
    img: "assets/img/hulk.jpg",
    options: [
      {
        text: "oui",
        action: "goToChapter(`victoire`)",
      },
      {
        text: "non",
        action: "again()",
      },
    ],
  },

  victoire: {
    subtitle: "Bravo",
    text: "Vous remettez le gant à hulk. Il dépose les pierres sur celui-ci et fini par claquer du doigt. Le monde est sauvé.",
    img: "assets/img/victoire.jpg",
    options: [
      {
        text: "Recommencer",
        action: "again()",
      },
    ],
  },
};

const audio = new Audio("assets/heartbeat.mp3");

function goToChapter(chapterName) {
  const chapter = chaptersObj[chapterName]; // On va chercher le chapitre courant dans chaptersObj
  localStorage.setItem("chapter", chapterName); // On sauvegarde le nopm du chapitre courant

  let chapitre = document.querySelector(".titre");
  let img = document.querySelector(".img");
  let texte = document.querySelector(".texte");
  let button = document.querySelector(".button");

  chapitre.innerText = chapter.subtitle;
  texte.innerText = chapter.text;

  if (chapter.video != undefined) {
    // Si une video est trouvée dans le chapitre courant
    img.innerHTML = `<video src="${chapter.video}" loop muted autoplay>`; // On insère une vidéo
  } else {
    // Sinon
    img.innerHTML = `<img src="${chapter.img}" alt= "chapter_img" />`; // On insère une image
  }

  let txtButton = "";
  for (let index = 0; index < chapter.options.length; index++) {
    const option = chapter.options[index];
    txtButton += `<button class="btn" onclick="${option.action}">${option.text}</button>`;
  }
  button.innerHTML = txtButton;

  audio.currentTime = 0; // On remet le son au début
  audio.play(); // On joue le son
}

let currentchapter = "pierres"; // Chapitre de départ par défaut
if (localStorage.getItem("chapter") != null) {
  // Est-ce qu'un chapitre est sauvegardé dans localStorage?
  currentchapter = localStorage.getItem("chapter"); // Si oui, changeons le chapitre de départ pour le chapitre sauvegardé
}
goToChapter(currentchapter); // Débutons le jeu au chapitre qui fait le plus de sens (départ ou sauvegardé)

let crochet = document.querySelector(".crochet");
audio = true;
if (check.checked === true) {
  audio = true;
} else {
  audio = false;
}
if (audio === true) {
  audio.currentTime = 0;
  audio.play();
}
