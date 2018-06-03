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
      console.log("Prêt -----------------");
})

 bot.on('message', message => {
    var randomHex = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
  });
  const splitedMessage = message.content.slice().split(" ");
  const args = splitedMessage.slice(1); 
  const argsNotSplited = args.join(" ");

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
       
if(message.content == prefix + "help"){
    var embed_help = new Discord.RichEmbed()
.setDescription("**Bienvenue dans l'aide de l'Azkun bot !** \n \n `az.8ball` : Répond à une question posée ! \n `az.help` : Te dis la liste des commandes ! \n `az.info` : Te donnes plein d'informations à propos d'AzkunBot \n `az.invite` : T'envoie le lien pour m'ajouter sur tes serveurs ! \n `az.ping` : Te donne le temps de latence avec le serveur ! \n `az.say` : Répète un message !")
.setAuthor("AzkunBot","https://images-ext-1.discordapp.net/external/XiXgcCRJKLVxU50oUdTjxxP7RTfDthfYEkr5ZV0Galo/https/cdn.discordapp.com/icons/452777236219822091/c91d75b458403b9c2fad975d01b05112.jpg")
.setFooter("Commande demandée par " + message.author.username, message.author.avatarURL)
.setColor(randomHex);
message.channel.send(embed_help);
}
if(message.content == prefix + "info"){
    var info_embed = new Discord.RichEmbed()
    .setAuthor("Voici les informations du bot", "https://images-ext-1.discordapp.net/external/XiXgcCRJKLVxU50oUdTjxxP7RTfDthfYEkr5ZV0Galo/https/cdn.discordapp.com/icons/452777236219822091/c91d75b458403b9c2fad975d01b05112.jpg")
     .addField("1) :desktop: Développeurs !"," Ce bot a été développé par : \n Superyastiquereuros \n Azkun \n \n")
     .addField("2) :date: Dates", "Azkunbot est né en 2018, le dimanche 3 juin ! \n \n")
    .addField("3) :newspaper: Hébergement", " L'hébergeur n'est pas encore défini !")
    .addField("4) :paperclips: Liens", "[Rejoindre mon serveur de support](https://discord.gg/XCzk8TF)\n[M'inviter sur votre serveur](https://discordapp.com/api/oauth2/authorize?client_id=451814700653740032&scope=bot&permissions=1836383425)")
    .setFooter("Commande demandée par " + message.author.username, message.author.avatarURL)
    .setColor(randomHex);
    message.channel.send(info_embed);
}
if(message.content == prefix + "8ball"){
    let args = message.content.split(" ".slice(1));
    let tte = args.join(" ");
    if(!tte){
       return  message.reply(":x: Merci de poser une question valide.");
    let reponses = [
        "Oui.",
        "Non.",
        "Probablement.",
        "Avec certitude",
        "Tout indique que non"
    ]
    let reponse_01 = (reponses[Math.floor(Math.random() * reponses.length)])
    message.reply(":8ball: **" + reponse_01 + "**, " + message.author.username + ":8ball:")
    }
}/*^ 
   | 
   Non fonctionnel*/
if(message.content == prefix + "ping"){
    message.reply('Pong :ping_pong: `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
}
if(message.content == prefix + "say"){
            message.reply(`T'es qui pour me faire dire quoi. Mdr :joy: !`)
}
if(message.content == prefix + "invite"){
                message.reply(" 💌 Merci à toi si tu m'ajoute |  https://discordapp.com/api/oauth2/authorize?client_id=451814700653740032&scope=bot&permissions=1836383425")
 }

 });
        
bot.login(token);
