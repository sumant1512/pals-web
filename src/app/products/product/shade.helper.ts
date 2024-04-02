export type ColorShades = { shade: number; hex: string };
export type ThemeColorShades = Record<number, string>;
type RgbColor = Record<'red' | 'green' | 'blue', number>;

export const getShadesFormHex = (hex: string): ColorShades[] => {
  const hexValue = hex.match(/[0-9A-Fa-f]{6}/)?.[0];
  if (!hexValue) {
    return [];
  }

  const rgb = hexToRGB(hexValue);
  const increments = [2, 4, 6, 8, 10];
  const shades: string[] = increments.map((i) => rgbToHex(rgbShade(rgb, i)));
  const tints: string[] = increments
    .reverse()
    .map((i) => rgbToHex(rgbTint(rgb, i)));
  const colors = [...tints, hex, ...shades];
  return colors.map((hex, index) => ({ shade: index * 100, hex }));
};

export const getThemeColorShades = (
  colors: ColorShades[]
): ThemeColorShades => {
  return colors.reduce<ThemeColorShades>((acc, color) => {
    acc[color.shade] = color.hex;
    return acc;
  }, {});
};

const hexToRGB = (hex: string): RgbColor => {
  return {
    red: parseInt(hex.substring(0, 2), 16),
    green: parseInt(hex.substring(2, 4), 16),
    blue: parseInt(hex.substring(4, 6), 16),
  };
};

const intToHex = (rgbInt: number): string => {
  const hex = Math.min(Math.max(Math.round(rgbInt), 0), 255).toString(16);
  return pad(hex, 2);
};

const rgbToHex = ({ red, green, blue }: RgbColor): string => {
  return `#${intToHex(red)}${intToHex(green)}${intToHex(blue)}`;
};

const rgbShade = ({ red, green, blue }: RgbColor, i: number): RgbColor => {
  return {
    red: red * (1 - 0.1 * i),
    green: green * (1 - 0.1 * i),
    blue: blue * (1 - 0.1 * i),
  };
};

const rgbTint = ({ red, green, blue }: RgbColor, i: number): RgbColor => {
  return {
    red: red + (255 - red) * i * 0.1,
    green: green + (255 - green) * i * 0.1,
    blue: blue + (255 - blue) * i * 0.1,
  };
};

const pad = (number: string, length: number): string => {
  while (number.length < length) {
    number = '0' + number;
  }
  return number;
};
