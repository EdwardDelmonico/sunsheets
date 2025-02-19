const mongoose = require('mongoose');
const fortes = require('../assets/lists/fortes')
const foundations = require('../assets/lists/foundations')
const hearts = require('../assets/lists/hearts')
const houses = require('../assets/lists/houses')
const pool = require('./pool')
const Schema = mongoose.Schema;


const VislaeSchema = new Schema({
    name: String,
    editing: Boolean,
    advancing: Boolean,
    foundation: {
        type: String,
        enum: foundations
    },
    heart: {
        type: Object,
        enum: hearts
    },
    forte: {
        name: String,
        abilities: Array
    },
    soul: String,
    experience: {
        joy: {
            current: Number,
            lifetime: Number
        },
        despair: {
            current: Number,
            lifetime: Number
        },
        acumen: {
            current: Number,
            lifetime: Number
        }
    },
    currency: {
        orbs: {
            savings: Number,
            income: Number
        },
        magecoins: Number,
        bloodsilver: Number,
        demontears: Number,
        hiddenKnowledge: Number
    },
    condition: {
        physArmor: Number,
        mentArmor: Number,
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
        certes: {
            accuracy: Object,
            movement: Object,
            interaction: Object,
            physicality: Object
        },
        qualia: {
            intellect: Object,
            perception: Object,
            sorcery: Object,
            sortilege: Object
        }
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
        appearance: String,
        changes: Array,
        quirk: String,
        secrets: Array,
        shadowItem: String
    },
    house: {
        appearance: String,
        type: {
            type: String,
            enum: houses
        },
        level: Number,
        secrets: Array
    },
    magic: {
        spells: Array,
        cantrips: Array,
        incantations: {
            current: Array,
            encountered: Array,
        },
        longForm: Array
    },
    items: {
        ephemeraLimit: Number,
        conationLimit: Number,
        oopLimit: Number,
        kindledItems: Array,
        ephemera: Array,
        oop: Array,
        mundaneItems: Array,
        valuables: Array
    }
})

const Vislae = mongoose.model('Vislae', VislaeSchema);
module.exports = Vislae