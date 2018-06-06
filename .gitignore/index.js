/* BOT CONFIGURATION */
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.SECRET;
const admins_id = [
'285418210965323776'
];
const prefix = "az.";
/*  /-- BOT CONFIGURATION --/  */

bot.on('ready',  ()  =>  {
      bot.user.setActivity(`az.help | ${bot.guilds.size} serveur | Par Azkun.`);
      bot.user.setAvatar("https://cdn.discordapp.com/attachments/452786343416692736/453265503851380766/JPEG_20180604_203413.jpg");
      console.log("Prêt -----------------");
})

 bot.on('message', message => {
    var randomHex = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
  });
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

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
if(command == "casino"){
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
       
if(command === "help"){
    var embed_help = new Discord.RichEmbed()
.setDescription("**Bienvenue dans l'aide de l'Azkun bot !** \n \n `az.8ball` : Répond à une question posée ! \n `az.casino` : Joue au casino ! \n `az.help` : Te dis la liste des commandes ! \n `az.info` : Te donnes plein d'informations à propos d'AzkunBot \n `az.invite` : T'envoie le lien pour m'ajouter sur tes serveurs ! \n `az.ping` : Te donne le temps de latence avec le serveur ! \n `az.say` : Répète un message !")
.setAuthor("AzkunBot","https://cdn.discordapp.com/attachments/452786343416692736/453265503851380766/JPEG_20180604_203413.jpg")
.setFooter("Commande demandée par " + message.author.username, message.author.avatarURL)
.setColor(randomHex);
message.channel.send(embed_help);
}
if(command === "info"){
    var info_embed = new Discord.RichEmbed()
    .setAuthor("Voici les informations du bot", "https://cdn.discordapp.com/attachments/452786343416692736/453265503851380766/JPEG_20180604_203413.jpg")
     .addField("1) :desktop: Développeurs !"," Ce bot a été développé par : \n Superyastiquereuros \n Azkun \n \n")
     .addField("2) :date: Dates", "Azkunbot est né en 2018, le dimanche 3 juin ! \n \n")
    .addField("3) :newspaper: Hébergement", " L'hébergeur n'est pas encore défini !")
    .addField("4) :paperclips: Liens", "[Rejoindre mon serveur de support](https://discord.gg/XCzk8TF)\n[M'inviter sur votre serveur](https://discordapp.com/api/oauth2/authorize?client_id=451814700653740032&scope=bot&permissions=1836383425)")
    .setFooter("Commande demandée par " + message.author.username, message.author.avatarURL)
    .setColor(randomHex);
    message.channel.send(info_embed);
}
if(command === "8ball"){
    let question = args.slice(1).join(" ");
    if(!question){
       message.reply(":x: Merci de poser une question valide.")
    }else{
    let repliques = [
        "Oui.",
        "Non.",
        "Probablement.",
        "Avec certitude",
        "Tout indique que non"
    ]
    let reponse = (repliques[Math.floor(Math.random() * repliques.length)])
    message.reply(":8ball: **" + reponse + "**, " + message.author.username + ":8ball:")
}
    
}
if(command === "ping"){
    message.reply('Pong :ping_pong: `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
}
if(command === "say"){
    message.delete();
    let texte = args.slice(0).join(" ");
    if(!texte){
        message.reply("Merci d'indiquer le texte à répeter !");
    }else{
        message.reply(texte);
    }
}

if(command ==="invite"){
                message.reply(" 💌 Merci à toi si tu m'ajoute |  https://discordapp.com/api/oauth2/authorize?client_id=451814700653740032&scope=bot&permissions=1836383425")
 }

 });
        
bot.login(token);
