import { FlatList, Image, Platform, StatusBar, Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './homeStyle'
import { colors } from '../../Theme/colors'
import InputText from '../../Common/InputText'
import { useEffect, useState } from 'react'
import { images } from '../../Theme/images'
import { AppFont } from '../../Theme/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DeleteModal from '../../Common/DeleteModal'

const Home = () => {

    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [editData, setEditData] = useState({ title: '', des: '' });
    const [edit, setEdit] = useState({ id: null, status: false });
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState({ id: null, status: false });
    const [editable, setEditable] = useState({ id: null, status: false });
    const [buttonPressed, setButtonPressed] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const listData = await AsyncStorage.getItem('data');
            setData(JSON.parse(listData));
        }
        fetchData();
    }, [buttonPressed]);

    const emptyList = () => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '30%', }}>
                <Text style={{ color: colors.white, fontSize: 24, fontFamily: AppFont.regular, }}>
                    No Tasks
                </Text>
            </View>
        );
    };

    const EditTask = async (id) => {
        const indexTo = data.findIndex(obj => obj.id === id);
        if (indexTo !== -1) {
            data[indexTo].title = editData?.title,
                data[indexTo].des = editData?.des
        }
        await AsyncStorage.setItem('data', JSON.stringify(data));
        setTitle(''); setDes('');
        setEditable({ id: null, status: false });
    };

    const DeleteTask = async (id) => {
        const indexToDelete = data.findIndex(obj => obj.id === id);
        if (indexToDelete !== -1) data.splice(indexToDelete, 1);
        await AsyncStorage.setItem('data', JSON.stringify(data));
        setVisible({ id: null, status: false });
    };

    const renderItem = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity style={styles.box} onPress={() => setEdit({ id: item?.id, status: !edit?.status })}>
                    <View>
                        <Text style={styles.title}>{item?.title}</Text>
                        <Text style={styles.des}>{item?.des}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setVisible({ id: item?.id, status: true })}>
                        <Image source={images.cancel} style={styles.cross_img} />
                    </TouchableOpacity>
                </TouchableOpacity>
                {edit?.id === item?.id && edit.status && <View style={styles.info_view}>
                    <TouchableOpacity >
                        <Image source={images.infoG} style={styles.cross_img} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cross_view} onPress={() => { setEditable({ id: item.id, status: true }), setEditData({ title: item.title, des: item.des }) }}>
                        <Image source={images.editG} style={styles.cross_img} />
                    </TouchableOpacity>
                </View>}
            </>
        )
    };

    const onAdd = async () => {
        data.push({ id: data?.length + 1, title: title, des: des });
        await AsyncStorage.setItem('data', JSON.stringify(data));
        setButtonPressed(true);
        setTitle(''); setDes('');
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
            <View style={styles.sub_container}>
                <View style={{ flex: 1 }}>
                    <InputText
                        placeholder={'Title...'}
                        value={title}
                        onChangeText={text => setTitle(text)} />
                    <InputText
                        placeholder={'About...'}
                        value={des}
                        onChangeText={text => setDes(text)} />
                </View>
                <TouchableOpacity style={styles.plus_view} onPress={onAdd}>
                    <Image source={images.plus} style={styles.plus_img} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                ListEmptyComponent={emptyList}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={Platform.OS === 'android' ? 1 : 0.5}
                contentContainerStyle={{ paddingBottom: 40, marginTop: 20 }}
                keyExtractor={(item, index) => item?.id}
            />

            {/*Delete Modal */}
            <DeleteModal setModalVisible={setVisible} modalVisible={visible?.status} description={'Delete this task?'} onPress={() => DeleteTask(visible?.id)} />

            {/* Edit Modal */}
            <Modal animationType='slide' transparent={true} visible={editable?.status}
                onRequestClose={() => { setEditable({ status: !editable }) }}
            >
                <View style={styles.modal}>
                    <View style={styles.modal_container}>
                        <InputText
                            placeholder={'Mini Input...'}
                            value={editData?.title}
                            onChangeText={text => setEditData({ ...editData, title: text })} />
                        <InputText
                            placeholder={'Max Input...'}
                            value={editData?.des}
                            onChangeText={text => setEditData({ ...editData, des: text })}
                            multiline={true}
                        />
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.btn} onPress={() => { setEditable({ status: !editable }) }}>
                                <Text style={[styles.cancel]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, { marginLeft: 10, borderColor: colors.primary }]} onPress={() => { EditTask(editable?.id) }}>
                                <Text style={[styles.cancel,]}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    )
}

export default Home
