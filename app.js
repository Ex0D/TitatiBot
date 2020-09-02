require('dotenv').config();
const process = require('process');

const prefix = '!';

const options = {
    options: {
        debug:true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'TitatiBot',
        password: process.env.token,
    },
    channels: ['Titatitutu'],
};

const client = require('tmi.js').client(options);

setInterval(() => {
    client.say('Titatitutu' , "Annonce : Titatitutu joue désormais en Ligue 1 de CIV avec la team Ulysse !") // Surement a edit avec l'interface utilisateur ► DB
}, 300000);

client.on('message' , (channel , user , message , self) => {
    if (self) return;
    
    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd  = args.shift().toLowerCase();

    if(cmd.includes('\\') || cmd.includes('.') || cmd.includes('/')) return;

    try {

        var commandFile = require(`./commands/${cmd}.js`); // C'est pas le mieux mais c'est simple à utiliser
        commandFile.run(client , channel , user , message , self , args);

    } catch (e) {
        return;
    };

});

client.connect();