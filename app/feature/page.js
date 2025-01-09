import React from 'react';
import { FaHeartbeat, FaChartLine, FaUserMd } from 'react-icons/fa'; // Ikon medis
import Link from 'next/link';
import Navbar from '../Navbar/page';

const Features = () => {
  return (
    <header>
      <Navbar />

      <div>
        <div className="features-container">
          <h1 className="features-title">Fitur Utama Kami</h1>
          <p className="features-description">
            Kami menyediakan berbagai fitur untuk membantu Anda mengelola kesehatan dan mencegah diabetes secara efektif. Temukan lebih lanjut!
          </p>

          <div className="features-list">
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeartbeat />
              </div>
              <h3>Periksa Kesehatan Anda</h3>
              <p>
                Cek indikator kesehatan Anda secara menyeluruh untuk mengetahui apakah Anda berisiko mengidap diabetes.
              </p>
              <Link href="/health-check">
                <button className="cta-btn">Mulai Sekarang</button>
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Hitung Resiko Diabetes</h3>
              <p>
                Gunakan kalkulator risiko untuk mengetahui tingkat kemungkinan Anda mengembangkan diabetes berdasarkan gaya hidup Anda.
              </p>
              <Link href="/calculator">
                <button className="cta-btn">Hitung Risiko</button>
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaUserMd />
              </div>
              <h3>Konsultasi Dokter</h3>
              <p>
                Dapatkan konsultasi dengan dokter ahli untuk mendiskusikan langkah-langkah preventif yang tepat untuk Anda.
              </p>
              <Link href="/consultation">
                <button className="cta-btn">Jadwalkan Konsultasi</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Features;
