// Accessing the input tags 
const weightInputEl=document.querySelector("#weight");
const heightInputEl=document.querySelector("#height");

// Accessing the select options 
const WeightOptionArray=document.querySelectorAll("#weight-units");
const HeightOptionArray=document.querySelectorAll("#height-units");

// console.log(WeightOptionArray);
// console.log(HeightOptionArray);


// SHOWING THE RESULT 
const showResultEl=document.querySelector("#show-result");

// clear button 
const clearBtnEl=document.querySelector("#clear");
// Handling click event on clear button 
// as we click on the clear button it will erase the data in input tags

clearBtnEl.addEventListener("click",()=>{
    weightInputEl.value="";
    heightInputEl.value="";
})


// Getting the calculate button 
const resultBtnEl=document.querySelector("#result");

// Handling click event on resutl btn

resultBtnEl.addEventListener("click",()=>{
    // Taking the weight and height value from user 
    let weightValue=weightInputEl.value;
    let heightValue=heightInputEl.value;

    // console.log(weightValue);

    // Now we have to check the units of weight and height data
    WeightOptionArray.forEach((item)=>{
        if(item.value === 'kilogram'){
            // Nothing 
        }else{
            // we will convert pounds in kilogram 
            // 1pound = 0.453592
            weightValue=weightValue*0.453592;

        }
    })

    HeightOptionArray.forEach((item)=>{
        if(item.value === 'meter'){
            // Nothing 
        }else if(item.value === 'centimeter'){
             // converting cm into meter 
             heightValue=heightValue/100;
        } else if(item.value === 'inches'){
            // converting inches into meter
            heightValue=heightValue*0.0254;
        }else{
            // converting feet into meter 
            heightValue=heightValue*0.3048;
        }
        
    })

    // Calculating the bmi of a person 

    const bmi=weightValue/ (heightValue*heightValue);
   
    // Now changing the color of text according to it's bmi value
    if(bmi < 18.5){
        showResultEl.style.color=`rgb(${241}, ${195}, ${9})`;
    }else if(bmi >=18.5 && bmi <=24.9){
        showResultEl.style.color='green';
    }else if(bmi >=25.0 && bmi <=29.9){
        showResultEl.style.color='orange';
    }else{
        showResultEl.style.color='red';
    }
    showResultEl.innerHTML=bmi.toFixed(2);
})