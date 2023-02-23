import './App.css';
import './Theme/CommonTheme.css'
import './Theme/AppTheme.css'
import AppLogic from './AppLogic';

import Row from './Components/BaseComponents/Row/Row';
import Col from './Components/BaseComponents/Col/Col';
import Section from './Components/BaseComponents/Section/Section';

import Background from './images/background.png'
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import PreviousWorks from './Components/PreviousWorks/PreviousWorks';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer'
import Services2 from './Components/Services2/Services2'
import Modal from './Components/Modal/Modal'


function App() {

  const { ModalState, openModal, closeModal, submitModal } = AppLogic();



  return (
      <>
        {(ModalState != "closed")&& <Modal currentState={ModalState} submit={submitModal} close={closeModal} open={openModal} />}
        <div className="main-wrapper">
          <div className="hero">
            <div className="foreground">
              <Header />
              <div className='h-title'>
                Building the future one foundation at a time
              </div>
              <div className="h-button" onClick={()=>{ openModal() }}>
                Contact us
              </div>
            </div>
            <div  className="background"></div> 
          </div>
          <Section  classList={"bo section-2-wrapper"}>
            <About />
          </Section>
          <Section   classList={"bo "}>
            <Services2 />
          </Section>
          <Section  classList={"bo section-3-wrapper"}>
            <PreviousWorks />
          </Section>
          <Section  classList={"bo section-4-wrapper"}>
            <Testimonials />
          </Section>
          <Section classList={"bo "}>
            <Footer />
          </Section>
        </div>
      </>

  );
}

export default App;
