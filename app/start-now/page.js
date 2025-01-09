"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function StartNow() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulasi pengiriman formulir
    setIsSubmitted(true);
  };

  return (
    <div className="start-now-container">
      <div className="start-now-header">
        <h2>Jadwalkan Pemeriksaan Kesehatan Anda</h2>
        <p>Isi formulir di bawah untuk membuat janji konsultasi dengan dokter kami.</p>
      </div>

      <div className="form-container">
        {!isSubmitted ? (
          <form className="schedule-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="full-name">Nama Lengkap</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone-number">Nomor Telepon</label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="Masukkan nomor telepon Anda"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferred-time">Waktu yang Diinginkan</label>
              <input
                type="datetime-local"
                id="preferred-time"
                name="preferred-time"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Layanan yang Dikehendaki</label>
              <select id="service" name="service" required>
                <option value="">Pilih Layanan</option>
                <option value="General Checkup">Pemeriksaan Umum</option>
                <option value="Blood Test">Tes Darah</option>
                <option value="X-ray">X-ray</option>
                <option value="Consultation">Konsultasi Dokter</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Kirim Permintaan</button>
            </div>
          </form>
        ) : (
          <div className="success-message">
            <h3>Permintaan Anda Telah Dikirimkan!</h3>
            <p>Terima kasih telah mengisi formulir. Kami akan segera menghubungi Anda untuk mengonfirmasi janji konsultasi.</p>
            <Link href="/health-check" className="back-link-text">
              Kembali ke Konsultasi
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
