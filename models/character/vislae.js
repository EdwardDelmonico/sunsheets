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
    experience: Array,
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
        armorPhysical: Number,
        armorMental: Number,
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
        certes: Array,
        qualia: Array
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
        type: String,
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