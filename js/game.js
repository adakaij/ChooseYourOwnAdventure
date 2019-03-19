// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    background_image: "br-start.jpg",
    levels: {

        start: {
            message: "You're at your apartment and you recieve an call from an unknown source to send your truck to somewhere during your next shift. What do you do?",
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
            background_image: "br-into.jpg",
            message: "While on the road you realized your destination could be either two places. Where do you go?",
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
            background_image: "br-alleyway.jpg",
            message: "You get out of your truck and try to meet with a handler. Who do you approach?",
            choices: [
                {
                    text:"The man with a coat?",
                    nextLevel:"cutShort",
                },
                
                {
                    text:"The man with a suit?",
                    nextLevel:"cutShort",
                },
            ]
        },
        
        yard: {
            background_image: "br-yard.jpg",
            message: "You meet a handler and they tell you to hand the keys over, what do you do?",
            choices: [
                {
                    text:"Hand over truck keys",
                    nextLevel:"room",
                },
                
                {
                    text:"Refuse",
                    nextLevel:"cutShort",
                },
            ]
        },
        
        room: {
            background_image: "br-room.jpg",
            message: "Your handler tells you to stay in this room and congrats your short mission is over! Now what?",
            choices: [
                {
                    text:"Play from the start",
                    nextLevel:"start",
                },
            ]
        },
        
        cutShort:{
            background_image: "br-cutShort.png",
            message: "You really don't know how to keep yourself out of harm's way huh? You end here.",
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
