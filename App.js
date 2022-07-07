import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Alert,
  TextInput, 
}from 'react-native';

export default function App() {
  const [condenser, onChangeCondenser] = React.useState(0);
  const [voltaje, onChangeVoltaje] = React.useState(0);
  const [energy, onChangeEnergy] = React.useState(0);
  const onPress = ()=>{
    const result = 0.5 * (condenser / 1000000) * (voltaje * voltaje);
    //Alert.alert(result.toString());
    onChangeEnergy(result);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Energy Condenser</Text>
      <Text style={styles.text}>Ingrese el valor del Condensador en uF</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCondenser}
        value={condenser.toString()}
        keyboardType="numeric"
        maxLength={4}
      />
      <Text style={styles.text}>Ingrese el voltaje del Condensador en v</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeVoltaje}
        value={voltaje.toString()}
        keyboardType="numeric"
        maxLength={4}
      />
      <TouchableOpacity style={styles.button} onPress={ onPress }>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{"\n\n"}Resultado en Joules</Text>
      <TextInput
        style={styles.input}
        value={energy.toString()+" J"}
        keyboardType="numeric"
        editable={false}
        maxLength={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {fontSize:30, color: '#fff'},
  text: {fontSize:15, color: '#fff'},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    width: 50,
    color: '#000',
    //fontSize: 50,
  },
  button: {backgroundColor: 'greenyellow', padding: 7, marginTop: 10},
  buttonText: {color: '#fff', fontSize: 20}
});
