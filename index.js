function saturdayFun(activity="roller-skate"){
    return`This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork();


function wrapAdjective(exc="*"){
    const innerFunction = function(adj="special"){
    return `You are ${exc}${adj}${exc}!`;
    };
    return innerFunction;
}
wrapAdjective("%")("a dedicated programmer");






