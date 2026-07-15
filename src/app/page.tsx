import React from 'react';
import { Tv, Play, Search, Info } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-blue-500">
          <Tv size={32} />
          <span>MOON TV</span>
        </div>
        <div className="flex items-center gap-6 text-zinc-400">
          <button className="hover:text-white transition-colors">Home</button>
          <button className="hover:text-white transition-colors">Channels</button>
          <button className="hover:text-white transition-colors">Movies</button>
          <button className="hover:text-white transition-colors">Series</button>
        </div>
        <div className="flex items-center gap-4">
          <Search className="cursor-pointer hover:text-blue-500 transition-colors" />
          <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-8 pt-12">
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] group">
          <img 
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000" 
            alt="Space Background" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex flex-col justify-center px-16">
            <span className="text-blue-400 font-semibold mb-2 uppercase tracking-widest">Featured Now</span>
            <h1 className="text-6xl font-black mb-4 leading-tight">EXPLORE THE<br />COSMOS LIVE</h1>
            <p className="text-zinc-300 max-w-lg mb-8 text-lg">
              Experience the universe like never before. High-definition live streams from lunar stations and deep space probes, exclusively on MOON TV.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all transform hover:scale-105">
                <Play fill="currentColor" size={20} /> Watch Now
              </button>
              <button className="bg-zinc-800/80 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-700 transition-all transform hover:scale-105">
                <Info size={20} /> More Info
              </button>
            </div>
          </div>
        </div>

        {/* Live Channels */}
        <section className="mt-16 pb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
            Live Channels
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 hover:border-blue-500/50 transition-all group cursor-pointer">
                <div className="aspect-video bg-zinc-800 rounded-lg mb-4 overflow-hidden relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${1446776811953 + i}-b23d57bd21aa?auto=format&fit=crop&q=80&w=400`} 
                    alt="Channel Thumbnail"
                    className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Live</div>
                </div>
                <h3 className="font-bold mb-1">Station {i}: Lunar Base</h3>
                <p className="text-sm text-zinc-500">2.4k Viewers • HD Stream</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
