import React, {Component} from 'react'
import resume from '../assets/resumeFe2019.pdf'
import {SyncLoader} from 'react-spinners';
import Joyride from 'react-joyride';
import Jello from 'react-reveal/Jello';
import Tada from 'react-reveal/Tada';



class Home extends Component {
    state = {
        demo : true,
        count: 0,
        steps: [
            {
                target: '.my-first-step',
                content: 'Kemal on LinkedIn',
                disableBeacon: true
            },
            {
              target: '.my-2-step',
              content: 'Kemal on GitHub',
            },
            {
                target: '.my-3-step',
                content: 'Send email to Kemal',
            },
            {
                target: '.my-4-step',
                content: `Download Kemal's resume`,
            },
          ],
        loading: false
    }
    componentDidMount(){
        if (localStorage.getItem('demo')) {
            this.setState({demo : false})
        } else {
            localStorage.setItem('demo', true)
        }
        setTimeout(()=>{  this.setState({show : false}); }, 3000);
    }



    loadPage = () =>{
        return (
            <div className={this.state.loading? 'bg-load' : '' }>
                <SyncLoader 
                sizeUnit={"px"} 
                size={20} 
                color={'maroon'} 
                loading={this.state.loading}/>
            </div>
        )
    }

    thePage = ()=>{
        return (
            <div>
                <Joyride
                run={this.state.demo}
                // debug={true}
                steps={this.state.steps} 
                hideBackButton ={true}
                disableOverlayClose ={true}
                continuous ={true}
                styles={{
                    buttonClose: {
                        display: 'none',
                      },
                    options: {
                      arrowColor: 'white',
                      backgroundColor: 'white',
                      overlayColor: 'rgba(0, 0, 0, 0.8)',
                      primaryColor: 'maroon',
                      textColor: 'black' ,
                      width: 300,
                      zIndex: 9000,
                    }
                  }}
                />
                <div className='mid-home'>
                    <Tada>
                        <Jello spy={this.state.count} >
                            <h1 onClick={()=> this.setState({count : this.state.count +1})}>Kemal Aditya Z</h1>
                        </Jello>
                    </Tada>
                    <br/>
                    <p>I'm a <span>frontend-developer</span></p>
                </div>
                <div className='icons'>
                    <ul>
                        <li className='my-first-step'>
                            <a 
                                href='https://www.linkedin.com/in/kemal-aditya-z-b4276614a/'
                                target='_blank'
                                rel="noopener noreferrer"
                                title="Kemal on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li className='my-2-step'>
                            <a href='https://github.com/adityakemal' target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" title="Kemal on GitHub"></i>
                            </a>
                        </li>
                        <li className='my-3-step'>
                            <a href='mailto:kadityafikar@gmail.com'>
                                <i className="fas fa-reply" title="Send email to Kemal"></i>
                            </a>
                        </li>
                        <li className='my-4-step'>
                            <a href={resume} download>
                                <i className="fas fa-file-download" title="Download Kemal's resume"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )           
    }

    render() {

        return this.state.loading? this.loadPage() : this.thePage()
        
    }
}

export default Home