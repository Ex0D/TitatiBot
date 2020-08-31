exports.run = (client , channel , user , message , self , args) => {
    client.say(channel , `Recherche wikipedia : https://fr.wikipedia.org/wiki/` + args.join('_'));
}