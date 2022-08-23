// Code your solution in this file!
const returnFirstTwoDrivers = function (x){
    return [x[0],x[1]] 
    
}   

const returnLastTwoDrivers = function(x){
    return x.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(x){
    return function(){
      return  x**2
    } 
}



const fareDoubler = function(x){
      return x*2 
     
    
}

const fareTripler = function(x){
    return x*3
}


function selectDifferentDrivers(drivers,fun){
    if (fun==returnFirstTwoDrivers){
     return   returnFirstTwoDrivers(drivers)
    }
    else 
        return   returnLastTwoDrivers(drivers)
       
}
