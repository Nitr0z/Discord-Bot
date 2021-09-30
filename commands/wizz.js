module.exports = {
    name: 'wizz',
    description: 'set random sentence to wizz someone.',
    execute(message) {
      const phrase = ["ramène ton gros cul plein de gras", 
                    "Wakanda Wakanda mon ami Honoré rejoins nous",
                    "mon ami viens voir ici",
                    "ton seigneur t'appelle",
                    "viens rejoindre nos rangs",
                    "la tribu à besoin de toi"
                    ]
      const random = phrase[Math.floor(Math.random() * phrase.length)]


      const final = message.mentions.users.map(user => {
        return `${user.username} ${random}`;
      });

      message.channel.send(final);
    }

  };