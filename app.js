let img = document.querySelector('.img');
let Name = document.querySelector('.name');
let review = document.querySelector('.review');
let designation = document.querySelector('.designation');
let btnleft = document.querySelector('.left');
let btnright = document.querySelector('.right');
let btnsurprise = document.querySelector('.surprise');

let personsArray = [
    {
        id: 1,
        personName: 'Bill Anderson',
        personDesignation: 'BOSS',
        personImage: './images/bill.jpg',
        personReview: 'dgvdvsdsdri earum, doloribus, temporibus voluptates magni sunt,  esse, commodi error totam placeat eaque laudantium! Lorem, ipsum dolor sit amet consect facilis eligendi animi fugiat nulla nemo conse'
    },
    {
        id: 2,
        personName: 'Peter Jones',
        personDesignation: 'Web Developer',
        personImage: '/images/peter.jpg',
        personReview: 'sfgdsbsdBri earum, doloribus, temporibus voluptates magni sunt,  esse, commodi error totam placeat eaque laudantium! Lorem, ipsum dolor sit amet consect facilis eligendi animi fugiat nulla nemo conse'
    },
    {
        id: 3,
        personName: 'Susan Smith',
        personDesignation: 'INTERN',
        personImage: './images/susan.jpg',
        personReview: 'wetg34yb665yexcepturi earum, doloribus, temporibus voluptates magni sunt,  esse, commodi error totam placeat eaque laudantium! Lorem, ipsum dolor sit amet consect facilis eligendi animi fugiat nulla nemo conse'
    },
    {
        id: 4,
        personName: 'Anna Johnson',
        personDesignation: 'Web Designer',
        personImage: './images/anna.jpg',
        personReview: 'etb ffgvb t. Ipsum excepturi earum, doloribus, temporibus voluptates magni sunt,  esse, commodi error totam placeat eaque laudantium! Lorem, ipsum dolor sit amet consect facilis eligendi animi fugiat nulla nemo conse'
    },
]


let currenPerson = 0;

window.addEventListener("DOMContentLoaded", () =>{
    img.style.backgroundImage = personsArray[currenPerson].personImage;
    Name.textContent = personsArray[currenPerson].personName;
    designation.textContent = personsArray[currenPerson].personDesignation;
    review.textContent = personsArray[currenPerson].personReview;
})


function personShow(person){
    const item = personsArray[person]
    img.style.backgroundImage = `url("${personsArray[person].personImage}")`;
    Name.textContent = personsArray[person].personName;
    designation.textContent = personsArray[person].personDesignation;
    review.textContent = personsArray[person].personReview;
}

btnright.addEventListener('click', () =>{
    currenPerson++;
    if(currenPerson > personsArray.length){
        currenPerson = 0;
    }
    personShow(currenPerson);
})
btnleft.addEventListener('click', () =>{
    currenPerson--;
    if(currenPerson < 0){
        currenPerson = personsArray.length - 1;
    }
    personShow(currenPerson);
})

btnsurprise.addEventListener('click', ()=>{
    currenPerson = Math.floor(Math.random() * personsArray.length);
    personShow(currenPerson)
})