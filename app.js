function inspiration(){
    axios.request({
        url : "https://kimiquotes.herokuapp.com/quotes/unstamped",
    }).then(inspirSuccess).catch(inspirFail);
}

function inspirSuccess(response){
    let data = response.data;
    document.getElementById(`results`).insertAdjacentHTML(`beforeend`, `<h2>${data[0].quote}</h2>`);
    console.log(response);
}

function inspirFail(error){
    document.getElementById(`results`).insertAdjacentHTML(`beforeend`, `<h2>FAILURE</h2>`);
    console.log(error);
}

document.getElementById(`pressButton`).addEventListener(`click`,inspiration);
