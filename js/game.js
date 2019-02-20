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
                    nextLevel: "field",
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
            message: "A frantic replicant appears onscreen. You don't understand it because it's talking so fast. But the last thing it says are some instructions.",
            choices: [
                {
                    text:"Follow instructions",
                    nextLevel:"",
                },
                
                {
                    text:"",
                    nextLevel:"",
                },
            ]
        },
        
        backRoom: {
            background_image: "",
            music: "",
            message: "You enter the back room and see a ",
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
        field: {
            background_image: "",
            music: "",
            message: "You made it safely home",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
