import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';

const App = () => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, backgroundColor: "red", justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
        <Text style={{ color: 'white', fontSize: 30 }} onPress={() => { Alert.alert("点击返回") }}>&lt;</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "blue", justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.read}>阅读</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "red", justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10 }}>
        <Text style={{ color: 'white', fontSize: 30 }}>&gt;</Text>
        <View style={{}}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  read: {
    fontSize: 25,
    color: "#fff"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: "blue"
  },
  txt: {
    color: "#ff2d51"
  }
});

export default App;