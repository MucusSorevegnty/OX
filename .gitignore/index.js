/* BOT CONFIGURATION */
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.SECRET;
const admins_id = [
'285418210965323776'
];
var prefix = "az.";
/*  /-- BOT CONFIGURATION --/  */

bot.on('ready',  ()  =>  {
      bot.user.setActivity(`az.help | ${bot.guilds.size} serveurs | Par Azkun.`);
      console.log("Prêt -----------------");
})

 bot.on('message', message => {
    var randomHex = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
  });
  const args = message.content.slice(prefix.length).split(' ');
  
    if(message.content.toLowerCase().includes("merde" )){
        if(message.member.hasPermission("ADMINISTRATOR")){
            return;
        }else{
        message.delete();
        message.reply("Évitez de dire une insulte ! Merci.");
        }
    }
if(message.content.toLowerCase().includes("pute" )){
    if(message.member.hasPermission("ADMINISTRATOR")){
        return;
    }else{
    message.delete();
    message.reply("Évitez de dire une insulte ! Merci.");
    }
}
if(message.content.startsWith(prefix + "casino")){
    let repliezes = [
            "**Bienvenue dans le casino** ! Ici ! Tu vas savoir si tu à de la chance : \n ===== \n 💎♦♠ \n ===== \n **Dommage ! Tu a perdu :/**",
            "**Bienvenue dans le casino** ! Ici ! Tu vas savoir si tu à de la chance : \n ===== \n 💎♠💎 \n ===== \n **Dommage ! Tu a perdu :/**",
            "**Bienvenue dans le casino** ! Ici ! Tu vas savoir si tu à de la chance : \n ===== \n 💎💎💎 \n === \n **Oh mon dieu ! Tu a gagné ! Bravo à toi !!!!!!!**",
            "**Bienvenue dans le casino** ! Ici ! Tu vas savoir si tu à de la chance : \n ===== \n 💎♠💣 \n ===== \n **Dommage ! Tu a perdu :/**",
            "**Bienvenue dans le casino** ! Ici ! Tu vas savoir si tu à de la chance : \n ===== \n 💣💣💣 \n ===== \n **Dommage ! Tu a perdu :/ et en plus ! Trois bombes d'un coup équivaut à une explosion !!!!!! Ahhh !!! BOOOOUUUUUMMMMMMMMKZIDIZKCKL !L!!!**"
        ]
        let casino = (repliezes[Math.floor(Math.random() * repliezes.length)])
        message.reply(casino); 
    }
if(message.content.toLowerCase().includes("conard" )){
    if(message.member.hasPermission("ADMINISTRATOR")){
        return;
    }else{
    message.delete();
    message.reply("Évitez de dire une insulte ! Merci.");
    }
}
if(message.content.toLowerCase() == "con" ){
    message.delete();
    message.reply("Évitez de dire une insulte ! Merci.");
}
if(message.content.toLowerCase().includes("connasse" )){
    if(message.member.hasPermission("ADMINISTRATOR")){
        return;
    }else{
    message.delete();
    message.reply("Évitez de dire une insulte ! Merci.");
    }
}
if(message.content.toLowerCase().includes("conasse" )){
    if(message.member.hasPermission("ADMINISTRATOR")){
        return;
    }else{
    message.delete();
    message.reply("Évitez de dire une insulte ! Merci.");
    }
}
if(message.content.toLowerCase().includes("tg" )){
    if(message.member.hasPermission("ADMINISTRATOR")){
        return;
    }else{
    message.delete();
    message.reply("Évitez de dire une insulte ! Merci.");
    }
}
       
