//chapitre 1//
let pierres = {
  subtitle: "Les pierres de l'infini",
  text: "Votre rêve depuis que vous êtes jeune est de devenir un super-héros. Vous ne posséder pas de pouvoir, mais vous avez beaucoup de volonté et vous êtes très persévérant, surtout depuis que la moitié de l'univers à été éffacée. Évidemment vous faites partis de la moitié des gens qui n'ont pas été éffacé de l'univers. Vous décidez donc d'aller voir le directeur Fury afin de le convaicre de vous laissé l'aider à sauvé le monde. Le directeur Fury (qui est en manque de soldat) vous confit alors la mission d'apporter les pierres de l'infini à Hulk afin qu'il puisse sauvez le monde, sans oublier que vous devez également retrouvez le gant de l'infinie.Il vous met en garde d'utiliser les pierres qu'en cas d'urgence seulement, étant donné que les pierres ne sont pas cencé être manipuler par les mortels.",
  img: document.getElementById("infinity_stone.jpg"),
 
};

let chaptersObj = {
  the_stones: pierres,
  impasse: sbires,
  run: fuire,
  sos: help,
  courage: fight,
  run2: fuire2,
  courage2: fight2,
  airship: fly,
  quill: nebula,
  vibranium: wakanda,
  gant: gantelet,
  gant: victoire,
};
//chapitre 2//
let sbires = {
  subtitle: "Pris au piège",
  text: "Vous rouler à toutes vitesse dans les rues de New york lorsque tout à coup, vous êtes attaqué par les sbires de thanos. ",
  img: document.getElementById("black_order.jpg"),

};
//choix 2.1//
let fuire = {
  subtitle: "Get out",
  text: "Les sbires de thanos sont nombreux, vous êtes seul. La peur augmente et vous décidez de fuir par les ruelle vers votre gauche. Malheureusement, les sbires vous attrapent, vous volent les pierres et les offres à thanos qui vous efface de l'univers. ",
  img: document.getElementById("flee.jpg"),

};
//chapitre 3//
let help = {
  subtitle: "The mad titan",
  text: "Vous savez que vous n'êtes pas de taille contre tous les sbires de thanos, alors vous décidez d'aller chercher de l'aide en passant dans les ruelles de droite, mais vous finissez devant Thanos. ",
  img: document.getElementById("thanos.jpg"),

};
//choix 3.1//
let fight = {
  subtitle: "Fight of your life",
  text: "Vous décidez de combattre thanos, même si vous savez que cela peut vous couter votre vie, et c'est ce qui est arrivé. Malgré l'aide des pierres, le combat entre vous et thanos fini en match nulle. Vous êtes tous les deux sout le point de sombrer dans un sommeil éternel qui vous fera recommencer votre mission, mais cette fois- ci vous posséder le gant de l'infini",
  img: document.getElementById("me_vs_thanos.jpg"),

};
//choix 3.2//
let fuire2 = {
  subtitle: "Fear",
  text: "COMBATTRE THANOS?!?! Vous n'êtes pas fou au point de risqué votre vie, vous êtes terrifié, vore seul reflexe est de fuire mais thanos vour rattrape, vous vole les pierres et vou efface de l'univers",
  img: document.getElementById("fear.jpg"),

};
//chapitre 4//
let fight2 = {
  subtitle: "Le pouvoir des pierres",
  text: "Vous n'avez pas peur, vous savez que ceci est le moment parfait pour prouver de quoi vous êtes capable.Vous repensez au parole de Fury et vous rendez compte que la situation est urgente. Vous décidez d'utiliser la pierre du pouvoir (qui bizarrement ne vous tue pas), et pulvériser les sbires de thanos.",
  img: document.getElementById("power.jpg"),

};
//chapitre 5//
let fly = {
  subtitle: "Les vaisseaux",
  text: "Votre auto à été détruite durant la bataille précédente, après une bonne heure de marche, vous tomber sur de vaisseaux, le Milano(peter quill) et un vaisseau du Wakanda.",
  img: document.getElementById("milano.jpg"), //wakanda.jpg//,

};
//choix 5.2//
let nebula = {
  subtitle: "Nebula",
  text: "Vous décidez d'embarquer dans le Milano, le vaisseau de Peter Quill. Vous n'aviez pas prévue que la nebula qui se trouve a bord était celle du passé. Cette dernière contacte thanos qui vous vole les pierres et vous efface de ce monde.",
  img: document.getElementById("nebula.jpg"),

};
//choix 5.1//
let wakanda = {
  subtitle: "Wakanda forever",
  text: "Vous décidez d'embarquer dans le vaisseau du wakanda qui vous emmene à la localisation de hulk.",
  img: document.getElementById("wakanda.jpg"),

};
//chapitre 6//
let gantelet = {
  subtitle: "Le gant de l'infini",
  text: "Vous arrivez devant hulk qui est le seul capable de supporter le douleur du gants combiné au pierre. Vous lui remettez toutes les pierres. Ce dernier vous demande si vous avez aussi le gant.",
  img: document.getElementById("hulk.jpg"),

};
//chapitre 7//
let victoire = {
  subtitle: "Bravo",
  text: "Vous remettez le gant à hulk. Il dépose les pierres sur celui-ci et fini par claquer du doigt. Le monde est sauvé.",
  img: document.getElementById("victoire.jpg"),

};

function goToChapter(chapterName) {
  const chapitre = chapterName;
  console.log(chapitre.subtitle);
  console.log(chapitre.text);
  console.log(chapitre.img);
}
