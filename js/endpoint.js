import { App } from "."

/**
 * 
 * @param {String | {}} source 
 */
export function Endpoint(source){
    this.source = source
    this.endpoints = []

    /**
     * 
     * @param {String} param 
     */
    let getTagColor = function (param) {
        const t = "tag "
        switch (param) {
            case "GET":
                return t.concat("is-primary")
                
            case "POST":
                return t.concat("is-warning")

            case "DELETE":
                return t.concat("is-danger")

            default:
                return t.concat("is-primary")
        }
    }

    let mapObj = function (objc) {
        let res = ""
        if(Object.entries(objc).length === 0){
            res = `<div class="notification is-dark">No data</div>`
        } else {
            Object.entries(objc).forEach((intr) => {
                res = res.concat(`<li class="mt-4">
                <span class="tag is-success">
                    ${intr[0] || "none"}
                </span>
                :
                <span class="tag is-link">
                    ${intr[1] || "none"}
                </span>
            </li>`)
            })
        }

        return res;
    }
    /**
     * 
     * @param {String} path 
     * @param {String} method 
     * @param {{}} body 
     * @param {{}} query 
     * @param {{}} cookies 
     * @param {String} disc 
     * @returns 
     */
    this.tamplate = function(
        path,
        method,
        body,
        query,
        cookies,
        disc
    ){
        return `
        <div class="container notification mt-4">
        <hr>
            <div class="mb-4">
                <span class="${getTagColor(method)}">${method}</span>
                <span>${path}</span>
            </div>
            <div class="columns">
                <div class="column">
                    <p class="subtitle">body</p>
                    ${mapObj(body)}
                </div>

                <div class="column">
                    <p class="subtitle">query</p>
                    ${mapObj(query)}
                </div>

                <div class="column">
                    <p class="subtitle">cookies</p>
                    ${mapObj(cookies)}
                </div>
            </div>

            <div class="container notification">
                ${disc}
            </div>
        </div>
        `
    }
    /**
     * 
     * @param {[{*}]} ends 
     */
    this.mapEndpoints = function (ends) {
        ends.forEach((val) => {
            App().innerHTML += this.tamplate(val.path,val.method,val.body,val.query,val.cookies,val.disc);
        })
    }
}