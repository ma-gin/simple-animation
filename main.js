const deleteRow = (e) => {
    e.target.parentElement.parentElement.remove()
}

const showBtn = (e) => {
    console.log(e.target)
    const selectedRow = e.target.lastChild
    console.log(selectedRow)
    selectedRow.classList.toggle('show')
}