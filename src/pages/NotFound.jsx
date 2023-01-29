import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="relative flex h-[calc(100vh_-_58px)] min-h-full flex-col bg-[url('https://res.cloudinary.com/dumxkdcvd/image/upload/v1673853652/naruto_y8wnf7.gif')] bg-cover bg-center bg-no-repeat pt-16 pb-12">
        <div className="absolute top-0 left-0 z-0 h-full w-full bg-black opacity-40" />
        <main className="z-10 mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src="https://res.cloudinary.com/dumxkdcvd/image/upload/v1673437258/9f008cbb44537ec3910105d779c54b49_soswu2.png"
                alt=""
              />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-5xl font-black text-gray-50">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-50">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <NavLink
                  to="/"
                  className="text-base font-medium text-yellow-900 hover:text-gray-900"
                >
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </NavLink>
              </div>
            </div>
          </div>
        </main>
        <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Contact Support
            </a>
            <span
              className="inline-block border-l border-gray-300"
              aria-hidden="true"
            />
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Status
            </a>
            <span
              className="inline-block border-l border-gray-300"
              aria-hidden="true"
            />
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
