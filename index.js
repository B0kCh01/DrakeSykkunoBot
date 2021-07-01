const Discord = require("discord.js");
const fetch = require('node-fetch');
var request = require('request');
var gm = require('gm');

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
    "$help"
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
    "You turn Sykkuno."
];

client.on("ready", () => {
    console.log("===============================");
    console.log(`Bot loaded as ${client.user.tag}!`);
    console.log("===============================\n");

    let i = 0;

    setInterval(function () {
        client.user.setActivity(songs[i % songs.length], {
            type: "LISTENING"
        });

        i++;
    }, 10000);
});

client.on("message", msg => {
    if (msg.author.bot) return;

    if (msg.content.startsWith("$")) {
        let command = msg.content.substring(1).trim();
        let args = command.split(/\s+/);

        let main = args.shift();
        args = [args.join(" ")];
        /*
            MEME COMMAND
        */

        if (main === "meme") {    
            if (args[0]) {
                sendMeme(msg, true, {
                    name: args[0]
                });
            } else {
                sendMeme(msg, true);
            }
        }

        /*
            CUSTOM COMMAND
        */

        else if (main ===  "custom") {
            let message = args[0] || "";
            sendMeme(msg, true, {
                custom: message
            });
        }
            
        /*
            HELP COMMAND
        */
            
        else if (main === "help") {
            react(msg);
            
            /*jshint multistr: true */
            let message =
                "** DRAKE x SYKKUNO BOT**" +
                "```I generate drake-sykkuno memes for you```\n" +
                "`$meme` or include \"sykkuno\" in your message >> Generates a meme for you\n" +
                "`$meme Some Name` >> Uses the name or phrase in the caption\n" +
                "`$custom Some Caption` >> Creates a drake gif with a random caption (don't make it too long)\n" +
                "`$help` >> Bot commands list\n" +
                "\_\_\_\_\_\_\_\n" +
                "Built with ♥ by @b0kch01   --   Idea by Henry"
            ;

            msg.channel.send(message);
        }
    } else {
        if (
            msg.content.toLowerCase().includes("sykkuno") ||
            msg.content.toLowerCase().includes("sykunno")
        ) {
            sendMeme(msg, true);
        }
    }
});

function sendMeme(msg, repeatOnError, customMessage) {
    react(msg);

    const pos = Math.floor(Math.random() * 20);
    let caption = randVal(captions);

    if (customMessage) {
        if (customMessage.custom) {
            caption = customMessage.custom;
        }
        else if (customMessage.name) {
            caption = caption.replace("Sykkuno", customMessage.name);
        }
    }
    
    fetch(`https://g.tenor.com/v1/search?q=drake&key=JURBTZ9GDIWX&limit=50&media_filter=minimal&pos=${pos}`, settings)
        .then(data => data.json())
        .then(output => {
            let gifs = output.results;
            console.log(`[${getTimestamp()}] Searched for position ${pos} and got ${gifs.length} results`);
            
            
            let drake = randVal(gifs);
            while (drake.media[0].gif.size > 8000000) {
                drake = randVal(gifs);
            }
            
            let url = drake.media[0].gif.url;

            gm(request(url))
                .stroke("#000000")
                .fill('#ffffff')
                .font("./impact.ttf", 30)
                .dither(false)
                .drawText(0, 40, caption, 'South')
                .noProfile()
                .bitdepth(8)
                .write("./gifs/output.gif", function (error) {
                    if (!error) {
                        msg.channel.send("", { files: ["./gifs/output.gif"] })
                            .catch(error => {
                                errorMsg(msg, error);
                                if (repeatOnError) {
                                    msg.reply("Let me try again...");
                                    sendMeme(msg, false, customMessage);
                                }
                            });
                    } else {
                        errorMsg(msg, error);
                    }
                });
        })
        .catch(error => {
            errorMsg(msg, error);
        });
}

function errorMsg(msg, error) {
    msg.reply(`They **prayed** for my downfall: \n\`\`\`json\n${error}\`\`\``);
}

function getTimestamp() {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + " " + time;
}

function randVal(list) {
    return list[Math.floor((Math.random() * list.length))];
}

function react(msg) {
    msg.react("♥")
        .catch(() => {
            msg.reply("I don't have permission to react to messages! 🙏");
        });
}

const dotenv = require('dotenv');
dotenv.config();
client.login(process.env.TOKEN);