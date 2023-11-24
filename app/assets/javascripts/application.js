//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  var rows = document.getElementsByClassName("govuk-table__row");
  console.log(rows);
  Array.prototype.forEach.call(
    rows,
    (row) => {
      row.addEventListener("mouseover", (event) => {
        console.log(event)
        row.classList.add("grey-row");
      })
      row.addEventListener("mouseout", (event) => {
        row.classList.remove("grey-row");
      })
    }
  )
})
