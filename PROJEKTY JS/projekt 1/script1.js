const search=document.querySelector('.search')
const li= document.querySelectorAll('li')

// const searchEngine = (e) => {
//     const text=e.target.value.toLowerCase()//przechwycanei tresci z inputu
//     console.log(text);

//     li.forEach(el=>{
//         const task=el.textContent

//         console.log(el.textContent);
//         if(task.toLowerCase().indexOf(text)!==-1){
//             el.style.display='block'
//         }else{
//             el.style.display='none'
//         }
//     })
// }

// search.addEventListener('keyup',searchEngine)

// function searchDrink(e) {
//     const text=e.target.value.toLowerCase()

//     for(let i=0;i<li.length;i++){
//         if(li[i].textContent.toLowerCase().indexOf(text)!==-1){
//             li[i].classList.add('show')
//             li[i].classList.remove('hide')
//         }else{
//             li[i].classList.add('hide')
//             li[i].classList.remove('show')
//         }
//     }

// }
// search.addEventListener('keyup',searchDrink)

const searchDrink = (e) => {
    const text=e.target.value.toLowerCase()
    // console.log(text);
    li.forEach(el=>{
        const task=el.textContent
        console.log(task);
        if(task.toLowerCase().indexOf(text)!==-1){
            el.style.display="block"
        }else{
            el.style.display="none"
        }
    })
}
search.addEventListener('keyup',searchDrink)