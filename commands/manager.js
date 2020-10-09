import {COMMANDS_MAP} from "./utils";
import {addCommand as saveCommand, removeCommand as deleteCommand} from "../data";

export const commands = {}

export function initCommands(client, commands) {
    commands.forEach(c => addCommand(client, c.channel, c.prefix, c.type, c.data))
}

export function runCommand(cmd, channel, role, ...args) {
    const command = commands[cmd]
    if (command) {
        command.run(channel, role, ...args)
    }
}

export function addCommand(client, channel, prefix, type, data) {
    const commandType = COMMANDS_MAP[type];
    const commandExists = commands[channel] && commands[channel][prefix] || null
    if (commandType && !commandExists) {
        const channelCommands = commands[channel] || {}
        channelCommands[prefix] = new commandType(client, channel, data)
        commands[channel] = channelCommands
        saveCommand({
            type: "text",
            channel: channel,
            prefix,
            data
        })
    }
}

export function removeCommand(channel,prefix) {
    const commandExists = commands[channel] && commands[channel][prefix] || null
    if (commandExists) {
        delete commands[channel][prefix]
        deleteCommand(channel,prefix)
    }

}

