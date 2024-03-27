import { StyleSheet } from "react-native";
import { colors } from "../../Theme/colors";
import { moderateScale, verticalScale } from "../../Theme";
import { AppFont } from "../../Theme/fonts";


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.black,
    },
    sub_container: {
        marginVertical: verticalScale(20),
        flexDirection: 'row',
        alignItems: 'center'
    },
    plus_view: {
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 4,
        padding: 28,
        marginStart: 10
    },
    plus_img: {
        width: 24,
        height: 24,
    },
    box: {
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 8,
        padding: 16,
        backgroundColor: colors.lightBlack,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 22,
        fontFamily: AppFont.medium,
        color: colors.white
    },
    des: {
        fontSize: 14,
        fontFamily: AppFont.regular,
        color: colors.white
    },
    cross_view: {
        marginStart: 6
    },
    cross_img: {
        width: 32,
        height: 32,
    },
    info_view: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 8
    },
    info_imgview: {
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 5,
        paddingHorizontal: 14,
        paddingVertical: 7
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#070707' + '89',
    },
    modal_container: {
        backgroundColor: colors.lightBlack,
        borderRadius: 8,
        width: '90%',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    cancel: {
        fontFamily: AppFont.regular,
        fontSize: moderateScale(10),
        color: colors.white,
    },
    btn: {
        borderWidth: 1,
        paddingVertical: 4,
        width: 64,
        alignItems: 'center',
        borderColor: colors.secondary,
        backgroundColor: colors.lightBlack,
        borderRadius: 4
    }
});

export { styles };
