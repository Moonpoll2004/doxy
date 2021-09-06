import axios from "axios";

export function App(){
    return document.querySelector("#app")
}

export function GetSourceFile(){
    let params = {}
    let url = window.location.search.replace("?","").split("&");

    for(const l of url){
        var [key,val] = l.split("=")
        params[key] = val;
    }
    if(params.file){
        return params.file;
    } else{
        return "docy.json"
    }
}

/**
 * 
 * @returns {"api" | "mqtt"}
 */
export function GetDocyType(){
    let params = {}
    let url = window.location.search.replace("?","").split("&");

    for(const l of url){
        var [key,val] = l.split("=")
        params[key] = val;
    }
    if(params.type){
        return params.type;
    } else{
        return "api"
    }
}


/**
 * 
 * @param {String} file 
 * @param {"api" | "mqtt"} type 
 */
export function ChangeDocyType(file,type) {
    let filer = "file=".concat(file);
    let typer = "type=".concat(type)
    let url = "/?".concat(filer,"&",typer);
    window.location.replace(url)
}

export function setUp() {
    const chbtn = document.getElementById("chbtn");
    const type = GetDocyType()

    chbtn.addEventListener("click",(e) => {
        if(type === "api"){
            chbtn.innerText = "View mqtt Docs"
            ChangeDocyType("docy-mqtt.json","mqtt")
        } else {
            chbtn.innerText = "View api Docs"
            ChangeDocyType("docy.json","api")
        }
    })
}
export async function loadEndpoints() {
    const res = await axios.get("/".concat(GetSourceFile()));
    return res.data;
}

