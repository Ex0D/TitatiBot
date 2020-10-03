# Commandes
Vu que les commandes changent à chaque fois et que des commandes temporaires arriveront bientôt , le dossier **commands** restera vide mais voici un exemple de commande que vous pouvez interpréter :

```js
exports.run = (client , channel , user , message , self , args) => {
  client.say(channel , 'Ceci est une commande a laquelle je réponds');
}
```
