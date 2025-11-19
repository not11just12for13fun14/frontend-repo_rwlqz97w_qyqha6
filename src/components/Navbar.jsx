import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/60 backdrop-blur border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Yetty</a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="hover:text-gray-900">Stories</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50">Watch Demo</a>
            <a href="#cta" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow hover:shadow-md transition">Start Free Trial</a>
          </div>

          <button onClick={() => setOpen(v=>!v)} className="md:hidden p-2 rounded-md border border-gray-200">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-4">
            <nav className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              <a onClick={()=>setOpen(false)} href="#features" className="hover:text-gray-900">Features</a>
              <a onClick={()=>setOpen(false)} href="#pricing" className="hover:text-gray-900">Pricing</a>
              <a onClick={()=>setOpen(false)} href="#testimonials" className="hover:text-gray-900">Stories</a>
              <a onClick={()=>setOpen(false)} href="#faq" className="hover:text-gray-900">FAQ</a>
            </nav>
            <div className="flex gap-3">
              <a href="#demo" className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-center text-gray-700 hover:bg-gray-50">Watch Demo</a>
              <a href="#cta" className="flex-1 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-center text-white shadow">Start Free Trial</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
