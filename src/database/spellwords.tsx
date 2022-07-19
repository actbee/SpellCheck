import {spellword} from "../models/spellword"

/* CodeReview (07-19-2022): 
    * This kind of repetition makes me nervious. It's prone to errors. 
* A few suggestions, if the ids here are just indecies, use an array structure instead. 
* As it is now, I might copy and paste and forget to update the id.
* Is "type: "spellword"" being used anywhere? 
* could all this data be hardcorded using a JSON file?
* Is it necessary to store the full path? what if you had: 
const imagePath = (imageName) => `../assets/Generated_spells_panel/Spell_words/{$imageName}.jpg`
and then used that everywhere?
    */
const spellword1 : spellword = {
    type: "spellword",
    id: "1",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_1.jpg",
    value:[1, 1, 1],
}

const spellword2 : spellword = {
    type: "spellword",
    id: "2",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_2.jpg",
    value:[0, 0, 0],
}

const spellword3 : spellword = {
    type: "spellword",
    id: "3",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_3.jpg",
    value:[1, 0.7, 1.2],
}

const spellword4 : spellword = {
    type: "spellword",
    id: "4",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_4.jpg",
    value:[-1.3, 1, 1.2],
}

const spellword5 : spellword = {
    type: "spellword",
    id: "5",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_5.jpg",
    value:[1.5, 0.4, 1.1],
}
const spellword6 : spellword = {
    type: "spellword",
    id: "6",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_6.jpg",
    value:[1, 0, 9],
}
const spellword7 : spellword = {
    type: "spellword",
    id: "7",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_7.jpg",
    value:[0, 1, 0],
}
const spellword8 : spellword = {
    type: "spellword",
    id: "8",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_8.jpg",
    value:[0, 0, 1],
}
const spellword9 : spellword = {
    type: "spellword",
    id: "9",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_9.jpg",
    value:[1, 0, 1],
}
const spellword10 : spellword = {
    type: "spellword",
    id: "10",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_10.jpg",
    value:[2, -1, 1],
}
const spellword11 : spellword = {
    type: "spellword",
    id: "11",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_11.jpg",
    value:[-1, 0, 0],
}

const spellword12 : spellword = {
    type: "spellword",
    id: "12",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_12.jpg",
    value:[0, -1, 1],
}

const spellword13 : spellword = {
    type: "spellword",
    id: "13",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_13.jpg",
    value:[0, 0, -1],
}

const spellword14 : spellword = {
    type: "spellword",
    id: "14",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_14.jpg",
    value:[0.5, 0.5, 0.5],
}

const spellword15 : spellword = {
    type: "spellword",
    id: "15",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_15.jpg",
    value:[4, -1, 2],
}

const spellword16 : spellword = {
    type: "spellword",
    id: "16",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_16.jpg",
    value:[6, -1, 7],
}

const spellword17 : spellword = {
    type: "spellword",
    id: "17",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_17.jpg",
    value:[0, -1, 0],
}

const spellword18 : spellword = {
    type: "spellword",
    id: "18",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_18.jpg",
    value:[10, -4, 7],
}

const spellword19 : spellword = {
    type: "spellword",
    id: "19",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_19.jpg",
    value:[8, -4, 3],
}

const spellword20 : spellword = {
    type: "spellword",
    id: "20",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_20.jpg",
    value:[5, -4, 2],
}


export const spellwords = [spellword1, spellword2, spellword3, spellword4, spellword5,
    spellword6, spellword7, spellword8, spellword9, spellword10,
    spellword11, spellword12, spellword13, spellword14, spellword15,
    spellword16, spellword17, spellword18, spellword19, spellword20];