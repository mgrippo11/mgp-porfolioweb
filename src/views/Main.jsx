import JS from '../img/Skills/javascript.svg'
import ReactLogo from '../img/Skills/react.svg'
import CSS from '../img/Skills/css3.svg'
import HTML from '../img/Skills/html5.svg'
import Mongo from '../img/Skills/mongodb.svg'
import Node from '../img/Skills/node-js.svg'
import Github from '../img/Skills/github.svg'
import Figma from '../img/Skills/figma.svg'
import Postman from '../img/Skills/postman.svg'
import Ansible from '../img/Skills/ansible.svg'
import AWS from '../img/Skills/aws.svg'
import Azure from '../img/Skills/azure.svg'
import GraphQL from '../img/Skills/graphql.svg'
import MySQL from '../img/Skills/mysql.svg'
import PowerApps from '../img/Skills/Papps.svg'
import PowerAutomate from '../img/Skills/Pauto.svg'


const Main = () => {

    const skills = [
      {'paht':JS,'name':'JS'},
      {'paht':CSS,'name':'CSS'},
      {'paht':HTML,'name':'HTML'},
      {'paht':ReactLogo,'name':'React'},
      {'paht':Github,'name':'Github'},
      {'paht':Figma,'name':'Figma'},
      {'paht':Node,'name':'Node'},
      {'paht':Mongo,'name':'Mongo'},
      {'paht':GraphQL,'name':'GraphQL'},
      {'paht':MySQL,'name':'MySQL'},
      {'paht':Postman,'name':'Postman'},
      {'paht':Ansible,'name':'Ansible'},
      {'paht':AWS,'name':'AWS'},
      {'paht':Azure,'name':'Azure'},
      {'paht':PowerApps,'name':'PowerApps'},
      {'paht':PowerAutomate,'name':'PowerAutomate'}
    ]

    return (
      <div className='main'>
          <h1 className='maint'>SKILLS</h1>
          <div className='skills'>
            {
              skills.map(skill => (
                <div className='iconSkill'>
                  <img src={skill.paht} className='iconS' alt={skill.name} />
                  <h5>{skill.name}</h5>
                </div>
              ))
            }
          </div>
      </div>
    )
}

export default Main