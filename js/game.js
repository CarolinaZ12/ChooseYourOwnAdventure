// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a beautiful butterfly",
            choices: [
                {
                    text: "You don't follow it",
                    nextLevel: "field",
                },
                {
                    text:"You follow it into a forest",
                    nextLevel: "forest",
                }
            ]
        },

        forest: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "A rabbit appears!",
            choices: [
                {
                    text: "You follow the rabbit",
                    nextLevel: "more",
                },
            ]
        },

        field: {
            message: "You go home",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
       