if(message.content.startsWith(prefix + "help")){
    var embed_help = new Discord.RichEmbed()
.setDescription("__**Bienvenue dans l'aide de l'Azkun bot !**__ \nAzkunBot à pour l'instant un total de `15` commandes.\n \n `az.8ball` : Répond à une question posée ! \n `az.attackZombie` : Permet d'attaquer un zombie ! \n `az.casino` : Joue au casino ! \n `az.google` : Permet d'éffectuer une rehcrhe google ! \n `az.help` : Te dis la liste des commandes ! \n `az.hug` : Poste une image de callin au hasard ! \n`az.info` : Te donnes plein d'informations à propos d'AzkunBot \n `az.invite` : T'envoie le lien pour m'ajouter sur tes serveurs ! \n `az.kiss` : Poste une image de bisous au hsard ! \n `az.pfc`: Joue au jeu du pierre, feuille, ciseaux ! \n `az.ping` : Te donne le temps de latence avec le serveur ! \n `az.playgame` : Permet de consulter la liste des mini-jeux ! \n `az.say` : Répète un message ! \n `az.slap` : Poste une image de claque au hasard ! \n `az.someone` : Mentionne une personne du serveur au hasard ! \n ")
.setAuthor("AzkunBot", bot.user.avatarURL)
.setFooter("Commande demandée par " + message.author.username, message.author.avatarURL)
.setColor(randomHex);
message.channel.send(embed_help);
}


if(message.content.startsWith(prefix + "playgame")){
    message.channel.sendMessage("🎮 Bienvenue dans le menu des Minis Jeux ! 🎮 \n `az.playgameHulk`      `az.playgameEat` \n `az.playgameDoodles`         `az.playgamePierreP` \n \n Voici les seuls jeux pour l'instant !")
}
if(message.content.startsWith(prefix + "playgameHulk")){
    message.channel.sendMessage("Bienvenue dans le PlayGame Hulk ! Es-tu prêt à jouer ? Si oui, écris az.playgameHulkReady ! Dans ce jeu, tu devra démolir le plus de ville possible ! Attention ! Un classement a été créé et est en bêta ! Pour l'avoir, fais az.playgameHulkYStats ! Bon en tout cas, bonne chance + message.author.username + ! ")
    }
    if(message.content.startsWith(prefix + "playgameHulkYStats")){
        message.channel.sendMessage("__**Voici le grand classement**__ \n (Tu n'est pas compté dedans) \n \n \n 1 - Azkun & Superyastiquereuros | 100000000002019288828292992929292992918373929283829292002 \n 2 - Azkunbot | 1000000000000000000001230000000000000200004002004 \n 3 - TheCheater (PNJ) - Infinite -10000000000000000 \n -=[.                      .]=- \n Voilà pour le top trois ! Désolé ce n'est encore qu'en bêta !")
        }
     if(message.content.startsWith(prefix + "website")){
        message.channel.sendMessage(`:love_letter: | ${message.author.username}, merci d'avance si tu visite le site ! https://azkunbot.simplesite.com/`)
        }
if(message.content.startsWith(prefix + "pfc")){
    console.log("Commande pfc")
		let splitMessage = message.content.split(" "); 
				var userChoice = splitMessage[1]; 
				var botChoice = Math.floor(Math.random() * 3); 
				var stone = ":new_moon:"; 
				var leaf = ":fallen_leaf:"; 
                var scissors = ":scissors:";
                switch(botChoice){
                    case 0:
                    var botChoice = "Pierre"
					break;
					case 1:
					var botChoice = "Feuille"
					break;
					case 2:
					var botChoice = "Ciseaux"
					break;
					default:
					message.channel.send(":warning:")
				}
				switch ( userChoice ) {
					case "Pierre":
					case "pierre":
					if (botChoice === "Pierre") {
						message.channel.send("😃 \n **Égalité** car **Azkunbot** a également utilisé **Pierre**" + stone);
					} else if (botChoice === "Feuille") {
						message.channel.send("😢 \n Vous avez perdu car **AzkunBot** a utilisé **Feuille**" + leaf);
					} else if (botChoice === "Ciseaux") {
						message.channel.send("😁 \n Vous gagnez car **AzkunBot** a utilisé **Ciseuax** " + scissors);
					}
                    break;
					case "Feuille":
					case "feuille":
					if (botChoice === "Pierre") {
						message.channel.send("😁 \n Vous gagnez car **AzkunBot** a utilisé **Pierre** "+ stone);
					} else if (botChoice === "Feuille") {
						message.channel.send("😃 \n **Égalité** car **Azkunbot** a également utilisé **Feuille**" + leaf);
					} else if (botChoice === "Ciseaux") {
						message.channel.send("😢 \n Vous avez perdu car **AzkunBot** a utilisé **Ciseaux**" + scissors);
					}
					break;
					case "Ciseaux":
					case "ciseaux":
					if (botChoice === "Pierre") {
						message.channel.send("😢 \n Vous avez perdu car **AzkunBot** a utilisé **Pierre**" + stone);

					} else if (botChoice === "Feuille") {
						message.channel.send("😁 \n Vous gagnez car **AzkunBot** a utilisé **Feuille**" +leaf)
						
					} else if (botChoice === "Ciseaux") {
						message.channel.send("😃 \n **Égalité** car **Azkunbot** a également utilisé **Ciseaux**" + scissors)
					}
					break;
					default:
					message.channel.send(":warning: Merci d'entrez un choix valide ! :warning: \n **Pierre** " +stone+ " ; **Feuille** " +leaf+ " ou **Ciseaux** " +scissors+ " !")
					message.channel.send()
				}
    
    }
    
