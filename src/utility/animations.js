// Hero Section: Left Slide Animation
export const slideLeft = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay,
    },
  },
});

// Hero Section: Right Slide Animation
export const slideRight = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay,
    },
  },
});

// AboutVideo Section: Image Scale Animation
export const scaleIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  },
});

// AboutVideo Section: Text Slide Up Animation
export const slideUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
    },
  },
});

// Features Section: Cards Slide Left Animation
export const featuresSlideLeft = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  },
});