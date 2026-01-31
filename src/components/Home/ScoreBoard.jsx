import { useEffect, useState } from "react";
import { fetchRecords } from "../../utils/airtableService";
import { motion } from "framer-motion"
import '../../styles/ScoreBoard.css';
import start1 from '../../assets/star/filled/thinsmooth-1.svg';
import start2 from '../../assets/star/filled/thinsmooth-2.svg';
import start3 from '../../assets/star/filled/thinsmooth-3.svg';
import start4 from '../../assets/star/filled/thinsmooth-4.svg';
import start5 from '../../assets/star/filled/thinsmooth.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

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
      { bg: 'linear-gradient(135deg, #FFE4E4, #FFD6D6)', border: '#E1072E', text: '#E1072E' },
      { bg: 'linear-gradient(135deg, #E5F1FF, #D6E9FF)', border: '#076BE1', text: '#076BE1' },
      { bg: 'linear-gradient(135deg, #FFE6DC, #FFDCC8)', border: '#FF4F07', text: '#FF4F07' },
      { bg: 'linear-gradient(135deg, #E0FFEA, #D0FFE5)', border: '#0BAE42', text: '#0BAE42' }
    ];
    return themes[index % themes.length];
  };

  return (
    <div className='scoreboard-section'>
      <div className='scoreboard-container'>
        <h1 className='scoreboard-title'>Score Board</h1>
        
        {scoreBoardData.length ? (
          <div className="leaderboard-grid">
            {animationRunning && <Fireworks autorun={{ speed: 1 }} />}
            
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
                    <div className="winner-stars">
                      <div className="stars-row">
                        <img src={start1} className="star" alt="star" />
                        <img src={start2} className="star" alt="star" />
                        <img src={start5} className="star" alt="star" />
                      </div>
                      <div className="stars-row-small">
                        <img src={start3} className="star-small" alt="star" />
                        <img src={start4} className="star-small" alt="star" />
                      </div>
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
