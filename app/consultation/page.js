"use client";

import React from "react";
import Navbar from "../Navbar/page";
import Link from 'next/link';

const Consultation = () => {
    return (
        <main>
            <Navbar />
            <div id="consultation" className="consultation-container">
                <h2>Jadwalkan Konsultasi</h2>
                <p className="subheading">
                    Temukan dokter terbaik yang dapat membantu Anda menangani diabetes dengan
                    konsultasi langsung.
                </p>
                <div className="doctor-list">
                    <h3>Daftar Dokter</h3>
                    <div className="doctor-card">
                        <h4>Dr. Maya Sari</h4>
                        <p>Sp. Penyakit Dalam, ahli dalam menangani diabetes tipe 1 dan 2</p>
                        <p>Jadwal Praktek: Senin - Jumat, 09:00 - 16:00</p>
                        <p>Alamat: Rumah Sakit Sehat, Jl. Sehat No. 45, Jakarta</p>
                    </div>
                    <div className="doctor-card">
                        <h4>Dr. Budi Santoso</h4>
                        <p>Sp. Endokrinologi, berpengalaman dalam pengobatan diabetes</p>
                        <p>Jadwal Praktek: Senin - Kamis, 10:00 - 14:00</p>
                        <p>Alamat: Rumah Sakit Cerdas, Jl. Cerdas No. 20, Surabaya</p>
                    </div>
                    <div className="doctor-card">
                        <h4>Dr. Anita Lestari</h4>
                        <p>Sp. Gizi dan Nutrisi, spesialis diet diabetes</p>
                        <p>Jadwal Praktek: Selasa - Sabtu, 08:00 - 13:00</p>
                        <p>Alamat: Rumah Sakit Bahagia, Jl. Bahagia No. 30, Bandung</p>
                    </div>
                    <button className="cta-button">
                        <Link href="/feature">Kembali</Link>
                    </button>
                </div>
                <p className="cta-message">
                    Pilih dokter dan jadwalkan konsultasi Anda sekarang juga!
                </p>
            </div>
        </main>
    );
};

export default Consultation;
