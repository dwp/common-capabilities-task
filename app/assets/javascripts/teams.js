console.log("teams js")

const teamsAddMemberButton = document.getElementById("addTeamMember")
const searchValue = document.getElementById("searchb")
const member = localStorage.getItem("member");
const searchc = document.getElementsByClassName('autocomplete__input')[0]
const TeamMembers = []
const teamTableBody = document.getElementById('TeamMembersTable')
const tablePlaceholder = document.getElementById('tablePlaceholder')
const TeamMembersList = document.getElementById('TeamMembersList')
const STML = JSON.parse(localStorage.getItem("teamMembers"));

if(teamsAddMemberButton){

teamsAddMemberButton.addEventListener("click", function(e){
    e.preventDefault()
    const memberDetails = searchb[0].childNodes[0]._component.state.query;
    createTeamMemberObject(memberDetails)
    searchb[0].value="";

    
})
}
if(TeamMembersList) {
    console.log(STML)
    for (const x of STML) {
        
        TeamMembersList.innerHTML += `
        <tr class="govuk-table__row">
    <td class="govuk-table__cell">${x.name}</td>
    <td class="govuk-table__cell">${x.staffNo}</td>
    <td class="govuk-table__cell"><a class="govuk-link" href="#">Remove</a></td>

  </tr>`
        
       
        // TeamMembersList.innerHTML += `
        // <div class="govuk-summary-list__row">
        //     <dt class="govuk-summary-list__key">
        //      name
        //     </dt>
        //     <dd class="govuk-summary-list__value">
        //        ${x.name}
        //     </dd>
        //     <dd class="govuk-summary-list__actions">
        //       <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> previous application number</span></a>
        //     </dd>
        //   </div>
        // `

      }
    
}

function createTeamMemberObject(data){
    let parts = data.split(", ");
    let idNo = TeamMembers.length
    console.log(idNo,"6")
    let teamMember = {
        "id": `${idNo +1}`, 
        "name":`${parts[0]}`, 
        "staffNo": `${parts[1]}`
    }
    TeamMembers.push(teamMember)

    localStorage.setItem("teamMembers", JSON.stringify(TeamMembers));
    
    const STM = localStorage.getItem("teamMembers");

    console.log(STM, "4")
    
    teamTableBody.innerHTML += `<tr class="govuk-table__row">
    <td class="govuk-table__cell">${parts[0]}</td>
    <td class="govuk-table__cell">${parts[1]}</td>
    <td class="govuk-table__cell"><a class="govuk-link" href="#">Remove</a></td>

  </tr>`;

  tablePlaceholder.remove()
   


}