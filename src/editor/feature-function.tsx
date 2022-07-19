import UI from "../assets/image.png";
import React from "react";
import Button from '@mui/material/Button';
import {useRecoilState, useRecoilValue} from "recoil";
import { selected_feature, features} from "../store";
import { requirePropFactory } from "@mui/material";


export const featureFunction = (level: number = 0) => {
    const [selfeature, setselfeature] = useRecoilState(selected_feature);
    
    /* CodeReview (07-19-2022): 
    * Variable naming: https://google.github.io/styleguide/jsguide.html#naming
    */
    const [fs, setfs] = useRecoilState(features);

    const chooseFeature = (num: number) => {
        if(selfeature > 0){
        var oribtn = document.getElementById(selfeature.toString());
        oribtn!.style.backgroundColor = "";
        }
        var btn = document.getElementById(num.toString());
        /* CodeReview (07-19-2022): 
        * It's not broken, but "!" feels risky here.
        */
        btn!.style.backgroundColor = "black";
        setselfeature(num);
        
    }

    /* CodeReview (07-19-2022): 
    * why are we hardcoding this to have exactly three features? 
    * Beyond being not DRY, it's not extensible, this should allow for an arbitrary number of features and then use a map function 
    * to dynamically generate JSX from an array of source data.
    */

    return(
        <div className = "objective-function">
         <button className = "feature-button" id = "1"  onClick = {() => chooseFeature(1)}>
        <img className = "feature1" id = "img1" src = {fs[0].img} width = "100" height = "100" />
        </button>
        <div>
        <img className = "add" src = {"../assets/Objective_function_panel/Plus_symbol.png" } width = "30" height = "30" />
        </div>
        <button className = "feature-button" id = "2" onClick = {() => chooseFeature(2)}>
        <img className = "feature2" id = "img2" src = {fs[1].img} width = "100" height = "100" />
        </button>
        <div>
        <img className = "add" src = {"../assets/Objective_function_panel/Plus_symbol.png" } width = "30" height = "30" />
        </div>
        <button className = "feature-button" id = "3" onClick = {() => chooseFeature(3)}>
        <img className = "feature3" id = "img3" src = {fs[2].img} width = "100" height = "100" />
        </button>
        {
         /*
           the level control is implemented here
         */        
             level > 0 &&
             <div className = "objective-function">
              <div>
              <img className = "add" src = {"../assets/Objective_function_panel/Plus_symbol.png" } width = "30" height = "30" />
              </div>
               <button className = "feature-button" id = "img4" onClick = {() => 
               {
                let tem = fs.map(item =>{
                  if(item.id == "3"){
                    return {...item, weight: 1};
                  }
                  return item;
                })
          
                
                setfs(tem);
                
                chooseFeature(4);
               }}>
               <img className = "feature4" src = {fs[3].img} width = "100" height = "100"/>
               </button>
            </div>        
             
        }
        </div>
     );
}