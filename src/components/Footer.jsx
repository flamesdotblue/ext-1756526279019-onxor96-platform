export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-7 w-7">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-pink-500 to-orange-400" />
              <span className="absolute left-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-sky-400" />
            </div>
            <span className="font-semibold">Loopwork</span>
          </div>
          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Changelog</a>
            <a href="#" className="hover:text-gray-900">Docs</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Loopwork, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}
