// index.js by b0kch01

const Discord = require("discord.js");
const fetch = require("node-fetch");
const request = require("request");
const fs = require("fs");
const gm = require("gm");

let settings = { method: "Get" };

const client = new Discord.Client();

let songs = [
    "Summer Sixteen",
    "$help",
    "Make Me Proud",
    "$help",
    "Too Much",
    "$help",
    "All Me",
    "$help",
    "One Dance",
    "$help",
    "Know Yourself",
    "$help",
    "Lord Knows",
    "$help",
    "Back To Back",
    "$help",
    "0-100",
    "$help",
    "Marvin's Room",
    "$help",
    "Hotline Bling",
    "$help",
];

let captions = [
    "Sykkuno looking at Toast\nwhen they lived together",
    "Sykkuno be like I only\nhad 3 sups of sake",
    "Sykkuno after touching his hair",
    "Put them cat ears on Sykkuno",
    "Sykkuno watching his twitch\nclips while eating a sandwich",
    "Don't forget to clean\nyour room Sykkuno",
    "I'm not the imposter Sykkuno",
    "Sykkuno was in the med bay",
    "Sykkuno's bulge",
    "Sykkuno, I miss you",
    "Sykkuno without makeup",
    "Sykkuno is ending stream",
    "Joined the sykkcult",
    "A lovely day, isn't it Sykkuno?",
    "Do i have to Sykkuno?",
    "Can I help you Sykkuno?",
    "How are things going Sykkuno?",
    "Any thing else Sykkuno?",
    "Are you kidding Sykkuno?",
    "Are you sure Sykkuno?",
    "Do you understand me Sykkuno?",
    "Are you done Sykkuno?",
    "Can I ask you something Sykkuno?",
    "Can you please repeat that Sykkuno?",
    "Did you get it Sykkuno?",
    "Do you need anything Sykkuno?",
    "How are you Sykkuno?",
    "How do you feel Sykkuno?",
    "How much is it Sykkuno?",
    "How old are you Sykkuno?",
    "How was your weekend Sykkuno?",
    "Is all good Sykkuno?",
    "Is everything OK Sykkuno?",
    "What are you doing Sykkuno?",
    "What are you talking about Sykkuno?",
    "What are you up to Sykkuno?",
    "What are your hobbies Sykkuno?",
    "What did you say Sykkuno?",
    "What do you need Sykkuno?",
    "What do you think Sykkuno?",
    "What do you want to do Sykkuno?",
    "What do you want Sykkuno?",
    "What's the weather like Sykkuno?",
    "What's your e-mail address Sykkuno?",
    "What is your job Sykkuno?",
    "What's your name Sykkuno?",
    "What's your phone\nnumber Sykkuno?",
    "What is going on Sykkuno?",
    "When is the train leaving Sykkuno?",
    "How can I go to the\ntown centre Sykkuno?",
    "Where are you from Sykkuno?",
    "Where are you going Sykkuno?",
    "Where are you Sykkuno?",
    "Where did you get it Sykkuno?",
    "Where do you live Sykkuno?",
    "Are you coming with me Sykkuno?",
    "How long will you stay Sykkuno?",
    "I agree Sykkuno.",
    "I'm at home Sykkuno.",
    "It's on the tip of\nmy tongue Sykkuno.",
    "It's ok Sykkuno.",
    "It really takes time Sykkuno.",
    "No, I don't want Sykkuno.",
    "See you Sykkuno.",
    "See you next time Sykkuno.",
    "Allow me Sykkuno.",
    "Any day will do Sykkuno.",
    "Be calm Sykkuno.",
    "Be careful Sykkuno!",
    "Be quiet Sykkuno!",
    "Cheer up Sykkuno!",
    "Come on Sykkuno.",
    "Don't be ridicolus Sykkuno!",
    "Don't be so childish Sykkuno!",
    "Don't move Sykkuno!",
    "Don't worry Sykkuno.",
    "Enjoy yourself Sykkuno.",
    "Follow me Sykkuno.",
    "Forgive me Sykkuno.",
    "Forget it Sykkuno.",
    "God bless you Sykkuno.",
    "It's very thoughtful\nof you Sykkuno.",
    "It's up to you Sykkuno.",
    "It's none of you\nbusiness Sykkuno.",
    "Slow down Sykkuno.",
    "Stop making such a noice Sykkuno.",
    "You are going too fast Sykkuno.",
    "Come with me Sykkuno.",
    "Good afternoon Sykkuno.",
    "Good morning Sykkuno.",
    "Good night Sykkuno.",
    "Have a good trip Sykkuno.",
    "Have a good weekend Sykkuno.",
    "I admire you Sykkuno.",
    "I apologize Sykkuno.",
    "I can't wait Sykkuno.",
    "I don't have time Sykkuno.",
    "I got it Sykkuno.",
    "I hate you Sykkuno!",
    "I hope so Sykkuno.",
    "I knew it Sykkuno.",
    "I love you Sykkuno.",
    "I would love to Sykkuno.",
    "I am busy Sykkuno.",
    "I am tired Sykkuno.",
    "I don't agree Sykkuno.",
    "You are wasting my time Sykkuno.",
    "I feel much better Sykkuno.",
    "They like each other Sykkuno.",
    "I'm sorry Sykkuno.",
    "I'm good Sykkuno.",
    "It doesn't matter Sykkuno.",
    "Join me Sykkuno.",
    "Let's catch up Sykkuno!",
    "Let's do it Sykkuno.",
    "Nice to meet you Sykkuno.",
    "Not yet Sykkuno.",
    "Talk to you tomorrow Sykkuno.",
    "Thank you very much Sykkuno.",
    "You turn Sykkuno.",
];

