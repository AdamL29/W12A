function inspirSuccess(response){
    console.log("All the Inspiration!");
    console.log(response);
}

function inspirFail(error){
    console.log("No Inspiration Today!");
    console.log(error);
}

function inspiration(){
    axios.get({
        get : "https://kimiquotes.herokuapp.com/quotes/unstamped",
    }).then(inspirSuccess).catch(inspirFail);
}

document.getElementById(`pressButton`).addEventListener(`click`,inspiration);
