import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Checkmark Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 font-space">
          You're In! 🎉
        </h1>
        <p className="text-gray-500 mb-6 font-manrope">
          Thank you for signing up! You're one step away from joining our
          amazing WhatsApp community.
        </p>

        {/* WhatsApp Button */}

        <a
          href="https://chat.whatsapp.com/BnrWpGVerTkBpim91Mz0UQ?mode=gi_t"
          target="_blank"
          rel="noreferrer"
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-200 mb-4 font-manrope"
        >
          Join WhatsApp Community
        </a>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="text-sm text-blackish/80 hover:text-gray-600 transition font-manrope"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
