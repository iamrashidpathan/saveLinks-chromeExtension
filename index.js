const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener('click', (handleSave))
const ulEl = document.getElementById("ul-el")

let myLeads=[];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}
const inputEL = document.getElementById('input-el')

//localStorage.clear
function handleSave(event) {
    
    myLeads.push(inputEL.value)
    console.log(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEL.value=""
    renderLeads()
    
}

const deleteBtn = document.getElementsByClassName("delete-btn")
//console.log(deleteBtn.length)

for(let i=0; i< deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click", handleDelete)
}


function handleDelete(event){

    console.log(event.target.value)
    myLeads = myLeads.filter((el, index)=>
        // console.log(typeof index)
        // console.log(typeof (event.target.value))
        // console.log(index !== parseInt(event.target.value, 10))
        index !== parseInt(event.target.value, 10)
    )
    console.log(myLeads)
    renderLeads()
}

async function renderLeads() {
    let listItems = ""
    
    console.log(myLeads)
    //console.log(listItems)
        
        for (let i = 0; i < myLeads.length; i++) {
            if(myLeads[i]){
                listItems += `
                <li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a> 
                    
                    <button class="delete-btn" value='${i}'>
                        DELETE
                    </button>
                </li>
            `
            }
            
        }
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        ulEl.innerHTML = listItems 
        //localStorage.clear()


        const deleteBtn = document.getElementsByClassName("delete-btn")
        //console.log(deleteBtn.length)

        for(let i=0; i< deleteBtn.length; i++){
            deleteBtn[i].addEventListener("click", handleDelete)
}
    
     
    
}




    

