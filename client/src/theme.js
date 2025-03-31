import { extendTheme } from '@chakra-ui/react'

const typography = {
  fontFamily: "Inter, sans-serif",
  h4: { fontSize: "clamp(1.25rem, 3vw, 2rem)", fontWeight: 500 },
  h5: { fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 500 },
  body1: { fontSize: "clamp(0.875rem, 1.5vw, 1rem)" },
  body2: { fontSize: "clamp(0.75rem, 1.25vw, 0.875rem)" },
}

const theme = {
  // Color mode configuration
  config: {
    initialColorMode: 'light',  // Default theme is light mode
    useSystemColorMode: false,  // Ignore system theme preferences
  },

  // Colors for light and dark themes
  colors: {
    light: {
      background: '#E6EFF8',
      paper: '#F2F7FD',
      footer: '#000000',
      primary: '#6EB5C0',
      secondary: '#5B8FD3',
      accent: '#6021A8',
      universalAccent: '#0147A8',
      success: '#2e7d32',
      error: '#f44336',
      footer: '#1B2836',
      text: {
        primary: '#000000',
        secondary: '#333333',
      },
    },
    dark: {
      background: '#1A102A',
      paper: '#2B1B3D',
      footer: '#ffffff',
      primary: '#6A0DAD',
      secondary: '#8A2BE2',
      accent: '#B97ADB',
      universalAccent: '#9365b8',
      success: '#4caf50',
      error: '#f44336',
      warning: '#ffa726',
      info: '#29b6f6',
      footer: '#D8CFF5',
      text: {
        primary: '#ffffff',
        secondary: '#bdbdbd',
      },
    },
  },

  // Typography settings
  typography,

  // Responsive breakpoints
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
}

// Export themes
export const lightChakraTheme = extendTheme(theme, { colors: theme.colors.light })
export const darkChakraTheme = extendTheme(theme, { colors: theme.colors.dark })
