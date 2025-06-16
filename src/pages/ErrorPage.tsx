import { Link } from '@tanstack/react-router';

export const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <Link
        to="/"
        className="inline-block bg-gradient-button text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
      >
        Main page
      </Link>
    </div>
  );
};
