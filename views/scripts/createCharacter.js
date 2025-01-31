// Throat-clearing

function getID(inputID) {
    return document.getElementById(inputID);
}

function getClass(inputClass) {
    return document.querySelectorAll(`.${inputClass}`)
}

function getName(inputName) {
    return document.getElementsByName(inputName);
}

function getValue(radio) {

    console.log(radio);

    let checked;

    for (let val of radio) {
        console.log(val);
        if (val.checked) {
            checked = val.selectButton.value;
            console.log('checked')
            return checked
        }
        return checked
    }
    return checked
}

const newPC = JSON.parse(window.localStorage.getItem('newPC'))

//

const collapsibles = document.querySelectorAll('.collapsible')

for (let collapsible of collapsibles) {
    collapsible.addEventListener('click', e => {
        e.preventDefault();

        collapsible.classList.toggle('active');
        const content = collapsible.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    })
}

const selectButtons = document.querySelectorAll('.selectButton');

for (let selectButton of selectButtons) {
    selectButton.addEventListener('change', e => {
        for (selectButton of selectButtons) {
            const selected = selectButton.parentElement.parentElement.previousElementSibling.lastElementChild;

            if (selectButton.checked) {
                selectButton.parentElement.classList.add('active')
                selected.classList.add('selected');
            } else {
                selectButton.parentElement.classList.remove('active')
                selected.classList.remove('selected')
            }
        }
    })
}



const submit = getID('firstSubmitButton');

firstSubmitButton.addEventListener('click', e => {
    e.preventDefault();

    newPC['name'] = getID('chooseName').value;

    newPC.order.currentOrder = getName('orderSelect').value;

    newPC['order'][getName('orderSelect').value]['degree'] = 1;

    newPC.heart = getName('heartSelect').value;

    newPC.foundation = getName('chooseFoundation').value;

    newPC.forte = getName('chooseForte').value;

    newPC.arcs.inProgress.push(getID('chooseFirstArc').value)

    const addBonds = bondType => {
        const bonds = getID(`${bondType}BondList`).getElementsByTagName('li');

        for (let bond of bonds) {
            const newBond = {
                name: bond.firstElementChild.value,
                type: bond.lastElementChild.value,
                entry: function () {
                    return `${this.name} is a ${this.type} `
                }
            }

            newPC['bonds'][`${bondType}s`].push(newBond)
        }

    }
    addBonds(pc);
    addBonds(npc);

    window.localStorage.setItem('newPC', JSON.stringify(newPC))

})