client.on("ready", () => {
    console.log("===============================");
    console.log(`[✓] Bot loaded as ${client.user.tag}!\n`);

    let i = 0;

    setInterval(function () {
        client.user.setActivity(songs[i % songs.length], {
            type: "LISTENING",
        });

        i++;
    }, 10000);
});

// Error Handler
var errors = [];
process.on("unhandledRejection", (error) => {
    let errorMSG = `[${getTimestamp()}] Failed: ` + error.message;
    errors.push(
        errorMSG.replace(
            "Missing Access",
            "I don't have enough permissions in that channel."
        )
    );
    console.error(`[${getTimestamp()}]`, error);
});

client.on("message", (msg) => {
    if (msg.author.bot) return;

    if (msg.content.startsWith("$")) {
        let command = msg.content.substring(1).trim();
        let args = command.split(/\s+/);

        let main = args.shift();
        args = [args.join(" ")];

        if (main === "meme") {
            /* MEME COMMAND */
            if (args[0]) {
                sendDrakeMeme(msg, true, { name: args[0] });
            } else {
                sendDrakeMeme(msg, true);
            }
        } else if (main === "custom") {
            /* CUSTOM COMMAND */
            let message = args[0] || "";
            sendDrakeMeme(msg, true, { custom: message });
        } else if (main === "wall") {
            /* WALL COMMAND */
            let message = args[0] || "";
            sendGIF(msg, true, "donowall.gif", "🧱", { custom: message });
        } else if (main === "bday") {
            /* B-DAY COMMAND */
            let message = args[0] || "";
            sendGIF(msg, true, "mario.gif", "🎂", { custom: message });
        } else if (main === "clap") {
            /* CLAP COMMAND */
            let message = args[0] || "";

            let gif = sample(["clean.gif", "dirty.gif"]);
            sendGIF(msg, true, "clap_" + gif, "👏", { custom: message });
        } else if (main === "help") {
            /* HELP COMMAND */
            sendHelp(msg);
        } else if (main === "broke") {
            client.users.fetch(msg.author.id, false).then((user) => {
                let cached = errors.reverse();
                let message =
                    (cached[0] || "---") +
                    "\n" +
                    (cached[1] || "---") +
                    "\n" +
                    (cached[2] || "---");

                user.send("**What went wrong (last three errors):**\n" + message);
            });
        }
    } else {
        if (
            msg.content.toLowerCase().includes("sykkuno") ||
            msg.content.toLowerCase().includes("sykunno")
        ) {
            sendDrakeMeme(msg, true);
        }

        if (
            msg.content.toLowerCase().includes("birthday")
        ) {
            sendGIF(msg, true, "mario.gif", "🎂", { custom: msg.content });
        }
    }
});


