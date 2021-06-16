import { ServerBattleCharacter } from './Characters';

export interface ServerBattleEntry {
  battleId: number;
  battleName: string;
}

export interface ServerBattle {
  battleId: number;
  battleName: string;
  battlefield: ServerBattlefield;
  currentStatus: ServerBattleCurrentStatus;
}

export interface ServerBattlefield {
  rows: number;
  columns: number;
  field: ServerFieldData[][];
}

export interface ServerBattleCurrentStatus {
  characters: ServerBattleCharacter[];
}

export const enum FieldType {
  Empty = 'empty',
  Character = 'character',
}

export interface ServerFieldData {
  fieldType: FieldType;
  characterId?: number;
}
