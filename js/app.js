//URL till min API
const URL = "https://workexperience-api.onrender.com/api/work";

//Funktion som hämtar alla arbetserfarenheter från mitt API
async function getWork() {
    const res = await fetch(URL);
    const data = await res.json();

    console.log(data);

    const list = document.getElementById("list");

    list.innerHTML = "";
    //Lagt en ta bort knapp i HTML så att man ska kunna ta bort erfarenheter
    data.forEach(item => {
        list.innerHTML += `
        <div class="card">
        <h3>${item.companyname}</h3>
        <p><strong>Roll:</strong> ${item.jobtitle}</p>
        <p><strong>Plats:</strong> ${item.location}</p>
        <p><strong>Start:</strong> ${item.startdate}</p>
        <p><strong>Slut:</strong> ${item.enddate || "Pågående"}</p>
        <p>${item.description}</p>

        <button onclick="deleteWork(${item.id})">Ta bort</button>
    </div>
`;
    });
}
getWork();

//Funktion som tar bort arbetserfarenheter och frågar användaren om den verkligen vill ta bort.
async function deleteWork(id) {
    if (!confirm("Vill du verkligen ta bort?")) return;

    await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });
    getWork();
}

