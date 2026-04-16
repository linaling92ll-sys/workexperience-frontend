//URL till min API
const URL = "http://localhost:3000/api/work";

//Funktion som hämtar alla arbetserfarenheter från mitt API
async function getWork() {
    const res = await fetch(URL);
    const data = await res.json();

    console.log(data);

    const list = document.getElementById("list");

    data.forEach(item => {
        list.innerHTML += `<p>${item.companyname}</p>`;
    });
}

getWork();