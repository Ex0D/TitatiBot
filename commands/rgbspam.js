exports.run = (client , channel , user , message , self , args) => {
    if(user.badges.moderator || user.badges.broadcaster) {
        const colors = ['blue','dodgerblue', 'cadetblue', 'seagreen', 'springgreen', 'green', 'yellowgreen', 'goldenrod', 'chocolate', 'orangered', 'coral', 'red', 'hotpink', 'violetblue'];

        for (var i = 0; i < 13; i++) {
            client.say(channel , '/color ' + colors[i]);
            client.say(channel , '/me ' + args.join(" "));
        }
        client.say(channel , "/color springgren");
    } else {
        return client.timeout(channel , user.username , 60 , "Cette commande est faite pour les modérateurs !");
    };
};