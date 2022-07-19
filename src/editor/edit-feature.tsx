import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';
import UI from "../assets/image.png";
import { featureFunction } from './feature-function';
import {useRecoilState, useRecoilValue} from "recoil";
import { selected_feature, features, userfun, merlinfun} from "../store";
import { forEachLeadingCommentRange, validateLocaleAndSetLanguage, walkUpBindingElementsAndPatterns } from 'typescript';
import { getSwitchBaseUtilityClass } from '@mui/material/internal/switchBaseClasses';
import { setDefaultResultOrder } from 'dns/promises';

export const editFeature = () => {
    const selfeature = useRecoilValue(selected_feature);
    const sum = useRecoilValue(userfun);
    const sys = useRecoilValue(merlinfun);

    const [fs, setfs] = useRecoilState(features);

    /* CodeReview (07-19-2022): 
    * Why these extra spaces? See https://google.github.io/styleguide/jsguide.html#formatting
    */
    
    const feaModify = (value: any) => {
            var w = value;
            var img = document.getElementById("img"+selfeature.toString());
            img!.style.width = (100 * w).toString()+"px";
            console.log((100 * w).toString());
            img!.style.height = img!.style.width;

            let tem = fs.map(item =>{
              if(item.id == selfeature.toString()){
                return {...item, weight: w};
              }
              return item;
            })
   
            setfs(tem);

            console.log("fs", fs);
    }


    return(
      <div>
      { selfeature > 0 &&
    <div className = "edit-feature">
    <img className = {"feature"+selfeature.toString()}  src = {fs[selfeature-1].img} width = "100" height = "100" />
    <Box sx={{ margin: 5, width: 300 }}>
    <Slider
      className = "feature-slider"
      value = {fs[selfeature-1].weight}
      defaultValue={1}
      valueLabelDisplay="auto"
      step={0.1}
      marks
      min={0.5}
      max={1.5}
      onChange = {(event, value) => feaModify(value)}
     />
     </Box>
    </div>
      }
      </div>
    );
}


/*
level: 2 -> features[]

database -> spell-names

spell name -> f1, f2, f3 f4 /// fn    ((f1a,f1b,f1c),(f2a,f2b,f2c), ....)
              w1, w2, w3 w4
              
              fi is vector
              v = sum fi * wi (v is vector)


 merlin spell: wm1, wm2, wm3 -> value-merlin 
            
              vm 

 database->   spell-word  (a,b,c)


 Your spell:  [spellword]    ranked list: min d(spellword, v)

 Merlin's spell: [spellword]  ranked list: min d(spellword, vm)


*/