// Sends a random drake meme with customization options
function sendDrakeMeme(msg, repeatOnError, customMessage) {
    msg.react("♥");

    const pos = Math.floor(Math.random() * 20);
    let caption = sample(captions);

    if (customMessage) {
        if (customMessage.custom) {
            caption = customMessage.custom;
        } else if (customMessage.name) {
            caption = caption.replace("Sykkuno", customMessage.name);
        }
    }

    fetch(
        `https://g.tenor.com/v1/search?q=drake&key=JURBTZ9GDIWX&limit=50&media_filter=minimal&pos=${pos}`,
        settings
    )
        .then((data) => data.json())
        .then((output) => {
            let gifs = output.results;
            console.log(
                `[${getTimestamp()}] Searched for position ${pos} and got ${gifs.length
                } results`
            );

            let drake = sample(gifs);
            while (drake.media[0].gif.size > 8000000) {
                drake = sample(gifs);
            }

            let url = drake.media[0].gif.url;

            const OUTPUT_PATH = "./gifs/output-" + Math.random().toString(36).substring(7) + "-drake.gif";

            gm(request(url))
                .stroke("#000000")
                .fill("#ffffff")
                .font("./impact.ttf", 30)
                .dither(false)
                .drawText(0, 40, caption, "South")
                .noProfile()
                .bitdepth(8)
                .write(OUTPUT_PATH, function (error) {
                    if (!error) {
                        msg.channel
                            .send("", { files: [OUTPUT_PATH] })
                            .then(() => { fs.unlink(OUTPUT_PATH, () => { }); })
                            .catch((error) => {
                                errorMsg(msg, error);
                                if (repeatOnError) {
                                    msg.reply("Let me try again...").catch();
                                    sendDrakeMeme(msg, false, customMessage);
                                } else {
                                    fs.unlink(OUTPUT_PATH, () => { });
                                }
                            });
                    } else {
                        errorMsg(msg, error);
                        fs.unlink(OUTPUT_PATH, () => { });
                    }
                });
        })
        .catch((error) => {
            errorMsg(msg, error);
        });
}

// Sends GIF with customization options
function sendGIF(msg, repeatOnError, bg, emoji, customMessage) {
    let caption = sample(captions);
    if (customMessage && customMessage.custom) {
        caption = customMessage.custom;
    }

    console.log(`[${getTimestamp()}] ${bg} with ${caption}`);

    msg.react(emoji);

    const OUTPUT_PATH = "./gifs/output-" + Math.random().toString(36).substring(7) + ".gif";

    gm("./gifs/templates/" + bg)
        .stroke("#000000")
        .fill("#ffffff")
        .font("./impact.ttf", 30)
        .dither(false)
        .drawText(0, 40, caption, "South")
        .noProfile()
        .bitdepth(8)
        .write(OUTPUT_PATH, function (error) {
            if (!error) {
                msg.channel
                    .send("", { files: [OUTPUT_PATH] })
                    .then(() => { fs.unlink(OUTPUT_PATH, () => { }); })
                    .catch((error) => {
                        errorMsg(msg, error);
                        if (repeatOnError) {
                            msg.reply("Let me try again...").catch();
                            sendGIF(msg, false, bg, emoji, customMessage);
                        } else {
                            fs.unlink(OUTPUT_PATH, () => { });
                        }
                    });
            } else {
                errorMsg(msg, error);
                fs.unlink(OUTPUT_PATH, () => { });
            }
        });

}

// Sends help message
function sendHelp(msg) {
    msg.react("👍");

    /*jshint multistr: true */
    let message =
        "** DRAKE x SYKKUNO BOT**" +
        "```I generate drake-sykkuno memes for you```\n" +
        '`$meme` or include "sykkuno" in your message >> Generates a meme for you\n' +
        "`$meme __` >> Uses the name or phrase in the caption\n" +
        "`$custom __` >> Drake gif with a caption\n" +
        "`$wall __` >> Donowall gif with a caption\n" +
        "`$bday __` or include \"birthday\" >> Mario (birthday) gif with a caption\n" +
        "`$clap __` creates a random quality clap drake gif\n" +
        "`$broke` >> Find out why the bot is not working anymore. No response? LMK.\n" +
        "`$help` >> Bot commands list\n" +
        "_______\n" +
        "Built with ♥ by @b0kch01   --   Idea by Henry";

    msg.channel.send(message);
}

// Tries to send error feedback
function errorMsg(msg, error) {
    msg.react("❌").catch();
    msg.reply(
        `They **prayed** for my downfall: \n\`\`\`json\n${error}\`\`\``
    ).catch((error) => {
        dmPermError(msg);
    });
}

// Grabs current date and time
function getTimestamp() {
    const now = new Date();
    const date =
        now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    const time =
        now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return date + " " + time;
}

// Grabs random value from a list
function sample(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// Direct Messages a warning for lack of permissions
function dmPermError(msg) {
    client.users.fetch(msg.author.id, false).then((user) => {
        user.send(
            "I don't think I had the proper permissions (react, send, attach) in that channel :("
        ).catch();
    });
}

// Load token for login
const dotenv = require("dotenv");
dotenv.config();
client.login(process.env.TOKEN);