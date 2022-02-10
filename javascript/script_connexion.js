window.onload = function() {
    document.querySelector("#value_mail").onkeyup = function() {
        testFields();
    };
    document.querySelector("#value_pass").onkeyup = function() {
        testFields();
    };
};

function testFields() {
    let input_mail = document.querySelector('#value_mail').value;
    let input_pass = document.querySelector('#value_pass').value;
    if(input_mail && input_pass)
        document.querySelector('#submit').disabled = false;
    else{
        document.querySelector('#submit').disabled = true;
    }
    return [input_mail, input_pass];
}


document.querySelector('#submit').addEventListener('click', verif_form);
function verif_form(){
    fetch("./json/code_success.json")
    .then(r => r.json())
    .then(data => {
        console.log(data)
        if(data.statut == "success")
        {
            setInterval(() => {
                location.replace('html/admin.html');   
            }, 1000);
        }
        else 
        {
            //console.log(data.statut);
            //console.log(data.errors[4]);

            if(data.statut == "failed" && data.errors[1] == 1){
                //document.querySelector('#miss_mail').innerHTML = "MISSING LOGIN";
            } 
            if(data.statut == "failed" && data.errors[2] == 1){
                //document.querySelector('#err_mail').innerHTML = "INVALID LOGIN";
            } 
            if(data.statut == "failed" && data.errors[3] == 1){
                //document.querySelector('#miss_pass').innerHTML = "MISSING PASSWORD";
            }
            if(data.statut == "failed" && data.errors[4] == 1){
                //document.querySelector('#err_pass').innerHTML = "INVALID PASSWORD";
            }
            // Reset du btn
        }
       
    })
     .catch((error) => {
            //console.log("ERR");

    })
}
