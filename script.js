
const scenes = [{"id": 1, "title": "Le présage d'ambre", "text": "À l'aube, la cloche du royaume d'Aurélia sonne treize fois. Une lumière ambrée fend le ciel au-dessus de la capitale. Sur la place, un messager blessé murmure qu'un sceau ancien vient de se briser.", "image": "images/scene01.svg", "choices": [{"text": "Suivre le messager", "next": 2}, {"text": "Examiner la lumière", "next": 3}, {"text": "Aider les gardes à évacuer la place", "next": 4}]}, {"id": 2, "title": "Le messager aux yeux d'or", "text": "Le messager se nomme Kael. Il porte un médaillon marqué d'un symbole que tu as déjà vu dans les vieux manuscrits de ta famille. Il affirme qu'une prison oubliée s'ouvre sous les collines.", "image": "images/scene02.svg", "choices": [{"text": "Partir avec Kael", "next": 5}, {"text": "L'interroger sur le médaillon", "next": 6}, {"text": "Lui prendre son parchemin", "next": 7}]}, {"id": 3, "title": "La lumière dans le ciel", "text": "Sous la lumière, une plume noire tombe devant toi. Elle est froide comme la glace et gravée de runes. Lorsque tu la touches, une voix ancienne prononce ton nom.", "image": "images/scene03.svg", "choices": [{"text": "Garder la plume", "next": 8}, {"text": "La montrer à l'archiviste", "next": 9}, {"text": "La détruire", "next": 10}]}, {"id": 4, "title": "Les flammes de la place", "text": "Des créatures d'ombre surgissent des ruelles. Tu protèges les habitants tandis que les chevaliers sacrés tentent de former une ligne.", "image": "images/scene04.svg", "choices": [{"text": "Combattre les ombres", "next": 11}, {"text": "Protéger les enfants", "next": 12}, {"text": "Rejoindre les chevaliers", "next": 5}]}, {"id": 5, "title": "La route des collines", "text": "Kael conduit le groupe vers des collines couvertes de brume. Une vieille route de pierres mène à trois directions. Au loin, un grondement ressemble à un battement de cœur.", "image": "images/scene05.svg", "choices": [{"text": "Prendre la route des ruines", "next": 13}, {"text": "Traverser la forêt", "next": 14}, {"text": "Suivre le grondement", "next": 15}]}, {"id": 6, "title": "Le symbole interdit", "text": "Kael révèle que le médaillon appartient aux Gardiens du Crépuscule, une confrérie disparue depuis cent ans. Il te confie une petite clé d'argent.", "image": "images/scene06.svg", "choices": [{"text": "Accepter la clé", "next": 13}, {"text": "Refuser et partir seul", "next": 14}, {"text": "Demander la vérité sur ta famille", "next": 16}]}, {"id": 7, "title": "Le parchemin volé", "text": "Le parchemin décrit un rituel capable d'ouvrir une porte vers un royaume démoniaque. Tu comprends que quelqu'un cherche à provoquer une guerre entre les clans.", "image": "images/scene07.svg", "choices": [{"text": "Étudier le rituel", "next": 9}, {"text": "Cacher le parchemin", "next": 17}, {"text": "Le remettre aux chevaliers", "next": 18}]}, {"id": 8, "title": "La plume noire", "text": "La plume réagit à ton énergie magique. Elle révèle brièvement une carte vers un temple oublié. Une inscription promet un pouvoir immense à celui qui y entre.", "image": "images/scene08.svg", "choices": [{"text": "Suivre la carte", "next": 19}, {"text": "Ignorer la carte", "next": 14}, {"text": "Tester la plume", "next": 20}]}, {"id": 9, "title": "La salle des archives", "text": "L'archiviste Maëra reconnaît immédiatement la plume et le rituel. Elle affirme que les archives ont été falsifiées pour cacher l'existence d'un ancien pacte.", "image": "images/scene09.svg", "choices": [{"text": "Croire Maëra", "next": 16}, {"text": "Chercher la vérité dans les archives interdites", "next": 21}, {"text": "Prévenir le conseil", "next": 18}]}, {"id": 10, "title": "Le prix du feu", "text": "Tu détruis la plume. L'explosion te blesse et laisse une marque lumineuse sur ta main. La voix ancienne se tait, mais quelque chose semble désormais te suivre.", "image": "images/scene10.svg", "choices": [{"text": "Continuer malgré la blessure", "next": 14}, {"text": "Chercher un guérisseur", "next": 12}, {"text": "Retourner à la capitale", "next": 22}]}, {"id": 11, "title": "Premier duel", "text": "Une créature massive bloque la rue. Son corps est fait d'ombre et de braises. Elle attaque sans un mot.", "image": "images/scene11.svg", "choices": [{"text": "Attaquer", "next": 23}, {"text": "Utiliser la magie", "next": 23}, {"text": "Esquiver et observer", "next": 24}]}, {"id": 12, "title": "Le refuge", "text": "Les habitants trouvent refuge dans une ancienne chapelle. Une guérisseuse te remet une potion et te parle d'un chevalier disparu qui portait le même symbole que ton médaillon.", "image": "images/scene12.svg", "choices": [{"text": "Prendre la potion et partir", "next": 5}, {"text": "Chercher le chevalier disparu", "next": 22}, {"text": "Rester pour défendre la chapelle", "next": 25}]}, {"id": 13, "title": "Les ruines du roi sans couronne", "text": "Les ruines abritent une porte scellée. La serrure possède exactement la forme de la clé de Kael. Une inscription demande : « Que sacrifies-tu pour connaître la vérité ? »", "image": "images/scene13.svg", "choices": [{"text": "Utiliser la clé", "next": 26}, {"text": "Chercher un autre passage", "next": 21}, {"text": "Détruire la porte", "next": 23}]}, {"id": 14, "title": "La forêt des murmures", "text": "Chaque arbre semble répéter des fragments de tes souvenirs. Une silhouette masquée apparaît et te propose un marché : une réponse contre un souvenir.", "image": "images/scene14.svg", "choices": [{"text": "Accepter le marché", "next": 27}, {"text": "Refuser", "next": 21}, {"text": "Suivre la silhouette", "next": 19}]}, {"id": 15, "title": "Le cœur sous la montagne", "text": "Le grondement vient d'une cavité gigantesque. Un cristal rouge pulse au rythme d'un cœur. Une inscription indique qu'il peut réveiller une armée oubliée.", "image": "images/scene15.svg", "choices": [{"text": "Détruire le cristal", "next": 25}, {"text": "Le toucher", "next": 28}, {"text": "Repartir", "next": 17}]}, {"id": 16, "title": "La vérité de ta famille", "text": "Maëra et Kael découvrent un document : tes ancêtres faisaient partie des Gardiens du Crépuscule. Leur mission était de maintenir l'équilibre entre les clans, pas de servir un royaume.", "image": "images/scene16.svg", "choices": [{"text": "Accepter cet héritage", "next": 19}, {"text": "Refuser cette destinée", "next": 22}, {"text": "Chercher le dernier Gardien", "next": 29}]}, {"id": 17, "title": "Le complot", "text": "Le parchemin révèle qu'un haut responsable du royaume veut provoquer une guerre afin de récupérer les artefacts des anciens clans.", "image": "images/scene17.svg", "choices": [{"text": "Dénoncer le complot", "next": 22}, {"text": "Utiliser le complot pour négocier", "next": 30}, {"text": "Garder le secret", "next": 25}]}, {"id": 18, "title": "Le conseil des chevaliers", "text": "Le conseil t'écoute, mais certains chevaliers semblent déjà connaître ton nom. Leur commandante, Serah, te demande de prouver que tu n'es pas lié à la menace.", "image": "images/scene18.svg", "choices": [{"text": "Accepter l'épreuve", "next": 23}, {"text": "Accuser le conseil", "next": 30}, {"text": "Présenter les preuves", "next": 21}]}, {"id": 19, "title": "Le temple du crépuscule", "text": "Dans le temple, sept statues représentent des vertus anciennes. Au centre se trouve une lame sans nom. Une voix te demande de choisir entre puissance et vérité.", "image": "images/scene19.svg", "choices": [{"text": "Choisir la puissance", "next": 28}, {"text": "Choisir la vérité", "next": 29}, {"text": "Refuser le choix", "next": 24}]}, {"id": 20, "title": "La voix de la plume", "text": "La plume révèle un passage secret sous le temple. Tu y trouves un fragment d'artefact capable de calmer les créatures d'ombre.", "image": "images/scene20.svg", "choices": [{"text": "Prendre le fragment", "next": 26}, {"text": "Détruire le fragment", "next": 25}, {"text": "Le cacher", "next": 27}]}, {"id": 21, "title": "Les archives interdites", "text": "Tu découvres que la guerre actuelle a déjà été prédite. Une phrase revient : « Le porteur de la marque décidera si les clans s'uniront ou s'effondreront. »", "image": "images/scene21.svg", "choices": [{"text": "Chercher le porteur", "next": 29}, {"text": "Détruire les archives", "next": 30}, {"text": "Retourner au temple", "next": 19}]}, {"id": 22, "title": "La capitale divisée", "text": "La capitale est désormais séparée entre les chevaliers, les civils et des groupes mystérieux qui réclament l'ancien ordre. Tu dois choisir à qui faire confiance.", "image": "images/scene22.svg", "choices": [{"text": "Soutenir les civils", "next": 25}, {"text": "Soutenir les chevaliers", "next": 23}, {"text": "Chercher un accord", "next": 30}]}, {"id": 23, "title": "Le combat des chevaliers", "text": "Un duel éclate dans une cour fortifiée. Ton adversaire manie une magie de foudre. Il prétend protéger le royaume, mais ses paroles cachent une peur profonde.", "image": "images/scene23.svg", "choices": [{"text": "Combattre loyalement", "next": 30}, {"text": "Tenter de parler", "next": 29}, {"text": "Utiliser ton artefact", "next": 28}]}, {"id": 24, "title": "Le secret du masque", "text": "La silhouette masquée révèle son visage : c'est le dernier Gardien du Crépuscule. Il explique que les démons ne sont pas les seuls responsables de la crise.", "image": "images/scene24.svg", "choices": [{"text": "L'écouter", "next": 29}, {"text": "Le combattre", "next": 23}, {"text": "Lui demander son alliance", "next": 30}]}, {"id": 25, "title": "La nuit des cendres", "text": "Le conflit atteint la capitale. Les flammes éclairent les remparts. Tu dois choisir entre sauver un groupe de civils ou poursuivre l'ennemi qui détient la clé du sceau.", "image": "images/scene25.svg", "choices": [{"text": "Sauver les civils", "next": 31}, {"text": "Poursuivre l'ennemi", "next": 32}, {"text": "Diviser tes forces", "next": 33}]}, {"id": 26, "title": "La porte des anciens", "text": "La clé ouvre une chambre contenant un artefact : le Cœur d'Aube. Il peut restaurer un ancien pacte, mais seulement si quelqu'un accepte d'en porter le prix.", "image": "images/scene26.svg", "choices": [{"text": "Prendre le Cœur d'Aube", "next": 33}, {"text": "Le laisser intact", "next": 30}, {"text": "Chercher une autre solution", "next": 29}]}, {"id": 27, "title": "Le marché des souvenirs", "text": "Tu perds un souvenir important, mais en échange tu apprends que le véritable instigateur de la guerre est caché parmi les défenseurs du royaume.", "image": "images/scene27.svg", "choices": [{"text": "Retourner à la capitale", "next": 22}, {"text": "Chercher l'instigateur", "next": 32}, {"text": "Explorer le temple", "next": 19}]}, {"id": 28, "title": "La puissance interdite", "text": "L'artefact amplifie ta magie. Une énergie immense traverse ton corps. Tu pourrais mettre fin au conflit rapidement, mais tu risques de rompre définitivement l'équilibre entre les clans.", "image": "images/scene28.svg", "choices": [{"text": "Libérer toute la puissance", "next": 34}, {"text": "Maîtriser l'énergie", "next": 33}, {"text": "Renoncer au pouvoir", "next": 29}]}, {"id": 29, "title": "Le dernier Gardien", "text": "Le dernier Gardien te révèle la vérité : l'ancien pacte n'était pas une prison, mais un accord entre peuples. Quelqu'un tente de transformer cet accord en guerre.", "image": "images/scene29.svg", "choices": [{"text": "Rétablir le pacte", "next": 35}, {"text": "Révéler la vérité au royaume", "next": 33}, {"text": "Détruire tous les artefacts", "next": 36}]}, {"id": 30, "title": "Le visage du traître", "text": "Le traître apparaît enfin. Il ne cherche pas à détruire le royaume : il veut provoquer assez de peur pour prendre le contrôle des clans. Tu dois décider comment l'arrêter.", "image": "images/scene30.svg", "choices": [{"text": "Le combattre", "next": 34}, {"text": "Révéler ses preuves au peuple", "next": 35}, {"text": "Proposer un pacte", "next": 33}]}, {"id": 31, "title": "La victoire des innocents", "text": "Tu as choisi de protéger les civils. Leur survie devient la preuve qu'un autre avenir est possible. Les clans commencent à écouter ton message.", "image": "images/scene31.svg", "choices": [{"text": "Terminer l'aventure", "next": 37}, {"text": "Poursuivre le combat", "next": 35}]}, {"id": 32, "title": "La chasse au traître", "text": "Tu retrouves le traître près du sceau. Il tente d'activer une armée ancienne. Sans l'artefact adéquat, tu dois gagner du temps jusqu'à l'arrivée de tes alliés.", "image": "images/scene32.svg", "choices": [{"text": "Tenir jusqu'à l'arrivée des alliés", "next": 35}, {"text": "Activer le sceau toi-même", "next": 34}]}, {"id": 33, "title": "Le pacte impossible", "text": "Les représentants des clans sont réunis. Le moindre geste peut déclencher une guerre. Tu présentes les preuves et proposes un nouvel accord.", "image": "images/scene33.svg", "choices": [{"text": "Signer le pacte", "next": 38}, {"text": "Refuser toute alliance", "next": 36}, {"text": "Faire confiance aux clans", "next": 35}]}, {"id": 34, "title": "La puissance contre le monde", "text": "Tu libères une puissance immense. La menace immédiate disparaît, mais le prix de cette décision change durablement l'équilibre du royaume.", "image": "images/scene34.svg", "choices": [{"text": "Accepter le prix", "next": 39}, {"text": "Chercher à reprendre le contrôle", "next": 38}]}, {"id": 35, "title": "L'aube des sept clans", "text": "La vérité est révélée et les clans comprennent enfin l'origine du conflit. Une nouvelle alliance se forme. Ton nom devient celui d'un médiateur plutôt que d'un conquérant.", "image": "images/scene35.svg", "choices": [{"text": "Voir la nouvelle ère", "next": 40}]}, {"id": 36, "title": "Le royaume sans magie", "text": "Les artefacts sont détruits. La magie ancienne disparaît presque entièrement. Le monde devient plus fragile, mais les peuples doivent désormais apprendre à vivre sans dépendre des anciens pouvoirs.", "image": "images/scene36.svg", "choices": [{"text": "Voir le nouvel avenir", "next": 40}]}, {"id": 37, "title": "Fin — Le protecteur", "text": "Grâce à tes choix, les innocents ont survécu et le royaume évite une nouvelle guerre. Ton aventure se termine sans couronne, mais avec la confiance de ceux que tu as sauvés.", "image": "images/scene37.svg", "choices": []}, {"id": 38, "title": "Fin — Le pacte de l'aube", "text": "Les clans acceptent un nouveau pacte. La paix n'est pas parfaite, mais chacun sait désormais ce qu'il risque de perdre. Le Cœur d'Aube reste scellé, gardien silencieux de cette promesse.", "image": "images/scene38.svg", "choices": []}, {"id": 39, "title": "Fin — Le prix du pouvoir", "text": "La menace disparaît, mais la puissance libérée laisse une marque irréversible sur le royaume. Tu as sauvé des milliers de vies, au prix d'un monde qui ne sera plus jamais le même.", "image": "images/scene39.svg", "choices": []}, {"id": 40, "title": "Fin — L'héritier du crépuscule", "text": "Tu refuses de devenir un souverain. Tu choisis de parcourir les royaumes pour maintenir l'équilibre entre les clans. L'histoire raconte qu'un jour, sept nouvelles bannières apparurent à l'horizon.", "image": "images/scene40.svg", "choices": []}];
let state = {
  scene: 1, hp: 100, power: 10, magic: 10, rep: 0,
  inventory: [], flags: {}, enemyHp: 0, combatScene: null
};
const sceneById = Object.fromEntries(scenes.map(s=>[s.id,s]));

