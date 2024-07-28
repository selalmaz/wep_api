import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import axios from 'axios';

function App() {
  function fetchData() {
    const respponse = axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => console.log(response))
      .catch(error => console.log(error));
    // verileri cekme
    //then : olumlu sonuclanırsa veya yanlış cevap gelirse de thene düşer
    //catch : herhangi bir hata işe karşılaşırsak,hiçbir cevap gelmezse

    // burda istek attıgımız da geri donus beklemeden kod
    // calismaya devam eder await yapsaydık cevap gelene kadar bekler
  }
  //async yaptık
  async function fetchData_2() {
    console.log('1');
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    // await cevap gelene kadar beklemesini saglar
    console.log('3');
    console.log(response);
    console.log('2');
  }

  return (
    <SafeAreaView>
      <Button title="Fetch Data-1" onPress={fetchData}></Button>
      <View><Text> </Text></View>
      <Button title="Fetch Data-2" onPress={fetchData_2}></Button>
    </SafeAreaView>
  );
}

export default App;
