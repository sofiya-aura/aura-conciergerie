import { 
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll
} from 'firebase/storage';
import { storage } from '../../config/firebase';

export const uploadFile = async (path: string, file: File): Promise<string> => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

export const deleteFile = async (path: string): Promise<void> => {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
};

export const listFiles = async (path: string): Promise<string[]> => {
  const storageRef = ref(storage, path);
  const result = await listAll(storageRef);
  const urls = await Promise.all(result.items.map(item => getDownloadURL(item)));
  return urls;
};