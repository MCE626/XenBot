const commando = require('discord.js-commando');
const discord = require('discord.js');
const fs = require('fs');

module.exports = class SWICommand extends commando.Command{
    constructor(client ){
        super(client, {
            name: 'swi',
            aliases: ['steamwarsimage', 'swimgae', 'swimg', 'steamwarsimg'],
            group: 'xendric',
            memberName: 'swi',
            description: 'Get a random image from the SteamWars webpage on xendric.net (WIP)'
        });
    }

   

    async run(message){
        var body;
        var img;
        var roll = Math.floor(Math.random() * 6) + 1;
        if(roll == 4){
            body = 'http://xendric.net/assets/sw/4.gif';
            img = "4.gif";
        } else {
            body = 'http://xendric.net/assets/sw/' + roll + '.png';
            img = roll + ".png";
        }

        const embed = new discord.RichEmbed().setTitle("SteamWars Image").setURL("http://xendric.net/steamwars").setImage(body);
        message.channel.send({embed});
    }
}