//PC Object
let pc = JSON.parse(window.localStorage.getItem('blankPC'))

if (JSON.parse(window.localStorage.getItem(fullPC))) {
    pc = JSON.parse(window.localStorage.getItem(fullPC));
}

// const pc = {
//     populate: function (target) {
//         target = this;
//     },
//     creating: false,
//     editing: false,
//     advancing: false,
//     name: '',
//     foundation: '',
//     heart: '',
//     order: {
//         vance: {
//             degree: 0,
//             spells: [
//                 {
//                     name: '',
//                     level: 0,
//                     description: '',
//                     color: '',
//                     facet: '',
//                     class: '',
//                     size: {
//                         height: () => {
//                             if (this.class === 'alpha') {
//                                 return 1;
//                             } else if (this.class === 'beta' | this.class === 'gamma') {
//                                 return 2;
//                             } else if (this.class === 'omega') {
//                                 return 4;
//                             }
//                         },
//                         width: () => {
//                             if (this.class === 'alpha' | this.class === 'beta') {
//                                 return 2;
//                             } else if (this.class === 'gamma' | this.class === 'omega') {
//                                 return 4;
//                             }
//                         }
//                     }
//                 }
//             ],
//             mind: {
//                 height: () => {
//                     if (pc.order.vance.degree > 0) {
//                         return 2;
//                     } else if (pc.order.vance.degree > 4) {
//                         return 4;
//                     } else {
//                         return 0
//                     };
//                 },
//                 width: () => {
//                     if (pc.order.vance.degree > 0) {
//                         return 2;
//                     } if (pc.order.vance.degree > 2) {
//                         return 4
//                     } else {
//                         return 0;
//                     }
//                 }
//             },
//             applyMods: () => {
//                 if (pc.order.vance.degree > 0) {
//                     pc.pools.sorcery++;
//                     pc.skills.narrative.push(
//                         {
//                             name: 'Understanding formal magic',
//                             level: 1,
//                             entry: function () {
//                                 return `${this.name}     ${this.level} `
//                             }
//                         }
//                     ),
//                         pc.bonds.orgs.push(
//                             {
//                                 name: 'the Vancian Order',
//                                 level: 1,
//                                 entry: function () {
//                                     return `Level ${this.level} connection with ${this.name} `
//                                 }
//                             }
//                         )
//                 }
//                 if (pc.order.vance.degree > 3) {
//                     pc.items.ephemeraLimit++;
//                 }
//                 if (pc.order.vance.degree > 5) {
//                     pc.items.ephemeraLimit++;
//                 }
//             }
//         },
//         maker: {
//             degree: 0,
//             signatureObject: {
//                 name: '',
//                 abilities: [],
//             },
//             components: [
//                 {
//                     name: '',
//                     level: 0
//                 }
//             ],
//             powerSources: [
//                 {
//                     name: '',
//                     level: 0
//                 }
//             ],
//             applyMods: () => {
//                 if (pc.order.maker.degree > 0) {

//                 }
//             }
//         },
//         weaver: {
//             degree: 0,
//             aggregates: [
//                 {
//                     name: '',
//                     qualities: [],
//                     absences: []
//                 }
//             ],
//             enhanced: [
//                 {
//                     description: '',
//                     level: 0,
//                     color: '',
//                     aggregates: []
//                 }
//             ],
//             practiced: [
//                 {
//                     description: '',
//                     level: 0,
//                     color: '',
//                     aggregates: []
//                 }
//             ],
//             applyMods: ''
//         },
//         goetic: {
//             degree: 0,
//             summonTypes: {
//                 counsel: () => {
//                     if (pc.order.goetic.degree > 0) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 aid: () => {
//                     if (pc.order.goetic.degree > 0) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 guard: () => {
//                     if (pc.order.goetic.degree > 0) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 spy: () => {
//                     if (pc.order.goetic.degree > 0) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 query: () => {
//                     if (pc.order.goetic.degree > 1) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 theft: () => {
//                     if (pc.order.goetic.degree > 1) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 assail: () => {
//                     if (pc.order.goetic.degree > 1) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 restore: () => {
//                     if (pc.order.goetic.degree > 2) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 influence: () => {
//                     if (pc.order.goetic.degree > 2) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 creation: () => {
//                     if (pc.order.goetic.degree > 2) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 glorify: () => {
//                     if (pc.order.goetic.degree > 3) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 binding: () => {
//                     if (pc.order.goetic.degree > 3) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//                 ally: () => {
//                     if (pc.order.goetic.degree > 3) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 },
//             },
//             entitiesKnown: [
//                 {
//                     name: '',
//                     level: 0,
//                     type: '',
//                     description: '',
//                 }
//             ],
//             pacts: [
//                 {
//                     title: '',
//                     entities: '',
//                     level: 0
//                 }
//             ],
//             familiar: {
//                 name: '',
//                 abilities: []
//             },
//             applyMods: ''

