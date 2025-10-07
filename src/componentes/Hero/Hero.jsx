import 'bootstrap/dist/css/bootstrap.min.css'
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <div className="display-2 fw-bold mb-4">
            <div>{heroData[heroCount].text1}</div>
            <div>{heroData[heroCount].text2}</div>
          </div>
          
          <div 
            className="d-flex align-items-center justify-content-center mb-5" 
            onClick={() => window.location.href = '#features'}
            style={{cursor: 'pointer'}}
          >
            <p className="fs-5 me-3 mb-0">Explore the features</p>
            <img src={arrow_btn} alt="Arrow" style={{width: '20px'}} />
          </div>
          
          <div className="mt-5">
            <ul className="nav justify-content-center mb-4">
              {[0, 1, 2].map((index) => (
                <li key={index} className="nav-item mx-2">
                  <button 
                    onClick={() => setHeroCount(index)} 
                    className={`btn ${heroCount === index ? 'btn-primary' : 'btn-outline-secondary'} rounded-circle`}
                    style={{width: '15px', height: '15px', padding: '0'}}
                  ></button>
                </li>
              ))}
            </ul>
            <div className="d-flex align-items-center justify-content-center">
              <img 
                onClick={() => setPlayStatus(!playStatus)} 
                src={playStatus ? pause_icon : play_icon} 
                alt="Play/Pause" 
                style={{width: '30px', cursor: 'pointer'}} 
                className="me-2"
              />
              <p className="mb-0">See the video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;