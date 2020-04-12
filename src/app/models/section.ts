import { Position } from './position';

export interface Section {
  id: string;
  items: Position[];
  name: string;
  sections: Section[];
  color: Colors;
  active?: boolean;
}

export const enum Colors {
  Red = 'Red',
  Pink = 'Pink',
  OrangeRed = 'OrangeRed',
  Yellow = 'Yellow',
  Indigo = 'Indigo',
  Lime = 'Lime',
  MediumSpringGreen = 'MediumSpringGreen',
  DarkGreen = 'DarkGreen',
  DarkCyan = 'DarkCyan',
  SteelBlue = 'SteelBlue',
  DarkBlue = 'DarkBlue',
  Chocolate = 'Chocolate',
  Black = 'Black',
  Gray = 'Gray',
  Olive = 'Olive',
  Blue = 'Blue',
  Maroon = 'Maroon',
  PaleGreen = 'PaleGreen',
  LightCoral = 'LightCoral',
  Brown = 'Brown',
}

export const SectionColors: Map<Colors, string> = new Map([
  [Colors.Red, '#FF0000'],
  [Colors.Pink, '#FFC0CB'],
  [Colors.OrangeRed, '#FF4500'],
  [Colors.Yellow, '#FFFF00'],
  [Colors.Indigo, '#4B0082'],
  [Colors.Lime, '#00FF00'],
  [Colors.MediumSpringGreen, '#00FA9A'],
  [Colors.DarkGreen, '#006400'],
  [Colors.DarkCyan, '#008B8B'],
  [Colors.SteelBlue, '#4682B4'],
  [Colors.DarkBlue, '#00008B'],
  [Colors.Chocolate, '#D2691E'],
  [Colors.Black, '#000000'],
  [Colors.Gray, '#808080'],
  [Colors.Olive, '#808000'],
  [Colors.Blue, '#0000FF'],
  [Colors.Maroon, '#800000'],
  [Colors.PaleGreen, '#98FB98'],
  [Colors.LightCoral, '#F08080'],
  [Colors.Brown, '#A52A2A'],
]);
