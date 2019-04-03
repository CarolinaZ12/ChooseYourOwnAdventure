// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "opening.mp3",
    background_image: "begin-back.jpg",
    levels: {

        start: {
            message: "You come across a beautiful butterfly",
            choices: [
                {
                    text: "You don't follow it and go back home",
                    nextLevel: "home",
                },
                {
                    text:"You follow it into a forest",
                    nextLevel: "forest",
                }
            ]
        },
        forest: {
            music: "",
            background_image: "rab-img.jpeg",
            message: "You see rabbits appear!",
            choices: [
                {
                    text: "You follow the rabbits",
                    nextLevel: "deeper",
                },
                
                {
                    text:"You don't follow the rabbits and go back home",
                    nextLevel:"home",
                }
            ]
        },

        deeper: {
            music: "waterfall.mp3",
            background_image: "water.gif",
            message: "They hop along a stream of water...",
            choices: [
                {
                    text: "You decide to abandon your shoes and follow the cute rabbits",
                    nextLevel: "water",
                },
                {
                    text: "You decide to not getting your brand new shoes dirty",
                    nextLevel:"home"
                }
            ]
        },
        water: {
            background_image: "paths.jpg",
            message: "You've made it across but end up in front of two paths..",
            choices: [
                {
                    text: "You decide to go to the left",
                    nextLevel:"flowers",
                },
                {
                    text: "You decide to go to the right",
                    nextLevel:"death",
                },
                {
                    text:"You just want to go home now", 
                    nextLevel:"home",
             }
         ]
    },
        flowers: {
            music: "goodEnd.mp3",
            background_image: "field.jpg",
            message: "You've come across a beautiful field of flowers. You decide to pick some and take them for your mom.",
            choices: [
                {
                    text:"Go back home",
                    nextLevel:"start"
                }
            ]
        },
        death: {
            music: "death.mp3",
            background_image: "badEnd.jpg",
            message:"You fall into a hole never to be seen again...",
            choices: [
                {
                    text: "You have died...now you start your life over...",
                    nextLevel:"start",
                }
            ]
        },
        home: {
            music: "goBack.mp3",
            background_image: "homePage.jpeg",
            message:"Well, now you'll never know how interesting the forest can be...",
            choices: [
                {
                    text: "Start Over",
                    nextLevel:"start",
                }
            ]
        }
    },
};
       