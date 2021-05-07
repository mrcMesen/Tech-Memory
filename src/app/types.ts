export interface Tech {
  name: string;
  uri?: string;
}
export interface HistoryRecord {
  date: string;
  time: string;
  name: string;
  pais: string;
}
export interface FirestoreQuery {
  parameter: string;
  operator: '==' | '!=' | '<' | '>' | '<=' | '>=';
  data: string | number | Date | null | Record<string, string>;
}
