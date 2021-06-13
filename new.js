const fetch = require('node-fetch');
const fs = require('fs');
const request = require('request');
const { get } = require('request');
require('dotenv').config();

let postlinks = [];
const path = './images/image.png';
let i = 0;

const get_ = async () => {
  try {
    let res = await fetch(
      `https://www.instagram.com/graphql/query/?query_id=17888483320059182&id=${process.env.user_id}&first=50`
    );
    let json = await res.json();
    let posts = await json.data.user.edge_owner_to_timeline_media.edges;
    posts.forEach((post) => {
      console.log(i);
      postlinks[i] = post.node.display_url;
      download(postlinks[i], `./images/post${i + 1}.png`, () => {
        console.log('✅ Done!');
      });
      i = i + 1;
    });
    console.log(postlinks);
  } catch (error) {}
};
get_();
const download = async (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on('close', callback);
  });
};
