import {addCommand} from "./manager";
import {isModerator} from "./utils";

class AddCommand {
    constructor(client) {
        this.client = client;
    }

    run(channel, userRole, prefix, ...text) {
        if (isModerator(userRole)) {
            addCommand(this.client, channel, prefix, "text", {text: text.join(" ")})
        }
    }
}

export default AddCommand