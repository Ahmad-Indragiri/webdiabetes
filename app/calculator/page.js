"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Calculator = () => {
    // State untuk menampung data input
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [familyHistory, setFamilyHistory] = useState(false);
    const [exercise, setExercise] = useState(false);
    const [highBloodPressure, setHighBloodPressure] = useState(false);
    const [stress, setStress] = useState(false);
    const [diet, setDiet] = useState('normal'); // Pola makan: 'normal', 'unhealthy'
    const [risk, setRisk] = useState(null);

    // State untuk memastikan komponen hanya dirender di klien
    const [isClient, setIsClient] = useState(false);

    // Menggunakan useEffect untuk memanipulasi komponen setelah render di klien
    useEffect(() => {
        setIsClient(true); // Menandakan bahwa komponen ini hanya akan render di sisi klien
    }, []);

    // Fungsi untuk menghitung risiko diabetes
    const calculateRisk = () => {
        let score = 0;

        // Menghitung berdasarkan usia
        if (age >= 45) score += 1;

        // Menghitung berdasarkan BMI
        if (bmi >= 30) score += 2;  // Obesitas mendapatkan skor lebih tinggi
        else if (bmi >= 25) score += 1; // Overweight

        // Menghitung berdasarkan riwayat keluarga
        if (familyHistory) score += 1;

        // Menghitung berdasarkan aktivitas fisik
        if (!exercise) score += 1;

        // Menambahkan faktor tekanan darah tinggi
        if (highBloodPressure) score += 1;

        // Menambahkan faktor stres
        if (stress) score += 1;

        // Menambahkan faktor pola makan
        if (diet === 'unhealthy') score += 1;

        // Menyimpan skor risiko
        if (score >= 5) {
            setRisk("Risiko Sangat Tinggi");
        } else if (score >= 3) {
            setRisk("Risiko Tinggi");
        } else if (score >= 2) {
            setRisk("Risiko Sedang");
        } else {
            setRisk("Risiko Rendah");
        }
    };

    // Fungsi untuk menghitung BMI
    const calculateBmi = () => {
        if (weight && height) {
            const calculatedBmi = (weight / (height * height)).toFixed(1);
            setBmi(calculatedBmi);
        }
    };

    if (!isClient) {
        return null; // Jangan render apa-apa sebelum komponen selesai dirender di klien
    }

    return (
        <body>

            <div className="calculator-container">
                <h1 className="text-3xl font-bold text-center mb-6">Kalkulator Resiko Diabetes</h1>

                <div className="form-container">
                    <div className="form-group">
                        <label>Usia:</label>
                        <input
                            type="number"
                            className="input-field"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Masukkan usia"
                        />
                    </div>

                    <div className="form-group">
                        <label>Berat Badan (kg):</label>
                        <input
                            type="number"
                            className="input-field"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Masukkan berat badan"
                            onBlur={calculateBmi}
                        />
                    </div>

                    <div className="form-group">
                        <label>Tinggi Badan (m):</label>
                        <input
                            type="number"
                            step="0.01"
                            className="input-field"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="Masukkan tinggi badan"
                            onBlur={calculateBmi}
                        />
                    </div>

                    <div className="form-group">
                        <label>Indeks Massa Tubuh (BMI):</label>
                        <input
                            type="text"
                            className="input-field"
                            value={bmi || ''}
                            readOnly
                            placeholder="BMI akan dihitung otomatis"
                        />
                    </div>

                    <div className="form-group">
                        <label>Riwayat Keluarga Diabetes:</label>
                        <input
                            type="checkbox"
                            checked={familyHistory}
                            onChange={(e) => setFamilyHistory(e.target.checked)}
                        />
                        <span className="ml-2">Ya</span>
                    </div>

                    <div className="form-group">
                        <label>Olahraga Teratur:</label>
                        <input
                            type="checkbox"
                            checked={exercise}
                            onChange={(e) => setExercise(e.target.checked)}
                        />
                        <span className="ml-2">Ya</span>
                    </div>

                    <div className="form-group">
                        <label>Tekanan Darah Tinggi:</label>
                        <input
                            type="checkbox"
                            checked={highBloodPressure}
                            onChange={(e) => setHighBloodPressure(e.target.checked)}
                        />
                        <span className="ml-2">Ya</span>
                    </div>

                    <div className="form-group">
                        <label>Stres:</label>
                        <input
                            type="checkbox"
                            checked={stress}
                            onChange={(e) => setStress(e.target.checked)}
                        />
                        <span className="ml-2">Ya</span>
                    </div>

                    <div className="form-group">
                        <label>Pola Makan:</label>
                        <select
                            className="input-field"
                            value={diet}
                            onChange={(e) => setDiet(e.target.value)}
                        >
                            <option value="normal">Normal</option>
                            <option value="unhealthy">Tidak Sehat</option>
                        </select>
                    </div>

                    <button onClick={calculateRisk} className="cta-btn">Hitung Resiko</button>
                    <button className="cta-btn">
                        <Link href="/feature">Kembali</Link>
                    </button>

                    {risk && (
                        <div className="result">
                            <h2 className="text-2xl font-bold mt-4">Hasil Resiko: {risk}</h2>
                        </div>
                    )}
                </div>
            </div>
        </body>
    );
};

export default Calculator;
