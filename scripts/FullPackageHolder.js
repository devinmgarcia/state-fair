const contentTarget = document.getElementsByClassName("all")
const eventHub = document.querySelector("#state-fair")

export const fullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", CustomEvent => {
        for (const target of contentTarget) {
            target.innerHTML += "<div class='person bigSpender'></div>"
        }
    })
}