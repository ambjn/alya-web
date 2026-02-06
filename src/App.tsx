import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center gap-8 mb-8">
            <a
              href="https://react.dev"
              target="_blank"
              className="transition-transform hover:scale-110 active:scale-95 duration-300 animate-spin-slow"
            >
              <img src={reactLogo} className="h-24 w-24" alt="React logo" />
            </a>
          </div>

          <h1 className="text-6xl font-bold mb-4 gradient-text">
            Vite + React
          </h1>
          <p className="text-xl text-muted-foreground">
            Built with Tailwind CSS & Outfit Font
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-2xl mx-auto slide-in-from-bottom">
          <div className="card glass backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border-white/20">
            <div className="card-header">
              <h2 className="card-title">Interactive Counter</h2>
              <p className="card-description">
                Click the button below to increment the counter
              </p>
            </div>

            <div className="card-content space-y-6">
              {/* Counter Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="btn btn-primary btn-lg group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 transition-transform group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Count is {count}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {/* Info Text */}
              <div className="text-center p-4 rounded-lg bg-slate-100 dark:bg-slate-700/50">
                <p className="text-sm text-muted-foreground">
                  Edit <code className="px-2 py-1 bg-slate-200 dark:bg-slate-600 rounded text-xs font-mono">src/App.tsx</code> and save to test HMR
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-semibold mb-1">Lightning Fast</h3>
                  <p className="text-xs text-muted-foreground">Powered by Vite</p>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-2">🎨</div>
                  <h3 className="font-semibold mb-1">Beautiful UI</h3>
                  <p className="text-xs text-muted-foreground">Tailwind CSS</p>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-200/50 dark:border-green-800/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-2">⚛️</div>
                  <h3 className="font-semibold mb-1">Modern React</h3>
                  <p className="text-xs text-muted-foreground">Latest features</p>
                </div>
              </div>
            </div>

            <div className="card-footer justify-center">
              <p className="text-sm text-muted-foreground">
                Click on the Vite and React logos to learn more
              </p>
            </div>
          </div>

          {/* Badge Examples */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            <span className="badge badge-default">Default</span>
            <span className="badge badge-secondary">Secondary</span>
            <span className="badge badge-destructive">Destructive</span>
            <span className="badge badge-outline">Outline</span>
          </div>

          {/* Button Examples */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <button className="btn btn-primary btn-sm">Primary</button>
            <button className="btn btn-secondary btn-sm">Secondary</button>
            <button className="btn btn-outline btn-sm">Outline</button>
            <button className="btn btn-ghost btn-sm">Ghost</button>
          </div>

          {/* Footer Navigation */}
          <footer className="mt-16 text-center">
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <Link
                to="/terms"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </Link>
              <span>•</span>
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
