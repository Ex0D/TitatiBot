exports.run = (client , channel , user , message , self , args) => {
    if(user.badges.moderator || user.badges.broadcaster) {
        if ((isNaN(args[0]) == false)) {
            for (i = 0; i < parseFloat(args[0]); i++) {
                client.say(channel , args.slice(1 , 99).join(" "));
            };
        } else {
            return;
        };
    } else {
        return client.timeout(channel , user.username , 60 , "Les commandes pour modérateurs restent pour les modérateurs !");
    }
};