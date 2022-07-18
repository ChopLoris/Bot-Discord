module.exports = {
	name: "guildMemberRemove",
	async execute(member) {
		member.guild.channels.cache.get("728635019093999727").send(`${member.user} has left the server!`);
	}
}