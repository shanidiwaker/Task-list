import { View, Platform, TextInput, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { colors } from '../Theme/colors';
import { AppFont } from '../Theme/fonts';
import { horizontalScale, moderateScale, verticalScale } from '../Theme';

const InputText = ((props, ref) => {

    return (
        <TextInput
            style={[styles.textInput, { height: props.multiline ? 324 : verticalScale(33), }]}
            value={props.value}
            placeholderTextColor={colors.placeholder}
            maxLength={props.maxLength}
            multiline={props.multiline}
            keyboardType={props.keyboardType}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            blurOnSubmit={false}
            ref={ref}
            editable={props.editable}
            onSubmitEditing={props.onSubmitEditing}
            returnKeyType={Platform.OS == 'ios' ? 'done' : 'next'}>
        </TextInput>
    )
})

const styles = StyleSheet.create({

    textInput: {
        paddingStart: horizontalScale(15),
        textAlignVertical: 'top',
        width: '100%',
        fontFamily: AppFont.regular,
        fontSize: moderateScale(14),
        color: colors.white,
        backgroundColor: colors.lightBlack,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 4,
        marginVertical: verticalScale(4)
    },

});
export default InputText