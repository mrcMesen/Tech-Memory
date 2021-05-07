export interface Tech {
  name: string;
}
export interface FirestoreQuery {
  parameter: string;
  operator: '==' | '!=' | '<' | '>' | '<=' | '>=';
  data: string | number | Date | null | Record<string, string>;
}
