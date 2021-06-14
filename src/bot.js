const discord = require('discord.js');
require('dotenv').config();
const bot = new discord.Client({
  partials: ['MESSAGE', 'REACTION'],
});

bot.once('ready', () => {
  console.log('The bot is ready lets go!');
});

bot.on('message', async (message) => {
  try {
    if (message.author.bot) return;
    if (message.content == 'here') {
      message.channel.send('lund', { tts: true });
      return;
    }

    let message1 = await message.channel.send(
      'https://cdn.discordapp.com/attachments/853737763085615154/853739632427794432/insta_nimit.jpg'
    );
    last = await message.channel.send('start', { tts: true });

    await message1.react('◀️');
    await message1.react('▶️');
  } catch (error) {
    console.log(error);
  }
});
const new1 = () => {
  return 10;
};
let last = {
  delete: () => {
    console.log('dummy delete');
  },
};
bot.on('messageReactionAdd', async (reaction, user) => {
  const { name } = reaction.emoji;
  const message = reaction.message;
  try {
    if (user.bot) return;
    console.log(user.id);
    if (user.id == '637564801832452097' || user.id == '642898906115473428') {
      switch (name) {
        case '◀️':
          await message.edit(
            'https://cdn.discordapp.com/attachments/853737763085615154/853739632427794432/insta_nimit.jpg'
          );
          await last.delete();
          last = await message.channel.send('back', { tts: true });
          await reaction.users.remove(user);
          break;
        case '▶️':
          await message.edit(
            'https://tenor.com/view/the-office-ouch-michael-scott-steve-carell-lip-bite-gif-11838665'
          );
          await last.delete();
          last = await message.channel.send('forward', { tts: true });
          await reaction.users.remove(user);
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
});

bot.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  try {
    switch (name) {
      case '◀️':
        console.log('unclicked backward');
        break;
      case '▶️':
        console.log('unclicked forward');
        break;
    }
  } catch (error) {
    console.log(error);
  }
});

bot.login(process.env.TOKEN);
