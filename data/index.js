import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('database/db.json')
const db = low(adapter)

db.defaults({
    commands: [
        {
            type: "add-command",
            channel: "titatitutu",
            prefix: "add",
            guards: {
                role: "moderator",
                allowlist: "ex_ode"
            }
        },
        {
            type: "remove-command",
            channel: "titatitutu",
            prefix: "remove",
            guards: {
                role: "moderator",
                allowlist: "ex_ode"
            }
        },
    ]
})
    .write()

export function getCommands() {
    return db.get('commands').value()
}

export function addCommand(command) {
    db.get('commands').push(command).write()
}

export function removeCommand(channel, prefix) {
    db.get('commands')
        .remove({channel, prefix})
        .write()
}