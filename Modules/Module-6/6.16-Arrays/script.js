function divideArray(nums){
    evens = [];
    odds = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0)
            evens.push(nums[i]);
        else
            odds.push(nums[i]);
    }
    evens.sort((a,b)=>a-b);
    odds.sort((a,b)=>a-b);
    printEven(evens);
    printOdd(odds);
}

function printEven(evens){
	console.log("Even numbers:");
    if(evens.length == 0)
    	console.log("None");
    else{
    	for(let i = 0; i< evens.length; i++){
    		console.log(evens[i] + '');
    	}
    }
}

function printOdd(odds){
	console.log("Odd numbers:");
    if(odds.length == 0)
    	console.log("None");
    else{
    	for(let i = 0; i< odds.length; i++){
    	console.log(odds[i]);
    	}
    }
}
