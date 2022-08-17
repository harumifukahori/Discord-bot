const Discord = require("discord.js");
const client = new Discord.Client();
const config = require ("./config.json");


client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);

});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). Members: ${guild.memberCount} o/`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);

});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do server: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);

});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const comando = args.shift(). toLowerCase ();

if(comando ==="ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Ouchie ouch! ${m.createdTimestamp - message.createdTimestamp}ms.`)

}

});

client.login(config.token);