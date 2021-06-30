const Discord = require("discord.js");
const fetch = require('node-fetch');
var request = require('request');
var gm = require('gm');

let settings = { method: "Get" };

const client = new Discord.Client();

let songs = [
    "Summer Sixteen",
    "Make Me Proud",
    "Too Much",
    "All Me",
    "One Dance",
    "Know Yourself",
    "Lord Knows",
    "Back To Back",
    "0-100",
    "Marvin's Room",
    "Hotline Bling"
];

let rand = [
    "Sykkuno looking at Toast\nwhen they lived together",
    "Sykkuno be like I only\nhad 3 sups of sake",
    "Sykkuno after touching his hair",
    "Put them cat ears on Sykkuno",
    "Sykkuno watching his twitch\nclips while eating a sandwich",
    "Don't forget to clean\nyour room Sykkuno",
    "I'm not the imposter Sykkuno",
    "Sykunno was in the med bay",
    "Sykkuno's bulge",
    "Sykkuno, I miss you",
    "Sykkuno without makeup",
    "Sykkuno is ending stream",
    "Joined the sykkcult",
    "A lovely day, isn’t it Sykkuno?", 
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
    "What’s the weather like Sykkuno?", 
    "What’s your e-mail address Sykkuno?", 
    "What is your job Sykkuno?", 
    "What’s your name Sykkuno?", 
    "What’s your phone\nnumber Sykkuno?", 
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
    "I’m at home Sykkuno.", 
    "It’s on the tip of\nmy tongue Sykkuno.", 
    "It’s ok Sykkuno.", 
    "It really takes time Sykkuno.", 
    "No, I don’t want Sykkuno.", 
    "See you Sykkuno.", 
    "See you next time Sykkuno.", 
    "Allow me Sykkuno.", 
    "Any day will do Sykkuno.", 
    "Be calm Sykkuno.", 
    "Be careful Sykkuno!", 
    "Be quiet Sykkuno!", 
    "Cheer up Sykkuno!", 
    "Come on Sykkuno.", 
    "Don’t be ridicolus Sykkuno!", 
    "Don’t be so childish Sykkuno!", 
    "Don’t move Sykkuno!", 
    "Don’t worry Sykkuno.", 
    "Enjoy yourself Sykkuno.", 
    "Follow me Sykkuno.", 
    "Forgive me Sykkuno.", 
    "Forget it Sykkuno.", 
    "God bless you Sykkuno.", 
    "It’s very thoughtful\nof you Sykkuno.", 
    "It’s up to you Sykkuno.", 
    "It’s none of you\nbusiness Sykkuno.", 
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
    "I can’t wait Sykkuno.", 
    "I don’t have time Sykkuno.", 
    "I got it Sykkuno.", 
    "I hate you Sykkuno!", 
    "I hope so Sykkuno.", 
    "I knew it Sykkuno.", 
    "I love you Sykkuno.", 
    "I would love to Sykkuno.", 
    "I am busy Sykkuno.", 
    "I am tired Sykkuno.", 
    "I don’t agree Sykkuno.", 
    "You are wasting my time Sykkuno.", 
    "I feel much better Sykkuno.", 
    "They like each other Sykkuno.", 
    "I’m sorry Sykkuno.", 
    "I’m good Sykkuno.", 
    "It doesn’t matter Sykkuno.", 
    "Join me Sykkuno.", 
    "Let’s catch up Sykkuno!", 
    "Let’s do it Sykkuno.", 
    "Nice to meet you Sykkuno.", 
    "Not yet Sykkuno.", 
    "Talk to you tomorrow Sykkuno.", 
    "Thank you very much Sykkuno.", 
    "You turn Sykkuno."
];

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    setInterval(function () {
        let randSong = songs[Math.floor((Math.random() * songs.length))]
        client.user.setActivity(randSong, {
            type: "LISTENING"
        });
    }, 3000);
});

client.on("message", msg => {
    if (msg.content.includes("sykkuno")) {
        fetch("https://g.tenor.com/v1/search?q=drake&key=JURBTZ9GDIWX&limit=200", settings)
            .then(data => data.json())
            .then(output => {
                let gifs = output.results;
                let drake = gifs[Math.floor((Math.random() * gifs.length))];
                let url = drake.media[0].gif.url;

                gm(request(url))
                    .stroke("#000000")
                    .fill('#ffffff')
                    .font("./impact.ttf", 30)
                    .dither(false)
                    .drawText(0, 30, rand[Math.floor((Math.random() * rand.length))], 'South')
                    .write("./gifs/output.gif", function (error) {
                        if (!error) {
                            msg.channel.send("", { files: ["./gifs/output.gif"] });
                        } else {
                            msg.reply(`Error: \`${error}\``);
                        }
                    });
            })
            .catch(error => {
                msg.reply(`Error: \`${error}\``);
            });
    }
});

client.login("ODU5Njg2MTI5OTk3MTg1MDM1.YNwTGQ.ylrohbNz0bokNSt-XoKF0NNbHoo");