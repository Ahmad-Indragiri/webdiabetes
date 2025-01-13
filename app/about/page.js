"use client"

import React from "react";
import Navbar from "../Navbar/page";

const AboutPage = () => {
  return (
    <main>
      <Navbar />
      <div className="about-container px-4 py-8 max-w-7xl mx-auto">
        <div className="about-hero text-center mb-8">
          <h1 className="text-3xl font-semibold md:text-4xl">Tentang Kami</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Kami hadir untuk membantu Anda mendeteksi secara dini tanda-tanda
            diabetes. Platform kami memberikan analisis awal yang mudah diakses
            sehingga Anda dapat segera berkonsultasi dengan tenaga medis.
          </p>
        </div>
        <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="content-section">
            <h2 className="text-2xl font-semibold mb-4">Misi Kami</h2>
            <p className="text-lg">
              Memberikan solusi inovatif untuk meningkatkan kesadaran terhadap
              kesehatan, khususnya dalam mencegah dan mendeteksi dini penyakit
              diabetes.
            </p>
          </div>
          <div className="content-section">
            <h2 className="text-2xl font-semibold mb-4">Apa yang Kami Tawarkan?</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Analisis sederhana untuk mendeteksi gejala diabetes awal.</li>
              <li>Edukasi kesehatan yang dapat diakses kapan saja.</li>
              <li>Rekomendasi tindakan lanjutan ke tenaga medis profesional.</li>
            </ul>
          </div>
          <div className="content-section col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Pentingnya Deteksi Dini</h2>
            <p className="text-lg">
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
