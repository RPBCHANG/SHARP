import React from 'react';
import { Tv, Play, Search, Info } from 'lucide-react';

export default function Home() {
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <Tv size={28} />
          <span>MOON TV</span>
        </div>
        <div className="nav-links">
          <button>首頁</button>
          <button>頻道</button>
          <button>電影</button>
          <button>影集</button>
        </div>
        <div className="nav-actions">
          <Search size={20} style={{ cursor: 'pointer', color: '#a1a1aa' }} />
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ padding: '0 2rem' }}>
        <div className="hero-card">
          <img 
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000" 
            alt="Space" 
            className="hero-img"
          />
          <div className="hero-content">
            <span className="featured-tag">正在直播</span>
            <h1 className="hero-title">探索<br />宇宙實況</h1>
            <p className="hero-desc">
              體驗前所未有的宇宙視角。來自月球基地與深空探測器的超高畫質直播，盡在 MOON TV。
            </p>
            <div className="btn-group">
              <button className="btn-primary">
                <Play fill="currentColor" size={18} /> 立即觀看
              </button>
              <button className="btn-secondary">
                <Info size={18} /> 更多資訊
              </button>
            </div>
          </div>
        </div>

        {/* Live Channels */}
        <section style={{ paddingBottom: '4rem' }}>
          <h2 className="section-title">
            <div className="title-indicator"></div>
            熱門直播頻道
          </h2>
          <div className="grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="channel-card">
                <div className="thumb-container">
                  <img 
                    src={`https://images.unsplash.com/photo-${1446776811953 + i}-b23d57bd21aa?auto=format&fit=crop&q=80&w=400`} 
                    alt="Channel"
                    className="thumb-img"
                  />
                  <div className="live-badge">Live</div>
                </div>
                <h3 className="channel-name">月球基地 {i} 號站</h3>
                <p className="channel-info">2.4k 觀眾 • HD 高畫質</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
