import '../../../assets/styles/App.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import analise from "../../../assets/images/analise.jpeg";
import portfolio from "../../../assets/images/portfolio.jpeg";
import site from "../../../assets/images/site.jpeg";
import lading from "../../../assets/images/ladingpage.jpeg";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Hero = () => {

  

  return (
      <>
       
      <main>
        <div id='inicio'>
        <h1>DV SOLUTIONS.</h1>
<h2 className='slide-in-left'>“DV Solutions: A Solução para Todos os Seus Desafios Digitais” </h2>
<span>Analisamos, Resolvemos e Otimizamos</span>
        </div>
        <div id='servico'>
        <div className="card">
        <img src={lading} alt="" />
        <h3>Landing Pages</h3>
        <p>Desenvolvemos landing pages personalizadas para o seu negócio.</p>
    </div>

    <div className="card">
    <img src={site} alt="" /> <h3>Sites personalizados</h3> <p>Criamos sites únicos e adaptados às suas necessidades.</p>
    </div>

    <div className="card">
    <img src={portfolio}  alt="" />   
    <h3>Criação de portfólio</h3>
 <p>Desenvolvemos portfólios profissionais para destacar suas habilidades e projetos.</p>
    </div>

    <div className="card">
     
<img src={analise} alt="" />  <h3>Manutenção e análise do site</h3> <p>Oferecemos serviços de manutenção e análise para garantir o bom funcionamento do seu site.</p>
    </div>
        </div>
       
      <div>
      <h2>Contato</h2>
      <div id='contato'>
        <p className='contato'><WhatsAppIcon/><a href="https://wa.me/32998354656?text=Olá,%20quero%20contratar">¡Conversamos pelo WhatsApp!</a></p>
        <p className='contato'> <EmailIcon/> Prefere pelo Email? estergutierres1175@gmail.com</p>
        <a href="#inicio" className='contato'><ArrowUpwardIcon/></a>
      </div>
      
      </div>

       
      </main>
    </>
            
     
  )
}

export default Hero