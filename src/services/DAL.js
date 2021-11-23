const players = [
    {
    "playerInfo": {
        "imageSrc":"https://futhead.cursecdn.com/static/img/19/players/204399.png",
        "dateOfBirth": "09/12/1988",
        "country": "Germany",
        "city": "Stuttgard",
        "placeOfBirth": "Stuttgard, Germany",
        "mainland": "eu",
        "positions": "Center Forward",
        "height":"190",
        "preferredFoot":"Right",
        "fullName": "Eran Zehavi",
        "shortenedPosition":"CF"
    },
    "strengths": [
        {"name": "Key Passes", "level":"Very Strong"},
        {"name": "Finishing", "level":"Stroncg"},
        {"name": "Finishing", "level":"Strong"}
    ],
    "weaknesses": [
        {"name": "Aerial Duels", "level":"Weak"},
        {"name": "Crossing", "level":"Weak"}
    ],
    "emotions": 80,
    "composure": 50,
    "relationships": [
        {"connection": "Team", "level": 25},
        {"connection": "Coach", "level": 50},
        {"connection": "Management", "level": 25}
    ],
    "characteristics": {
        "Pressing Forward": 73,
        "Shadow Striker": 83,
        "Inside Forward": 96,
        "Wide Playmaker": 81,
        "Advanced Playmaker": 86,
        "box-to-box": 100
    }
},
{
    "playerInfo": {
        "imageSrc":"https://bet-bet.net/wp-content/uploads/2021/05/Cristiano-Ronaldo.png",
        "dateOfBirth": "09/12/1999",
        "country": "Portugal",
        "city": "Lisbon",
        "placeOfBirth": "Lisbon, Portugal",
        "mainland": "eu",
        "positions": "Right Wing",
        "height":"187",
        "preferredFoot":"Right",
        "fullName": "Cristiano Ronaldo",
        "shortenedPosition":"RW"
    },
    "strengths": [
        {"name": "Key Crosses", "level":"Strong"},
        {"name": "Finishing", "level":"Strong"},
        {"name": "Crossing", "level":"Medium"}
    ],
    "weaknesses": [
        {"name": "Heading", "level":"Weak"},
        {"name": "Passing", "level":"Weak"},
        {"name": "Talking", "level":"Very Weak"}
    ],
    "emotions": 20,
    "composure": 90,
    "relationships": [
        {"connection": "Team", "level": 70},
        {"connection": "Coach", "level": 20},
        {"connection": "Management", "level": 10}
    ],
    "characteristics": {
        "Pressing Forward": 95,
        "Shadow Striker": 90,
        "Inside Forward": 96,
        "Wide Playmaker": 87,
        "Advanced Playmaker": 86,
        "box-to-a": 70
    }
},
{
    "playerInfo": {
        "imageSrc":"https://bet-bet.net/wp-content/uploads/2021/05/Cristiano-Ronaldo.png",
        "dateOfBirth": "09/12/1999",
        "country": "Portugal",
        "city": "Lisbon",
        "placeOfBirth": "Lisbon, Portugal",
        "mainland": "eu",
        "positions": "Right Wing",
        "height":"187",
        "preferredFoot":"Right",
        "fullName": "Cristiano Ronaldo",
        "shortenedPosition":"RW"
    },
    "strengths": [
        {"name": "Key Crosses", "level":"Strong"},
        {"name": "Finishing", "level":"Strong"},
        {"name": "Crossing", "level":"Medium"}
    ],
    "weaknesses": [
        {"name": "Heading", "level":"Weak"},
        {"name": "Passing", "level":"a"},
        {"name": "Talking", "level":"Very Weak"},
        {"name": "Talking", "level":"Very Weak"},
        {"name": "Talking", "level":"Very Weak"}
    ],
    "emotions": 20,
    "composure": 90,
    "relationships": [
        {"connection": "Team", "level": 70},
        {"connection": "Coach", "level": 20},
        {"connection": "Management", "level": 10}
    ],
    "characteristics": {
        "Pressing Forward": 95,
        "Shadow Striker": 90,
        "Inside Forward": 96,
        "Wide Playmaker": 87,
        "Advanced Playmaker": 86,
        "box-to-a": 70
    }
}
]

class DAL {
    constructor() {}

    getPlayers() {
        return players;
    }

}

export default new DAL();