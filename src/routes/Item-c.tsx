import { createFileRoute } from '@tanstack/react-router';

export const ItemC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Menu Item C</h1>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/Item-c')({
  component: ItemC,
});
