    let memesData = [];

    function loadMemes() {
      const memeContainer = document.getElementById("meme-container");
      memeContainer.innerHTML = '<p>Carregando memes...</p>';

      fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
          memesData = data.data.memes;
          displayRandomMeme();
        })
        .catch(error => {
          console.log(error);
        });
    }

    function displayRandomMeme() {
      const memeContainer = document.getElementById("meme-container");
      memeContainer.innerHTML = "";

      if (memesData.length === 0) {
        memeContainer.innerHTML = '<p>Carregue os memes primeiro.</p>';
        return;
      }

      const randomIndex = Math.floor(Math.random() * memesData.length);
      const randomMeme = memesData[randomIndex];

      const memeElement = document.createElement("div");
      memeElement.className = "meme";

      const memeImage = document.createElement("img");
      memeImage.src = randomMeme.url;
      memeElement.appendChild(memeImage);

      const memeCaption = document.createElement("p");
      memeCaption.textContent = getRandomFunnyText();
      memeElement.appendChild(memeCaption);

      const memeName = document.createElement("h3");
      memeName.textContent = randomMeme.name;
      memeElement.appendChild(memeName);

      memeContainer.appendChild(memeElement);
    }

    function getRandomFunnyText() {
      const funnyTexts = [
        "i was lost till you find me, thats why i'll worship you Lord!!!",
        "let Hallelujah!!!!",
        "I'm just a nobody, trying to tell everybody, all about somebody, who saved my soul",
        "there's nothing i can't do with him",
        "Cause great is your faithfulness to me",
        "From the rising sun to the setting same, i will praise Your name",
        "Forever, author of Salvation",
        "All time God is good",
        "My God is mighty to save",
        "God is good all time"
      ];

      const randomIndex = Math.floor(Math.random() * funnyTexts.length);
      return funnyTexts[randomIndex];
    }