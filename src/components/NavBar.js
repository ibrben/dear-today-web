import React, {useContext} from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { LanguageContext } from '../components/LanguageContext';
import '../resources/css/custom.css'

const NavBar = (props) => {
    const { language, translate } = useContext(LanguageContext);
return (
    <div>
        <Navbar>
            
            
            <Container className='custom-font'>
                
                <Nav>
                <Navbar.Brand href="#home"><a href="/"><img className='logo' alt="deartoday" src={require('../resources/img/dearToday.PNG')} /></a></Navbar.Brand>
                    <Nav.Link href="/"><h4>{translate('navTravel')}</h4></Nav.Link>
                    <Nav.Link href="/event"><h4>{translate('navEvents')}</h4></Nav.Link>
                    <Nav.Link href="/aboutus"><h4>{translate('navAboutUs')}</h4></Nav.Link>
                    {/* <Nav.Link 
              as="button" 
              className="language-switch-btn"
              onClick={() => language.toggleLanguage()}
            >
              {language.current === 'th' ? 'en' : 'th'}
            </Nav.Link> */}
                </Nav>
            </Container>
            
        </Navbar>
    </div>
)
}
export default NavBar;