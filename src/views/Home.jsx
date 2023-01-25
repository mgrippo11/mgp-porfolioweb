import { ExternalLink } from 'react-external-link';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import fotoP from '../img/FotoP.png'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import mail from '../img/mail.svg'

const Home = () => {
     
    const name = "<dev> Martin Grippo </dev>"

    return (
      <div className='header'>
        <div className='title'>
          <h1 className='title2'>¡Bienvenido a mi porfolio!</h1>
          <h2 className='name'>{name}</h2>
        </div>
        <img src={fotoP} className='Foto' alt='fotoP' />
        <div className='description'>
          <h2>Desarrollador Full Stack JR</h2>
          <p>
            Me interesa el desarrollo Web y la automatizacion de procesos. Este porfolio estas creado con JavaScript y React.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <aside className='sidebar'>
          <ExternalLink href="https://github.com/mgrippo11" >
            <img src={github} className='icon' alt="github" />
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/martin-grippo-palladino" >
            <img src={linkedin} className='icon' alt="linkedin" />
          </ExternalLink>
          <CopyToClipboard text='mgrippo_11@hotmail.com'>
            <img src={mail} className='icon mail' alt="mail" title='Copiar Mail'/>
          </CopyToClipboard>
        </aside>
      </div>
    )
}

export default Home