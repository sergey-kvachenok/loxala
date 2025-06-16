import { createFileRoute } from '@tanstack/react-router';
import { useState, useTransition } from 'react';

// Mock array with a large amount of data
// In a real application, this could be data loaded from a server
const generateBigList = (size: number) => {
  const list = [];
  for (let i = 0; i < size; i++) {
    list.push(
      `Item ${i + 1}: This is a very long description for item number ${i + 1}.`,
    );
  }
  return list;
};

const ALL_ITEMS = generateBigList(20000); // 20,000 items

function FilteredListApp() {
  const [inputValue, setInputValue] = useState(''); // Value from the input field
  const [displayedValue, setDisplayedValue] = useState(''); // Value used for filtering the list
  const [isPending, startTransition] = useTransition(); // isPending - boolean, startTransition - function

  // Function for "slow" list filtering
  // We simulate a delay to show the effect of useTransition
  const filterItems = (query: string) => {
    // In a real application, there would be actual filtering here
    // But for demonstration, we just return ALL_ITEMS
    // and simulate a delay to see isPending
    const filtered = ALL_ITEMS.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
    // Simulate "heavy" work
    let temp = 0;
    for (let i = 0; i < 1000000; i++) {
      temp += i; // Just some useless but long operation
    }
    return filtered;
  };

  const filteredItems = filterItems(displayedValue); // Calculate the filtered list

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Instantly update the input field value

    // startTransition wraps the "slow" state update.
    // This update can be interrupted by React if more urgent tasks appear.
    startTransition(() => {
      setDisplayedValue(e.target.value); // This update may "lag behind" inputValue
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-2">Example of `useTransition`</h1>
      <p className="mb-4 text-base text-gray-700">
        Enter text to filter the list (20,000 items). Notice how the input field
        remains responsive even if the list filtering is "slow".
      </p>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
        className="w-72 p-2 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-2"
      />

      {/* isPending shows that the transition is in progress */}
      {isPending && <p className="text-blue-600 mt-2">Loading results...</p>}

      <div className="mt-5 max-h-[500px] overflow-y-auto border border-gray-300 p-2.5 rounded bg-white">
        <h3 className="font-semibold mb-2">
          Filtered items ({filteredItems.length}):
        </h3>
        <ul className="list-disc list-inside space-y-1">
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilteredListApp;

export const Route = createFileRoute('/item-a')({
  component: FilteredListApp,
});
