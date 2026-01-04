 // function name is -- getLength --

 const getLength = (FinalLength:string | any[])=>{

    if(typeof FinalLength === "string"){
        const stringLength = FinalLength.length
        return stringLength
    }
    else{

        const arrayLength = FinalLength.length
        return arrayLength
    }
 }

 console.log(getLength("samiul"));
 console.log(getLength([4,343,2343]));
 