import {feature} from "./feature"

export type spellname = {
    type: "spellname",
    id: string,
    img: string,
    /* CodeReview (07-19-2022): 
    * what does the type number[][] mean? Is this used multiple places? If it's not immediately obvious, 
    * decompose this into a new type, i.e. type SpellNameValue = number[][]; and use that
    * Then, you can comment on that type and refer to it anytime it's needed by reference to SpellNameValue.
    * number[][], or string, for image, above can lead to confusion since there's no associated comment. to keep it DRY,
    * use a new type that you define and comment on that.
    * */
    value: number[][],
}
