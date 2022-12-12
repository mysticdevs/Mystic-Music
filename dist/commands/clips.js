"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../utils/i18n");
const fs_1 = require("fs");
exports.default = {
    name: "clips",
    description: i18n_1.i18n.__("clips.description"),
    execute(message) {
        (0, fs_1.readdir)("./sounds", function (err, files) {
            if (err)
                return console.log("Unable to read directory: " + err);
            let clips = [];
            files.forEach(function (file) {
                clips.push(file.substring(0, file.length - 4));
            });
            message.reply(`${clips.join(" ")}`).catch(console.error);
        });
    }
};
//these are some music commands
//make sure to fill all the infos in the config file other wise bot will crash
//now we can run the code
//# sourceMappingURL=clips.js.map