function $(id){return document.getElementById(id)}
function newGame(){
  state={scene:1,hp:100,power:10,magic:10,rep:0,inventory:[],flags:{},enemyHp:0,combatScene:null};
  show("game"); renderScene(1);
}
function show(id){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  $(id).classList.add("active");
}
function backToMenu(){show("menu")}
function showCredits(){show("credits")}

function applyDestinationEffects(id){
  const e = {
    2:{rep:1},3:{magic:2},4:{rep:2},6:{item:"cle_argent"},7:{item:"parchemin"},
    8:{item:"plume_noire",magic:2},9:{magic:1},10:{hp:-10,magic:1},11:{power:2},
    12:{item:"potion",hp:10},13:{item:"cle_argent"},15:{magic:3},16:{rep:2},
    17:{item:"parchemin",rep:1},18:{rep:2},20:{item:"fragment_aube",magic:2},
    21:{rep:2},22:{rep:2},23:{power:2},24:{magic:2},25:{rep:3},
    26:{item:"coeur_aube",magic:3},27:{item:"masque",magic:2},28:{magic:4,hp:-8},
    29:{rep:3,magic:2},30:{rep:3}
  }[id];
  if(!e) return;
  if(e.hp) state.hp=Math.max(1,Math.min(100,state.hp+e.hp));
  if(e.power) state.power+=e.power;
  if(e.magic) state.magic+=e.magic;
  if(e.rep) state.rep+=e.rep;
  if(e.item && !state.inventory.includes(e.item)) state.inventory.push(e.item);
}

