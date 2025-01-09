"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../Navbar/page";

const HealthCheck = () => {
  return (
    <main>
        <Navbar />

    <div id="health-check" className="health-check-container">
      <h2>Ubah Kesehatan Anda: Tetap Terdepan dengan Pemeriksaan Rutin</h2>
      <p className="subheading">
      Kami percaya pada kekuatan perawatan preventif untuk masa depan yang lebih sehat.
      </p>
      <div className="content">
        <h3>Mengapa Pemeriksaan Kesehatan Secara Teratur Penting</h3>
        <p>
        Pemeriksaan kesehatan sangat penting untuk mengetahui potensi masalah kesehatan sejak dini, sehingga memungkinkan pengobatan yang efektif dan hidup sehat dan panjang umur. Tidak ada kata terlambat untuk mulai menjaga kesehatan Anda!
        </p>
        <div className="health-cards">
          <div className="card">
            <h3>Tes Darah Lengkap</h3>
            <p>Lacak penanda kesehatan Anda dengan tes darah komprehensif. Deteksi dini adalah kuncinya!</p>
          </div>
          <div className="card">
            <h3>Kesehatan Jantung</h3>
            <p>Pastikan hatimu tetap kuat. Pemeriksaan kami mencakup pemeriksaan jantung lengkap.</p>
          </div>
          <div className="card">
            <h3>Nutrisi & Kebugaran</h3>
            <p>Dapatkan saran nutrisi dan kebugaran yang dipersonalisasi untuk gaya hidup seimbang dan aktif.</p>
          </div>
        </div>
        <Link href="/start-now">
          <button className="cta-btn">Jadwalkan Pemeriksaan Kesehatan Anda Sekarang</button>
        </Link>
      </div>
    </div>
    </main>
  );
};

export default HealthCheck;
