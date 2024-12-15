import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';
import type { ContactFormData, ContactMessage, ContactFormResponse } from '../../types/contact';

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  try {
    const contactRef = collection(db, 'contacts');
    const contactData: Omit<ContactMessage, 'createdAt'> = {
      ...data,
      status: 'new',
      ipAddress: window.location.hostname
    };

    const docRef = await addDoc(contactRef, {
      ...contactData,
      createdAt: serverTimestamp()
    });

    return {
      success: true,
      id: docRef.id
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return {
      success: false,
      error: error instanceof Error && error.message.includes('permission-denied')
        ? 'Service temporairement indisponible. Veuillez réessayer plus tard.'
        : 'Impossible d\'envoyer le message. Veuillez réessayer.'
    };
  }
}