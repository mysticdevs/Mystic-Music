"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../utils/i18n");
exports.default = {
    name: "invite",
    description: i18n_1.i18n.__("invite.description"),
    execute(message) {
        return message
            .member.send(`https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot
    `)
            .catch(console.error);
    }
};
//# sourceMappingURL=invite.js.map