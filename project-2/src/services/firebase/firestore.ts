import { 
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  DocumentData
} from 'firebase/firestore';
import { db } from '../../config/firebase';

export const getCollection = async (collectionName: string): Promise<DocumentData[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getDocument = async (collectionName: string, documentId: string): Promise<DocumentData | null> => {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data()
    };
  }
  return null;
};

export const addDocument = async (collectionName: string, data: DocumentData): Promise<string> => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};

export const updateDocument = async (collectionName: string, documentId: string, data: Partial<DocumentData>): Promise<void> => {
  const docRef = doc(db, collectionName, documentId);
  await updateDoc(docRef, data);
};

export const deleteDocument = async (collectionName: string, documentId: string): Promise<void> => {
  const docRef = doc(db, collectionName, documentId);
  await deleteDoc(docRef);
};

export const queryDocuments = async (
  collectionName: string,
  field: string,
  operator: any,
  value: any
): Promise<DocumentData[]> => {
  const q = query(collection(db, collectionName), where(field, operator, value));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};