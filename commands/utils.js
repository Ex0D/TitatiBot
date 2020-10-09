import TextCommand from "./TextCommand";
import RecurrentTextCommand from "./RecurrentTextCommand";
import AddCommand from "./AddCommand";
import RemoveCommand from "./RemoveCommand";

export const COMMANDS_MAP = {
    "text": TextCommand,
    "recurrent-text": RecurrentTextCommand,
    "add-command": AddCommand,
    "remove-command": RemoveCommand,
}

export const USER_ROLES ={VIEWER:"viewer",VIP:"vip,", MODERATOR:"moderator", BROADCASTER:"broadcaster"}

export function isModerator(role){
    return role === USER_ROLES.MODERATOR || role === USER_ROLES.BROADCASTER
}