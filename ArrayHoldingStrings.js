/**
 * Created by inktech.n.kikov on 26-Jun-16.
 */
function arrStrings() {
    let weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    console.log(weekDays);
    for(let week = 0;week < weekDays.length;week++){
        console.log("today is" + " " + weekDays[week]);
    }
}
function dayOFWeek() {
    let weekDays =  ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    weekDays.push(new Date());
    for(let w of weekDays){
        console.log(w);
    }
}
function indexOfArr() {
    let nums = [10,20,30,40,50];
    for(let i = 0;i < nums.length;i++){
        console.log([i]);
    }
}
function capitals() {
    let capitals = ['Sofia','Washington','Berlin','London','Paris'];
    for(let c of capitals){
        console.log(c);
    }
}
arrStrings();
dayOFWeek();
indexOfArr();
capitals();