import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <div className='homePageContainer'>
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
                        onClick={() => navigate("/history")}
                    >
                        <RestoreIcon />
                        <span>History</span>
                    </button>
                    <button 
                        className='navButton loginButton'
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/auth")
                        }}
                    >
                        <span className='buttonIcon'>🚪</span>
                        Logout
                    </button>
                </div>
            </nav>

            <div className="homeMainContainer">
                <div className='heroContent'>
                    <h1 className='heroTitle'>
                        <span className='highlight'>Join</span> your next
                        <br />meeting <span className='accent'>instantly</span>
                    </h1>
                    <p className='heroSubtitle'>
                        Enter a meeting code to connect with your team or start a new conversation.
                    </p>
                    <div className='meetingInputContainer'>
                        <TextField 
                            onChange={e => setMeetingCode(e.target.value)} 
                            id="outlined-basic" 
                            label="Meeting Code" 
                            variant="outlined"
                            className='meetingInput'
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'white',
                                    '& fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FF9839',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    '&.Mui-focused': {
                                        color: '#FF9839',
                                    },
                                },
                            }}
                        />
                        <button 
                            className='primaryButton joinButton'
                            onClick={handleJoinVideoCall}
                        >
                            <span className='buttonIcon'>🎥</span>
                            Join Meeting
                            <span className='buttonArrow'>→</span>
                        </button>
                    </div>
                </div>
                <div className='heroImage'>
                    <div className='imageContainer'>
                        <div className='floatingElement element1'>💬</div>
                        <div className='floatingElement element2'>📞</div>
                        <div className='floatingElement element3'>🎥</div>
                        <img src="/logo3.png" alt="Video Conference" />
                        <div className='imageGlow'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default withAuth(HomeComponent)