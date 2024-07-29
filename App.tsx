import React, {lazy, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import UserCard from './src/components/UserCard/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [userList, setUserList] = useState([]); // gelen verileri tutmak icin
  const [loading, Setloading] = useState(false); // veri geldinde true olucak loading scrren yapmak icin

  useEffect(() => {
    // bu app acıldıgı anda calıscagı ıcın veriler direk yüklenir
    fetchData_2();
  }, []);

  function fetchData() {
    Setloading(true);
    const response = axios
      .get(URL)
      .then(response => {
        Setloading(false);
        setUserList(response.data);
      })
      .catch(error => console.log(error));
    // verileri cekme
    //then : olumlu sonuclanırsa veya yanlış cevap gelirse de thene düşer
    //catch : herhangi bir hata işe karşılaşırsak,hiçbir cevap gelmezse

    // burda istek attıgımız da geri donus beklemeden kod
    // calismaya devam eder await yapsaydık cevap gelene kadar bekler
  }
  //async yaptık
  async function fetchData_2() {
    Setloading(true);
    console.log('1');
    const response = await axios.get(URL);
    // await cevap gelene kadar beklemesini saglar
    console.log('3');
    console.log('2');
    Setloading(false);
    setUserList(response.data);
  }
  const renderUser = ({item}: any) => (
    <UserCard
      name={item.name}
      username={item.username}
      email={item.email}></UserCard>
  );
  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large"></ActivityIndicator> // loading ekranı olusturuldu
      ) : (
        <FlatList data={userList} renderItem={renderUser}></FlatList>
      )}

      <Button title="Fetch Data-1" onPress={fetchData}></Button>
      <View>
        <Text> </Text>
      </View>
      <Button title="Fetch Data-2" onPress={fetchData_2}></Button>
    </SafeAreaView>
  );
}

export default App;
