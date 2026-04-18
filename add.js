//URL till API
const URL = "https://workexperience-api.onrender.com/api/work";

//Vänta till sidan laddat klart
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const companyname = document.getElementById("companyname").value;
        const jobtitle = document.getElementById("jobtitle").value;
        const location = document.getElementById("location").value;
        const startdate = document.getElementById("startdate").value;
        const description = document.getElementById("description").value;

        const message = document.getElementById("message");

        //Validera att alla fält är ifyllda
        if (!companyname || !jobtitle || !location || !startdate || !description) {
            message.textContent = "Fyll i alla obligatoriska fält!";
            return;
        }
        const data = {
            companyname,
            jobtitle,
            location,
            startdate,
            enddate: document.getElementById("enddate").value,
            description
        };

        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        message.textContent = "Sparat!";

        //Skicka tillbaka till startsidan
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    });
});