const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Bot kann nun genutzt werden!")

    setInterval(async function() {

  
  
        let status = ['Support Server | >support', 'v1', 'DeroBot', 'Manage Server | >help', `auf ${bot.guilds.size} Servern`];
        let chosen = status[Math.floor(Math.random() * status.length)];
      
        bot.user.setActivity(chosen, {type: "STREAMING"});
      
      
      
    }, 8000);
});

bot.on("message", msg => {
    if (msg.author.bot || !msg.content.startsWith(">"))  return;
    const args = msg.content.slice(">".length).split(" ");
    const command = args.shift().toLowerCase();

    if (command == "help") {
        msg.channel.send("Hilfe ist doch immer schön, oder?")
    };
    if (command == "support") {
        msg.delete();
        let support = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription("Dies ist unserer Support Discord Server")
        .addField("Support Server", `https://discord.gg/WQ3jRBK`)
        .setFooter(`Offizieller Dero Bot ©`)
        msg.channel.send(support)
    };
});
    


bot.login("NTEzNjU3OTg4NjM3MTMwNzYy.DtLM8A.0MfdJbznSby5lXEQ1YuqqzNniBw")