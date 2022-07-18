const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed, Modal, TextInputComponent } = require('discord.js')
require("dotenv").config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName("formregistrasi")
		.setDescription("Command only admin, make form registration for UCP Account"),
    permission: process.env.CHANNEL_ID,
	async execute(interaction) {
		const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('register')
                    .setEmoji('📝')
                    .setLabel('Register')
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                .setCustomId('reverif')
                .setEmoji('🔁')
                .setLabel('Reverif UCP')
                .setStyle('PRIMARY')
            )

        const embed = new MessageEmbed()
                .setDescription('Harap gunakan Official Register Tool dengan sebaik baiknya')
                .addFields(
                    { name: "Registration Note:", value: "> • Dibutuhkan Akun Discord yang sudah aktif Minimal 30 hari.\n> • Harap masukkan nama UCP yang valid! (Bukan nama Roleplay).\n> • Jika menyalah gunakan ticket. anda akan Terima Sanksi." }
                )
                .setColor('LIGHT_GREY')
                .setAuthor({ name: "Riverside Roleplay", iconURL: "https://i.imgur.com/IWr8afI.png" })

        await interaction.reply ({
            embeds: [embed],
            components: [row],
        })

        const filter = i => i.customId === 'register' || i.customId === 'reverif' && interaction.user.id === i.user.id;

        const collector = interaction.channel.createMessageComponentCollector({ filter });

        collector.on('collect', async i => {

            if(i.customId === "register") {
                const modal = new Modal()
                    .setCustomId('modalRegister')
                    .setTitle('Register new UCP')

                const inputUCP = new TextInputComponent()
                    .setCustomId('inputnameucp')
                    .setLabel('Name UCP')
                    .setStyle('SHORT')
                    .setMinLength(4)
                    .setMaxLength(15)
                    .setPlaceholder('Insert your UCP name to registration')

                const inputActionRow = new MessageActionRow().addComponents(inputUCP)

                modal.addComponents(inputActionRow)

                await i.showModal(modal)
            }

            //await i.update({ content: 'A button was clicked!', components: [] });
        });
	},
};
