import tmi from 'tmi.js'
import config from "./config";
import './data'
import {getRole} from "./utils/messages";
import {getCommands} from "./data";
import {initCommands, runCommand} from "./commands/manager";

const PREFIX = '!';

const options = {
    options: {
        debug:true,
    },
    connection: {
        reconnect: true,
    },
    identity: {
        username: config.identity.username,
        password:config.identity.password,
    },
    channels: config.channels,
};

const client = tmi.client(options);

const commands = getCommands()

initCommands(client,commands)

client.on('message' , (channel , user , message , self) => {
    if (self) return;
    
    const role = getRole(user,channel)

    if(cmd.includes('\\') || cmd.includes('.') || cmd.includes('/')) return;
    
    if(message.startsWith(PREFIX)){
        const args = message.slice(PREFIX.length).trim().split(/ +/g);
        const cmd  = args.shift().toLowerCase();
        runCommand(cmd,channel.replace('#',''), role,...args)
    }

});

client.connect();