//         },
//         apostate: {
//             degree: 0,
//             counterSpell: {
//                 level: 0,
//                 spellbreaker: false
//             },
//             abilities: [
//                 {
//                     name: '',
//                     description: '',
//                     timesTaken: 0
//                 }
//             ],
//             applyMods: ''
//         }
//     },
//     forte: {
//         name: '',
//         abilities: [
//             {
//                 name: '',
//                 level: 0,
//                 description: '',
//                 color: '',
//                 cost: () => {
//                     if (this.level < 5) {
//                         return 1;
//                     } else if (this.level < 7) {
//                         return 2;
//                     } else {
//                         return 3;
//                     }
//                 }
//             }
//         ]
//     },
//     soul: '',
//     experience: {
//         acumen: {
//             current: 0,
//             lifetime: 0
//         },
//         joy: {
//             current: 0,
//             lifetime: 0
//         },
//         despair: {
//             current: 0,
//             lifetime: 0
//         },
//         crux: {
//             current: 0,
//             lifetime: 4
//         },
//     },
//     currency: {
//         orbs: {
//             current: 0,
//             income: 0
//         },
//         magecoins: 0,
//         bloodsilver: 0,
//         demontears: 0,
//         hiddenKnowledge: 0
//     },
//     condition: {
//         armor: 0,
//         injuries: 0,
//         wounds: 0,
//         anguish: 0,
//         dead: false,
//         ghost: false,
//     },
//     rests: {
//         oneAction1: true,
//         oneAction2: true,
//         tenMinute: true,
//         oneHour: true
//     },
//     pools: {
//         certes: {
//             bonus: 0,
//             scourge: 0,
//             accuracy: {
//                 current: 0,
//                 max: 0,
//                 vex: 0,
//                 scourge: 0
//             },
//             movement: {
//                 current: 0,
//                 max: 0,
//                 vex: 0,
//                 scourge: 0
//             },
//             perception: {
//                 current: 0,
//                 max: 0,
//                 vex: 0,
//                 scourge: 0
//             },
//             physicality: {
//                 current: 0,
//                 max: 0,
//                 vex: 0,
//                 scourge: 0
//             }
//         },
//         qualia: {
//             bonus: 0,
//             scourge: 0,
//             intellect: {
//                 current: 0,
//                 max: 0,
//                 vex: 0,
//                 scourge: 0
//             },
//             interaction: {
//                 current: 0,
//                 max: 0,
//                 vex: 0,
//                 scourge: 0
//             },
//             sorcery: {
//                 current: 0,
//                 max: 0,
//                 vex: 0,
//                 scourge: 0
//             },
//             sortilege: {
//                 current: 0,
//                 max: 0,
//                 vex: 0,
//                 scourge: 0
//             }
//         }
//     },
//     skills: {
//         action: [],
//         narrative: [],
//         development: []
//     },
//     bonds: {
//         pcs: [],
//         npcs: [],
//         orgs: []
//     },
//     arcs: {
//         inProgress: [],
//         completed: []
//     },
//     self: {
//         appearance: {
//             entry: '',
//             editing: true
//         },
//         changes: [],
//         quirk: '',
//         secrets: [
//             {
//                 name: '',
//                 level: 0,
//                 description: '',
//                 color: ''
//             }
//         ],
//         shadowItem: ''
//     },
//     house: {
//         appearance: '',
//         type: '',
//         level: 0,
//         secrets: [
//             {
//                 name: '',
//                 level: 0,
//                 description: '',
//                 color: ''
//             }
//         ]
//     },
//     magic: {
//         spells: [],
//         cantrips: [],
//         incantations: {
//             current: [],
//             encountered: [
//                 {
//                     name: '',
//                     level: 0,
//                     description: '',
//                     color: ''
//                 }
//             ]
//         },
//         longForm: []
//     },
//     items: {
//         ephemeraLimit: 3,
//         oopLimit: 3,
//         kindled: [
//             {
//                 name: '',
//                 level: '',
//                 description: '',
//                 color: ''
//             }
//         ],
//         ephemera: [
//             {
//                 name: '',
//                 level: 0,
//                 description: '',
//                 incantation: '',
//                 color: ''
//             }
//         ],
//         oop: [
//             {
//                 name: '',
//                 level: 0,
//                 description: '',
//                 color: ''
//             }
//         ],
//         mundane: [
//             {
//                 name: '',
//                 level: 0,
//                 description: ''
//             }],
//         valuables: []
//     }


