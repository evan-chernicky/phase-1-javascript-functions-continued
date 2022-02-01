// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("test")

//Monday Work
function mondayWork(args = "go to the office") {
    return `This Monday, I will ${args}.`;
}
mondayWork("work from home")

//wrapAdjective
function wrapAdjective(wrapper = "*") {
    return function(whatYouAre = "special") {
        return `You are ${wrapper}${whatYouAre}${wrapper}!`
    };
};
wrapAdjective("%")("cool");