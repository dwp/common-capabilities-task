console.log("teams js")

const teamsAddMemberButton = document.getElementById("addTeamMember")
const searchValue = document.getElementById("searchb")
const member = localStorage.getItem("member");
const searchb = document.getElementsByClassName('autocomplete__input')[0]
//const searchc = document.getElementsByClassName('autocomplete__input')[1]
//const searchc = document.getElementById('searchc')
const TeamMembers = []
const teamTableBody = document.getElementById('TeamMembersTable')
const tablePlaceholder = document.getElementById('tablePlaceholder')
const TeamMembersList = document.getElementById('TeamMembersList')
const TeamName = document.getElementById('team-name');
const TeamDesc = document.getElementById('team-desc');
const CreateTeamButton = document.getElementById('create-team-button')
const STML = JSON.parse(localStorage.getItem("teamMembers"));

const TeamDetailsList = document.getElementById('team-details-list');


if(TeamDetailsList){
  const details = JSON.parse(localStorage.getItem("teamDetails"))
console.log(details.name)
  let html =`
     
          <div class="govuk-summary-list__row">
            <dt class="govuk-summary-list__key">
              Name
            </dt>
            <dd class="govuk-summary-list__value">
             ${details.name}
            </dd>
            <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
            </dd>
          </div>
          <div class="govuk-summary-list__row">
            <dt class="govuk-summary-list__key">
              Description
            </dt>
            <dd class="govuk-summary-list__value">
            ${details.desc}
            </dd>
            <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
            </dd>
          </div>
          <div class="govuk-summary-list__row">
            <dt class="govuk-summary-list__key">
              Function
            </dt>
            <dd class="govuk-summary-list__value">
            ${details.tf}
            </dd>
            <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
            </dd>
          </div>
          <div class="govuk-summary-list__row">
            <dt class="govuk-summary-list__key">
              Team Lead
            </dt>
            <dd class="govuk-summary-list__value">
            ${details.tln}
            </dd>
            <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
            </dd>
          </div>
      
  `
  TeamDetailsList.innerHTML = html
}

if(CreateTeamButton) {
const tln = document.querySelectorAll('#searchb')
const fn = document.querySelectorAll('#searchc')
  CreateTeamButton.addEventListener("click", function(e){
    //e.preventDefault();
    const teamName = TeamName.value
    const teamDesc = TeamDesc.value
    const teamLeader = tln[0].childNodes[0]._component.state.query;
    const teamFunction = fn[0].childNodes[0]._component.state.query;
   // console.log("clicked", teamFunction, teamLeader )

    let team = {
      name : teamName,
      desc : teamDesc,
      tln : teamLeader,
      tf :  teamFunction
    }

    //console.log(team)
    localStorage.setItem("teamDetails", JSON.stringify(team));
  })
}

if(teamsAddMemberButton){

teamsAddMemberButton.addEventListener("click", function(e){
    e.preventDefault()
    let tm = document.querySelectorAll('#searchb')
    console.log(tm[0].childNodes[0]._component.state.query, "y")
    const memberDetails = tm[0].childNodes[0]._component.state.query;
    createTeamMemberObject(memberDetails)
    //searchb[0].value="";

    
})
}
if(TeamMembersList) {
    console.log(STML)
    for (const x of STML) {
        
        TeamMembersList.innerHTML += `
        <tr class="govuk-table__row">
    <td class="govuk-table__cell">${x.name}</td>
    <td class="govuk-table__cell">${x.staffNo}</td>
    <td class="govuk-table__cell govuk-!-text-align-right"><a class="govuk-link " href="#">Remove</a></td>

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

function storeTeamDetails(){

  localStorage.setItem("teamDetails", JSON.stringify(Teamdetails));
}