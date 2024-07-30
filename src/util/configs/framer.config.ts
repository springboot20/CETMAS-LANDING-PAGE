export const framerSidebarBackground = (open: boolean) => {
  return {
    initial: { opacity: 0 },
    animate: { opacity: open ? 1 : 0 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };
};

export const framerSidebarPanel = (open: boolean) => {
  return {
    initial: { x: '-100%' },
    animate: { x: open ? 0 : '-100%' },
    exit: { x: '-100%' },
    transition: { duration: open ? 0.1 : 0.3 },
  };
};

export const framerText = (delay: number, open: boolean) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: open ? 1 : 0, x: open ? 0 : -50 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

export const framerNavItems = (delay: number, open: boolean) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: open ? 1 : 0, y: open ? 0 : 20 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

export const framerIcon = (open: boolean) => {
  return {
    initial: { scale: 0 },
    animate: { scale: open ? 1 : 0 },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 1.2,
    },
  };
};
