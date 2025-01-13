"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Line } from 'react-chartjs-2'; // Import Chart.js untuk grafik
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaHeartbeat } from 'react-icons/fa'; // Ikon medis untuk mempercantik tampilan

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HeroSection = () => {
  // Data untuk grafik
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Jumlah Kasus Diabetes',
        data: [10, 15, 13, 18, 12, 19, 25],
        borderColor: '#FF6347',
        backgroundColor: 'rgba(255, 99, 71, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Jumlah: ${tooltipItem.raw} orang`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Bulan',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Jumlah Kasus',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="hero-container">
      {/* Hero Content */}
      <div className="hero-content flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="text-content max-w-xl lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Jaga Kesehatan Anda, Cegah Diabetes dengan Gaya Hidup Sehat!</h1>
          <p className="text-lg mb-6">
            Diabetes adalah penyakit yang dapat dicegah dengan perubahan kecil dalam gaya hidup. Mari belajar cara mengelola kesehatan dan mencegah diabetes secara positif.
          </p>

          <div className="cta-buttons">
            {/* Button untuk menuju fitur-fitur utama */}
            <Link href="/feature">
              <button className="cta-btn bg-green-500 text-white px-8 py-3 rounded-md shadow-lg hover:bg-green-600">
                Periksa Kesehatan Anda
              </button>
            </Link>
          </div>
        </div>

        {/* Bagian Gambar */}
        <div className="hero-image mt-6 lg:mt-0 lg:w-1/2">
          <Image
            src="/images/dokter.png"
            alt="Dokter Ramah Menyemangati"
            width={300}
            height={300}
            objectFit="cover"
            className="hero-image-style mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* Animated Chart Section */}
      <div className="chart-section mt-16">
        <h2 className="chart-title text-3xl font-semibold text-center mb-4">
          Apakah Anda Berisiko? <FaHeartbeat className="heartbeat-icon inline-block text-red-600 text-2xl ml-2" />
        </h2>
        <div className="chart-container">
          {/* Grafik animasi */}
          <div className="chart">
            <Line data={chartData} options={chartOptions} />
            <p className="chart-description text-center mt-4 text-lg text-gray-600">
              Grafik ini menunjukkan tren kasus diabetes di berbagai bulan. 1 dari 10 orang dewasa mengalami diabetes, namun perubahan gaya hidup sehat dapat mengurangi risiko ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
