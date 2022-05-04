import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, PermissionsAndroid, Alert, Platform, TouchableOpacity } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import Icons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';


const StatementScreen = (props) => {
    const navigation = useNavigation();
    console.log(props.route?.params?.name)
    
    const viewRefs = useRef();

    const getPermissionAndroid = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Image Download Permission',
                    message: 'Your permission is required to save images to your device',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            }
            Alert.alert('Permission required', 'Permission is required to save images to your device',
                [{ text: 'OK', onPress: () => { } }],
                { cancelable: false },
            );
        } catch (err) {
            Alert.alert('Save remote image', 'Failed to save Image: ' + err.message,
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false },
            );
        }
    };
    const downloadImage = async () => {
        try {
            const uri = await captureRef(viewRefs.current, {
                format: 'png',
                quality: 0.8,
            });
            if (Platform.OS === 'android') {
                const granted = await getPermissionAndroid();
                if (!granted) {
                    return;
                }
            }
            const image = CameraRoll.save(uri, 'photo');
            if (image) {
                Alert.alert('Image saved', 'Successfully saved image to your gallery.',
                    [{ text: 'OK', onPress: () => { navigation.navigate('HomeScreen')} }],
                    { cancelable: false },
                );
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View ref={viewRefs} collapsable={false} style={styles.mainContainer}>
                    {/* header */}
                    <View style={{ flexDirection: "row", marginTop: 25, left: -35 }}>
                        <Text style={{ fontSize: 25, color: "#583168", fontWeight: "bold", marginTop: 5 }}>Transaction Statement </Text>
                        <Icons name='closesquareo' size={30} style={{ left: 75, marginTop: 7 }} onPress={() => { navigation.goBack() }} />
                    </View>
                    {/* card */}
                    <View >
                        <Card style={{ height: 500, marginTop: 25, width: 360, borderRadius: 10 }}>
                            <View style={{ flexDirection: "column-reverse" }}>
                                <Text style={{ fontSize: 25, fontWeight: "bold", color: "green", marginTop: 2, left: 102 }}>Successfully ! </Text>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "green", marginTop: 7, left: 85 }}>Payment Completed </Text>
                                <Image
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYf-yn96mf5wuchdC1h_3PdzfM4KiBxA-Huw&usqp=CAU" }}
                                    style={{ height: 100, width: 125, marginTop: 10, alignItems:"center",left:115 }}
                                />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                            <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 20, fontWeight: "bold", left: 10, marginTop: 10, color: "#4a6641" }}>MONEY PAID</Text>
                                    <Text style={{ fontSize: 45, fontWeight: "bold", left: 10, color: "#696969", marginTop: 5 }}>₹ {props.route?.params?.amount / 100}</Text>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 17, fontWeight: "bold", left: 10, marginTop: 10, color: "#4a6641" }}>PAYEE NAME</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "500", left: 10, marginTop: 10 ,textDecorationLine:"underline"}}>Mr.{props.route?.params?.name}</Text>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 17, fontWeight: "bold", left: 160, marginTop: 10, color: "#4a6641" }}>PAID TIME</Text>
                                    <Text style={{ fontSize: 15, fontWeight: "500", left: 65, marginTop: 10 }}> {new Date().toLocaleString()}</Text>
                                </View>
                                </View>
                                
                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 20, fontWeight: "bold", left: 10, marginTop: 10, color: "#4a6641" }}>TRANSACTION ID :</Text>
                                    <Text style={{ fontSize: 20, fontWeight: "bold", left: 10, marginTop: 10 }}>{props.route?.params?.data?.razorpay_payment_id}</Text>
                                </View>
                                <Text style={{marginTop:22,left:225,fontStyle:"italic"}}>powered by razorpay</Text>
                            </View>
                        </Card>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ width: '50%', paddingLeft: 0, paddingRight: 8 }}>
                            <TouchableOpacity style={styles.shareActionButton} onPress={() => console.log('Click on Share button')}>
                                <Icons name="sharealt" color={'#131313'} size={20} />
                                <Text style={styles.shareActionLabel}>Share</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%', paddingLeft: 8, paddingRight: 0 }}>
                            <TouchableOpacity style={styles.shareActionButton} onPress={() => downloadImage()}>
                                <Icons name="download" color={'#131313'} size={20} />
                                <Text style={styles.shareActionLabel}>Download</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    shareActionButton: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3,
        paddingBottom: 3,
    },
    shareActionLabel: {
        fontWeight: 'normal',
        fontSize: 12,
        color: '#006c85',
        textAlign: 'center',
        lineHeight: 14,
    },
});

export default StatementScreen;


// {props.route?.params?.name}
// {props.route?.params?.amount}
// {props.route?.params?.data?.razorpay_payment_id}