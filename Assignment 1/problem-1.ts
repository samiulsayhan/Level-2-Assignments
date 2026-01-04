// function name is -- formatValue --

const formatValue = (result: string | number | boolean)=>{

    // the value can be any type thats why in result i assigned all these types

    if(typeof result === "string"){
        const UpperCase:string = result.toUpperCase();
        return UpperCase;
    }

    else if(typeof result === "number"){
        const MultiplyNumber:number = result*10;
        return MultiplyNumber;
    }

    else{
        const ReverseResult:boolean = !result;
        return ReverseResult;
    }

}

console.log(formatValue("sayhan"));
console.log(formatValue(12));
console.log(formatValue(false));

