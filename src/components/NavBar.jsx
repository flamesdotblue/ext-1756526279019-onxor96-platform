import { Rocket } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-pink-500 to-orange-400" />
              <span className="absolute left-3 top-3 h-3 w-3 rounded-full bg-sky-400" />
              <span className="absolute -left-1 -bottom-1 h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="font-bold tracking-tight text-xl">Loopwork</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#showcase" className="hover:text-gray-900">Showcase</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-md border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50">Sign in</button>
            <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black">
              <Rocket className="h-4 w-4" />
              Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
