"use strict";
const movies = {
    "8mm": {
        "title": "8MM",
        "year": "1999",
        "quotes": [
            "DIE! FUCKER DIE! DIE!"
        ]
    },
    "a-score-to-settle": {
        "title": "A Score to Settle",
        "year": "2019",
        "quotes": [
            "Scores have to be settled."
        ]
    },
    "adaptation": {
        "title": "Adaptation.",
        "year": "2002",
        "quotes": [
            "You are what you love, not what loves you."
        ]
    },
    "amos-andrew": {
        "title": "Amos & Andrew",
        "year": "1993",
        "quotes": [
            "I know for all your talk, you're about the whitest damn black man I ever met."
        ]
    },
    "army-of-one": {
        "title": "Army of One",
        "year": "2016",
        "quotes": [
            "Don't you think I look a little like Nic Cage in \"Con Air\"?"
        ]
    },
    "arsenal": {
        "title": "Arsenal",
        "year": "2017",
        "quotes": [
            "YOU OWE ME!"
        ]
    },
    "astro-boy": {
        "title": "Astro Boy",
        "year": "2009",
        "quotes": [
            "It's going to make him perfect, PERFECT!",
            "It means… you're both gonna die."
        ]
    },
    "bangkok-dangerous": {
        "title": "Bangkok Dangerous",
        "year": "2008",
        "quotes": [
            "Where there's money, there's competition and the guy paying me usually wins."
        ]
    },
    "between-worlds": {
        "title": "Between Worlds",
        "year": "2018",
        "quotes": [
            "The universe has given me a second chance."
        ]
    },
    "birdy": {
        "title": "Birdy",
        "year": "1984",
        "quotes": [
            "You ain't gonna fly any more than I could, Birdy.",
            "Maybe life is shitty. It is shitty. I'll tell you something. I'm not trying to pin life anymore. I don't even fucking understand it."
        ]
    },
    "bringing-out-the-dead": {
        "title": "Bringing Out the Dead",
        "year": "1999",
        "quotes": [
            "Where are the Band-Aids? This IS an ambulance, isn't it?",
            "I be bangin'",
            "Don't make me take off my sunglasses."
        ]
    },
    "captain-correllis-mandolin": {
        "title": "Captain Corelli's Mandolin",
        "year": "2001",
        "quotes": [
            "I have always found something in life worth singing about and for that I cannot apologize."
        ]
    },
    "christmas-carol-the-movie": {
        "title": "Christmas Carol: The Movie",
        "year": "2001",
        "quotes": [
            "Ooooohhhhh!"
        ]
    },
    "city-of-angels": {
        "title": "City of Angels",
        "year": "1998",
        "quotes": [
            "I would rather have had one touch of her hand than eternity without it.",
            "What's that like? What's it taste like? Describe it like Hemingway"
        ]
    },
    "color-out-of-space": {
        "title": "Color Out of Space",
        "year": "2019",
        "quotes": [
            "It wasn't like any color I've seen before."
        ]
    },
    "con-air": {
        "title": "Con Air",
        "year": "1997",
        "quotes": [
            "Put… the bunny… back… in the box.",
            "Sorry boss, but there's only two men I trust. One of them's me. The other's not you.",
            "What do you think I'm gonna do? I'm gonna save the fuckin' day!",
            "Well Hoorah for the sounds of fucking silence."
        ]
    },
    "deadfall": {
        "title": "Deadfall",
        "year": "1993",
        "quotes": [
            "Fuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuck!"
        ]
    },
    "dog-eat-dog": {
        "title": "Dog Eat Dog",
        "year": "2016",
        "quotes": [
            "Once you have money, you're never 100 percent sure who your friends are."
        ]
    },
    "drive-angry": {
        "title": "Drive Angry",
        "year": "2011",
        "quotes": [
            "What's he gonna do? Not let me back in?",
            "I never disrobe before gunplay."
        ]
    },
    "dying-of-the-light": {
        "title": "Dying of the Light",
        "year": "2014",
        "quotes": [
            "You've got your head so far up Obama's ass that all you can see is his shit any more."
        ]
    },
    "face-off": {
        "title": "Face/Off",
        "year": "1997",
        "quotes": [
            "I want to take his face… off.",
            "I could eat a peach for hours.",
            "If I were to let you suck my tongue, would you be grateful?",
            "If you dress like Halloween, ghouls will try to get in your pants.",
            "You watch your FUCKIN' MOUTH! I'm about to unleash the biblical plague \"Hell-A\" deserves. But I'll give this SHITHOLE a break if my brother and I walk.",
            "You'll be seeing a lot of changes around here. Papa's got a brand new bag."
        ]
    },
    "fast-times-at-ridgemont-high": {
        "title": "Fast Times at Ridgemont High",
        "year": "1982",
        "quotes": [
            "Brad, your sister's turning into a fox!"
        ]
    },
    "fire-birds": {
        "title": "Fire Birds",
        "year": "1990",
        "quotes": [
            "I AM THE GREATEST!",
            "Snort that, suckers!"
        ]
    },
    "g-force": {
        "title": "G-Force",
        "year": "2009",
        "quotes": [
            "I'm a mole. I got a thing for worms."
        ]
    },
    "ghost-rider": {
        "title": "Ghost Rider",
        "year": "2007",
        "quotes": [
            "Let's ride!",
            "Hey. Dirtbag."
        ]
    },
    "ghost-rider-spirit-of-vengeance": {
        "title": "Ghost Rider: Spirit of Vengeance",
        "year": "2011",
        "quotes": [
            "You will tell me or I will eat your stinking soul!",
            "Black, French, alcoholic priest, kind of a dick. Why, do you know him?",
            "Guns and wine. Naughty priests.",
            "Merry Christmas, YOU ASSHOLES!"
        ]
    },
    "gone-in-sixty-seconds": {
        "title": "Gone in Sixty Seconds",
        "year": "2000",
        "quotes": [
            "I just stole fifty cars in one night!",
            "That’s funny, my name’s Roger. Two Rogers don’t make a right."
        ]
    },
    "grand-isle": {
        "title": "Grand Isle",
        "year": "2019",
        "quotes": [
            "$20,000. That's what I'm gonna pay ya to kill my wife."
        ]
    },
    "grindhouse": {
        "title": "Grindhouse",
        "year": "2007",
        "quotes": [
            "THIS IS MY VTTSTAHHHHHH! AHAHAHAHAHA! AHAHAHAHA!"
        ]
    },
    "guarding-tess": {
        "title": "Guarding Tess",
        "year": "1994",
        "quotes": [
            "And Tess… Get in the god damn chair."
        ]
    },
    "honeymoon-in-vegas": {
        "title": "Honeymoon in Vegas",
        "year": "1992",
        "quotes": [
            "Yoohoo! Can I get a room?"
        ]
    },
    "inconceivable": {
        "title": "Inconceivable",
        "year": "2017",
        "quotes": [
            "My mom says Katie gives her the willies."
        ]
    },
    "it-could-happen-to-you": {
        "title": "It Could Happen to You",
        "year": "1994",
        "quotes": [
            "Decaf, please. I've reached my target heart rate for the day.",
            "It's like we're on two different channels now. I'm CNN and she's the Home Shopping Network.",
            "I told you I'd share my ticket. I never planned on sharing my heart. Maybe I could get lucky twice today."
        ]
    },
    "joe": {
        "title": "Joe",
        "year": "2014",
        "quotes": [
            "Nothing. There's nothing I can do and I hate it.",
            "Hey, there you go. You look like a million bucks. You feel better now?"
        ]
    },
    "kick-ass": {
        "title": "Kick-Ass",
        "year": "2010",
        "quotes": [
            "Oh, child… You always knock me for a loop!",
            "Tool up, honey bunny. It's time to get bad guys."
        ]
    },
    "kiss-of-death": {
        "title": "Kiss of Death",
        "year": "1995",
        "quotes": [
            "Balls, Attitude, Direction.",
            "I have an acronym for myself. Know what it is? B.A.D. B.A.D... Balls, Attitude, Direction. You should give yourself an acronym... 'cause it helps you visualize your goals.",
            "What did I do? You fuck with the bull, you get the horns. That's what I did."
        ]
    },
    "knowing": {
        "title": "Knowing",
        "year": "2009",
        "quotes": [
            "I think shit just happens. But that's me."
        ]
    },
    "leaving-las-vegas": {
        "title": "Leaving Las Vegas",
        "year": "1990",
        "quotes": [
            "I don't know if I started drinking 'cause my wife left me but fuck it anyway."
        ]
    },
    "left-behind": {
        "title": "Left Behind",
        "year": "2014",
        "quotes": [
            "Your God or mine?",
            "I know you all want answers, and believe me, so do I."
        ]
    },
    "lord-of-war": {
        "title": "Lord Of War",
        "year": "2005",
        "quotes": [
            "There are two types of tragedies in life. One is not getting what you want, the other is getting it.",
            "After the Cold War, the AK-47 became Russia's biggest export. After that came vodka, caviar, and suicidal novelists."
        ]
    },
    "mandy": {
        "title": "Mandy",
        "year": "2018",
        "quotes": [
            "I come for the Reaper!",
            "That was my favorite shirt.",
            "You are a vicious snowflake.",
            "You ripped my shirt! YOU RIPPED MY SHIRT!",
            "I'm your God now!"
        ]
    },
    "matchstick-men": {
        "title": "Matchstick Men",
        "year": "2003",
        "quotes": [
            "Hey have you ever been dragged to the sidewalk and beaten till you PISSED… BLOOD!"
        ]
    },
    "mom-and-dad": {
        "title": "Mom and Dad",
        "year": "2017",
        "quotes": [
            "I was going to grab life by the balls and squeeze.",
            "Sawzall.  It saws all."
        ]
    },
    "moonstruck": {
        "title": "Moonstruck",
        "year": "1987",
        "quotes": [
            "I lost my hand! I lost my bride!",
            "The snowflakes are perfect. The stars are perfect. Not us. Not us! We are here to ruin ourselves and to break our hearts and love the wrong people and die. The storybooks are *bullshit*. Now I want you to come upstairs with me and get in my bed!"
        ]
    },
    "national-treasure": {
        "title": "National Treasure",
        "year": "2004",
        "quotes": [
            "I'm gonna steal the Declaration of Independence!"
        ]
    },
    "national-treasure-book-of-secrets": {
        "title": "National Treasure: Book of Secrets",
        "year": "2007",
        "quotes": [
            "I'm gonna kidnap the President of the United States.",
            "Bangers and mash! Bubbles and squeak! Smoked eel pie! Haggis!",
            "Cause obviously you have a tendency to OVERREACT!"
        ]
    },
    "never-on-tuesday": {
        "title": "Never on Tuesday",
        "year": "1988",
        "quotes": [
            "Is anybody hurt? Can I give somebody a lift?"
        ]
    },
    "next": {
        "title": "Next",
        "year": "2007",
        "quotes": [
            "I've seen every possible ending."
        ]
    },
    "outcast": {
        "title": "Outcast",
        "year": "2014",
        "quotes": [
            "You want my blood?"
        ]
    },
    "pay-the-ghost": {
        "title": "Pay the Ghost",
        "year": "2015",
        "quotes": [
            "Pay the what?"
        ]
    },
    "peggy-sue-got-married": {
        "title": "Peggy Sue Got Married",
        "year": "1986",
        "quotes": [
            "Yeah, girls mature faster than guys."
        ]
    },
    "primal": {
        "title": "Primal",
        "year": "2019",
        "quotes": [
            "You kill my cat? I'll blow your head off."
        ]
    },
    "racing-with-the-moon": {
        "title": "Racing With The Moon",
        "year": "1984",
        "quotes": [
            "You mean America's high-flyin' red-white-and-blue bird of freedom?",
            "Eat bark, shithead!"
        ]
    },
    "rage": {
        "title": "Rage",
        "year": "2014",
        "quotes": [
            "How deep is hell?"
        ]
    },
    "raising-arizona": {
        "title": "Raising Arizona",
        "year": "1987",
        "quotes": [
            "I'll be taking these Huggies and whatever cash ya got."
        ]
    },
    "red-rock-west": {
        "title": "Red Rock West",
        "year": "1993",
        "quotes": [
            "Adios, Red Rock."
        ]
    },
    "rumble-fish": {
        "title": "Rumble Fish",
        "year": "1983",
        "quotes": [
            "You know, if there were gangs around like in the old days, I'd be running things, not you."
        ]
    },
    "running-with-the-devil": {
        "title": "Running with the Devil",
        "year": "2019",
        "quotes": [
            "You have gambled. You have lost. It's over."
        ]
    },
    "season-of-the-witch": {
        "title": "Season of the Witch",
        "year": "2011",
        "quotes": [
            "Whomever slays the most men drinks for free.",
            "We're gonna need more holy water."
        ]
    },
    "seeking-justice": {
        "title": "Seeking Justice",
        "year": "2011",
        "quotes": [
            "He just scratched the surface and I thought someone should finish it.",
            "Only if it's a noun, and the words have equal weight. Like, Homeland Security. If it's a participle modifying the first word, then… you better keep it lower case."
        ]
    },
    "snake-eyes": {
        "title": "Snake Eyes",
        "year": "1999",
        "quotes": [
            "Who gives a shit if you're sorry?",
            "It worked, you got a boner!",
            "l guess they don't call you the Executioner for nothing! And you sign my kid's autograph!",
            "I saw you and you saw me, don’t pretend like you don’t know who I am girly man",
            "Cause I was made for this sewer Baby and I AM the king"
        ]
    },
    "spider-man-into-the-spider-verse": {
        "title": "Spider-Man: Into the Spider-Verse",
        "year": "2018",
        "quotes": [
            "I like to drink egg creams and I like to fight Nazis. A lot."
        ]
    },
    "stolen": {
        "title": "Stolen",
        "year": "2012",
        "quotes": [
            "That was for the eight years in prison."
        ]
    },
    "teen-titans-go-to-the-movies": {
        "title": "Teen Titans Go! To the Movies",
        "year": "2018",
        "quotes": [
            "Titans, you guys are never doing anything actually heroic."
        ]
    },
    "the-ant-bully": {
        "title": "The Rock",
        "year": "2006",
        "quotes": [
            "Curse you, rock, a curse upon your children!"
        ]
    },
    "the-bad-lieutenant-port-of-call-new-orleans": {
        "title": "The Bad Lieutenant: Port of Call - New Orleans",
        "year": "2009",
        "quotes": [
            "Shoot him again! His soul's still dancing!",
            "What are these fuckin' iguanas doing on my coffee table?",
            "Everything I take is prescription - except for the heroin.",
            "You don't have a lucky crack pipe?"
        ]
    },
    "the-best-of-times": {
        "title": "The Best of Times",
        "year": "1981",
        "quotes": [
            "I thought I was a man already."
        ]
    },
    "the-boy-in-blue": {
        "title": "The Boy in Blue",
        "year": "1986",
        "quotes": [
            "That makes me sound like some kind of fancy boy!",
            "I'll look like a fancy boy.",
            "You think I'm queer in the attic.",
            "She's foolish for me."
        ]
    },
    "the-cotton-club": {
        "title": "The Cotton Club",
        "year": "1984",
        "quotes": [
            "Bugle Boy, me Jesse James!"
        ]
    },
    "the-croods": {
        "title": "The Croods",
        "year": "2013",
        "quotes": [
            "Tomorrow isn't a place. It's-it's-it… Ugh! You can't see it!",
            "Release the baby!"
        ]
    },
    "the-family-man": {
        "title": "The Family Man",
        "year": "2000",
        "quotes": [
            "I want that cake!"
        ]
    },
    "the-frozen-ground": {
        "title": "The Frozen Ground",
        "year": "2013",
        "quotes": [
            "You know, he stalks them like his next trophy animal, he rapes them and kills them."
        ]
    },
    "the-rock": {
        "title": "The Rock",
        "year": "1996",
        "quotes": [
            "How in the name of ZEUS'S BUTTHOLE did you get out of your cell?",
            "I mean it, honey, the world is being Fed-exed to hell in a hand cart.",
            "I love pressure. I eat it for breakfast.",
            "Listen, I think we got started off on the wrong foot. I'm Stan Goodspeed, FBl. Uh - Let's talk music. Do you like the Elton John song, \"Rocket Man\"?",
            "Well, I'm one of those fortunate people who like my job, sir. Got my first chemistry set when I was seven, blew my eyebrows off, we never saw the cat again, been into it ever since.",
            "What do you say, we cut the chit-chat, a-hole!"
        ]
    },
    "the-runner": {
        "title": "The Runner",
        "year": "2015",
        "quotes": [
            "I'm gonna make sure these bastards pay for what they've taken from you."
        ]
    },
    "the-sorcerers-apprentice": {
        "title": "The Sorcerer's Apprentice",
        "year": "2010",
        "quotes": [
            "I had a dream. You were insulting me, Dave. Repeatedly.",
            "I just remembered, I have to go into town to pick up your anti-itch cream",
            "Well, today's your lucky day, 'cause I brought an eagle."
        ]
    },
    "the-trust": {
        "title": "The Trust",
        "year": "2016",
        "quotes": [
            "I think that guy is getting a hand job.  He's still eating so it's hard to tell."
        ]
    },
    "the-weather-man": {
        "title": "The Weather Man",
        "year": "2005",
        "quotes": [
            "People don't throw things at me any more. Maybe because I carry a bow around.",
            "I mean, I'll bet no one ever threw a pie at, like Harriet Tubman, the founder of the Underground railroad. I'll bet you a million fucking dollars."
        ]
    },
    "the-wicker-man": {
        "title": "The Wicker Man",
        "year": "2006",
        "quotes": [
            "OH, NO! NOT THE BEES! NOT THE BEES!",
            "WH-WHAT IS THAT? WHAT IS THAT? WHAT IS IT?",
            "How'd it get burned? How'd it get burned? HOW'D IT GET BURNED, HOW'D IT GET BURNED?",
            "THIS IS MURDER! *MURDER!* YOU'LL ALL BE *GUILTY!* AND YOU'RE DOING IT FOR *NOTHING!* KILLING ME WON'T BRING BACK YOUR GODDAMN HONEY!",
            "BITCHES! YOU BITCHES!",
            "What's in the bag? A shark or something?",
            "Step away from the bike!"
        ]
    },
    "time-to-kill": {
        "title": "Time to Kill",
        "year": "1989",
        "quotes": [
            "Wanna smoke?"
        ]
    },
    "trapped-in-paradise": {
        "title": "Trapped in Paradise",
        "year": "1994",
        "quotes": [
            "Ring Dings and milk? Oh sure. Then we'll get some balloons and go to the puppet show.",
            "And the whole time… you stand there… with this who-me… expression… on your FACE!"
        ]
    },
    "trespass": {
        "title": "Trespass",
        "year": "2011",
        "quotes": [
            "In your hands they go back to being nothing but rocks."
        ]
    },
    "valley-girl": {
        "title": "Valley Girl",
        "year": "1983",
        "quotes": [
            "All right, but when they attack the car, save the radio.",
            "She looks totally dazzling tonight."
        ]
    },
    "vampires-kiss": {
        "title": "Vampire's Kiss",
        "year": "1988",
        "quotes": [
            "I'm a vampire! I'm a vampire! I'm a vampire!",
            "A, B, C, D, E, F, G! H, I, J, K, L, M, N, O, P!  Q, R, S, T, U, V! W, X, Y, Z! HUH? THAT'S ALL YOU HAVE TO DO!",
            "I NEVER MISFILED ANYTHING! NOT ONCE, NOT ONE TIME! I wanna know, really, WHO DID?",
            "Am I getting THROUGH TO YOU, Alva?",
            "You just PUT it IN the RIGHT FILE! According to ALPHABETICAL ORDER!"
        ]
    },
    "wild-at-heart": {
        "title": "Wild At Heart",
        "year": "1990",
        "quotes": [
            "This is a snakeskin jacket!",
            "My dog barks some.",
            "Did I ever tell ya that this here jacket represents a symbol of my individuality, and my belief in personal freedom?"
        ]
    },
    "windtalkers": {
        "title": "Windtalkers",
        "year": "2002",
        "quotes": [
            "What a magical heap of Navajo horseshit!"
        ]
    },
    "world-trade-center": {
        "title": "World Trade Center",
        "year": "2006",
        "quotes": [
            "You… kept me… alive."
        ]
    },
    "zandalee": {
        "title": "Zandalee",
        "year": "1991",
        "quotes": [
            "I wanna shake you naked and eat you alive…"
        ]
    }
}

