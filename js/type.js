export function Type(params) {
    let mapObj = function (objc) {
        let res = ""
        let obj = {}
        if(Object.entries(objc).length === 0){
            obj = {none:"none"}
        } else {
            obj = objc
        }
        Object.entries(obj).forEach((intr) => {
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

        return res;
    }
    /**
     * 
     * @param {String} name 
     * @param {{}} obj 
     * @param {"api"|"mqtt"} use 
     */
    this.template = function (name,obj,use) {
        
    }
}