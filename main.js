import { App, GetDocyType, loadEndpoints, setUp } from './js'
import { Endpoint } from './js/endpoint'
import './style.css'
import "bulma/css/bulma.min.css"
import { Command } from './js/command'



async function run() {
    try {
      const Ender = new Endpoint("")
      const commander = new Command()

      const ends = await loadEndpoints()
      if(GetDocyType() === "api"){
        ends.forEach((end) => {
          App().innerHTML += Ender.tamplate(end.path,end.method,end.body,end.query,end.cookies,end.disc) 
        })
      } else {
        ends.forEach((end) => {
          App().innerHTML += commander.template(end.topic,end.cmd,end.data,end.disc); 
        })
      }
      setUp()
    } catch (error) {
      console.error(error)
    } 
}

run()