if(message.content.startsWith(prefix + "info")){
    var info_embed = new Discord.RichEmbed()
    .setAuthor("Voici les informations du bot", bot.user.avatarURL)
     .addField("1) :desktop: Développeurs !"," Ce bot a été développé par : \n Superyastiquereuros \n Azkun \n \n")
     .addField("2) :date: Dates", "Azkunbot est né en 2018, le dimanche 3 juin ! \n \n")
    .addField("3) :newspaper: Hébergement", " L'hébergeur n'est pas encore défini !")
    .addField("4) :paperclips: Liens", "[Rejoindre mon serveur de support](https://discord.gg/XCzk8TF)\n[M'inviter sur votre serveur](https://discordapp.com/api/oauth2/authorize?client_id=451814700653740032&scope=bot&permissions=1836383425)\n[Visiter mon site web](https://azkunbot.simplesite.com)")
    .setFooter("Commande demandée par " + message.author.username, message.author.avatarURL)
    .setColor(randomHex);
    message.channel.send(info_embed);
}
if(message.content.startsWith(prefix + "8ball")){
    let question = args.slice(1).join(" ");
    if(!question){
       message.channel.sendMessage(":x: Merci de poser une question valide.")
    }else{
    let repliques = [
        "Oui.",
        "Non.",
        "Probablement.",
        "Avec certitude",
        "Tout indique que non"
    ]
    let reponse = (repliques[Math.floor(Math.random() * repliques.length)])
    message.channel.sendMessage(":8ball: **" + reponse + "**, " + message.author.username + ":8ball:")
}
    
}
if(message.content.startsWith(prefix +"ping")){
    message.channel.sendMessage('Pong :ping_pong: `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
}
if(message.content.startsWith(prefix + "say")){
    message.delete();
    let texte = args.slice(1).join(" ");
    if(!texte){
        message.channel.sendMessage("Merci d'indiquer le texte à répeter !");
    }else{
        message.channel.sendMessage(texte);
    }
}

if(message.content.startsWith(prefix + "someone")){
    if(!message.guild){
        message.channel.sendMessage(`Cette commmande doit être éxécuté sur une guild !`)
    }else{
    message.channel.sendMessage(`Je chosis **${message.guild.members.random().displayName}** !`);
    }
}

if(message.content.startsWith(prefix + "hug")){
    let hug_images = [
        "https://cdn.discordapp.com/attachments/423542169677201439/454321571033645059/hug.png",
        "https://cdn.discordapp.com/attachments/423542169677201439/454321703754006548/hug.png",
        "https://cdn.discordapp.com/attachments/423542169677201439/454321669151129600/hug.png"
    ]
    let hug1 = (hug_images[Math.floor(Math.random() * hug_images.length)]);
     message.channel.sendFile(hug1);
}
if(message.content.startsWith(prefix + "kiss")){
    let kiss_iamges = [
        "https://cdn.weeb.sh/images/B1NwJg9Jz.gif",
        "https://cdn.weeb.sh/images/ry-r3TuD-.gif",
        "https://cdn.weeb.sh/images/r10UnpOPZ.gif"
    ]
    let kiss1 = (kiss_iamges[Math.floor(Math.random() * kiss_iamges.length)]);
    message.channel.sendFile(kiss1);
}
if(message.content.startsWith(prefix + "slap")){
    let slap_images = [
    "https://cdn.weeb.sh/images/SJzT7JKP-.gif",
    "https://cdn.weeb.sh/images/ByHUMRNR-.gif",
    "https://cdn.weeb.sh/images/r1dc7yFvZ.gif"
    ]
    let slap1 = (slap_images[Math.floor(Math.random() * slap_images.length)]);
    message.channel.sendFile(slap1);
}
if(message.content.startsWith(prefix + "attackZombie")){
    let deroulements = [ 
                  "Recherche d'un Zombie en cours.... Zombie trouvé ! \n ⚔ Voulez vous combattre *Greg* Avec un ami ? (Utilise la commande az.attackZombie1 si tu veux le faire seul, ou az.attackZombie2 si tu veux jouer avec un ami, ou az.attackZombie0 si vous voulez annuler !) ⚔",
            "Recherche d'un Zombie en cours.... \n 😥 Aucun Zombie trouvé :/ reesayez plus tard ! 😥",
            "Recherche d'un Zombie en cours.... \n 😉 Zombie trouvé, mais ton personnage est malade, reesaye plus tard 😉",
                  "Recherche d'un Zombie en cours.... Zombie trouvé ! \n ⚔ Voulez vous combattre *Enissay* Avec un ami ? (Utilise la commande az.attackZombie1 si tu veux le faire seul, ou az.attackZombie2 si tu veux jouer avec un ami, ou az.attackZombie0 si vous voulez annuler !) ⚔",
                  "Recherche d'un Zombie en cours.... Zombie trouvé ! \n ⚔ Voulez vous combattre *EthanLink* Avec un ami ? (Utilise la commande az.attackZombie1 si tu veux le faire seul, ou az.attackZombie2 si tu veux jouer avec un ami, ou az.attackZombie0 si vous voulez annuler !) ⚔",
                  "Recherche d'un Zombie en cours.... Zombie trouvé ! \n ⚔ Voulez vous combattre *JuL* Avec un ami ? (Utilise la commande az.attackZombie1 si tu veux le faire seul, ou az.attackZombie2 si tu veux jouer avec un ami, ou az.attackZombie0 si vous voulez annuler !) ⚔"
        ]
        let deroulement_01 = ( deroulements[Math.floor(Math.random() * deroulements.length)])
        message.channel.sendMessage(deroulement_01);
    }
    
    if(message.content.startsWith(prefix + "attackZombie0")){
            message.channel.sendMessage("D'accord ! J'annule donc la recherche ! Adieu Zombie....");
    }
    if(message.content.startsWith(prefix + "google")){
        var recherche = args.join(' ').slice(7);
        if(recherche){
        var google_embed = new Discord.RichEmbed()
        .setTitle('Recherhe Google')
        .setDescription(`Votre recherche a été effctué avec succès ! \n**Voici le lien de votre recherhe**: https://www.google.com/search?q=${recherche}`)
        .setFooter('Commande demandée par ' + message.author.username, message.author.avatarURL)
        .setColor(randomHex)
        message.channel.send(google_embed);
        }else{
            return;
        }
    } 
if(message.content.startsWith(prefix + "invite")){
                message.channel.sendMessage(" 💌 Merci à toi si tu m'ajoute |  https://discordapp.com/api/oauth2/authorize?client_id=451814700653740032&scope=bot&permissions=1836383425")
 }});
        
bot.login(token);