// }

// Throat-clearing

function getID(inputID) {
    return document.getElementById(inputID);
}

function getClass(inputClass) {
    return document.querySelectorAll(`.${inputClass}`)
}

// Heart Relationships

function getHeartRelationships() {
    const heartFamily = getID('heartFamily')
    const heartAnimal = getID('heartAnimal');
    const heartObject = getID('heartObject')
    switch (pc.heart) {
        case 'galant':
            heartFamily.innerText = 'Secrets';
            heartAnimal.innerText = 'Ravens';
            heartObject.innerText = 'Books';
            break;
        case 'empathic':
            heartFamily.innerText = 'Visions';
            heartAnimal.innerText = 'Swans';
            heartObject.innerText = 'Blades';
            break;
        case 'stoic':
            heartFamily.innerText = 'Mysteries';
            heartAnimal.innerText = 'Rats';
            heartObject.innerText = 'Mirrors';
            break;
        case 'ardent':
            heartFamily.innerText = 'Notions';
            heartAnimal.innerText = 'Cats';
            heartObject.innerText = 'Clocks';
            break;
        default:
            console.log('default happened')
            break;
    }
}

// import { pc } from './newPC'

//Order

getOrder = () => {
    // switch (getID('order').value) {
    //     case 'vance':
    //         getID('vance').display = 'block';
    //         break;
    //     case 'maker':
    //         getID('maker').display = 'block';
    //         break;
    //     case 'weaver':
    //         getID('weaver').display = 'block';
    //         break;
    //     case 'goetic':
    //         getID('goetic').display = 'block';
    //         break;
    //     case 'apostate':
    //         getID('apostate').display = 'block';
    //         break;
    //     default:
    //         console.log('nothin')
    if (pc.order.vance.degree > 0) {
        getID('vance').style.display = 'block';
    }
    if (pc.order.maker.degree > 0) {
        getID('maker').style.display = 'block';
    }
    if (pc.order.weaver.degree > 0) {
        getID('weaver').style.display = 'block';
    }
    if (pc.order.goetic.degree > 0) {
        getID('goetic').style.display = 'block';
    }
    if (pc.order.apostate.degree > 0) {
        getID('apostate').style.display = 'block';
    }
    getID('order').innerText = pc.order.currentOrder;

}

//Pools

populatePool = (branch, toPopulate) => {

    const path = pc['pools'][branch][toPopulate]

    getID(`${toPopulate}Current`).innerText = path['current'];
    getID(`${toPopulate}Max`).innerText = path['max'];
    getID(`${toPopulate}Vex`).innerText = path['vex'];
}

window.onload = function () {

    populatePool('certes', 'accuracy');
    populatePool('certes', 'movement');
    populatePool('certes', 'perception');
    populatePool('certes', 'physicality');
    populatePool('qualia', 'intellect');
    populatePool('qualia', 'interaction');
    populatePool('qualia', 'sorcery');
    populatePool('qualia', 'sortilege');

}


//Tab Selector

function openTab(evt, tabName) {
    let tabcontent, tablinks

    tabcontent = document.querySelectorAll('.tabcontent');
    for (let tab of tabcontent) {
        tab.style.display = 'none';
    }

    tablinks = document.querySelectorAll('.tablink');
    for (let link of tablinks) {
        link.className = link.className.replace(' active', ' ');
    }

    document.querySelector(`#${tabName}`).style.display = 'block';
    evt.currentTarget.className += ' active;'

}

//Listeners

//-Click

