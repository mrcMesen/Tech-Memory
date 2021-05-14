import Firebase from '../services/firebase';

export const getBestRecord = async (): Promise<string> => {
  try {
    const db = Firebase.firestore();
    const querySnapshot = await db
      .collection('records')
      .orderBy('fullDuration')
      .limit(1)
      .get();

    let best = '00:00:00';
    querySnapshot.forEach(doc => {
      best = doc.data().duration;
    });
    return best;
  } catch (error) {
    return Promise.reject(error);
  }
};
