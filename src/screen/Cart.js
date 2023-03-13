import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import {COLOR} from '../const/Color';
import Header from '../components/Header';
import Card from '../components/Cart/Card';
import Button from '../components/Auth/Button';

export default function Cart() {
  const navigation = useNavigation();
  const [remove,setRemove] = useState([])
  const handleBackNavigation = () => {
    navigation.pop();
  };

  const arr = [
    {
      id: 1,
      text: 'Nike Air Force 1',
      description:
        'Nike Air Force 1s were originally considered the favoredshoe of inner-city youth, especially in Harlem, New York,giving rise to the nickname "lushy lushaba".The Air Force 1 was produced in 1982 and discontinued in 1984.',
      price: 120,
    },
    {
      id: 2,
      text: 'Nike Air Force 1',
      description:
        'Nike Air Force 1s were originally considered the favoredshoe of inner-city youth, especially in Harlem, New York,giving rise to the nickname "lushy lushaba".The Air Force 1 was produced in 1982 and discontinued in 1984.',
      price: 120,
    },
    {
      id: 3,
      text: 'Nike Air Force 1',
      description:
        'Nike Air Force 1s were originally considered the favoredshoe of inner-city youth, especially in Harlem, New York,giving rise to the nickname "lushy lushaba".The Air Force 1 was produced in 1982 and discontinued in 1984.',
      price: 120,
    },
    {
      id: 4,
      text: 'Nike Air Force 1',
      description:
        'Nike Air Force 1s were originally considered the favoredshoe of inner-city youth, especially in Harlem, New York,giving rise to the nickname "lushy lushaba".The Air Force 1 was produced in 1982 and discontinued in 1984.',
      price: 120,
    },
    {
      id: 5,
      text: 'Nike Air Force 1',
      description:
        'Nike Air Force 1s were originally considered the favoredshoe of inner-city youth, especially in Harlem, New York,giving rise to the nickname "lushy lushaba".The Air Force 1 was produced in 1982 and discontinued in 1984.',
      price: 120,
    },
    {
      id: 6,
      text: 'Nike Air Force 1',
      description:
        'Nike Air Force 1s were originally considered the favoredshoe of inner-city youth, especially in Harlem, New York,giving rise to the nickname "lushy lushaba".The Air Force 1 was produced in 1982 and discontinued in 1984.',
      price: 120,
    },
  ];

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor={COLOR.secondary_alpha} barStyle="default" />
      <Header cart />

      <FlatList
        data={arr}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Card
              text={item.text}
              description={item.description}
              price={item.price}
              btntxt="Delete"
            />
          );
        }}
      />
<View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
<Button btnName={'Proceed to Pay'} paddingHorizontal={20}  />
</View>
     

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    justifyContent: 'space-between',
  },
  count_inc_btn: {
    backgroundColor: COLOR.primary,
    height: '7%',
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
  },
  count_inc_btn1: {
    backgroundColor: COLOR.white,
    height: '7%',
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
  },
});
