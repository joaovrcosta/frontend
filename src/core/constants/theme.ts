export const defaultTheme = {
  colors: {
    primary: '#FDFFF4',
    blue_100: '#E8FFF2',
    blue_200: '#ADE2FF',
    blue_250: '#83D2E9',
    blue_300: '#B1CCFF',
    blue_500: '#45A6FF',
    blue_550: '#2089EA',
    blue_700: '#1cb0f6',
    blue_600: '#0C9AB9',
    blue_900: '#00008B',
    blue_950: '#10162F',
    yellow_50: '#FFFCE6',
    yellow_100: '#FFFBD9',
    yellow_200: '#F7FFD2',
    yellow_300: '#FFFBD9',
    yellow_400: '#FFF8BB',
    yellow_500: '#FFED8D',
    yellow_600: '#FFD644',
    yellow_650: '#FFC700',
    yellow_700: '#EBA900',
    yellow_800: '#FFD302',
    orange_500: 'rgba(255, 93, 0, 1)',
    green_200: '#AAE10E',
    success_500: '#32CA25',
    green_300: '#78E16F',
    green_500: 'rgba(11, 172, 128, 1)',
    danger_500: '#cf1d00',
    hearth_500: '#ff341a',
    white: 'rgba(255, 255, 255, 255)',
    black: 'rgba(0, 0, 0, 1)',
    gray_100: 'rgba(237, 237, 237, 1)',
    gray_150: '#ebf2f7',
    gray_220: '#C3D1DD',
    gray_250: '#f5f8fa',
    gray_200: 'rgba(204, 204, 204, 1)',
    gray_300: 'rgba(179, 179, 179, 1)',
    gray_400: 'rgba(153, 153, 153, 1)',
    gray_500: 'rgba(128, 128, 128, 1)',
    gray_600: 'rgba(112, 112, 112, 1)',
    gray_700: 'rgba(77, 77, 77, 1)',
    gray_800: 'rgba(51, 51, 51, 1)',
    gray_900: 'rgba(18, 18, 18, 1)',
    transparent: 'rgba(255, 255, 255, 0)',
  } as const,
  typography: {
    heading: {
      xxl1: '4.7rem',
      xxl: '4rem',
      xl: '3rem',
      lgg: '2.5rem',
      lg: '2rem',
      md: '1.75rem',
      sm: '1.25rem',
      xs: '1rem',
    } as const,
    text: {
      xxl: '1.75rem',
      xx2: '1.625rem',
      xx1: '1.50rem',
      xl: '1.25rem',
      lg: '1.125rem',
      md: '1rem',
      sm: '0.875rem',
      xs: '0.75rem',
    } as const,
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    } as const,
  } as const,
}

export type ColorThemeType = keyof typeof defaultTheme.colors
export type TitleFontSize = keyof typeof defaultTheme.typography.heading
export type TextFontSize = keyof typeof defaultTheme.typography.text
export type WeightFont = keyof typeof defaultTheme.typography.weight
