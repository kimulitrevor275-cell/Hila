const posts = [
  {
    label: "JUST-IN",
    headline: "Zayn Malik has released his long-waited album 'KONNAKOL'",
    img: "https://res.cloudinary.com/dvxl03ips/image/upload/pics_12.png",
    readLink: "https://music.youtube.com/channel/UC3PdiRW5dUA4V70ueeR1eHA?si=gDg6NAiKqN82NUyV",
    readText: "Stream now",
    time: ""
  },
  {
    label: "JUST-IN",
    headline: "Olivia Rodrigo's new album has surpassed two million pre-saves on Spotify",
    img: "https://res.cloudinary.com/dvxl03ips/image/upload/pics_31.jpg",
    readLink: "https://x.com/trvor_rrr",
    readText: "Read post",
    time: ""
  },
  {
    label: "QUESTION",
    headline: "[Serious] What's that real story nobody would believe you that actually happened?",
    img: "https://res.cloudinary.com/dvxl03ips/image/upload/pics_10.jpg",
    body: "Join the conversation on our social media @jisscroln",
    readLink: "https://x.com/trvor_rrr",
    readText: "Join post",
    time: ""
  },
  {
    label: "SENSITIVE",
    headline: "Teen shares his journey through depression and how he healed",
    img: "https://res.cloudinary.com/dvxl03ips/image/upload/pics_10.jpg",
    body: "A powerful personal story about coping, growth, and finding a way forward.",
    readLink: "https://www.theguardian.com/us-news/2026/mar/01/supreme-leader-killed-as-us-and-israel-wage-war-on-iran-what-we-know-so-far-on-day-two?CMP=share_btn_url",
    readText: "Read more",
    time: "23.3.26 | 4:58 PM"
  },
  {
    label: "LIFESTYLE",
    headline: "Wonderful village to start a free retired life, vacation and connect with nature.",
    img: "https://res.cloudinary.com/dvxl03ips/image/upload/pics_10.jpg",
    body: "Long ago, in a quiet digital village called JisScroL, a new idea was born — a line of defense, a Guardline. It protected users from chaos, bugs, and badly written code.",
    readLink: "https://www.theguardian.com/us-news/2026/mar/01/supreme-leader-killed-as-us-and-israel-wage-war-on-iran-what-we-know-so-far-on-day-two?CMP=share_btn_url",
    readText: "Read more",
    time: "23.3.26 | 4:58 PM"
  },
  {
    label: "LIFESTYLE",
    headline: "Wonderful village",
    img: "https://res.cloudinary.com/dvxl03ips/image/upload/pics_14.jpg",
    img2: "https://res.cloudinary.com/dvxl03ips/image/upload/pics_15.jpg",
    body: "Tech evolves as study says that now 87% of the world understands and can manipulate codes, APIs and databases. Professionals in programming fields are cheering.",
    readLink: "https://www.theguardian.com/us-news/2026/mar/01/supreme-leader-killed-as-us-and-israel-wage-war-on-iran-what-we-know-so-far-on-day-two?CMP=share_btn_url",
    readText: "Read more",
    time: "23.3.26 | 4:58 PM"
  },
  {
    label: "SPORTS WORLD",
    headline: "Have you ever heard of Messi? If not, congratulations — you've now heard of the man who changed how we see football.",
    img: "https://res.cloudinary.com/dvxl03ips/image/upload/pics_6.jpg",
    body: "Fans have been asking: 'Is Messi the real GOAT?' Did you know Messi holds the record of the most liked Instagram photo of all time?",
    readLink: "https://www.theguardian.com/us-news/2026/mar/01/supreme-leader-killed-as-us-and-israel-wage-war-on-iran-what-we-know-so-far-on-day-two?CMP=share_btn_url",
    readText: "Read more",
    time: "23.3.26 | 4:58 PM"
  },
  {
    label: "TECHNOLOGY",
    headline: "Top 5 best smartphones to have in 2026, rated by The JisScroL",
    img: "https://res.cloudinary.com/dvxl03ips/image/upload/pics_17.jpg",
    body: "1. Samsung S25 Ultra<br>2. iPhone 17 Pro Max<br>3. Google Pixel 6<br>4. Xiaomi 17 Pro Max<br>5. Samsung Z Fold",
    readLink: "https://www.theguardian.com/us-news/2026/mar/01/supreme-leader-killed-as-us-and-israel-wage-war-on-iran-what-we-know-so-far-on-day-two?CMP=share_btn_url",
    readText: "Read more",
    time: "23.3.26 | 4:58 PM"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const contentSection = document.getElementById('content');

  contentSection.innerHTML = posts.map(post => `
    <b id="label">${post.label}</b>
    <h3>${post.headline}</h3>
    <img src="${post.img}" alt="${post.label}">
    ${post.img2 ? `<img src="${post.img2}" alt="${post.label}">` : ''}
    ${post.body ? `<p>${post.body}</p>` : ''}
    ${post.time ? `<b id="time">${post.time}</b>` : ''}
    <div id="dlinks">
      <a id="a" href="${post.readLink}" target="_blank">${post.readText}</a>
      <a id="a" href="index.html" class="back-home">Back to Home</a>
    </div>
    <hr><br>
  `).join('');
});
