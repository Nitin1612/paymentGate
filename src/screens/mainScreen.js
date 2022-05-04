import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RazorpayCheckout from 'react-native-razorpay';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Snackbar } from 'react-native-paper';





const MainScreen = () => {
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [remarks, setRemarks] = useState('');
    const [checked, setChecked] = useState('first');
    const [value, setValue] = useState('first');
    const [status,setStatus] = useState('');
    const [error,setError] = useState('');
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);


    const makePayment = () => {
        var options = {
            description: remarks,
            image: 'https://media-exp1.licdn.com/dms/image/C560BAQHggYLcXxs78w/company-logo_200_200/0/1592541089153?e=2147483647&v=beta&t=X8Q-unT-Ms6xfn4lzcPkhSNED6sXrfLugtURJi8l_Vg',
            currency: 'INR',
            key: 'rzp_test_IOVqmwpsB9ZetB',
            amount: parseInt(amount),
            name: name,
            theme: { color: '#528FF0' }
        }
        
        RazorpayCheckout.open(options).then((data) => {
            
            alert(`Successfull payment :)`);
            console.log(data.razorpay_payment_id,'payment success')
            setStatus(data.razorpay_payment_id)
            navigation.navigate("StatementScreen",{
                data:data,
                name:name,
                amount:amount
            })

        }).catch((error) => {
            alert(`Payment Unsuccessfull:(`);
            console.log(error.description,'error')
            
        });
    }
console.log(status,"status");
console.log(error,"error");


    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://av.sc.com/corp-en/content/images/sc-ib-iconography-international-investments-effortless-transactions-585x300-1-570x300.png',
                    }}
                />
                <Text style={styles.title}> Send Money </Text>
                <Icon name='remove' size={30}  style={{marginTop:10,left:150}} onPress={()=>{navigation.goBack()}}/>
            </View>
            
            <View style={styles.column}>
                <View style={[styles.btn1, { backgroundColor: "#f5f5f5" }]}>
                    <Text style={styles.profile}>Payee Name</Text>
                    <TextInput
                        style={{ marginTop: 30, marginLeft: -90, height: 50, fontSize: 18 }}
                        placeholder="Enter the name!"
                        onChangeText={newName => setName((newName))}
                        defaultValue={name}
                        
                    />
                </View>
                


                <View style={[styles.btn1, { backgroundColor: "#f5f5f5" }]}>
                    <Text style={styles.profile}>Amount</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={[{ height: 30, width: 30, marginTop: 30, marginLeft: -70, borderRadius: 100 }]}
                            source={{
                                uri: 'https://e7.pngegg.com/pngimages/143/512/png-clipart-indian-rupee-sign-currency-symbol-symbol-miscellaneous-angle.png',
                            }}
                        />
                        <TextInput
                            style={{ marginTop: 25, marginLeft: 0, height: 50, width: 300, fontSize: 18 }}
                            placeholder="Amount to be paid!"
                            onChangeText={newAmount => setAmount((newAmount))}
                            defaultValue={amount}
                        />
                    </View>
                </View>


                <View style={[styles.btn2, { backgroundColor: "#f5fffa" }]}>

                    <Text style={[styles.profile, { paddingRight: 30 }]}>Transfer</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />

                        <Text style={[styles.profile2, { paddingRight: 50 }]}>Now</Text>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={[styles.profile2]}>Later</Text>
                    </View>
                </View>

                <View style={[styles.btn3, { backgroundColor: "#f5f5f5" }]}>
                    <Text style={styles.profile}>Remarks</Text>
                    <TextInput
                        style={{ marginTop: 40, marginLeft: -65, height: 50, fontSize: 18 }}
                        placeholder="Type Remarks!"
                        onChangeText={newRemarks => setRemarks((newRemarks))}
                        defaultValue={remarks}
                    />
                </View>
                <View style={[styles.btn1, { backgroundColor: "#f5f5f5" }]}>
                    <View style={{flexDirection:'column'}}>
                    <Text style={[styles.profile]}>Transfer Type</Text>
                    <View style={{ flexDirection: 'row' ,marginTop:10}}>
                        <RadioButton
                            value="first"
                            status={value === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setValue('first')}
                        />

                        <Text style={[styles.profile2, { paddingRight: 50 }]}>NEFT</Text>
                        <RadioButton
                            value="second"
                            status={value === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setValue('second')}
                        />
                        <Text style={[styles.profile2,{ paddingRight: 50 }]}>RGTS</Text>
                        <RadioButton
                            value="third"
                            status={ value === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => setValue('third')}
                        />
                        <Text style={[styles.profile2]}>IMPS</Text>
                    </View>
                    </View>
                </View>
            </View>

            <View style={{paddingLeft:140}}>
                <Text style={{fontSize:18}}>*Available Balance:₹12598.00</Text>
            </View>


            <TouchableOpacity
                onPress={makePayment}
                style={[styles.btn4, { backgroundColor: '#2f4f4f', marginTop: 10 }]}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={{
                            uri: 'https://icons.iconarchive.com/icons/flat-icons.com/flat/512/Wallet-icon.png',
                        }}
                    />
                    <Text style={[{ fontSize: 25, marginLeft: 10, marginTop: 5, fontStyle: 'italic' }]}> Proceed to Pay {'\t\t\t\t\t\t\t\t\t'}₹{amount / 100}</Text>

                </View>

            </TouchableOpacity>




        </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    profile: {
        color: '#2f4f4f',
        fontSize: 18,
        fontWeight: 'bold',
    },
    profile2: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 6
    },
    btn1: {
        padding: 13,
        borderRadius: 5,
        margin: 5,
        width: 385,
        height: 100,
        flexDirection: 'row',
    },
    btn2: {
        padding: 13,
        borderRadius: 5,
        margin: 5,
        width: 385,
        height: 60,
        flexDirection: 'row',
    },
    btn3: {
        padding: 13,
        borderRadius: 5,
        margin: 5,
        width: 385,
        height: 150,
        flexDirection: 'row',
    },
    btn4: {
        padding: 13,
        borderRadius: 5,
        margin: 5,
        width: 385,
        height: 70,
        flexDirection: 'row',
    },

    row: {
        flexDirection: 'row',
        marginBottom: 20,
        margin: 7
    },
    column: {
        flexDirection: 'column',
    },
    title: {
        marginTop: 10,
        color: '#2f4f4f',
        fontSize: 22,
        fontWeight: 'bold',
    },
    tinyLogo: {
        width: 60,
        height: 60,
    },
});


export default MainScreen