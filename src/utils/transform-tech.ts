import { Tech } from '../app/types';

export const transformTechs = (arr: Tech[]): Tech[] => {
  const duplicate = [
    ...arr,
    ...arr.map(tech => ({ ...tech, id: tech.id + '-2' })),
  ];
  const reordered = reorderTechs(duplicate);
  return reordered;
};

export const reorderTechs = (arr: Tech[]): Tech[] => {
  let reordered = arr
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
  return reordered;
};
