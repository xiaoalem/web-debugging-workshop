var elements = document.getElementsByClassName("column");
var i;

function addRandomFact() {
  const emojis = {
    mountain: String.fromCodePoint(0x26F0),
    fencing: String.fromCodePoint(0x1F93A),
    laptop: String.fromCodePoint(0x1F4BB),
    dog: String.fromCodePoint(0x1F436),
    sparkle: String.fromCodePoint(0x2728),
    sneezing: String.fromCodePoint(0x1F927),
    musicnotes: String.fromCodePoint(0x1F3B6)
  }
  const facts =
      [`is based in Vancouver, BC ${emojis.mountain}`,
       `enjoys fencing, hiking, and skiing! ${emojis.fencing}`,
       `is a logistics coordinator for nwPlus, home to the largest hackathon in Western Canada ${emojis.laptop}`, 
       `has a goldendoodle named Luna! ${emojis.dog}`,
       `is passionate about empowering girls in tech ${emojis.sparkle}`,
       `recently transferred to computer science ${emojis.sneezing}`,
       `loves Studio Ghibli films and Joe Hisaishi pieces ${emojis.musicnotes}`];

  // Pick a random fact.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}