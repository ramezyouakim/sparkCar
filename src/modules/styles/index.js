import { StyleSheet, Dimensions, Platform } from 'react-native';
import values from '../values';
import colors from '../colors';

/**Global Style Sheet */
export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start'
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    carTable: {
        flex: 1,
        backgroundColor: colors.white
    },
    carTypeItemHeaderName: {
        flex: 5,
        margin: 10
    },
    carItemHeader: {
        flex: 3
    },
    carItemHeaderText: {
        marginLeft: values.verticalMargin * 2
    },
    addNewButton: {
        marginRight: values.horizontalMargin,
        marginLeft: values.horizontalMargin,
        marginTop: values.verticalMargin,
        paddingTop: values.verticalMargin,
        paddingBottom: values.verticalMargin,
        backgroundColor: colors.mainColorTheme,
        borderRadius: values.verticalMargin,
        borderWidth: 1,
        borderColor: '#fff'
    },
    addNewButtonText: {
        color: colors.white,
        textAlign: 'center',
        paddingLeft: values.horizontalPadding,
        paddingRight: values.horizontalPadding,
    },
    TextInputComponent: {
        backgroundColor: colors.lightgray,
        height: 60,
        width: Dimensions.get('window').width * .8,
        margin: values.verticalMargin,
        borderRadius: values.radius,
        justifyContent: 'center',
        paddingLeft: values.verticalPadding * 2
    },
})