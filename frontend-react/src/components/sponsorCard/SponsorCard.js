import React from 'react';
import './sponsorCard.css';
import logo from "../../utils/images/logo.png"

export default function SponsorCard({ category }) {
  const handleSponsorClick = (sponsorName) => {
    if (sponsorName === 'GoldMedal') {
      window.open('https://www.goldmedalindia.com/', '_blank');
    }
  };

  return (
    <div className='card'>
      <div className='category-container'>
        <span className='category'>{category.name}</span>
      </div>
      <div className="image-preview">
        {Array.isArray(category.sponsers) && category.sponsers.length > 0 ? (
          category.sponsers.map((sponsor, sponsorIndex) => (
            <div key={sponsorIndex} className="image-preview-container">
              <img
                src={sponsor.link}
                alt={`Sponsor for ${category.name}`}
                style={{
                  objectFit: "contain",
                  height: "80%",
                  background: "rgba(255,255,255,0.4)",
                  borderRadius: "10px"
                }}
                height={800}
                width={200}
                onClick={() => handleSponsorClick(sponsor.name)} // Handle click for sponsor
                onError={(e) => (e.target.src = logo)}
              />
              <p className='name'>{sponsor.name}</p>
              <p className='title'>{sponsor.title ?? category.name}</p>
            </div>
          ))
        ) : (
          <p>No sponsors available in this category.</p>
        )}
      </div>
    </div>
  );
}
