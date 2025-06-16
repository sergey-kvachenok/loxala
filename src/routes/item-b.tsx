import { createFileRoute } from '@tanstack/react-router';

const ItemB = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Menu Item B</h1>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/item-b')({
  component: ItemB,
});
