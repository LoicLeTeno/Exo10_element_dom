let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
};

let elements = document.querySelectorAll("#liste-soft-skills > h2");

let i = 0;

for (let e in softSkills) {
    elements.forEach(skill => {
        if (skill.innerText == e) {
            elements[i].innerText += " ";
        }
    });


    let titre = elements[i];
    titre.innerText = `${softSkills[e]}`;

    let objectLength = softSkills[e].length;
    let verif = softSkills[e].substr(0, objectLength -1);

    if (verif > 50 && verif < 100 && verif != 50) {
        titre.style.backgroundColor = "green";
        titre.style.color = "white";

    } else if (verif == 100) {
        titre.style.backgroundColor = "gold";

    } else if (verif < 50) {
        titre.style.backgroundColor = "red";
    }

    titre.style.width = `${verif}%`

    i++
}

// let elements = document.querySelectorAll("#liste-soft-skills > h2")
// let i = 0;
// console.log(elements);
// // console.log(softSkills);
// // console.log(softSkills.Trello);
// for(let el in softSkills){
//     elements.forEach(skill => {
//         if (skill.innerText == el) {
//             elements[i].innerText += " "
//         }
//     });

    

//     let titre = elements[i]
//     titre.innerText = `${softSkills[el]}`

//     let competLength = softSkills[el].length
//     let verif = softSkills[el].substr(0, competLength - 1)
//     // pour avoir juste le personnage !
//     if (verif > 50 && verif < 100 && verif !=50){ // priorité logique !!
//         titre.style.backgroundColor = "green"
//         titre.style.color = "white"
//     } else if (verif == 100){
//         titre.style.backgroundColor = "gold"
//     }else if (verif < 50){
//         titre.style.backgroundColor ="red"
//     }
//     titre.style.width = `${verif}%`
//     i++
// }
