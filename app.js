function evale(){
    let query = document.getElementById("query").value;
    let querys = document.getElementById("query");
    let sol = eval(query);
    querys.value = sol
}