import { FlatList, Modal, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { images } from '../Theme/images';
import { horizontalScale, moderateScale, verticalScale } from '../Theme';
import { colors } from '../Theme/colors';
import { AppFont } from '../Theme/fonts';

const DeleteModal = props => {

    const { onPress, modalVisible, setModalVisible, description } = props;

    return (

        <Modal animationType='slide' transparent={true} visible={modalVisible}
            onRequestClose={() => { setModalVisible({ status: !modalVisible }) }}
        >
            <View style={styles.modal}>
                <View style={styles.container}>
                    <View style={styles.divider} />
                    <Text numberOfLines={2} style={styles.text}>{description}</Text>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btn} onPress={onPress}>
                            <Text style={[styles.cancel]}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, { marginLeft: 10, borderColor: colors.primary }]} onPress={() => { setModalVisible({ status: !modalVisible }) }}>
                            <Text style={[styles.cancel,]}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#070707' + '89',
    },
    container: {
        backgroundColor: colors.lightBlack,
        width: '80%',
        shadowColor: colors.black,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 4
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    cancel: {
        fontFamily: AppFont.regular,
        fontSize: moderateScale(10),
        color: colors.white,
    },
    divider: {
        borderBottomWidth: 2,
        borderColor: colors.primary,
    },
    text: {
        fontFamily: AppFont.regular,
        fontSize: moderateScale(18),
        color: colors.white,
        textAlign: 'center',
        marginVertical: verticalScale(40),
    },
    btn: {
        borderWidth: 1,
        paddingVertical: 4,
        width: 64,
        alignItems: 'center',
        borderColor: colors.secondary,
        borderRadius: 4
    }
})
export default DeleteModal;