const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VislaeSchema = new Schema({
    editing: Boolean,
    advancing: Boolean,
    name: String,
    foundation: String,
    heart: String,

    forte: {
        name: String,
        abilities: Array
    },
    soul: String,
    experience: Object,
    currency: {
        orbs: {
            current: Number,
            income: Number
        },
        magecoins: Number,
        bloodsilver: Number,
        demontears: Number,
        hiddenKnowledge: Number
    },
    condition: {
        armor: Number,
        injuries: Number,
        wounds: Number,
        anguish: Number,
        dead: Boolean,
        ghost: Boolean,
    },
    rests: {
        oneAction1: Boolean,
        oneAction2: Boolean,
        tenMinute: Boolean,
        oneHour: Boolean
    },
    pools: {
        certes: Object,
        qualia: Object
    },
    skills: {
        action: Array,
        narrative: Array,
        development: Array
    },
    bonds: {
        pcs: Array,
        npcs: Array,
        orgs: Array
    },
    arcs: {
        inProgress: Array,
        completed: Array
    },
    self: {
        appearance: {
            entry: String
        },
        changes: Array,
        quirk: String,
        secrets: [

        ],
        shadowItem: ''
    },
    house: {
        appearance: '',
        type: '',
        level: 0,
        secrets: [
        ]
    },
    magic: {
        spells: [],
        cantrips: [],
        incantations: {
            current: [],
            encountered: [
                {
                    name: '',
                    level: 0,
                    description: '',
                    color: ''
                }
            ]
        },
        longForm: []
    },
    items: {
        ephemeraLimit: 3,
        oopLimit: 3,
        kindled: [
            {
                name: '',
                level: '',
                description: '',
                color: ''
            }
        ],
        ephemera: [
            {
                name: '',
                level: 0,
                description: '',
                incantation: '',
                color: ''
            }
        ],
        oop: [
            {
                name: '',
                level: 0,
                description: '',
                color: ''
            }
        ],
        mundane: [
            {
                name: '',
                level: 0,
                description: ''
            }],
        valuables: []
    }
})