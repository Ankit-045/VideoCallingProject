import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav className='modernNav'>
                <div className='navHeader'>
                    <div className='logoContainer'>
                        <div className='logoIcon'>📹</div>
                        <h2>EchoMeet</h2>
                    </div>
                </div>
                <div className='navlist'>
                    <button 
                        className='navButton guestButton'
                        onClick={() => router("/aljk23")}
                    >
                        <span className='buttonIcon'>👤</span>
                        Join as Guest
                    </button>
                    <button 
                        className='navButton registerButton'
                        onClick={() => router("/auth")}
                    >
                        <span className='buttonIcon'>📝</span>
                        Register
                    </button>
                    <button 
                        className='navButton loginButton'
                        onClick={() => router("/auth")}
                    >
                        <span className='buttonIcon'>🔐</span>
                        Login
                    </button>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div className='heroContent'>
                    <h1 className='heroTitle'>
                        <span className='highlight'>Connect</span> with your 
                        <br />loved ones <span className='accent'>anywhere</span>
                    </h1>
                    <p className='heroSubtitle'>
                        Experience crystal-clear video calls with seamless connectivity. 
                        Bridge distances and create meaningful moments with EchoMeet.
                    </p>
                    <div className='heroButtons'>
                        <Link to={"/auth"} className='primaryButton'>
                            <span className='buttonIcon'>🎥</span>
                            Get Started
                            <span className='buttonArrow'>→</span>
                        </Link>
                        <button 
                            className='secondaryButton'
                            onClick={() => router("/aljk23")}
                        >
                            <span className='buttonIcon'>⚡</span>
                            Quick Join
                        </button>
                    </div>
                    <div className='features'>
                        <div className='feature'>
                            <span className='featureIcon'>🔒</span>
                            <span>Secure & Private</span>
                        </div>
                        <div className='feature'>
                            <span className='featureIcon'>⚡</span>
                            <span>Lightning Fast</span>
                        </div>
                        <div className='feature'>
                            <span className='featureIcon'>📱</span>
                            <span>Cross Platform</span>
                        </div>
                    </div>
                </div>
                <div className='heroImage'>
                    <div className='imageContainer'>
                        <div className='floatingElement element1'>💬</div>
                        <div className='floatingElement element2'>📞</div>
                        <div className='floatingElement element3'>🎥</div>
                        <img src="/marketing-team-analyzing-big-data-insights-online-videoconference.jpg" alt="Marketing team analyzing big data insights online videoconference" />
                        <div className='imageGlow'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}