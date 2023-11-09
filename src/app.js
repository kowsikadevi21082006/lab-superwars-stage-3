const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// Initialize players with image and strength using map
const initPlayers = (players) => {
    return players.map(player => {
        return {
            name: player,
            strength: getRandomStrength(),
            image: "images/super-" + (players.indexOf(player) + 1) + ".png"
        };
    });
}

// Getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template using chaining of Array methods
const buildPlayers = (players, type) => {
    return players
        .filter(player => type === 'hero' ? players.indexOf(player) % 2 === 0 : players.indexOf(player) % 2 !== 0)
        .map(player => {
            return `<div class="player ${type === 'hero' ? '' : 'villain'}">
                        <img src="${player.image}" alt="">
                        <h4>${player.name}</h4>
                        <p class="strength">${player.strength}</p>
                    </div>`;
        })
        .join('');
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}