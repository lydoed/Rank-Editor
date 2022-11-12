// form списка городов
const spisok = {
    Max: 21,
    Dave: 33,
    Vlad: 44,
    Gloryya: 11
}

let name_of_user = []
let sort_of_ID = []
let classofelement = 0




function filter(){
    for (let key in spisok){
        sort_of_ID.push(spisok[key])
    }
    sort_of_ID.sort((a, b) => a - b)
    for (let k of sort_of_ID){
        name_of_user.push(Object.keys(spisok).find(key => spisok[key] === k))
    }
}




const city = document.querySelector(".User-name")
const vibranii_gorod = document.querySelector('#spisok_name')
const div_panel = document.querySelector("#Panel_vybora")
const add = document.querySelector("#Add")
const edit = document.querySelector("#Edit")
const deletii = document.querySelector("#Delete")


// Готово
add.addEventListener('click',add_spis)
function add_spis(event){
    event.preventDefault();
    const ideeee = Number(document.querySelector("#Id").value)
    if(document.querySelector("#Name").value && ideeee == 0){
        try{document.querySelector(`.Alert`).remove()}catch{}
        div_panel.insertAdjacentHTML("beforeend", `<p class= 'Alert'>Введіть ID(ID не може бути 0)</p>`);
    }else if (document.querySelector("#Name").value &&  !isNaN(ideeee)){
        try{document.querySelector(`.Alert`).remove()}catch{}
        spisok[document.querySelector("#Name").value] = document.querySelector("#Id").value
        buildSpisok()
    }else if(document.querySelector("#Name").value && typeof(document.querySelector("#Id").value) == typeof('a')){
        try{document.querySelector(`.Alert`).remove()}catch{}
        div_panel.insertAdjacentHTML("beforeend", `<p class= 'Alert'>ID повинен бути тільки з цифр</p>`);
    }else{try{document.querySelector(`.Alert`).remove()}catch{}
    div_panel.insertAdjacentHTML("beforeend", `<p class= 'Alert'>Поле Name обов'язкове для вводу</p>`);}
}
// Готово
edit.addEventListener('click',edit_spis)
function edit_spis(event){
    event.preventDefault();
    const newname = document.querySelector("#Name").value
    const newid = Number(document.querySelector("#Id").value)
    if(newname && newid == 0){
        try{document.querySelector(`.Alert`).remove()}catch{}
        spisok[newname] = spisok[vibranii_gorod.value]
        delete spisok[vibranii_gorod.value]
        buildSpisok()
    }else if(isNaN(newid)){
        try{document.querySelector(`.Alert`).remove()}catch{}
        div_panel.insertAdjacentHTML("beforeend", `<p class= 'Alert'>ID повинен бути тільки з цифр</p>`);
    }else if(newname && !isNaN(newid)){
        try{document.querySelector(`.Alert`).remove()}catch{}
        spisok[newname] = newid
        delete spisok[vibranii_gorod.value]
        buildSpisok()
    }else if(!isNaN(newid)){
        try{document.querySelector(`.Alert`).remove()}catch{}
        delete spisok[vibranii_gorod.value]
        spisok[vibranii_gorod.value] = newid
        buildSpisok()
    }
    console.log(spisok)
}

// Готово
deletii.addEventListener('click', delet_spis)
function delet_spis(event){
    event.preventDefault();
    delete spisok[vibranii_gorod.value]
    buildSpisok()
}


// Будує список з заданого списка
function buildSpisok(){
    try{
        for (let x = 1; x <= classofelement; x++){
            document.querySelector(`.classofelement${x}`).remove()
        }
        classofelement = 0
    }catch(err){console.log(err)}
    name_of_user = []
    sort_of_ID = []
    filter()
    obrabotchikSpiska(name_of_user)
}

function elementsOfSpisok(nasvanie){ 
    classofelement += 1   
    const vibor_city = `<option class= 'classofelement${classofelement}' value="${nasvanie}">${spisok[nasvanie]} ${nasvanie}</option>`;
    vibranii_gorod.insertAdjacentHTML("afterbegin", vibor_city);
}

function obrabotchikSpiska(city){
    city.forEach(elementsOfSpisok);
}




filter()
obrabotchikSpiska(name_of_user)











