import firebase from './firebase';
import { devEnv } from '../utils/basics';
import { FirestoreQuery } from '../app/types';

class Firestore<T> {
  collection: string;
  company?: string;
  db: firebase.firestore.Firestore;

  constructor(collection: string, company?: string) {
    this.collection = collection;
    this.company = company;
    this.db = firebase.firestore();
  }
  async read(id: string): Promise<undefined | T> {
    try {
      const doc: firebase.firestore.DocumentData = await this.db
        .collection(this.collection)
        .doc(id)
        .get();
      if (doc.exists) return { ...doc.data(), id: doc.id };
      throw new Error('Document dont found');
    } catch (error) {
      devEnv() && console.error('Error reading document: ', id, error);
    }
  }
  async readWhere(query: FirestoreQuery): Promise<undefined | T[]> {
    try {
      const data: T[] = [];

      const querySnapshot: firebase.firestore.DocumentData = await this.db
        .collection(this.collection)
        .where(query.parameter, query.operator, query.data)
        .where('company', '==', this.company)
        .where('state', '==', 'active')
        .get();
      querySnapshot.forEach((doc: firebase.firestore.DocumentData) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      devEnv() && console.error('Error reading document: ', error);
    }
  }
  async readAll(): Promise<undefined | T[]> {
    try {
      const data: T[] = [];
      const querySnapshot: firebase.firestore.QuerySnapshot = await this.db
        .collection(this.collection)
        .where('company', '==', this.company)
        .where('state', '==', 'active')
        .get();
      querySnapshot.forEach((doc: firebase.firestore.DocumentData) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      return data;
    } catch (error) {
      devEnv() && console.error('Error reading document: ', error);
    }
  }
  async create(data: T): Promise<T | void> {
    try {
      const docRef = await this.db.collection(this.collection).add({
        ...data,
        date: Date.now(),
      });
      const doc: firebase.firestore.DocumentData = await this.db
        .collection(this.collection)
        .doc(docRef.id)
        .get();
      return { ...doc.data(), id: doc.id };
    } catch (error) {
      devEnv() && console.error('Error adding document: ', error);
    }
  }
  async update(id: string, data: T): Promise<T | void> {
    try {
      await this.db.collection(this.collection).doc(id).update(data);
      return data;
    } catch (error) {
      devEnv() && console.error('Error editing document: ', error);
      devEnv() && console.error('Id', id);
      devEnv() && console.error('data', data);
    }
  }
  async delete(id: string): Promise<string | void> {
    try {
      await this.db.collection(this.collection).doc(id).delete();
      return 'Document deleted';
    } catch (error) {
      devEnv() && console.error('Error deleting document: ', error);
    }
  }
}

export default Firestore;
