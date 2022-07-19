import {useRecoilState, useRecoilValue} from "recoil";

export const levelbar = (userFunction: number[], answerFunction: number[]) =>  {
   //console.log("Winston TODO: calculate the distance between the user's answer and the correct one.")
    // const distance = (userAnswer: string, correctAnswer: string) => {
    //     const userAnswerArray = userAnswer.split("");
    //     const correctAnswerArray = correctAnswer.split("");
    //     let distance = 0;
    //     for (let i = 0; i < userAnswerArray.length; i++) {
    //         distance += (Number(userAnswerArray[i]) - Number(correctAnswerArray[i])) ** 2
    //     }
    //     return distance ** 0.5; // linear distance
    // } 

    /* CodeReview (07-19-2022): 
    * Remove comment if this works.
    */
    let distance = 0;
    for (let i = 0; i < answerFunction.length; i++) {
        distance += (answerFunction[i] - userFunction[i]) ** 2;
    }
    return distance ** 0.5; // linear distance

}