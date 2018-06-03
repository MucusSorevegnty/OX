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
   if(message.content.toLowerCase().includes("merde")){
       message.delete();
       message.reply("Évitez de dire une insulte ! Merci.");
}
   });
        
    bot.login(token);
