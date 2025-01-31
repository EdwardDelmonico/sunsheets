
const Vance = {
    degree: 0,
    spells: [],
    mind: {
        height: () => {
            if (pc.order.vance.degree > 0) {
                return 2;
            } else if (pc.order.vance.degree > 4) {
                return 4;
            } else {
                return 0
            };
        },
        width: () => {
            if (pc.order.vance.degree > 0) {
                return 2;
            } if (pc.order.vance.degree > 2) {
                return 4
            } else {
                return 0;
            }
        }
    },
    applyMods: () => {
        if (pc.order.vance.degree > 0) {
            pc.pools.sorcery++;
            pc.skills.narrative.push(
                {
                    name: 'Understanding formal magic',
                    level: 1,
                    entry: function () {
                        return `${this.name}     ${this.level} `
                    }
                }
            ),
                pc.bonds.orgs.push(
                    {
                        name: 'the Vancian Order',
                        level: 1,
                        entry: function () {
                            return `Level ${this.level} connection with ${this.name} `
                        }
                    }
                )
        }
        if (pc.order.vance.degree > 3) {
            pc.items.ephemeraLimit++;
        }
        if (pc.order.vance.degree > 5) {
            pc.items.ephemeraLimit++;
        }
    }
}