
(() => {

  type Avenger = {
    name: string,
    weapon: string
  };

  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit'
  };

  const captainAmerica: Avenger = {
    name: 'Captain America',
    weapon: 'Shield'
  };

  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  };

  const avengers= [ironman, captainAmerica, thor];

  // for-of
  for (const avenger of avengers) {
    console.log(avenger)
  }

})()