'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
            <p className="text-sm text-gray-500">
              © {currentYear} FoundationJS
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Built by</span>
              <Link 
                href="https://github.com/michaellopatin" 
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-medium text-blue-600 hover:text-blue-700"
              >
                Michael Wood
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Powered by</span>
            <Link 
              href="https://claude.ai/code" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Claude Code
            </Link>
            <span>🤖</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex flex-col items-center justify-center space-y-2 text-xs text-gray-400">
            <p>
              A clean Next.js 14 boilerplate with Firebase integration
            </p>
            <div className="flex items-center space-x-4">
              <span>Next.js 14</span>
              <span>•</span>
              <span>Firebase</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}