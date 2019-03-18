// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    background_image: "br-opening.jpg",
    levels: {

        start: {
            message: "You're a truck driver doing your job, you suddenly get a message asking you if you would follow their instructions.",
            choices: [
                {
                    text: "Follow instructions",
                    nextLevel: "intoTheCity",
                },

                {
                    text: "Ignore it",
                    nextLevel: "safety",
                },
            ]
        },

        intoTheCity: {
            background_image: "br-intocity.png",
            message: "You have two options for destinations.",
            choices: [
                {
                    text: "Go the alley",
                    nextLevel: "alley",
                },
                
                {
                    text: "Go the junkyard",
                    nextLevel: "yard",
                },
            ]
        },

        alley: {
            background_image: "br-alley.jpg",
            message: "You're now on your feet wandering in an alley. Your instructions tell you that when you hear a call you'll answer it.",
            choices: [
                {
                    text:"",
                    nextLevel:"room",
                },
                
                {
                    text:"",
                    nextLevel:"",
                },
            ]
        },
        
        room: {
            background_image: "br-room.jpg",
            message: "",
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
        
        yard: {
            background_image: "br-yard.jpg",
            message: "",
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
        
        blackout:{
            background_image: "br-blackout.png",
            message: "Suddenly, a citywide blackout occurs.",
            choices: [
                {
                    text: "Play again?",
                    nextLevel: "start",
                },
            ]
        },
        
        safety: {
            background_image: "br-shortend.jpg",
            message: "Not much of a compelling story if you cut it short, does it?",
            choices: [
                {
                    text: "Try again?",
                    nextLevel: "start",
                },
            ]
        },

    }
};
