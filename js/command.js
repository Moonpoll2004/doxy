export function Command() {

    /**
     * 
     * @param {"dmg"|"$workspaceId"|"$workspace"} topic 
     */
    let getTopicColor = function (topic) {
        const t = "tag "
        switch (topic) {
            case "dmg":
                return t.concat("is-danger")
                break;

            case "$workspace":
                return t.concat("is-info")

            case "$workspaceId":
                return t.concat("is-info")
            default:
                return t;
                break;
        }
    }

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
            <span class="tag is-warning">
                ${intr[0] || "none"}
            </span>
            :
            <span class="tag is-danger is-inverted">
                ${intr[1] || "none"}
            </span>
        </li>`)
        })

        return res;
    }

    /**
     * 
     * @param {String} topic 
     * @param {"conf"|"data"|"pong"|"ping"|"info"} cmd 
     * @param {{}} data 
     * @param {String} disc 
     * @returns 
     */
    this.template = function name(topic,cmd,data,disc) {
        return `
            <div class="mt-4">
                <hr>
                <div class="container is-max-desktop">
                    <div>
                        <div class="mt-2">
                        <span>topic: </span>
                        <span class="${getTopicColor(topic)}">${topic}</span>
                        </div>
                        <div class="mt-2">
                            <span>
                            command:
                            <span class="tag is-primary is-inverted">${cmd}</span>
                            </span>
                        </div>
                       
                    </div>
                    <div class="columns">
                        <div class="mt-3 column notification">
                            <p class="subtitle">data</p>
                            <ul>
                                ${mapObj(data)}
                            </ul>
                        </div>
                        <div class="column">
                        <article class="message is-dark">
                        <div class="message-header">
                          <p>Discription</p>
                        </div>
                        <div class="message-body">
                            ${disc}
                        </div>
                      </article>
                        </div>
                    </div>
                </div>
            </div>
        `   
    }
}