const mongoose = require('mongoose');

const Vislae = require('./models/character/vislae');
const foundations = require('./models/assets/lists/foundations');
const hearts = require('./models/assets/lists/hearts');
const fortes = require('./models/assets/lists/fortes');
const houses = require('./models/assets/lists/houses');

mongoose.connect('mongodb://127.0.0.1:27017/sunsheets');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("seeding");
});

const rand = arr => {
    return arr[Math.floor(Math.random(arr.length - 1))]
}

const seedDB = async () => {
    await Vislae.deleteMany({});
    for (let i = 0; i < 100; i++) {
        const vislae = new Vislae({
 name: 'test guy',
    id: 1,
    editing: false,
    advancing: false,
    foundation: rand(foundations),
    heart: rand(hearts),
    forte: rand(fortes),
    soul: 'dunno',
    experience: {
        joy: {
            current: 0,
            lifetime: 0
        },
        despair: {
            current: 0,
            lifetime: 0
        },
        acumen: {
            current: 0,
            lifetime: 0
        }
    },
    currency: {
        orbs: {
            savings: 0,
            income: 0
        },
        magecoins: 0,
        bloodsilver: 0,
        demontears: 0,
        hiddenKnowledge: 0
    },
    condition: {
        physArmor: 0,
        mentArmor: 0,
        injuries: 0,
        wounds: 0,
        anguish: 0,
        dead: false,
        ghost: false,
    },
    rests: {
        oneAction1: true,
        oneAction2: true,
        tenMinute: true,
        oneHour: true
    },
    pools: {
        certes: {
            accuracy: {
                current: 5,
                max: 5,
                vex: 0,
                scourge: 0
            },
            movement: {
                current: 5,
                max: 5,
                vex: 0,
                scourge: 0
            },
            interaction: {
                current: 5,
                max: 5,
                vex: 0,
                scourge: 0
            },
            physicality: {
                current: 5,
                max: 5,
                vex: 0,
                scourge: 0
            }
        },
        qualia: {
            intellect: {
                current: 5,
                max: 5,
                vex: 0,
                scourge: 0
            },
            perception: {
                current: 5,
                max: 5,
                vex: 0,
                scourge: 0
            },
            sorcery: {
                current: 5,
                max: 5,
                vex: 0,
                scourge: 0
            },
            sortilege: {
                current: 5,
                max: 5,
                vex: 0,
                scourge: 0
            }
        }
    },
    skills: {
        action: [
            {
                skill: 'test',
                level: 1
            }
        ],
        narrative: [
            {
                skill: 'test',
                level: 1
            }
        ],
        development: [
            {
                skill: 'test',
                level: 1
            }
        ]
    },
    bonds: {
        pcs: [
            'some guy'
        ],
        npcs: [
            'some other guy'
        ],
        orgs: [
            'some org'
        ]
    },
    arcs: {
        inProgress: [
            'some quest'
        ],
        completed: []
    },
    self: {
        appearance: 'hot as hell',
        changes: [],
        quirk: 'something quirky',
        secrets: [],
        shadowItem: 'shadows'
    },
    house: {
        appearance: 'rad',
        type: rand(houses),
        level: 4,
        secrets: []
    },
    magic: {
        spells: ['cool spell'],
        cantrips: ['cool cantrip'],
        incantations: {
            current: ['cool incantation'],
            encountered: [],
        },
        longForm: ['cool ritual']
    },
    items: {
        ephemeraLimit: 3,
        conationLimit: 0,
        oopLimit: 3,
        kindledItems: ['kindled hat'],
        ephemera: ['cool ephemera'],
        oop: ['cool oop'],
        mundaneItems: ['something mundane'],
        valuables: ['something valuable']
    }
        })
        await vislae.save();
    }
}

seedDB().then(() => {
    console.log('seeded')
    mongoose.connection.close();
})