function conditionOK(next){
  // A few meaningful conditional branches.
  if(next===26 && !state.inventory.includes("cle_argent") && !state.inventory.includes("fragment_aube")) return false;
  if(next===28 && state.magic<12) return false;
  if(next===34 && state.power<12 && state.magic<14) return false;
  return true;
}
function choose(next){
  applyDestinationEffects(next);
  if(!conditionOK(next)){
    state.flags.lockedChoice=true;
    alert("Cette voie exige davantage de puissance ou un objet précis. Ton personnage n'est pas encore prêt.");
    updateUI(); return;
  }
  state.scene=next;
  if([11,23,30,32,34].includes(next)){
    state.combatScene=next; state.enemyHp=45 + (next===34?20:0);
  } else state.combatScene=null;
  renderScene(next);
}
function renderScene(id){
  const s=sceneById[id] || sceneById[1];
  $("sceneNumber").textContent="SCÈNE "+String(id).padStart(2,"0");
  $("sceneTitle").textContent=s.title;
  $("sceneText").textContent=s.text;
  $("sceneImage").src=s.image;
  $("sceneImage").alt=s.title;
  const cp=$("choices"); cp.innerHTML="";
  s.choices.forEach((c,i)=>{
    const b=document.createElement("button");
    b.textContent=String.fromCharCode(65+i)+" — "+c.text;
    b.onclick=()=>choose(c.next); cp.appendChild(b);
  });
  const combat = $("combatPanel");
  if(state.combatScene===id){ combat.classList.remove("hidden"); $("enemyHp").textContent=state.enemyHp; $("combatLog").textContent="Le combat commence."; cp.innerHTML=""; }
  else combat.classList.add("hidden");
  updateUI();
  window.scrollTo({top:0,behavior:"smooth"});
}

