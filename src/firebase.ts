// Firebase Configuration - Sedekah Subuh Haramain
// ================================================
// ISI KONFIGURASI FIREBASE ANDA DI BAWAH INI
// Dapatkan dari Firebase Console > Project Settings > General > Your apps

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, serverTimestamp, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// GANTI DENGAN KONFIGURASI FIREBASE ANDA
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ================================================
// FUNGSI DATABASE - DONASI
// ================================================

/**
 * Menyimpan data donasi baru ke Firestore
 */
export async function createDonation(donationData: {
  nama: string;
  email: string;
  telepon: string;
  jumlah: number;
  program: string;
  metode: string;
  pesan?: string;
  anonim: boolean;
}) {
  try {
    const docRef = await addDoc(collection(db, 'donations'), {
      ...donationData,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error creating donation:', error);
    return { success: false, error };
  }
}

/**
 * Mengambil daftar donasi terbaru (untuk ticker)
 */
export async function getRecentDonations(count: number = 10) {
  try {
    const q = query(
      collection(db, 'donations'),
      orderBy('createdAt', 'desc'),
      limit(count)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching donations:', error);
    return [];
  }
}

/**
 * Mengambil semua donasi (untuk admin)
 */
export async function getAllDonations() {
  try {
    const q = query(
      collection(db, 'donations'),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching all donations:', error);
    return [];
  }
}

/**
 * Update status donasi
 */
export async function updateDonationStatus(donationId: string, status: string) {
  try {
    const donationRef = doc(db, 'donations', donationId);
    await updateDoc(donationRef, {
      status,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating donation:', error);
    return { success: false, error };
  }
}

// ================================================
// FUNGSI AUTHENTICATION
// ================================================

/**
 * Login admin
 */
export async function loginAdmin(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, error };
  }
}

/**
 * Logout admin
 */
export async function logoutAdmin() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Error logging out:', error);
    return { success: false, error };
  }
}

/**
 * Monitor auth state
 */
export function onAuthChange(callback: (user: any) => void) {
  return onAuthStateChanged(auth, callback);
}

export { db, auth };
