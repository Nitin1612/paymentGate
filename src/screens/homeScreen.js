import { View, Text, StyleSheet, Image,Linking,Platform, Modal, TouchableOpacity, Button, TouchableHighlight, ImageBackground, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import Icon4 from 'react-native-vector-icons/Octicons'
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon6 from 'react-native-vector-icons/AntDesign'
import TextTicker from 'react-native-text-ticker'
import MainScreen from './mainScreen';



import { useNavigation } from '@react-navigation/native';
import { green100 } from 'react-native-paper/lib/typescript/styles/colors';
import { color } from 'react-native-reanimated';



const HomeScreen = (props) => {
  // console.log(props.route.params,props.route,"route");
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const images = [
    'https://newsnext.live/wp-content/uploads/2020/04/loans.jpg',
    'https://www.financialexpress.com/wp-content/uploads/2021/03/HOME-LOAN-HIKE1200X800-620x400.jpg',
    'https://cdn.loanstreet.com.my/learning_articles/images/000/000/421/original/car_loan..jpg?1479796834',
    'https://v1.hdfcbank.com/amp/personal/borrow/popular-loans/business-growth-loan/images/GetBL_955_449.jpg',
  ];
  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${07904711909}';
    } else {
      number = 'tel:${07904711909}';
    }
    Linking.openURL(number);
  };


  return (
    <View style={{}}>
      <ScrollView>
        {/* header */}
        <View>
          <Image
            style={styles.headerImage}
            source={{ uri: "https://img.freepik.com/free-vector/ghetto-street-with-poor-dirty-houses-shacks_107791-1937.jpg" }}
          />
          <View style={{ zIndex: 1, position: "absolute" }}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => console.log('Qr Code Scanner')}
                  style={{ flexDirection: "row" }}   >
                  <Image
                    style={styles.tinyLogo}
                    source={{ uri: "https://www.pngfind.com/pngs/m/43-432164_qr-code-qr-code-scan-icon-hd-png.png" }}
                  />
                  <Text style={{ marginTop: 18, left: 15, fontSize: 15, fontWeight: "bold" }}>Scan Your Code</Text>
                </TouchableOpacity>
                <Image
                  style={styles.profile}
                  source={{
                    uri: "data:image/jpeg;base64,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"
                  }}
                />
              </View>
              <View style={{flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>{
                navigation.navigate('StatementScreen')
              }}>
              <Icon5 name="newspaper-variant-multiple-outline" size={20} color={"#212121"} style={{ marginTop: 165,left:45 }}>
                <Text style={{fontSize:15,fontWeight:"bold"}}> Statement</Text>
              </Icon5>
              </TouchableOpacity>
              <Icon name="credit-card" size={20} color={"#212121"} style={{ marginTop: 165,left:60 }}>
                <Text style={{fontSize:15,fontWeight:"bold"}}> Debit Card</Text>
              </Icon>
              <TouchableOpacity onPress={()=>openDialScreen()}>
              <Icon6 name="customerservice" size={20} color={"#212121"} style={{ marginTop: 165,left:70 }} >
                <Text style={{fontSize:15,fontWeight:"bold"}}> Services</Text>
              </Icon6>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* personal */}
        <View style={{ left: 10 }}>
          <Text style={{ fontSize: 17, marginTop: 10, fontWeight: "bold" }}>Account No : 578938897654</Text>
          <Text style={{ fontSize: 17, marginTop: 5, fontWeight: "bold" }}>Holder Name : Nitinchand S</Text>
          <Text style={{ fontSize: 17, marginTop: 5, fontWeight: "bold" }}>Account Type : Savings Account</Text>
          <View style={styles.centeredView} >
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>

                  <Text style={[styles.modalText]}>Rs.12,598.00</Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={{ color: "red", fontSize: 15, fontWeight: "bold", marginTop: 10 }}>Hide</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>View Balance</Text>
            </Pressable>
          </View>

        </View>
        {/* Fillers */}
        <TouchableOpacity style={{ backgroundColor: "#f5fff5", height: 45, width: "100%" }}>
          <View style={styles.row}>
            <Icon5 name='lightbulb-on-outline' size={30} style={{ marginTop: 10, left: 12 }} />
            <TextTicker
              style={{ fontSize: 16, fontWeight: "bold", marginTop: 15, left: 20, color: "#212121" }}
              duration={5000}
              loop
              bounce={false}
              shouldAnimateTreshold={40}
            >
              Invest and rest with power of assured returns of FD
            </TextTicker>




          </View>

        </TouchableOpacity>
        {/* buttons */}
        <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 12,left:7 }}>Products At Your FingerTip</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity style={[styles.btn1]}>
              <View>
                <Icon name='money' size={30} style={{ marginTop: 10, left: 12, color: "#212121" }} />
                <Text style={{ fontSize: 11.2, fontWeight: "bold", marginTop: 5, color: "#212121" }}>Send Money</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn1]}>
              <View>
                <Icon2 name='newspaper-outline' size={30} style={{ marginTop: 10, left: 12, color: "#212121" }} />
                <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 5, color: "#212121" }}>Bill Payment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn1]}>
              <View>
                <Icon4 name='graph' size={30} style={{ marginTop: 10, left: 13, color: "#212121" }} />
                <Text style={{ fontSize: 13.2, fontWeight: "bold", marginTop: 5, color: "#212121" }}>Mutual Funds</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={[styles.btn1]}>
              <View>
                <Icon3 name='account-balance' size={30} style={{ marginTop: 10, left: 15, color: "#212121" }} />
                <Text style={{ fontSize: 12.5, fontWeight: "bold", marginTop: 5, color: "#212121" }}>Accounts/Deposits</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn1]}>
              <View>
                <Icon name='credit-card' size={30} style={{ marginTop: 10, left: 12, color: "#212121" }} />
                <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 5, color: "#212121" }}>Cards & Forex</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn1]}>

              <View>
                <Icon name='rupee' size={30} style={{ marginTop: 10, left: 25, color: "#212121" }} />
                <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 5, left: 13, color: "#212121" }}>Loans</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={[styles.btn1]}>
              <View>
                <Icon3 name='send-to-mobile' size={30} style={{ marginTop: 10, left: 13, color: "#212121" }} />
                <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 5, color: "#212121" }}>Recharge</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn1]}>
              <View>
                <Icon5 name='bank-transfer-out' size={40} style={{ marginTop: 1, left: 12, color: "#212121" }} />
                <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 5, color: "#212121" }}>Bhim UPI</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn1]}>
              <View>
                <Icon5 name='lightbulb-on-outline' size={40} style={{ marginTop: 6, left: 12, color: "#212121" }} />
                <Text style={{ fontSize: 13.5, fontWeight: "bold", marginTop: 5, left: 8, color: "#212121" }}>Discover</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>




        {/* image slider */}
        <SliderBox images={images}
          onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
          //dcurrentImageEmitter={index => console.log(`current pos is: ${index}`)}
          autoplay
          circleLoop
          activeOpacity={0.3}
          style={{ height: 280 ,borderRadius:20,width:"97%",left:4,marginBottom:10}}
        />

        {/* fillers */}
        <Image
          style={{ height: 200, width: "97%",left:4,borderRadius:20,marginBottom:20 }}
          source={require('../assets/loanIntrest.png')} />
      </ScrollView>
      {/* paymentButtton */}
      <TouchableOpacity style={{ backgroundColor: "#583168", height: 60, width: 170, zIndex: 1, position: "absolute", marginTop: 675, left: 120, borderRadius: 10 }}
        onPress={() => {
          navigation.navigate('MainScreen')
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 13, left: 8, color: "#E1F5C3" }}>Make Payment +</Text>
      </TouchableOpacity>


    </View>
  )

}



const styles = StyleSheet.create({
  headerImage: {
    height: 250,
    width: "97%",
    borderRadius: 15,
    left: 6,
    marginTop: 8
  },
  tinyLogo: {
    width: 25,
    height: 25,
    marginTop: 17,
    left: 12
  },
  profile: {
    width: 39,
    height: 39,
    borderRadius: 100,
    marginTop: 17,
    left: 200
  },
  header1: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 10,
    height: 50,
    width: 130,
    left: 110,
    marginTop: -110
  },
  buttonOpen: {
    backgroundColor: "#B4C5B2",
  },
  buttonClose: {
    backgroundColor: "#fff",
  },
  textStyle: {
    color: "#2D321E",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
    color: "#212121"
  },
  slider: { backgroundColor: '#000', height: 350 },
  content1: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2: {
    width: '100%',
    height: 100,
    marginTop: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#fff' },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: 'red',
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: 100,
    height: 100,
  },
  btn1: {
    padding: 23,
    borderRadius: 10,
    margin: 5,
    width: 110,
    height: 110,
    flexDirection: 'row',
    backgroundColor: "#f5fff5"
  },

  row: {
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: -8,
    left: 14
  },
  column: {
    flexDirection: 'column',
  }


});

export default HomeScreen