function combatAction(action){
  if(state.enemyHp<=0) return;
  let dmg=0, log="";
  if(action==="attack"){ dmg=Math.max(4,state.power+Math.floor(Math.random()*7)); log="Ton attaque touche l'ennemi."; }
  if(action==="magic"){ if(state.magic<5){log="Pas assez d'énergie magique.";} else {state.magic-=5; dmg=Math.max(8,state.magic+8); log="Une vague de magie frappe l'ennemi.";} }
  if(action==="potion"){ if(state.inventory.includes("potion")){state.inventory=state.inventory.filter(x=>x!=="potion");state.hp=Math.min(100,state.hp+30);log="La potion restaure tes forces.";}else log="Tu n'as plus de potion."; }
  if(action==="defend"){state.hp=Math.min(100,state.hp+4);log="Tu te défends et récupères ton souffle.";}
  state.enemyHp=Math.max(0,state.enemyHp-dmg);
  if(state.enemyHp>0 && action!=="potion"){
    const hit=5+Math.floor(Math.random()*9); state.hp=Math.max(1,state.hp-hit); log += " L'ennemi riposte et inflige "+hit+" dégâts.";
  }
  $("combatLog").textContent=log;
  $("enemyHp").textContent=state.enemyHp;
  if(state.enemyHp<=0){
    state.flags["won_"+state.combatScene]=true;
    const next = state.combatScene===34 ? 39 : (state.combatScene===32 ? 35 : 30);
    state.combatScene=null;
    setTimeout(()=>renderScene(next),450);
  } else updateUI();
}

function updateUI(){
  $("hp").textContent=state.hp; $("power").textContent=state.power; $("magic").textContent=state.magic; $("rep").textContent=state.rep;
  const labels={cle_argent:"Clé d'argent",parchemin:"Parchemin interdit",plume_noire:"Plume noire",potion:"Potion",fragment_aube:"Fragment d'aube",coeur_aube:"Cœur d'Aube",masque:"Masque du Gardien"};
  $("inventoryList").innerHTML=state.inventory.length?state.inventory.map(x=>"<span>"+(labels[x]||x)+"</span>").join(""):"Vide";
}
function saveGame(){
  localStorage.setItem("chroniques_crepuscule_save",JSON.stringify(state));
  alert("Partie sauvegardée.");
}
function loadGame(){
  const raw=localStorage.getItem("chroniques_crepuscule_save");
  if(!raw){alert("Aucune sauvegarde trouvée.");return}
  try{state=JSON.parse(raw);show("game");renderScene(state.scene);}catch(e){alert("Sauvegarde invalide.");}
}
function continueGame(){
  const raw=localStorage.getItem("chroniques_crepuscule_save");
  if(raw) loadGame(); else newGame();
}
