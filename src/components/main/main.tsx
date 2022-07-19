
import "./main.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect } from "react"; 
import Slider from '@mui/material/Slider';
import {useState, useRef} from "react";
import IconButton from '@mui/material/IconButton';
import {readUI} from '../../editor/readUI';
import { featureFunction } from "../../editor/feature-function"
import { editFeature } from "../../editor/edit-feature"
import { spellName } from "../../editor/spell-name";
import { rankedResult } from "../../editor/ranked-result";
import {newspell} from "../../editor/newspell";
import {useRecoilState, useRecoilValue} from "recoil";
import { level, currentspellname, selected_feature, features } from "../../store";
import UI from "../../image.png";
import { userfun, merlinfun} from "../../store";


//import { Bar as ProgressBar } from 'react-native-progress';
import ProgressBar from "../../editor/progress-bar.component";
import {getRandomInt} from "../../editor/getRandomInt";

/* CodeReview (07-19-2022): 
    * Nit: Prefer arrow functions (https://google.github.io/styleguide/jsguide.html#features-functions-arrow-functions)
    */
export default function Main(){
    const sys_level = useRecoilValue(level);
    const [sn, setsn] = useRecoilState(currentspellname);
    const [fs, setfs] = useRecoilState(features);
    const  userval = useRecoilValue(userfun);
    const merlinval = useRecoilValue(merlinfun);

    //used to init the game, only run in the begining
    useEffect(() => {
            newgame();
        },[]);
    
/* CodeReview (07-19-2022): 
    * Variable naming (https://google.github.io/styleguide/jsguide.html#naming)
    */
    const newgame = () => {
        let ns = newspell(); 
        setsn(ns);    

        /* CodeReview (07-19-2022): 
    * Decomposition.
    */
        // reset all of the features
        let newfs = ns.value;
        let tem = fs.map(item =>{
                   var iid = parseInt(item.id);
                   var nw = newfs[iid - 1];
               if(item.id == "4" && sys_level == 0){
                return {...item, value: nw, weight: 0, merlinweight: 0};
               }
               return {...item, value: nw, weight: 1, merlinweight: getRandomInt(5,16)*0.1};
              });

        // and reset the size of image icons of these features       
        for(var i = 1; i <= fs.length; i++){
            var img = document.getElementById("img"+(i).toString());
            if(img){
            img.style.width = (100).toString()+"px";
            img.style.height = img!.style.width;
            }
        }      
     
        setfs(tem);

    }

    const progressbar = () => {
        let dis = 0;
        for(let i = 0;i<userval.length; i++){
             dis+=(userval[i]-merlinval[i])**2;
        }
        let num = ((100-dis)-99)*100;
        if(num<0){
            num = 0;
        }
        return num.toFixed(0);
    }


    return(
        <div className = "main">
            <div className = "control-panel">
                <Box sx={{m:1}}>
               <Button variant="contained" style={{backgroundColor: "#BF996B"}} onClick = {newgame} >Try a new spell</Button> 
               </Box>
               
             <div className = "control-space">
             <ProgressBar progress = {progressbar()} completed={progressbar()} />
             </div>  
            
            <div className = "current_level control-space">
               <img className = "level_img" src = {"../assets/Control_panel/Level-scroll_paper.png"} width = "200" height = "100" />
               <p className = "level_text">Level {sys_level+1}</p>
            </div>
           
            </div>

            <div className = "objective-function-panel">
                <div className = "left_ofp">
               <p>Objective function:</p>
               <br/>
                {featureFunction(sys_level)} 
               </div>

               <div className = "right_ofp">
               <p>Edit feature importance: </p>
               <br/>
                {editFeature()}
               </div>

            </div> 
            
            <div className = "generated-spells-panel">
            {spellName()}
            {rankedResult()}
            </div>       
        </div>
    )
}