import {removeCommand} from "./manager";
import {isModerator} from "./utils";

class RemoveCommand {
    constructor(client) {
    }

    run(channel, userRole, prefix) {
        if (isModerator(userRole)) {
            removeCommand(channel,prefix)
        }
    }
}

export default RemoveCommand