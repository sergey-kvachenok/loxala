import { createFileRoute } from '@tanstack/react-router';

export const ItemY = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Menu Item Y</h1>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/item-y')({
  component: ItemY,
});
