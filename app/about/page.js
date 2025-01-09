import React from "react";
import Navbar from "../Navbar/page";

const AboutPage = () => {
  return (
    <main>
      <Navbar />
      <div className="about-container">
        <div className="about-hero">
          <h1>Tentang Kami</h1>
          <p>
            Kami hadir untuk membantu Anda mendeteksi secara dini tanda-tanda
            diabetes. Platform kami memberikan analisis awal yang mudah diakses
            sehingga Anda dapat segera berkonsultasi dengan tenaga medis.
          </p>
        </div>
        <div className="about-content">
          <div className="content-section">
            <h2>Misi Kami</h2>
            <p>
              Memberikan solusi inovatif untuk meningkatkan kesadaran terhadap
              kesehatan, khususnya dalam mencegah dan mendeteksi dini penyakit
              diabetes.
            </p>
          </div>
          <div className="content-section">
            <h2>Apa yang Kami Tawarkan?</h2>
            <ul>
              <li>Analisis sederhana untuk mendeteksi gejala diabetes awal.</li>
              <li>Edukasi kesehatan yang dapat diakses kapan saja.</li>
              <li>Rekomendasi tindakan lanjutan ke tenaga medis profesional.</li>
            </ul>
          </div>
          <div className="content-section">
            <h2>Pentingnya Deteksi Dini</h2>
            <p>
              Deteksi dini adalah langkah penting untuk mencegah komplikasi.
              Kami percaya bahwa setiap orang berhak mendapatkan akses terhadap
              informasi kesehatan yang jelas, tepat, dan bermanfaat.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
