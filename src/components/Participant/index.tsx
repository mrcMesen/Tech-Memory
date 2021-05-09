import { ReactElement } from 'react';
import { HistoryRecord } from '../../app/types';

import './styles.css';

interface Props {
  record: HistoryRecord;
}

export const Participant = ({ record }: Props): ReactElement => {
  return (
    <tr className='Participant-row'>
      <td className='Participant-cell'>{record.duration}</td>
      <td className='Participant-cell'>{record.name}</td>
      <td className='Participant-cell'>{record.date}</td>
    </tr>
  );
};
