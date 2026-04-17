//URL till min API
const URL = "http://localhost:3000/api/work";

//Funktion som hämtar alla arbetserfarenheter från mitt API
async function getWork() {
    const res = await fetch(URL);
    const data = await res.json();

    console.log(data);

    const list = document.getElementById("list");

    list.innerHTML = "";
    //Lagt en ta bort knapp i HTML så att man ska kunna ta bort erfarenheter
    data.forEach(item => {
        list.innerHTML += `<p>${item.companyname}
                                <button onclick="deleteWork(${item.id})">Ta bort </button>
                                </p>`;
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

