const blankPC = {
    editing: false,
    advancing: false,
    name: '',
    foundation: '',
    heart: '',
    order: {
        currentOrder: '',
        maker: {
            degree: 0,
            signatureObject: {
                name: '',
                abilities: [],
            },
            components: [
                {
                    name: '',
                    level: 0
                }
            ],
            powerSources: [
                {
                    name: '',
                    level: 0
                }
            ],
            applyMods: () => {
                if (pc.order.maker.degree > 0) {

                }
            }
        },
        weaver: {
            degree: 0,
            aggregates: [
                {
                    name: '',
                    qualities: [],
                    absences: []
                }
            ],
            enhanced: [
                {
                    description: '',
                    level: 0,
                    color: '',
                    aggregates: []
                }
            ],
            practiced: [
                {
                    description: '',
                    level: 0,
                    color: '',
                    aggregates: []
                }
            ],
            applyMods: ''
        },
        goetic: {
            degree: 0,
            summonTypes: {
                counsel: false,
                aid: false,
                guard: false,
                spy: false,
                query: false,
                theft: false,
                assail: false,
                restore: false,
                influence: false,
                creation: false,
                glorify: false,
                binding: false,
                ally: false,
            },
            entitiesKnown: [
                {
                    name: '',
                    level: 0,
                    type: ''
                }
            ],
            pacts: [
                {
                    title: '',
                    level: 0
                }
            ],
            familiar: {
                name: '',
                abilities: [

                ]
            },
            applyMods: ''

        },
        apostate: {
            level: 0,
            counterSpell: {
                level: 0,
                spellbreaker: false
            },
            abilities: [
                {
                    name: '',
                    description: '',
                    timesTaken: 0
                }
            ],
            applyMods: ''
        }
    },
    forte: {
        name: '',
        abilities: [
            {
                name: '',
                level: 0,
                description: '',
                color: '',
                cost: () => {
                    if (this.level < 5) {
                        return 1;
                    } else if (this.level < 7) {
                        return 2;
                    } else {
                        return 3;
                    }
                }
            }
        ]
    },
    soul: '',
    experience: {
        acumen: {
            current: 0,
            lifetime: 0
        },
        joy: {
            current: 0,
            lifetime: 0
        },
        despair: {
            current: 0,
            lifetime: 0
        },
        crux: {
            current: 0,
            lifetime: 4
        },
    },
    currency: {
        orbs: {
            current: 0,
            income: 0
        },
        magecoins: 0,
        bloodsilver: 0,
        demontears: 0,
        hiddenKnowledge: 0
    },
    condition: {
        armor: 0,
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

    },
    skills: {
        action: Array,
        narrative: Array,
        development: Array
    },
    bonds: {
        pcs: [],
        npcs: [],
        orgs: []
    },
    arcs: {
        inProgress: [],
        completed: []
    },
    self: {
        appearance: {
            entry: '',
            editing: true
        },
        changes: [],
        quirk: '',
        secrets: [
            {
                name: '',
                level: 0,
                description: '',
                color: ''
            }
        ],
        shadowItem: ''
    },
    house: {
        appearance: '',
        type: '',
        level: 0,
        secrets: [
            {
                name: '',
                level: 0,
                description: '',
                color: ''
            }
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
}

window.localStorage.setItem('blankPC', JSON.stringify(blankPC));

window.localStorage.setItem('newPC', JSON.stringify(blankPC));

// export { pc }