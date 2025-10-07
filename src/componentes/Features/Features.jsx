import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <div className="container py-5">
        <h2 className="text-center mb-5">Our Features</h2>
        
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={image1} className="card-img-top" alt="Feature 1" />
              <div className="card-body">
                <h5 className="card-title">Innovative Design</h5>
                <p className="card-text">Experience cutting-edge design that combines aesthetics with functionality.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={image2} className="card-img-top" alt="Feature 2" />
              <div className="card-body">
                <h5 className="card-title">Smart Technology</h5>
                <p className="card-text">Powered by the latest technology to provide seamless user experience.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={image3} className="card-img-top" alt="Feature 3" />
              <div className="card-body">
                <h5 className="card-title">Sustainable Solutions</h5>
                <p className="card-text">Environmentally conscious approach for a better tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={() => window.history.back()}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Features;