import { Tech } from '../app/types';

export const transformTechs = (arr: Tech[]): Tech[] => {
  const duplicate = [
    ...arr,
    ...arr.map(tech => ({ ...tech, id: tech.id + '-2' })),
  ];
  for (let i = duplicate.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [duplicate[i], duplicate[j]] = [duplicate[j], duplicate[i]];
  }
  return duplicate;
};
