let ls=[];

function buttonLeftPress() {
    let doc = document.getElementById("txt");
    let r = document.getElementById("textListF");
    if (doc.value.trim() !== "") {
        ls.push(doc.value.trim());
        doc.value = "";
    }
    r.innerHTML = ls.join("<br>");


}
function click(){
    addEventListener("click", () => {
        let cl = document.getElementById("cl");
        cl.play();  
     });
/*     addEventListener("keydown", () => {
        document.getElementById("write").pause();
        document.getElementById("write").curentTime = 0;
        document.getElementById("write").play();
     });*/
}

function relaseClick(){
        let re = document.getElementById("rl");
        re.play();  
        
}
function popStuff(){
        let r = document.getElementById("textListF");
        ls.pop();
        r.innerHTML  = ls.join("<br>");
    }

    click();
