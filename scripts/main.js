import { fullPackageTicketHolders } from "./FullPackageHolder.js";
import { FoodTicketHolders } from "./rides/FoodTicketHolder.js";
import { GameTicketHolders } from "./rides/GameTicketHolder.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { SideshowTicketHolders } from "./SideshowTicketHolder.js";
import { TicketBooth } from "./TicketBooth.js";
import { ticketCounter } from "./TicketCounter.js";

ticketCounter()
fullPackageTicketHolders()
SideshowTicketHolders()
GameTicketHolders()
FoodTicketHolders()
RideTicketHolders()
TicketBooth()