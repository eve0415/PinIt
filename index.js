const { Client } = require("discord.js");
const client = new Client({ partials: ["MESSAGE", "REACTION"] });

client.on("ready", () => console.log(`${client.user.tag} has logged in and is Ready!`));

client.on("messageReactionAdd", async (reaction, user) => {
	// Ignore when PinIt react
	if (user === client.user) return;
	
	// Ignore when the reaction wasn't :pushpin: or :x:
	if (!(reaction.emoji.name === "📌" || reaction.emoji.name === "❌")) return;
	
	const data = await reaction.fetch();
	
	// Ignore when the reaction event fired in DM
	if (!data.message.guild) return;
	
	const guild = data.message.guild;
	const guildMember = data.message.guild.member(user.id);
	
	const roleID = new Array;
	const blacklist = ["@everyone", "bot", "robot"];
	
	guild.me.roles.cache.forEach(role => {
		if (role.managed) return;
		if (blacklist.includes(role.name.toLowerCase())) return;
		roleID.push(role.id);
	});
	
	guildMember.roles.cache.forEach(role => {
		if (roleID.length && roleID.includes(role.id) || !roleID.length) {
			// Treat with 📌
			if (reaction.emoji.name === "📌" && data.count === 1) {
				reaction.remove();
				data.message.pin();
				data.message.react("❌");
			}
			
			// Treat with ❌
			if (reaction.emoji.name === "❌" && data.message.pinned) {
				reaction.remove();
				data.message.unpin();
			}
		} else {
			reaction.users.remove(guildMember);
		}
	});
});

process.on("uncaughtException", err => {
	const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
	console.error(`Uncaught Exception: ${errorMsg}`);
	console.error(err);
	
	process.exit(1);
});

process.on("unhandledRejection", err => {
	console.error(`Unhandled rejection: ${err}`);
	console.error(err);
});

client.login(process.env.token);
