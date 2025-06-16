import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useSyncExternalStore } from 'react';
import {
  subscribe,
  getMessage,
  connectWebSocket,
  sendMessage,
} from '../shared/lib/webSocketStore';

export const ItemC = () => {
  // Connect to WebSocket on mount
  useEffect(() => {
    connectWebSocket('wss://ws.ifelse.io'); // You can replace with your WebSocket server
  }, []);

  // Subscribe to WebSocket messages
  const message = useSyncExternalStore(subscribe, getMessage);
  const [input, setInput] = useState('');

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Menu Item C</h1>
        <p className="mt-4">
          Message from WebSocket: <span className="font-mono">{message}</span>
        </p>
        <input
          className="mt-4 px-2 py-1 border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a message"
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            sendMessage(input);
            setInput('');
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/Item-c')({
  component: ItemC,
});
