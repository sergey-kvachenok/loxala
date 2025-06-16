import { createFileRoute } from '@tanstack/react-router';
import { useState, useDeferredValue, useMemo } from 'react';

// Generate a large list of users
const USERS = Array.from({ length: 10000 }, (_, i) => `User ${i + 1}`);

function SlowList({ filter }: { filter: string }) {
  // Simulate heavy filtering
  const filtered = useMemo(() => {
    const start = performance.now();
    while (performance.now() - start < 10) {} // ~10ms delay
    return USERS.filter((user) =>
      user.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

  return (
    <ul>
      {filtered.slice(0, 20).map((user) => (
        <li key={user}>{user}</li>
      ))}
      {filtered.length > 20 && (
        <li>...and {filtered.length - 20} more users</li>
      )}
    </ul>
  );
}

function DeferredFilterExample() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);
  const isStale = input !== deferredInput;

  return (
    <div>
      <h2>useDeferredValue: Responsive filtering of a large list</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Filter by user name..."
        style={{ width: 300, marginBottom: 10 }}
      />
      {isStale && <p style={{ color: 'gray' }}>Updating list...</p>}
      <SlowList filter={deferredInput} />
    </div>
  );
}

export const Route = createFileRoute('/item-b')({
  component: DeferredFilterExample,
});
