'use client';

import { useState } from 'react';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main style={{ width: '100vw', height: '100vh' }}>

      {/* MAIN 3D SCENE */}
      <Spline
        scene="https://prod.spline.design/cVIBm216bcNWnQYg/scene.splinecode"
        onMouseDown={(e) => {
          if (e.target.name === 'infoCube') {
            setOpen(true);
          }
        }}
      />

      {/* POPUP */}
      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>

            {/* mini 3D */}
            <div className="mini3d">
              <Spline scene="https://prod.spline.design/cVIBm216bcNWnQYg/scene.splinecode" />
            </div>

            {/* text */}
            <div>
              <h2>Item Title</h2>
              <p>This is a test popup with 3D + text.</p>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}