import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);

  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);
  const toggleSidebar = () => setIsDesktopOpen(!isDesktopOpen);

  return (
    <SidebarContext.Provider
      value={{
        isMobileOpen,
        isDesktopOpen,
        toggleMobileSidebar,
        toggleSidebar
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider');
  }
  return context;
};