import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <h1 className="text-8xl font-bold text-gray-900 mb-2">404</h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full" />

        {/* Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}