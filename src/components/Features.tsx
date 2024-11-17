import React from 'react';
import './Features.css'; // Importing the CSS file

const Features = () => {
  return (
    <section className="features">
      <h2>FEATURE</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            {/* Replace with an actual icon */}
            <img src="floodmap.png" alt="Icon 1" />
          </div>
          <h3>Data Ketinggian Air <br /> (Real-Time)</h3>
          <p>
            Pengguna dapat mengetahui data ketinggian air terbaru dan selalu siap kapan saja menghadapi banjir.
          </p>
        </div>
        <div className="feature-card feature-active">
          <div className="feature-icon">
            <img src="/path/to/icon2.png" alt="Icon 2" />
          </div>
          <h3>History Ketinggian Air</h3>
          <p>
            Pengguna dapat melihat data history ketinggian air untuk mengetahui seberapa rawan lingkungan anda dilanda banjir.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/path/to/icon3.png" alt="Icon 3" />
          </div>
          <h3>Diagram Ketinggian Air <br /> (Real-Time)</h3>
          <p>
            Pengguna dapat mengawasi banjir setiap saat dan dapat memprediksi banjir secara dini.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/path/to/icon4.png" alt="Icon 4" />
          </div>
          <h3>Lokasi Evakuasi</h3>
          <p>
            Pengguna dapat mengetahui lokasi evakuasi untuk menyelamatkan diri dari banjir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
