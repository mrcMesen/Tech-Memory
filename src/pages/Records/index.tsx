import { useEffect, useState, ReactElement } from 'react';
import { HistoryRecord } from '../../app/types';
import { Loader } from '../../components/Loader';
import { Participant } from '../../components/Participant';
import Firestore from '../../services/firestore';
import './styles.css';

export const Records = (): ReactElement => {
  const [records, setRecords] = useState<HistoryRecord[]>();

  useEffect(() => {
    let componentIsStillMounth = true;
    const getRecords = async () => {
      const objFirestore = new Firestore<HistoryRecord>('records');
      const recordsList = await objFirestore.readAll();
      componentIsStillMounth &&
        setRecords(
          recordsList?.sort((a, b) => a.fullDuration - b.fullDuration)
        );
    };
    getRecords();
    return () => {
      componentIsStillMounth = false;
    };
  }, []);

  return (
    <section>
      <div className='Records-header'>
        <h1>List of participants</h1>
      </div>
      {records ? (
        <table className='Records-table'>
          <thead>
            <tr>
              <th>Duration</th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className='Records-tbody'>
            {records.map(record => (
              <Participant key={record.id} record={record} />
            ))}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
    </section>
  );
};