const years = {
  "1981": ["the-best-of-times"],
  "1982": ["fast-times-at-ridgemont-high"],
  "1983": ["rumble-fish", "valley-girl"],
  "1984": ["birdy", "racing-with-the-moon", "the-cotton-club"],
  "1986": ["peggy-sue-got-married", "the-boy-in-blue"],
  "1987": ["moonstruck", "raising-arizona"],
  "1988": ["never-on-tuesday", "vampires-kiss"],
  "1989": ["time-to-kill"],
  "1990": ["fire-birds", "wild-at-heart"],
  "1991": ["zandalee"],
  "1992": ["honeymoon-in-vegas"],
  "1993": ["amos-andrew", "deadfall", "red-rock-west"],
  "1994": ["guarding-tess", "it-could-happen-to-you", "trapped-in-paradise"],
  "1995": ["kiss-of-death", "leaving-las-vegas"],
  "1996": ["the-rock"],
  "1997": ["con-air", "face-off"],
  "1998": ["city-of-angels"],
  "1999": ["8mm", "bringing-out-the-dead", "snake-eyes"],
  "2000": ["gone-in-sixty-seconds", "the-family-man"],
  "2001": ["captain-correllis-mandolin", "christmas-carol-the-movie"],
  "2002": ["adaptation", "windtalkers"],
  "2003": ["matchstick-men"],
  "2004": ["national-treasure"],
  "2005": ["lord-of-war", "the-weather-man"],
  "2006": ["the-ant-bully", "the-wicker-man", "world-trade-center"],
  "2007": [
    "ghost-rider",
    "grindhouse",
    "national-treasure-book-of-secrets",
    "next"
  ],
  "2008": ["bangkok-dangerous"],
  "2009": [
    "astro-boy",
    "g-force",
    "knowing",
    "the-bad-lieutenant-port-of-call-new-orleans"
  ],
  "2010": ["kick-ass", "the-sorcerers-apprentice"],
  "2011": [
    "drive-angry",
    "ghost-rider-spirit-of-vengeance",
    "season-of-the-witch",
    "seeking-justice",
    "trespass"
  ],
  "2012": ["stolen"],
  "2013": ["the-croods", "the-frozen-ground"],
  "2014": ["dying-of-the-light", "joe", "left-behind", "outcast", "rage"],
  "2015": ["pay-the-ghost", "the-runner"],
  "2016": ["army-of-one", "dog-eat-dog", "the-trust"],
  "2017": ["arsenal", "inconceivable", "mom-and-dad"],
  "2018": [
    "between-worlds",
    "mandy",
    "spider-man-into-the-spider-verse",
    "teen-titans-go-to-the-movies"
  ],
  "2019": [
    "a-score-to-settle",
    "color-out-of-space",
    "grand-isle",
    "primal",
    "running-with-the-devil"
  ]
};

module.exports = {
    movies,
    years
}