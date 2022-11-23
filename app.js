function successFunction(response){
    // Do success code here.
    console.log(`Success!!!`);
    console.log(response.data);
}
function failFunction(error){
    // Do failure code here.
    console.log(`Failure!`);
    console.log(error);
}

axios.request({
    option: value,
}).then(successFunction).catch(failFunction);




