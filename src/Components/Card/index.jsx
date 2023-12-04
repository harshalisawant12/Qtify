import "./card.css";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default ({ imgSrc, followersCount, label, Songnum }) => {
  return (
    <Tooltip title={`${Songnum} songs`} arrow>
    <div className="card-wrapper">
      <div className="card">
       
        
        <div className="card-img-frame">
          <img className="card-img" src={imgSrc} />
        </div>
        <div className="card-content">
          <div className="card-content-pill">
            <span>{followersCount} Follows</span>
          </div>
        </div>
      </div>
      <p className="card-label">{label}</p>
    </div>
    </Tooltip>
  );
};
