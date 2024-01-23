const findTheOldest = function(people) {
    return people.reduce(
        (oldestPerson, currentPerson) => {
            if(!oldestPerson.hasOwnProperty("yearOfDeath")){
                const date = new Date();
                oldestPerson.yearOfDeath = date.getFullYear();
            }
            if(!currentPerson.hasOwnProperty("yearOfDeath")){
                const date = new Date();
                currentPerson.yearOfDeath = date.getFullYear();
            }
            if(currentPerson.yearOfDeath-currentPerson.yearOfBirth>
                oldestPerson.yearOfDeath-oldestPerson.yearOfBirth){
                    oldestPerson=currentPerson;
                }
            return oldestPerson;
        
    },people[0]);

};

// Do not edit below this line
module.exports = findTheOldest;
