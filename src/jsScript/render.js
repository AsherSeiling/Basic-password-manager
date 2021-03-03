// The variables that get_input needs to get
let key = "";
let master_pass = "";

// Gets the input of the first page
function get_input(){
    key = document.getElementById("password_key").value;
    master_pass = document.getElementById("master_pass").value;
};

let pass = "";
// Assemble HTML
function assemble_html(){
    let apple = ["a", "b", "c"];
    for (i in apple){
        pass += "<p>" + apple[i] + "</p>";
    };
    $("#output").html(pass);
};

function pass_reset(){
    $("#center").html("");
    assemble_html();
};

// Main function
function main(){
    get_input();
    pass_reset();
    $("#button1").show();
};
$("#button1").hide();

// Password variables
let new_pass = "";
let new_name = "";
// Password

function submit(){
    new_name = $("#sitename").val();
    new_pass = $("#password").val();

};
function new_pass_html(){
    let html_pass = "";
    $("#center").html("");
    $("#output").html("");
    html_pass += "<p>Input the site name: </p> \n <input id=\"sitename\" type=\"text\"> \n <p>Input the password: </p> \n <input id=\"password\" type=\"text\"> <br> <br> <button onclick=\"submit();\">Submit</button>";
    $("#center").html(html_pass);
};

function new_password(){
    new_pass_html();
};