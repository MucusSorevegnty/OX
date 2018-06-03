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
      
})

bot.login(token);
bot.on('message' (message) =>
message.content.toLowerCase().includes("merde"){
message.reply("Évitez de dire une insulte ! Merci.")
});
