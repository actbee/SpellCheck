/* CodeReview (07-19-2022): 
 * Capitalize camelCase types, i.e. "Feature" instead of "feature," 
 * use lowercase camelCase for variables. Use all caps snake case
 * (i.e. CONSTANT_VALUE) for constants.
 */
export type feature = {
    type: "feature",
    value: number[],
    img: string,
    id: string,
    weight: number,
    merlinweight: number,
}

/* CodeReview (07-19-2022): 
 * In the case of these models, I'm not sure "type" field is necessary.
 * it would be useful for cases where you have polymorphism (a good thing to look up 
 * if you're not familiar, it always comes up on job interview questions haha). 
 * In other words, whenever you're dealing with differentiating between objects 
 * that may utilize the same interface (or, if we stick to types, the same OR type).
 * e.g. something like: 
 * type MerlinData = Weights | Merlinweights | Feature
 * and then some other function that takes in MerlinData needs to know whether it's dealing with
 * weights or Merlin weights or Feature (i.e. via a switch statement on the type field). 
 * A good rule of thumb is to leave off the type label 
 * field until you need it, then when you realize you need it, add it in. It doesn't hurt of course to have it
 * but it's not useful and unused fields can cause confusion, so as a rule of thumb, no unused fields. 
 */
export type weights = {
    type: "weights",
    weight: number[],
}

export type merlinweights = {
    type: "merlinweights",
    weight: number[],
}

/* CodeReview (07-19-2022): 
 * All the files here that define models use no tsx, therefore, it's better to use the extension .ts
 * Rule of thumb for that: use the strictist limitation possible, i.e. tsx is more general, but that
 * freedom is not required, so don't allow it.
 */