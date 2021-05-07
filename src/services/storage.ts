import firebase from './firebase';
import { devEnv } from '../utils/basics';

class Storage {
  storage: firebase.storage.Storage;
  // percentaje: number;

  constructor() {
    this.storage = firebase.storage();
    // this.percentaje = 0;
  }
  async read(path: string, fileName: string): Promise<string | undefined> {
    try {
      const pathReference = this.storage.ref(`${path}/${fileName}`);
      const downloadURL = await pathReference.getDownloadURL();
      return downloadURL;
    } catch (error) {
      devEnv() && console.error('Error reading File: ', path, fileName, error);
      Promise.reject(error);
    }
  }
  async create(
    path: string,
    fileName: string,
    newFile: File,
    setPercentaje?: (percentaje: number) => void
  ): Promise<string | void> {
    try {
      const pathReference = this.storage.ref(`${path}/${fileName}`);
      const uploadTask = pathReference.put(newFile);
      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          snapshot => {
            setPercentaje &&
              setPercentaje(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
          },
          error => {
            reject(error);
            throw new Error(error.message);
          },
          async () => {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            setPercentaje && setPercentaje(0);
            resolve(downloadURL);
          }
        );
      });
    } catch (error) {
      devEnv() &&
        console.error('CREATE - Error uploading File: ', path, fileName, error);
      Promise.reject(error);
    }
  }

  async delete(path: string, fileName: string): Promise<string | void> {
    try {
      const pathReference = this.storage.ref(`${path}/${fileName}`);
      await pathReference.delete();
      return 'File deleted';
    } catch (error) {
      devEnv() &&
        console.error('Error reading document: ', path, fileName, error);
      Promise.reject(error);
    }
  }
}

export default Storage;
