function Login(){
var done=0;
var useername=document.getElementById('username');
var passeword=document.getElementById('password');

if (useername=="user1" && passeword=="user1") {
window.location="bienvenue.html";
}

}
-----------

function remplace(a){

    const a_remplacer = ['4','8','X','7','9','1','5','0',':']


    a_remplacer.splice(3, 1, 'P');
    a_remplacer.splice(0, 1, 'A');
    a_remplacer.splice(4, 1, 'R');
    a_remplacer.splice(5, 1, 'I');
    a_remplacer.splice(6, 1, 'S');

  }
