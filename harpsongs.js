var availablesongs = {
    /*
    "hymntothejoy": {
        name: "Hymn to the Joy",
    },

    "frere": {
        name: "Frére Jacques",
    },
    "grace": {
        name: "Amazing Grace",
    },
    "brahms": {
        name: "Brahms' Lullaby",
    },
    */
    "birthday": {
        name: "Happy Birthday to You",
        tempo: 250,
        notes: [
            { column: -1, pitch: 1 },
            { column: 0, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 0, pitch: 1 },
            { column: 1, pitch: 3 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 0, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 2, pitch: 6 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 1, pitch: 5 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 0, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 0, pitch: 1 },
            { column: 1, pitch: 3 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 0, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 2, pitch: 8 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 1, pitch: 6 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 0, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 0, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 6, pitch: 13 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 5, pitch: 10 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 4, pitch: 6 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 3, pitch: 5 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 2, pitch: 3 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 4, pitch: 11 },
            { column: -1, pitch: 1 },
            { column: 4, pitch: 11 },
            { column: 3, pitch: 10 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 1, pitch: 6 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 2, pitch: 8 },
            { column: -1, pitch: 1 },
            { column: -1, pitch: 1 },
            { column: 1, pitch: 6 },
          ],
    },
    /*
    "greensleeves": {
        name: "Greensleeves",
    },
    "geothermy": {
        name: "Geothermy",
    },
    "minuet": {
        name: "Minuet",
    },
    "joytotheworld": {
        name: "Joy to the World",
    },
    "godly": {
        name: "Godly Imagination",
    },
    "rose": {
        name: "La Vie en Rose",
    },
    */
    "campfire": {
        name: "Through the Campfire",
        tempo: 210,
        notes: [
            { column: -1, pitch: 1 },
            { column: 1, pitch: 9 },
            { column: 2, pitch: 11 },
            { column: 3, pitch: 13 },
            { column: 2, pitch: 9 },
            { column: 3, pitch: 11 },
            { column: 4, pitch: 13 },
            { column: 5, pitch: 14 },
            { column: 2, pitch: 11 },
            { column: 5, pitch: 16 },
            { column: 3, pitch: 13 },
            { column: 4, pitch: 14 },
            { column: 2, pitch: 11 },
            { column: 3, pitch: 13 },
            { column: 4, pitch: 14 },
            { column: 3, pitch: 13 },
            { column: 2, pitch: 11 },
            { column: 1, pitch: 9 },
            { column: 2, pitch: 11 },
            { column: 3, pitch: 13 },
            { column: 2, pitch: 9 },
            { column: 3, pitch: 11 },
            { column: 4, pitch: 13 },
            { column: 5, pitch: 14 },
            { column: 2, pitch: 11 },
            { column: 5, pitch: 16 },
            { column: 3, pitch: 13 },
            { column: 4, pitch: 14 },
            { column: 2, pitch: 11 },
            { column: 3, pitch: 13 },
            { column: 4, pitch: 14 },
            { column: 3, pitch: 13 },
            { column: 2, pitch: 11 },
            { column: 1, pitch: 9 },
            { column: 2, pitch: 11 },
            { column: 3, pitch: 13 },
            { column: 2, pitch: 9 },
            { column: 3, pitch: 11 },
            { column: 4, pitch: 13 },
            { column: 5, pitch: 14 },
            { column: 2, pitch: 11 },
            { column: 5, pitch: 16 },
            { column: 3, pitch: 13 },
            { column: 4, pitch: 14 },
            { column: 2, pitch: 11 },
            { column: 3, pitch: 13 },
            { column: 4, pitch: 14 },
            { column: 3, pitch: 13 },
            { column: 2, pitch: 11 },
            { column: 1, pitch: 9 },
            { column: 2, pitch: 11 },
            { column: 3, pitch: 13 },
            { column: 2, pitch: 9 },
            { column: 3, pitch: 11 },
            { column: 4, pitch: 13 },
            { column: 5, pitch: 14 },
            { column: 2, pitch: 11 },
            { column: 5, pitch: 16 },
            { column: 3, pitch: 13 },
            { column: 4, pitch: 14 },
            { column: 2, pitch: 11 },
            { column: 3, pitch: 13 },
            { column: 4, pitch: 14 },
            { column: 6, pitch: 16 },
            { column: 5, pitch: 14 },
            { column: 4, pitch: 13 },
            { column: 5, pitch: 14 },
            { column: 4, pitch: 13 },
            { column: 3, pitch: 11 },
            { column: 4, pitch: 13 },
            { column: 3, pitch: 11 },
            { column: 2, pitch: 9 },
            { column: 3, pitch: 11 },
            { column: 2, pitch: 9 },
            { column: 1, pitch: 8 },
            { column: 2, pitch: 9 },
            { column: 1, pitch: 8 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: -1, pitch: 6 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: -1, pitch: 6 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 2, pitch: 9 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: -1, pitch: 6 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 0, pitch: 6 },
            { column: 5, pitch: 13 },
            { column: -1, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: -1, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: 5, pitch: 13 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: -1, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: 2, pitch: 9 },
            { column: 4, pitch: 11 },
            { column: -1, pitch: 6 },
            { column: 1, pitch: 8 },
            { column: 4, pitch: 11 },
            { column: -1, pitch: 6 },
            { column: 1, pitch: 8 },
            { column: 4, pitch: 11 },
            { column: 1, pitch: 8 },
            { column: 4, pitch: 11 },
            { column: 4, pitch: 11 },
            { column: 1, pitch: 8 },
            { column: 4, pitch: 11 },
            { column: -1, pitch: 6 },
            { column: 1, pitch: 8 },
            { column: 3, pitch: 9 },
            { column: 2, pitch: 8 },
            { column: 1, pitch: 6 },
            { column: 2, pitch: 8 },
            { column: 1, pitch: 6 },
            { column: 0, pitch: 4 },
            { column: -1, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: -1, pitch: 6 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: -1, pitch: 6 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 2, pitch: 9 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: -1, pitch: 6 },
            { column: 0, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 0, pitch: 6 },
            { column: 5, pitch: 13 },
            { column: -1, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: -1, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: 6, pitch: 14 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: -1, pitch: 6 },
            { column: 2, pitch: 9 },
            { column: 5, pitch: 13 },
            { column: 2, pitch: 9 },
            { column: 4, pitch: 11 },
            { column: -1, pitch: 6 },
            { column: 1, pitch: 8 },
            { column: 4, pitch: 11 },
            { column: -1, pitch: 6 },
            { column: 1, pitch: 8 },
            { column: 4, pitch: 11 },
            { column: 1, pitch: 8 },
            { column: 4, pitch: 11 },
            { column: 4, pitch: 11 },
            { column: 1, pitch: 8 },
            { column: 4, pitch: 11 },
            { column: -1, pitch: 6 },
            { column: 1, pitch: 8 },
            { column: 3, pitch: 9 },
            { column: 2, pitch: 8 },
            { column: 1, pitch: 6 },
            { column: 2, pitch: 8 },
            { column: 1, pitch: 6 },
            { column: 0, pitch: 4 },
            { column: -1, pitch: 6 },
            { column: 1, pitch: 6 },
            { column: 6, pitch: 18 }
          ],
    },
    /*
    "pachelbel": {
        name: "Pachelbel",
    }
    */
};
