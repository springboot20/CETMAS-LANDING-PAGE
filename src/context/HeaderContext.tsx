import React, { createContext, useState, useEffect, useContext } from "react";

interface HeaderContextInteface {
  open: boolean;
  scrolling: boolean;
  handleClose: () => void;
  openNotification: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderContext = createContext<HeaderContextInteface>({} as HeaderContextInteface);

export const HeaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = (): void => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <HeaderContext.Provider
      value={{ open, scrolling, handleClose, setOpen, openNotification, setOpenNotification }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
