/** 
 * @copyright 2025 ekeneakabogu 
*/

// node modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Styles
import '@/index.css';

// Components
import { App } from '@/App';
import { Sidebar } from '@/components/Sidebar';
import { FloatingMenu } from '@/components/FloatingMenu';
import { Profile } from '@/components/Profile';

import texture from "@/assets/texture.png";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10"
    style={{
      backgroundColor: "#000",
      backgroundImage: `url(${texture})`,
      backgroundRepeat: "repeat",
      backgroundSize: "auto",
      backgroundAttachment: "fixed",
    }}>
    <Sidebar />
    <FloatingMenu />
    <Profile />
    <App />
    </div>
  </StrictMode>,
)
