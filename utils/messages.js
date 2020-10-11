import {USER_ROLES} from "../commands/utils";

export function getRole(user, channel) {
    const formattedChannel = channel.replace('#','')
    if (user.username === formattedChannel) {
        return USER_ROLES.BROADCASTER
    }
    
    if (user.mod) return USER_ROLES.MODERATOR

    if (user.badges && user.badges.vip) return USER_ROLES.VIP

    return USER_ROLES.VIEWER
}