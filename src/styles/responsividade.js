import { Dimensions } from 'react-native';
import normalize from 'react-native-normalize';

export const largura_tela = Dimensions.get('window').width;
export const altura_tela = Dimensions.get('window').height;

export const paddingMain = altura_tela < 600 ? normalize(40) : normalize(70);

//

export const paddingImage = altura_tela < 600 ? normalize(20) : normalize(50);
export const widthImage = altura_tela < 600 ? normalize(80) : normalize(100);
export const heightImage = altura_tela < 600 ? normalize(80) : normalize(100);
export const checkFont = altura_tela < 600 ? normalize(15) : normalize(17);
export const checkMargin = altura_tela < 600 ? normalize(13) : normalize(16);
export const HelpTitle = altura_tela < 600 ? normalize(17) : normalize(19);
export const heightOutros = altura_tela < 600 ? normalize(40) : normalize(50);

// homepage cards

export const cardHeight = altura_tela < 700 ? normalize(110) : normalize(140);
export const cardWidth = altura_tela < 700 ? normalize(110) : normalize(140);
export const cardMargin = altura_tela > 600 ? normalize(20) : normalize(15);
export const fontHome = altura_tela > 600 ? normalize(17) : normalize(14);

// quests cards
export const titleMargin = altura_tela > 600 ? normalize(40) : normalize(6);
export const questionHeight =
  altura_tela > 700 ? normalize(410) : normalize(320);
export const questionWidth =
  altura_tela > 700 ? normalize(310) : normalize(230);
export const infoHeight = altura_tela > 700 ? normalize(340) : normalize(280);
export const infoWidth = altura_tela > 700 ? normalize(240) : normalize(220);
