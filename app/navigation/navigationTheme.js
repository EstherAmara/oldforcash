import { DefaultTheme } from '@react-navigation/native';
import colours from '../../assets/colours';

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colours.primary,
        background: colours.white
    }
};

export default myTheme;