// components/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Styling for about us section

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <h2>ABOUT US</h2>
      <div className="about-content">
        <div className="about-info">
          <h3>Tentang SABINO</h3>
          <p>Sistem monitoring lokasi evakuasi banjir untuk memantau ketinggian air pada sungai secara real-time.</p>
        </div>
        <div className="team">
          <h3>Tim Pengembang</h3>
          <div className="team-grid">
            {/* Add each team member */}
            <div className="team-member">
            <img src="/mustafa jpg.jpg" alt="Team Member 1" />
              <h4>Mustafa Munir</h4>
              <p>Position</p>
            </div>
            <div className="team-member">
              <img src="/images/member2.png" alt="Team Member 2" />
              <h4>Mudassar Hanif</h4>
              <p>Position</p>
            </div>
            {/* Add more members */}
            <div className="team-member">
              <img src="/images/member2.png" alt="Team Member 2" />
              <h4>Abdullah Jabbar</h4>
              <p>Position</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
