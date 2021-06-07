// functie om de naam te vragen en het soort spel

function getName() {
    person = prompt("Wat is je naam?");
    if (person != null) {
      document.getElementById("start").innerText = "";
      document.getElementById("name").innerHTML =
        "Hallo " +
        person +
        ", alles goed? <br> Zullen we spelen? <br> Kies maar: <br>";
      document.getElementById("newgame").innerHTML =
        "<p class='item'><button onclick='playGame()'>Ja!</button></p> <br>";
    }
    console.log(person);
  }
  
  // functie om een random getal te genereren
  // tussen twee getallen aan de gebruiker gevraagd
  
  function getRandomInt(min, max) {
    console.log("random");
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // functie om het spel te beindigen en te vragen of ze nog een keer willen
  // roept getName aan.
  
  function newGame() {
    console.log(person);
    console.log("new game");
    document.getElementById("name").innerHTML =
      "Bedankt voor het spelen " + person + ". <br> Wil je nog een keer?";
  
    document.getElementById("start").innerText = "";
    document.getElementById("newgame").innerText = "";
    document.getElementById("cancel").innerText = "";
    getName();
  }
  
  // functie om het hoogste getal te vragen van de range
  // deze moet ná de laagste uitgevoerd worden
  
  function askMaxRange() {
    maxRange = 0;
    while (maxRange == undefined || minRange >= maxRange) {
      console.log(maxRange + " fout");
      console.log("in askmaxrange is minRange nu " + minRange);
      maxRange = parseInt(
        prompt(
          "Tussen " +
            minRange +
            " en welk cijfer zal ik een te raden getal kiezen? Voer een getal in dat minimaal 1 groter is dan " +
            minRange
        ),
        10
      );
    }
    console.log(maxRange + " maxRange goed");
    alert(
      "Ok! Ik kies een getal tussen de " + minRange + " en de " + maxRange + "!"
    );
  
    return maxRange;
  }
  
  // funtie om het laagste getal te vragen van de range
  // Deze moet als eerste gevraagd worden
  
  function askMinRange() {
    alert("Ik ga een willekeurig cijfer kiezen tussen twee getallen in");
    minRange = 0;
    while (minRange == 0 || minRange == undefined) {
      console.log(minRange + " minRange fout");
  
      minRange = parseInt(prompt("Welk laagste cijfer moet ik gebruiken?"), 10);
    }
    console.log(minRange + " goed");
    alert("Ok! Ik kies een getal vanaf " + minRange + "!");
  
    return minRange;
  }
  
  // functie om het aantal beurten te bepalen
  
  function askNumberofLives() {
    lives = parseInt(
      prompt(
        "Hoeveel beurten zal ik je geven?"
      ),
      10
    );
    while (lives == 0 || lives == undefined) {
      alert("Voer een minimaal aantal beurten van 1 in");
      lives = prompt(
        "Hoeveel beurten zal ik je geven?"
      );
    }
    alert("Je krijgt " + lives + " beurten om het getal te raden. Succes!");
    return lives;
  }
  
  // Het spel 'Doe een gok'. 
  
  function playGame() {
    document.getElementById("start").innerText = "";
    document.getElementById("name").innerText = "";
    document.getElementById("newgame").innerText = "";
    askMinRange();
    askMaxRange();
    askNumberofLives();
    let NumberToGuess = getRandomInt(minRange, maxRange);
    console.log(NumberToGuess + " is het te raden nummer");
    let UserGuess = undefined;
    for (i = lives - 1; i <= lives; i--) {
      console.log("poging " + i + " van " + lives);
      UserGuess = prompt(
        "Welk nummer tussen " +
          minRange +
          " en " +
          maxRange +
          " denk je dat ik heb?"
      );
      if (UserGuess > maxRange || UserGuess < minRange) {
        console.log(UserGuess + " niet binnen range");
        alert(
          "Kom op, " +
            person +
            ", je hebt " +
            UserGuess +
            " geantwoord. Dat ligt niet tussen " +
            minRange +
            " en " +
            maxRange +
            ". Opnieuw!"
        );
        i++;
      } else if (UserGuess != NumberToGuess && i != 0) {
        console.log(UserGuess + " is niet goed");
        alert(
          "nee, " +
            UserGuess +
            " is niet goed. Probeer opnieuw. Je hebt nog " +
            i +
            " pogingen over"
        );
      } else if (i == 0) {
        console.log("geen lives meer over");
        alert(
          "Helaas! je hebt het getal " +
            NumberToGuess +
            " niet binnen " +
            lives +
            " beurten geraden."
        );
        return einde();
      } else {
        console.log("wel een match");
        alert("ja! in " + (lives - i) + "x goed");
        return einde();
      }
    }
  }
  function einde() {
    document.getElementById("name").innerHTML =
      "Bedankt " +
      person +
      ", dat was leuk! <br> Zullen we nog een keer spelen?";
    document.getElementById("newgame").innerHTML =
      "<p class='item'><button onclick='newGame()'>ja</button></p>";
    document.getElementById("cancel").innerHTML =
      "<p class='item'><button onclick='afsluiting()'>nee</button></p>";
  }
  
  // functie als men helemaal niet meer verder wil spelen
  
  function afsluiting() {
    alert("Bedankt voor het spelen en tot de volgende keer, " + person + "!");
    location.reload();
  }
  

  