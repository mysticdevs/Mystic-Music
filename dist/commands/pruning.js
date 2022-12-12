"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const i18n_1 = require("../utils/i18n");
exports.default = {
    name: "pruning",
    description: i18n_1.i18n.__("pruning.description"),
    async execute(message) {
        let config;
        try {
            config = require("../config.json");
        }
        catch (error) {
            config = undefined;
            console.error(error);
        }
        if (config) {
            config.PRUNING = !config.PRUNING;
            (0, fs_1.writeFile)("./config.json", JSON.stringify(config, null, 2), (err) => {
                if (err) {
                    console.log(err);
                    return message.channel.send(i18n_1.i18n.__("pruning.errorWritingFile")).catch(console.error);
                }
                return message.channel
                    .send(i18n_1.i18n.__mf("pruning.result", {
                    result: config.PRUNING ? i18n_1.i18n.__("common.enabled") : i18n_1.i18n.__("common.disabled")
                }))
                    .catch(console.error);
            });
        }
    }
};
//# sourceMappingURL=pruning.js.map