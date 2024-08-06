

class Event {
    constructor(name, description){
        this.name = name;
        this.description  = description;
        this.availableTickets = [];
    }
    addAvailableTickets(ticketName, ticketPrice){
        this.availableTickets.push(new TicketType(ticketName, ticketPrice));
    }

    allTickets(){
        return "All tickets: " + this.availableTickets.map((ticket, index) =>`${index +1}. ${ticket.ticketName} ($${ticket.ticketPrice})`).join(" ")
    }

    searchTickets(low, high){
        if(this.availableTickets.length === 0){
            return "No tickets available.";
        }
        else{
            return "Eligible tickets: " + this.availableTickets.filter((item)  => item.ticketPrice > low && item.ticketPrice < high).map(
                (ticket,index) => `${index+1}. ${ticket.ticketName} ($${ticket.ticketPrice})`).join(" ");
        }

    }

    CheapestTicket(){
        if(this.availableTickets.length === 0){
            return "No tickets available.";
        }
        else{
            let prices= this.availableTickets.map((item) => item.ticketPrice);
            let minPrrice =Math.min(...prices);
            return `Cheapest tickets:  ${minPrrice}`;
        }
    }
}


const eventObj1 = new Event('Klos Golden Gala', 'An evening with  hollywood vampires');
const eventObj2 = new Event('Techtonica Launch party', 'Celebrate new cohorts');
const eventObj3 = new Event('Olympic opening ceremony', 'Show casing all the olympic players');
const eventArray = new Array();

eventArray.push(eventObj1);
console.log(eventArray);
eventArray.push( eventObj2, eventObj3);
console.log(eventArray);


class TicketType {
    constructor(ticketName, ticketPriceß){
        this.ticketName = ticketName;
        this.ticketPrice = ticketPrice;

    }

}

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)


let ul = document.getElementById("event");

eventArray.forEach((item) =>{
    let li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.description} - ${item.CheapestTicket()}`;
    ul.appendChild(li);
})


eventObj3.searchTickets(0,250);