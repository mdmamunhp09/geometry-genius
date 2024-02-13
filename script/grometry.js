function areaCalculateTriangle() {
    const triangleBase = document.getElementById('base-triangle');
    const baseText = triangleBase.value;
    //ei text gula string akare paoa jabe
    const baseNumber=parseFloat(baseText);
    

    // height value collect
    const triangleHeight=document.getElementById('height-triangle');
    const heightText=triangleHeight.value;
    const heightNumber=parseFloat(heightText);
    console.log(heightNumber)

    const area=0.5*baseNumber*heightNumber;
    document.getElementById('areaTriangle').innerText=area;

    
}

// function areaCalculateRectangle(){


// }


// function shoResult(num1,num2,strign){
//     const result=0.5*num1*num2;
//     const resultFeild=document.getElementById('calculationContainer');
//     const p=document.createElement('p');
//     p.innerText=strign+result;
//     resultFeild.appendChild(p);
// }