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
    let message1 = await message.channel.send(
      'https://cdn.discordapp.com/attachments/853737763085615154/853739632427794432/insta_nimit.jpg'
    );

    await message1.react('◀️');
    await message1.react('▶️');
    // // const filter = (reaction) =>
    // //   reaction.emoji.name === '▶️' || reaction.emoji.name === '◀️';
    // // let collected = await message1.awaitReactions(filter, { time: 10000 });
    // // console.log(collected);
    // const filter = (reaction, user) =>
    //   reaction.emoji.name === '▶️' || user.id === '642898906115473428';
    // const collector = await message.createReactionCollector(filter, {
    //   time: 10000,
    // });
    // collector.on('collect', (r) => console.log(`Collected ${r.emoji.name}`));
    // collector.on('dispose', (r) => console.log(`Removed ${r.emoji.name}`));
    // collector.on('remove', (r) => console.log(`Removed ${r.emoji.name}`));
    // collector.on('end', (collected) => {
    //   console.log(`Collected ${collected.size} items`);
    //   message1.edit(
    //     'https://tenor.com/view/the-office-ouch-michael-scott-steve-carell-lip-bite-gif-11838665'
    //   );
    // });
  } catch (error) {
    console.log(error);
  }
});

user.id = '642898906115473428';

bot.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  try {
    if (reaction.message.id === channelRoles[0]) {
      switch (name) {
        case '◀️':
          console.log('clicked backward');
          break;
        case '🎵':
          console.log('clicked backward');
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
});

bot.login(process.env.TOKEN);