document.addEventListener('click', e => {
    e.preventDefault();

    //you guys work

    matchID = inputID => {
        return e.target.matches(`#${inputID}`)
    }
    matchClass = inputClass => {
        return e.target.matches(`.${inputClass}`)
    }
    newListItem = (object, list) => {
        const form = e.target.parentElement;
        list.push(object);
        updateList(list, form);
    }
    updateList = (objList, targetForm) => {
        const newItem = document.createElement('li');
        for (let item of objList) {
            newItem.innerText = `${item.entry()}`;
            targetForm.previousElementSibling.appendChild(newItem);
            addRemoveButton(newItem, objList);
            targetForm.reset()
        }
        return newItem;
    }
    addRemoveButton = (target, property) => {
        const button = document.createElement('button');
        button.innerText = '-';
        button.type = 'button';
        button.class = 'removeButton';
        target.appendChild(button);
        const buttonIndex = target.parentElement.children.length - 1;
        button.addEventListener('click', e => {
            e.preventDefault;
            property.splice(buttonIndex, 1);
            target.remove();
        })
    }

    //why are you like this

    updateText = (input, targetObj) => {
        const form = e.target.parentElement;
        if (targetObj.editing = true) {
            targetObj.entry = input.value;
            form.previousElementSibling.innerText = input.value;
            console.log(input);
            input.style.display = 'none';
            console.log('true case ran')
        } else if (targetObj.editing = false) {
            const text = form.previousElementSibling.innerText;
            e.target.previousElementSibling.innerText = text;
            text = '';
            console.log(input)
            input.style.display = 'block';
            console.log('false case ran')
        }
        console.log(targetObj.editing)
    }

    //buttons

    //lists

    if (matchID('addPcBond')) {
        newListItem({
            name: getID('pcbond').value,
            type: getID('pcbondtype').value,
            entry: function () {
                return `${this.name} is a ${this.type} `
            }
        }, pc.bonds.pcs)
    } else if (matchID('addNpcBond')) {
        newListItem({
            name: getID('npcbond').value,
            level: getID('npcbondlvl').value,
            type: getID('npcbondtype').value,
            entry: function () {
                return `${this.name} is a level ${this.level} ${this.type} `
            }
        }, pc.bonds.npcs)
    } else if (matchID('addConnection')) {
        newListItem(
            {
                name: getID('connection').value,
                level: getID('connectionlvl').value,
                entry: function () {
                    return `Level ${this.level} connection with ${this.name} `
                }
            }, pc.bonds.orgs)
    } else if (matchID('actionSkillAdd')) {
        newListItem(
            {
                name: getID('actionSkill').value,
                level: getID('actionSkillLevel').value,
                entry: function () {
                    return `${this.name}     ${this.level} `
                }
            }, pc.skills.action)
    } else if (matchID('narrativeSkillAdd')) {
        newListItem(
            {
                name: getID('narrativeSkill').value,
                level: getID('narrativeSkillLevel').value,
                entry: function () {
                    return `${this.name}     ${this.level} `
                }
            }, pc.skills.narrative)
    } else if (matchID('developmentSkillAdd')) {
        newListItem(
            {
                name: getID('developmentSkill').value,
                level: getID('developmentSkillLevel').value,
                entry: function () {
                    return `${this.name}     ${this.level} `
                }
            }, pc.skills.development)
    } else if (matchID('arcAdd')) {
        newListItem(
            {
                name: getID('arc').value,
                completed: false,
                entry: function () {
                    return `${this.name}`
                }
            }, pc.arcs.inProgress)
    } else if (matchID('appearanceAdd')) {
        updateText(getID('appearance'), pc.self.appearance)
        pc.self.appearance.editing = !pc.self.appearance.editing
        console.log(pc.self.appearance.editing);
        return pc.self.appearance.editing;
    } else if (matchID('changeAdd')) {
        newListItem(
            {
                name: getID('change').value,
                level: getID('changeLevel').value,
                cost: '',
                entry: function () {
                    return `${this.name}     ${this.level}`
                }
            }, pc.self.changes
        )
    } else if (matchID('characterSecretAdd')) {
        newListItem(
            {
                name: getID('characterSecret').value,
                level: getID('characterSecretLevel'), value,
                description: ''
            }, pc.self.secrets
        )
    } else if (matchID('spellAdd')) {
        newListItem(
            {
                name: getID('spell').value,
                level: getID('spellLvl').value,
                description: '',
                color: '',
                facet: ''
            }, pc.magic.spells
        )
    } else if (matchID('cantripAdd')) {
        newListItem(
            {
                name: getID('cantrip').value,
                description: '',
                level: 1
            }
        ), pc.magic.cantrips
    } else if (matchID('incantationAdd')) {
        newListItem(
            {
                name: getID('incantation').value,
                level: getID('incantationLevel').value,
                description: '',
                color: '',
                facet: '',
                conation: false
            }
        ), pc.magic.incantations
    } else if (matchID('longFormMagicAdd')) {
        newListItem(
            {
                name: getID('longFormMagic').value,
                level: getID('longFormMagicLevel').value,
                procedure: '',
                materials: '',
                color: '',
                type: '',
            }
        ), pc.magic.longForm
    }
    // damage

    //switching out damage types is bad for some reason

    else if (matchID('physicalDamage') | matchID('mentalDamage')) {
        getID('physicalDamage').classList.toggle('activeDamage');
        getID('mentalDamage').classList.toggle('activeDamage');
        console.log('physical active?   ' + getID('physicalDamage').className);
        console.log('mental active?   ' + getID('mentalDamage').className);
    }
    else if (matchID('takeDamage')) {
        const newInjuries = parseInt(getID('enterDamage').value);
        console.log('damage logged')
        console.log(`new injuries ${newInjuries}`)
        pc.condition.injuries += newInjuries;
        console.log('total injuries ' + pc.condition.injuries)
        if (pc.condition.injuries >= 3) {
            if (getID('physicalDamage').className = 'activeDamage') {
                console.log('the damage is physical')
                const newWounds = Math.floor(pc.condition.injuries / 3);
                console.log('new wounds' + newWounds)
                if (pc.pools.certes.physicality.current > 0) {
                    pc.pools.certes.physicality.current--;
                    newWounds--;
                }
                pc.condition.wounds += newWounds;
                console.log('current wounds' + pc.condition.wounds)
                getID('firstWound').style.backgroundColor = 'white';
                getID('secondWound').style.backgroundColor = 'white';
                if (pc.condition.wounds >= 1) {
                    getID('firstWound').style.backgroundColor = 'black';

                    if (pc.condition.wounds >= 2) {
                        getID('secondWound').style.backgroundColor = 'black';

                        if (pc.condition.wounds >= 3) {
                            getID('thirdWound').style.backgroundColor = 'black';
                            pc.condition.dead = true;
                            console.log('dead')
                        }
                    }
                }
                pc.condition.injuries -= newWounds * 3;
                getID('physicalDamage').className = 'activeDamage';
                getID('mentalDamage').className = '';
            }
            if (getID('mentalDamage').className = 'activeDamage') {
                console.log('the damage is')
                const newAnguish = Math.floor(pc.condition.injuries / 3);
                console.log('new anguish' + newAnguish)
                if (pc.pools.qualia.intellect.current > 0) {
                    pc.pools.qualia.intellect.current--;
                    newAnguish--;
                }
                pc.condition.anguish += newAnguish;
                console.log('current anguish' + pc.condition.anguish)
                getID('firstAnguish').style.backgroundColor = 'white';
                getID('secondAnguish').style.backgroundColor = 'white';
                if (pc.condition.anguish >= 1) {
                    getID('firstAnguish').style.backgroundColor = 'black';

                    if (pc.condition.anguish >= 2) {
                        getID('secondAnguish').style.backgroundColor = 'black';

                        if (pc.condition.anguish >= 3) {
                            getID('thirdAnguish').style.backgroundColor = 'black';
                            pc.condition.dead = true;
                            console.log('dead')
                        }
                    }
                }
                pc.condition.injuries -= newAnguish * 3;
            }
            getID('mentalDamage').className = 'activeDamage';
            getID('physicalDamage').className = '';
        }
    }
    getID('firstInjury').style.backgroundColor = 'white';
    getID('secondInjury').style.backgroundColor = 'white';
    getID('thirdInjury').style.backgroundColor = 'white';
    if (pc.condition.injuries >= 1) {
        getID('firstInjury').style.backgroundColor = 'black';
        if (pc.condition.injuries >= 2) {
            getID('secondInjury').style.backgroundColor = 'black';
            if (pc.condition.injuries >= 3) {
                getID('firstInjury').style.backgroundColor = 'white';
                getID('secondInjury').style.backgroundColor = 'white';
            }
        }
    }
    getID('enterDamage').value = 0;
})

//-input
document.addEventListener('input', e => {

    e.preventDefault();
    matchID = inputID => {
        return e.target.matches(`#${inputID}`)
    }
    matchClass = inputClass => {
        return e.target.matches(`.${inputClass}`)
    }

    if (matchID('heart')) {
        getHeartRelationships();
    } else if (matchID('order')) {
        getOrder();
    }

    if (matchID('')) { }
})