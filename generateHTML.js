const generateHTML=(employees) =>{
    console.log(employees)
    let HTML =""
    for(let i=0;i<employees.length;i++){
        HTML += `
        <div class="card col-4 m-4" style="width: 18rem;">
        <div class="card-header">
            <h3>${employees[i].name}</h3>
            <h4>${employees[i].getRole()}</h4>
        </div>
        <div class="card-body">
            <p class="idnum">ID: ${employees[i].id}</p>
            <p class="email">Email <a href="mailto:sample@gmail.com">${employees[i].email}</a></p>
           
       
    
        `
        if(employees[i].getRole == "Manager"){
          HTML+=  `<p class="office">Office Number: ${employees[i].officenum}</p>  </div>
          </div>`
        }else if(employees[i].getRole == "Engineer") {
            HTML+=  `<p class="office">Office Number: ${employees[i].github}</p>  </div>
          </div>`
        } else if(employees[i].getRole == "Intern") {
            HTML+=  `<p class="office">Office Number: ${employees[i].schoolname}</p>  </div>
            </div>`
        }
    }
    return HTML
}


module.exports = generateHTML