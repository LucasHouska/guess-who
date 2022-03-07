console.log('Here are all the available people:', people);

let selectedPerson = people[randomNumber(0,6)].name

$(ready);

function ready() {
  lookForCutie();
  findName();
  $(`body`).on('click', '.pics', comparePerson)

// generateName();
console.log(randomNumber(0, 6));

}

function comparePerson() {
    if(selectedPerson === $(this).attr('id')) {
        alert(`You got it! That's ${selectedPerson}`);
    } else {
        alert(`Sorry, that's not ${selectedPerson}`);
    }
}

function lookForCutie(){
    for(let cutie of people) {
        $('body').append(`
        <div class="pics" id="${cutie.name}"><img src="https://github.com/${cutie.githubUsername}.png?size=250" alt="Profile image of ${cutie.name}">
        </div
        `)
}
}
function findName(){
    // selectedPerson = people[randomNumber(0,6)].name
 $('#cutieToClick').append(selectedPerson);

 
}


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}


