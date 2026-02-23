import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        {/* 404 Text */}
        <h1 className="text-9xl font-extrabold text-green-600 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
