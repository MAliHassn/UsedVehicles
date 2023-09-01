import {Colors} from './Colors';
import {Fonts} from './Fonts';

export default () => {
  const colors = {
    ...Colors,
  };
  const fonts = {
    ...Fonts,
  };

  return {
    colors,
    fonts,
  };
};
