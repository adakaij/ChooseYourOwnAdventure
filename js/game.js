// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    background_image: "",
    music: "",
    levels: {

        start: {
            message: "You see a blinking bright light in the alleyway",
            choices: [
                {
                    text: "Follow the light",
                    nextLevel: "room",
                },

                {
                    text: "Keep on walking",
                    nextLevel: "home",
                },
            ]
        },

        room: {
            background_image: "",
            music: "",
            message: "You find yourself in an abandoned room, the bright light is coming from a screen. But suddenly a loud bang comes from the back room. What do you do?",
            choices: [
                {
                    text: "Mess around with the computer",
                    nextLevel: "sentMessage",
                },
                
                {
                    text: "Explore the back room",
                    nextLevel: "backRoom",
                },
            ]
        },

        sentMessage: {
            background_image: "",
            music: "",
            message: "Someone frantic appears onscreen. You don't comprehend what they're saying but at the end, they ask you if you're willing to follow what they say.",
            choices: [
                {
                    text:"Follow instructions",
                    nextLevel:"",
                },
                
                {
                    text:"Leave",
                    nextLevel:"home",
                },
            ]
        },
        
        backRoom: {
            background_image: "",
            music: "",
            message: "You enter the back room and see a broken replicant. What do you do?",
            choices: [
                {
                    text:"",
                    nextLevel:"",
                },
                
                {
                    text:"",
                    nextLevel:"",
                },
            ]
        },
        home: {
            background_image: "",
            music: "",
            message: "You ignored it all and made it safely home",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
