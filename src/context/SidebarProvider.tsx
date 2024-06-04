import { createContext, PropsWithChildren, useState } from 'react';

export const SidebarContext = createContext({
  isSidebarExpanded: true,
  toggleSidebar: () => {},
});

export default function SidebarProvider({ children }: PropsWithChildren) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => setIsSidebarExpanded((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isSidebarExpanded, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
