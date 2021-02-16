import React, { PureComponent } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithubSquare, FaFilePdf } from 'react-icons/fa';
import Image from 'next/image';
import Button from './button';

class Navbar extends PureComponent {


    backdropRef = React.createRef();

    constructor(props) {
        super(props)

        this.state = {
            opened: false
        }
    }

    renderDrawer = () => {
        if (this.state.opened) {
            return <div className="column is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center has-text-centered" style={{ width: 'auto', height: '100%', position: 'fixed', top: 0, padding: '8px', backgroundColor: '#100427', right: 0 }}>
                <div className="mt-3">
                    <FaTimes onClick={() => this.setState({ opened: false })} className="is-size-4" color="#6122C4" />
                </div>
                <div>
                <div className="column">
                    <a href="https://www.linkedin.com/in/vinicius-amelio-jesus/" rel="noopener" target="_blank">
                        <FaLinkedin className="has-text-white is-size-3" />
                    </a>
                </div>
                <div className="column">
                    <a href="https://www.github.com/viniciusamelio" target="__blank">
                        <FaGithubSquare className="has-text-white is-size-3" />
                    </a>
                </div>

                <div className="column">
                    <a href="https://docs.google.com/document/d/1Lm1Jnf1F2PysFdkETunybXdBuToUoiNUB56vUwAmtl8/edit?usp=sharing" target="___blank">
                        <FaFilePdf className="has-text-white is-size-3" />
                        <p className="has-text-white">CV</p>
                    </a>
                </div>
                </div>
            </div>
        }
    }

    renderIcon = () => {
        this.backdropRef.current?.classList.toggle('is-hidden');
        if (!this.state.opened) {
            return <FaBars onClick={() => this.setState({ opened: true })} className="is-size-4" color="#6122C4" />
        }

    }

    render() {
        return (
            <div>
                <nav className="px-5 py-3 is-flex is-align-items-center is-justify-content-space-between" style={{ zIndex: 10, backgroundColor: '#1B0645', position: 'fixed', left: 0, top: 0, width: '100vw' }}>
                    <Image src="/logo.png" height="70px" width="130px" />

                    <div className="is-hidden-mobile is-flex is-align-items-center is-justify-content-flex-end pr-5">
                        <a className="mr-3 mt-2 has-text-centered" href="https://docs.google.com/document/d/1Lm1Jnf1F2PysFdkETunybXdBuToUoiNUB56vUwAmtl8/edit?usp=sharing" target="___blank">
                            <FaFilePdf style={{color: '#B050FF'}} className=" is-size-3" />
                        </a>
                        <a className="mr-3 mt-2" href="https://www.github.com/viniciusamelio" target="__blank">
                            <FaGithubSquare className="has-text-white is-size-3" />
                        </a>
                        <a className="mr-3 mt-2" href="https://www.linkedin.com/in/vinicius-amelio-jesus/" target="_blank">
                            <FaLinkedin className="has-text-white is-size-3" />
                        </a>
                        
                        <Button onClick={()=>{window.open('https://api.whatsapp.com/send?phone=5511951213836&text=Ol%C3%A1%2CVinicius%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!',"__blank");}} text="Me contrate" />
                    </div>



                    <div className="is-hidden-desktop">
                        <div className="column is-12 is-align-items-center is-justify-content-flex-end pr-3">
                            {this.renderIcon()}
                            {this.renderDrawer()}
                        </div>
                    </div>
                </nav>
                <div ref={this.backdropRef} onClick={()=>this.setState({ opened: !this.state.opened })} className="is-hidden" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100%', backgroundColor: 'rgba(10,10,10,0.5)', zIndex: 9 }}>
                </div>
            </div>
        )
    }
}

export default Navbar;