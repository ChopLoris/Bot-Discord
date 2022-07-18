const validate = require('validate.js')
const { MessageEmbed } = require("discord.js")
const mysql = require('mysql');
let config = require('../db/config.js');
let connection = mysql.createConnection(config)
require("dotenv").config();

module.exports = {
	name: "interactionCreate",
	async execute(interaction) {
		var constraints = {
			nameUCP: {
				presence: true,
				format: {
					pattern: /^[a-zA-Z0-9]+$/,
					message: "Format yang anda gunakan tidak boleh menggunakan symbol / space!"
				}
			}
		}


		if(interaction.isModalSubmit()) {

			let message;

			if(interaction.customId === "modalRegister") {
				const nameUCP = interaction.fields.getTextInputValue('inputnameucp')
				let cekValidate = validate({nameUCP: nameUCP}, constraints);
				if(!cekValidate) {
					let queryDiscord = `SELECT * FROM accounts WHERE DiscordID='${interaction.user.id}'`;
					connection.query(queryDiscord, async function(err, result) {
						if(err) throw err;
						if(result.length === 0) {
							let queryCek = `SELECT * FROM accounts WHERE Username='${nameUCP}'`;
							connection.query(queryCek, async function(err, result) {
								if(err) throw err;
								if(result.length === 0) {
									let verifyCode = "RR-"+Math.floor(1000 + Math.random() * 9000);
									let query = `INSERT INTO accounts (Username, DiscordID, VerifyCode) VALUES ('${nameUCP}', '${interaction.user.id}', '${verifyCode}')`
									connection.query(query, async function(err, result) {
										if(err) throw err;

										await interaction.member.setNickname(nameUCP);
										await interaction.member.roles.add(process.env.ROLE_ID);
										await interaction.user.send('```Verify Code UCP\n\nUCP anda telah berhasil di verifikasi oleh server\nGunakan nama UCP : '+nameUCP+'\nCode Verify : '+verifyCode+'\nHappy Roleplay.```');
										message = await interaction.reply({
											content: `> ✔ User ${nameUCP} berhasil di daftarkan, segera login dan verifikasi akun UCP anda!`,
											ephemeral: true
										})
									})
								} else {
									message = await interaction.reply({
										content: `> ❌ Nama UCP ${nameUCP} sudah pernah digunakan, silahkan gunakan nama yang lain!`,
										ephemeral: true
									})
								}
							})
						} else {
							message = await interaction.reply({
								content: `> ❌ Anda sudah memiliki akun UCP tidak bisa untuk mendaftar kembali!`,
								ephemeral: true
							})
						}
					})
				} else {
					message = await interaction.reply({
						content: `> ❌ ${cekValidate.nameUCP}!`,
						ephemeral: true
					})
				}

				return message;
			}
		}

		if (!interaction.isCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		if(command.permission) {
			const channelId = interaction.channelId;

			if(channelId !== command.permission) {
				const Error1 = new MessageEmbed()
				.setColor("RED")
				.setDescription(`⛔ Anda tidak memiliki akses untuk menggunakan command ini.`)
				return interaction.reply({
					embeds: [Error1],
					ephemeral: true,
				})
			}
		}

		try {
			await command.execute(interaction);
		} catch (err) {
			if (err) console.error(err);

			await interaction.reply({
				content: "An error occurred while executing that command.",
				ephemeral: true,
			});
		}
	}
}