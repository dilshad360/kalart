import { useEffect, useState } from "react";
import { fetchRecords } from "../../utils/airtableService";
import { motion } from "framer-motion"
import '../../styles/ScoreBoard.css';
import crown from '../../assets/star/crown.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTrophy, faMedal, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
// import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

function ScoreBoard() {

  const [scoreBoardData, setScoreBoardData] = useState([]);
  const [animationRunning, setAnimationRunning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableName = 'Group';
        const filterBy = '';
        const sortField = 'Total';
        const sortDirection = 'desc';
        const Records = await fetchRecords(tableName, filterBy, sortField, sortDirection);
        setScoreBoardData(Records);
        setAnimationRunning(true);
        
        setTimeout(() => {
          setAnimationRunning(false);
        }, 7000);

      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const getMedalIcon = (index) => {
    switch(index) {
      case 0: return { icon: faTrophy, color: '#FFD700' }; // Gold
      case 1: return { icon: faTrophy, color: '#C0C0C0' }; // Silver
      case 2: return { icon: faTrophy, color: '#CD7F32' }; // Bronze
      default: return { icon: faMedal, color: '#1e3c72' }; // Theme blue
    }
  };

  const getCardTheme = (index) => {
  const themes = [
    { bg: 'linear-gradient(135deg, #FFE4E4, #FFD6D6)', border: '#E1072E', text: '#E1072E' }, // red
    { bg: 'linear-gradient(135deg, #E5F1FF, #D6E9FF)', border: '#076BE1', text: '#076BE1' }, // blue
    { bg: 'linear-gradient(135deg, #FFE6DC, #FFDCC8)', border: '#FF4F07', text: '#FF4F07' }, // orange
    { bg: 'linear-gradient(135deg, #E0FFEA, #D0FFE5)', border: '#0BAE42', text: '#0BAE42' }, // green

    { bg: 'linear-gradient(135deg, #F3E8FF, #E9D5FF)', border: '#7C3AED', text: '#7C3AED' }, // purple
    { bg: 'linear-gradient(135deg, #FFF7D6, #FFEFA8)', border: '#D4A017', text: '#D4A017' }, // yellow
    { bg: 'linear-gradient(135deg, #E0F7FA, #CFFAFE)', border: '#0891B2', text: '#0891B2' }, // cyan
    { bg: 'linear-gradient(135deg, #FDE2FF, #FBCFE8)', border: '#C026D3', text: '#C026D3' }, // pink

    { bg: 'linear-gradient(135deg, #E6F4F1, #CDEBE5)', border: '#0F766E', text: '#0F766E' }, // teal
    { bg: 'linear-gradient(135deg, #FFF1E6, #FFE4CC)', border: '#EA580C', text: '#EA580C' }, // deep orange
    { bg: 'linear-gradient(135deg, #E8EDFF, #DDE4FF)', border: '#3730A3', text: '#3730A3' }, // indigo
    { bg: 'linear-gradient(135deg, #F5F5F5, #E5E5E5)', border: '#525252', text: '#525252' }  // gray
  ];

  return themes[index % themes.length];
};


  return (
    <div className='scoreboard-section'>
      <NavLink to="/" className="text-black font-semibold text-lg absolute top-6 left-10 z-10 link-custom">
                <FontAwesomeIcon icon={faAngleLeft} /> &nbsp;Home
      
              </NavLink>
      <div className='scoreboard-container'>
        <h1 className='scoreboard-title'>Score Board</h1>
        
        {scoreBoardData.length ? (
          <div className="leaderboard-grid">
            {/* {animationRunning && <Fireworks autorun={{ speed: 1 }} />} */}
            
            {scoreBoardData.map((item, index) => {
              const medal = getMedalIcon(index);
              const theme = getCardTheme(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="leaderboard-card"
                  style={{
                    background: theme.bg,
                    borderColor: theme.border
                  }}
                >
                  {/* Rank Badge */}
                  

                  {/* Stars for first position */}
                  {index === 0 && (
                    <div className="winner-stars" style={{width: '100%'}}>
                       <img src={crown} className="crown" width={500} height={500} alt="star" />
                     
                    </div>
                  )}

                  {/* Team Info */}
                  <div className="team-info">
                    <div className="team-layout">
                      <h3 
                        className="team-name"
                        style={{ color: theme.text }}
                      >
                        {item.fields.Name === 'BSC' ? 'SCIENCE' : item.fields.Name}
                      </h3>
                      
                      <div className="score-display">
                        <span className="score-number">{item.fields.Total}</span>
                        <span className="score-label">pts</span>
                      </div>
                    </div>
                  </div>

                  {/* Background Number */}
                  <div 
                    className="bg-number"
                    style={{ color: theme.text, opacity: 0.1 }}
                  >
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="loading-container">
            <span className="loading-text">
              Loading
              <FontAwesomeIcon icon={faSpinner} className="animate-spin ml-2" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScoreBoard;
