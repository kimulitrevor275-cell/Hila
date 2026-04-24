const posts = [
  {
    label   : 'JUST-IN',
    headline: "Zayn Malik has released his long-waited album 'KONNAKOL'",
    img     : 'https://res.cloudinary.com/dvxl03ips/image/upload/q_auto/f_auto/v1776956041/sddefault_mr6epx.jpg',
    body    : '',
    time    : '23.3.26 | 4:58 PM',
    readLink: 'https://music.youtube.com/channel/UC3PdiRW5dUA4V70ueeR1eHA?si=gDg6NAiKqN82NUyV',
    readText: 'Stream now',
  },
  {
    label   : 'JUST-IN',
    headline: "Olivia Rodrigo's new album has surpassed two million pre-saves on Spotify",
    img     : 'https://res.cloudinary.com/dvxl03ips/image/upload/q_auto/f_auto/v1776955966/blackpink-go_reewuf.jpg',
    body    : '',
    time    : '23.3.26 | 4:58 PM',
    readLink: 'https://x.com/trvor_rrr',
    readText: 'Read post',
  },
  {
    label   : 'QUESTION',
    headline: "[Serious] What's that real story nobody would believe actually happened to you?",
    img     : 'https://res.cloudinary.com/dvxl03ips/image/upload/q_auto/f_auto/v1776955966/blackpink-go_reewuf.jpg',
    body    : 'Join the conversation on our social media @jisscroln',
    time    : '23.3.26 | 4:58 PM',
    readLink: 'https://x.com/trvor_rrr',
    readText: 'Join post',
  },
  {
    label   : 'SENSITIVE',
    headline: 'Teen shares his journey through depression and how he healed',
    img     : 'https://res.cloudinary.com/dvxl03ips/image/upload/q_auto/f_auto/v1776955966/blackpink-go_reewuf.jpg',
    body    : 'A powerful personal story about coping, growth, and finding a way forward.',
    time    : '23.3.26 | 4:58 PM',
    readLink: 'https://www.theguardian.com',
    readText: 'Read more',
  },
  {
    label   : 'LIFESTYLE',
    headline: 'Wonderful village to start a free retired life, vacation and connect with nature',
    img     : 'https://res.cloudinary.com/dvxl03ips/image/upload/q_auto/f_auto/v1776955966/blackpink-go_reewuf.jpg',
    body    : 'Long ago, in a quiet digital village called JisScroL, a new idea was born.',
    time    : '23.3.26 | 4:58 PM',
    readLink: 'https://www.theguardian.com',
    readText: 'Read more',
  },
  {
    label   : 'SPORTS WORLD',
    headline: "Have you ever heard of Messi? The man who changed how we see football.",
    img     : 'https://res.cloudinary.com/dvxl03ips/image/upload/q_auto/f_auto/v1776955966/blackpink-go_reewuf.jpg',
    body    : "Fans have been asking: Is Messi the real GOAT? Did you know Messi holds the record of the most liked Instagram photo of all time?",
    time    : '23.3.26 | 4:58 PM',
    readLink: 'https://www.theguardian.com',
    readText: 'Read more',
  },
  {
    label   : 'TECHNOLOGY',
    headline: 'Top 5 best smartphones to have in 2026, rated by The JisScroL',
    img     : 'https://res.cloudinary.com/dvxl03ips/image/upload/q_auto/f_auto/v1776955966/blackpink-go_reewuf.jpg',
    body    : '1. Samsung S25 Ultra  2. iPhone 17 Pro Max  3. Google Pixel 6  4. Xiaomi 17 Pro Max  5. Samsung Z Fold',
    time    : '23.3.26 | 4:58 PM',
    readLink: 'https://www.theguardian.com',
    readText: 'Read more',
  },
];

function render() {
  var content = document.getElementById('content');
  content.innerHTML = '';

  posts.forEach(function(post) {
    var article = document.createElement('div');
    article.className = 'post-card';

    article.innerHTML =
      '<b id="label">' + post.label + '</b>' +
      '<h3>' + post.headline + '</h3>' +
      '<img src="' + post.img + '" alt="' + post.label + '">' +
      (post.body ? '<p>' + post.body + '</p>' : '') +
      '<b id="time">' + post.time + '</b>' +
      '<div id="dlinks">' +
        '<a id="a" href="' + post.readLink + '" target="_blank">' + post.readText + '</a>' +
        '<a id="a" href="index.html">Back to Home</a>' +
      '</div>' +
      '<hr><br>';

    content.appendChild(article);
  });
}

render();
