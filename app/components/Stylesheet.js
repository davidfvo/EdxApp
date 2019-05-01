import { StyleSheet } from 'react-native';
import { backColor , statusBarHeight} from './Constants';

export const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: "center",
        flex: 1,
        backgroundColor: backColor,
        paddingTop: statusBarHeight,
    },
    contContacts: {
        flex: 1,
        backgroundColor: backColor,
    }
})