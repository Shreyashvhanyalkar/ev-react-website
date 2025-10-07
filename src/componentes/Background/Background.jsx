import './Background.css';
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Background = ({playStatus,heroCount}) => { 
   if(playStatus){
    return (
        <div className="background">
            <video autoPlay loop muted playsInline className="w-100 h-100 object-fit-cover">
                <source src={video1} type="video/mp4"/>
                <img src={image1} alt="Fallback Background" className="img-fluid w-100 h-100" />
            </video>
        </div>
    )}
    else if(heroCount===0){
        return (
            <div className="background">
                <img key={image1} src={image1} alt="Background 1"/>
            </div>
        )}
        else if(heroCount===1){
            return (
                <div className="background">
                    <img key={image2} src={image2} alt="Background 2"/>
                </div>
            )}
            else if(heroCount===2){
                return (
                    <div className="background">
                        <img key={image3} src={image3} alt="Background 3"/>
                    </div>
                )}
                
    }
export default Background;