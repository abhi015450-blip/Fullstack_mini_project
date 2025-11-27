import React from 'react';

export default function Sidebar({ onNavigate, onAdd }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">SR</div>
        <div>
          <div className="brand-name">ResultApp</div>
          <div className="brand-sm">Admin Panel</div>
        </div>
      </div>

      <nav className="nav">
        <button className="nav-item" onClick={onNavigate}>
          <span>🏠</span> Dashboard
        </button>

        <button className="nav-item" onClick={onAdd}>
          <span>＋</span> Add Student
        </button>

        <a className="nav-item muted" href="#" onClick={(e)=>e.preventDefault()}>
          <span>📄</span> Reports
        </a>

        <a className="nav-item muted" href="#" onClick={(e)=>e.preventDefault()}>
          <span>⚙️</span> Settings
        </a>
      </nav>

      <div className="sidebar-footer">
        <small className="muted">v1.0</small>
      </div>
    </aside>
  );
}
