export interface Tech {
  id?: string;
  name: string;
  image: string;
}
export interface GameBoth {
  title: string;
  message: string;
  state?: 'happy' | 'sad';
}
export interface HistoryRecord {
  id?: string;
  date: string;
  name: string;
  duration: string;
  fullDuration: number;
  pais?: string;
}
export interface FirestoreQuery {
  parameter: string;
  operator: '==' | '!=' | '<' | '>' | '<=' | '>=';
  data: string | number | Date | null | Record<string, string>;
}
