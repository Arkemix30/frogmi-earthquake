import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="text-center">
        <div className="tracking-widest mt-4">
          <span className="text-gray-500 text-6xl block">
            <span>4 0 4</span>
          </span>
          <span className="text-gray-500 text-xl">
            Sorry, We couldn't find what you are looking for!
          </span>
        </div>
        <div className="mt-6">
          <Link
            to="/"
            className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
