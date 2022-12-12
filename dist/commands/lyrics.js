"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const i18n_1 = require("../utils/i18n");
// @ts-ignore
const lyrics_finder_1 = tslib_1.__importDefault(require("lyrics-finder"));
const index_1 = require("../index");
exports.default = {
    name: "lyrics",
    aliases: ["ly"],
    description: i18n_1.i18n.__("lyrics.description"),
    async execute(message) {
        const queue = index_1.bot.queues.get(message.guild.id);
        if (!queue || !queue.songs.length)
            return message.reply(i18n_1.i18n.__("lyrics.errorNotQueue")).catch(console.error);
        let lyrics = null;
        const title = queue.songs[0].title;
        try {
            lyrics = await (0, lyrics_finder_1.default)(queue.songs[0].title, "");
            if (!lyrics)
                lyrics = i18n_1.i18n.__mf("lyrics.lyricsNotFound", { title: title });
        }
        catch (error) {
            lyrics = i18n_1.i18n.__mf("lyrics.lyricsNotFound", { title: title });
        }
        let lyricsEmbed = new discord_js_1.MessageEmbed()
            .setTitle(i18n_1.i18n.__mf("lyrics.embedTitle", { title: title }))
            .setDescription(lyrics)
            .setColor("#F8AA2A")
            .setTimestamp();
        if (lyricsEmbed.description.length >= 2048)
            lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
        return message.reply({ embeds: [lyricsEmbed] }).catch(console.error);
    }
};
//# sourceMappingURL=lyrics.js.map