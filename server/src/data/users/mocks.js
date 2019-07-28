const { addUser } = require('./index');

const USERS =
    [{ "displayName": "Vilma Guiton", "username": "vguiton0", "email": "vguiton0@wp.com", "avatar": "https://robohash.org/eaquequimolestiae.png?size=50x50&set=set1" },
    { "displayName": "Jaymee Gabotti", "username": "jgabotti1", "email": "jgabotti1@wunderground.com", "avatar": "https://robohash.org/eosconsequaturquis.bmp?size=50x50&set=set1" },
    { "displayName": "Victoria Reeday", "username": "vreeday2", "email": "vreeday2@statcounter.com", "avatar": "https://robohash.org/dignissimosidatque.png?size=50x50&set=set1" },
    { "displayName": "Cobbie Greally", "username": "cgreally3", "email": "cgreally3@patch.com", "avatar": "https://robohash.org/solutarationenon.png?size=50x50&set=set1" },
    { "displayName": "Francesco Akast", "username": "fakast4", "email": "fakast4@t.co", "avatar": "https://robohash.org/numquametet.jpg?size=50x50&set=set1" },
    { "displayName": "Trudey Gowthorpe", "username": "tgowthorpe5", "email": "tgowthorpe5@cyberchimps.com", "avatar": "https://robohash.org/fugiatnumquamquia.png?size=50x50&set=set1" },
    { "displayName": "Cleon Pantecost", "username": "cpantecost6", "email": "cpantecost6@cloudflare.com", "avatar": "https://robohash.org/estculpavoluptatibus.bmp?size=50x50&set=set1" },
    { "displayName": "Mortie Saladin", "username": "msaladin7", "email": "msaladin7@youtube.com", "avatar": "https://robohash.org/quoautdoloribus.jpg?size=50x50&set=set1" },
    { "displayName": "Corey Emeny", "username": "cemeny8", "email": "cemeny8@nih.gov", "avatar": "https://robohash.org/laudantiumautemlaboriosam.jpg?size=50x50&set=set1" },
    { "displayName": "Katherina O'Carmody", "username": "kocarmody9", "email": "kocarmody9@moonfruit.com", "avatar": "https://robohash.org/consecteturdoloribustemporibus.jpg?size=50x50&set=set1" }]

USERS.forEach(addUser);