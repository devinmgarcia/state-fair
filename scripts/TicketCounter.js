const contentTarget = document.querySelector(".ticketCounter")
const eventHub = document.querySelector("#state-fair")


let numberOfTickets = 0

contentTarget.innerHTML = `Number of tickets purchased: ${numberOfTickets}`


export const ticketCounter = () => {
    eventHub.addEventListener("addTicket", CustomEvent => {
        numberOfTickets++
        contentTarget.innerHTML = `Number of tickets purchased: ${numberOfTickets}`
    })
}