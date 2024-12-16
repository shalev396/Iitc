import React, { useState, useEffect, FC, FormEvent } from 'react';

interface JoinRoomProps {
  onJoin: (username: string, room: string) => void;
}

const JoinRoom: FC<JoinRoomProps> = ({ onJoin }) => {
  const [username, setUsername] = useState<string>('');
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [rooms, setRooms] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/rooms')
      .then(res => res.json())
      .then((data: string[]) => {
        console.log('Available rooms:', data);
        setRooms(data);
        if (data.length > 0) {
          setSelectedRoom(data[0]);
        }
      })
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username && selectedRoom) {
      onJoin(username, selectedRoom);
    }
  };

  return (
    <div className="join-room">
      <h2>Join a Chat Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <select
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          required
        >
          {rooms.length === 0 ? (
            <option value="">Loading rooms...</option>
          ) : (
            rooms.map(room => (
              <option key={room} value={room}>{room}</option>
            ))
          )}
        </select>
        <button type="submit" disabled={!username || !selectedRoom}>
          Join Room
        </button>
      </form>
    </div>
  );
};

export default JoinRoom; 