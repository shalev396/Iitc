export interface IMessage {
  _id?: string;
  room: string;
  username: string;
  message: string;
  timestamp: Date;
  system?: boolean;
}

export interface IJoinRoomData {
  room: string;
  username: string;
}

export interface IChatState {
  joined: boolean;
  username: string;
  room: string;
} 