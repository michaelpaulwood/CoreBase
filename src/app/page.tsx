import Link from 'next/link';
import Button from '../../components/ui/button';
import Footer from '../../components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Build faster with</span>
              <span className="block text-blue-600">FoundationJS</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
              The clean Next.js 14 boilerplate with Firebase integration. 
              Skip the setup, start building your next great idea today.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
              <div className="rounded-md shadow">
                <Link href="/auth">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to ship fast
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Pre-configured with the best tools and patterns for modern web development
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Lightning Fast</h3>
                <p className="mt-2 text-base text-gray-500">
                  Built with Next.js 14 and optimized for performance out of the box
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Auth Ready</h3>
                <p className="mt-2 text-base text-gray-500">
                  Firebase Authentication integrated with user management and protected routes
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Mobile First</h3>
                <p className="mt-2 text-base text-gray-500">
                  Responsive design with Tailwind CSS, perfect on every device
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}