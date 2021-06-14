const discord = require('discord.js');
require('dotenv').config();
const tts = require('./tts.json');
const slides = require('./slides.json');
console.log(tts.length);
console.log(slides.length);

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
      let a = await message.channel.send(
        "Lets talk about the victim of the presentation and also the main culpritm Shreya Paradkar (sorry I don't know how to pronounce indian names) who is close to 30 (which is an existential crisis itself)",
        { tts: true }
      );
      setTimeout(async function () {
        await a.delete();
      }, 12000);
      return;
    }

    let message1 = await message.channel.send(slides[0]);
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

const switcher = async (i, message) => {
  switch (i) {
    case 0:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 1:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 2:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 3:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 4:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 5:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 6:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 7:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 8:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 9:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 10:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
    case 11:
      await message.edit(slides[i]);
      last.delete();
      last = await message.channel.send('start', { tts: true });
      break;
  }
};

let i = 0;

bot.on('messageReactionAdd', async (reaction, user) => {
  const { name } = reaction.emoji;
  const message = reaction.message;
  try {
    if (user.bot) return;
    console.log(user.id);

    if (user.id == '637564801832452097' || user.id == '642898906115473428') {
      switch (name) {
        case '◀️':
          await reaction.users.remove(user);
          i = i - 1;
          i = i < 0 ? 0 : i;
          console.log(i);
          switcher(i, message);
          break;
        case '▶️':
          await reaction.users.remove(user);
          i = i + 1;
          i = i > 11 ? 11 : i;
          console.log(i);
          switcher(i, message);
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
