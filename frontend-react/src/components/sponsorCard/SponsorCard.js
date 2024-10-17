import React from 'react'
import './sponsorCard.css'

export default function SponsorCard({ category }) {
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
                                    margin: '5px',
                                    height: "250px"
                                }}
                                height={200}
                                width={200}
                            />
                        </div>
                    ))
                ) : (
                    <p>No sponsors available in this category.</p>
                )}
            </div>
    </div>
  )
}
