import React from 'react';
import { View, Text } from 'react-native';
import { db } from '../../App';

const AddEquipmentPage = () => {

    const navigation = useNavigation();

    const [tipOpreme, setTipOpreme] = useState('');
    const [naziv, setNaziv] = useState('');
    const [letoNakupa, setLetoNakupa] = useState('');
    const [velikost, setVelikost] = useState('');
    const [stanje, setStanje] = useState('');
    const [opisOpreme, setOpisOpreme] = useState('');
    const [model, setModel] = useState('');

    const handleAddEquipment = async () => {
        try {
            const newEquipment = {
                tipOpreme: tipOpreme,
                naziv: naziv,
                letoNakupa: letoNakupa,
                velikost: velikost,
                stanje: stanje,
                opisOpreme: opisOpreme,
                model: model,
            }
            await addDoc(collection(db, "oprema"), newEquipment);
            setTipOpreme('');
            setNaziv('');
            setLetoNakupa('');
            setVelikost('');
            setStanje('');
            setOpisOpreme('');
            setModel('');
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <View>
      <Text>Dodajanje nove opreme</Text>
      <TextInput
        placeholder="Tip opreme"
        onChangeText={(text) => setTipOpreme(text)}
        value={tipOpreme}
      />
      <TextInput
        placeholder="Naziv"
        onChangeText={(text) => setNaziv(text)}
        value={naziv}
      />
      <TextInput
        placeholder="Leto nakupa"
        onChangeText={(text) => setLetoNakupa(text)}
        value={letoNakupa}
      />
      <TextInput
        placeholder="Velikost"
        onChangeText={(text) => setVelikost(text)}
        value={velikost}
      />
      <TextInput
        placeholder="Stanje opreme"
        onChangeText={(text) => setStanje(text)}
        value={stanje}
      />
      <TextInput
        placeholder="Opis opreme"
        onChangeText={(text) => setOpisOpreme(text)}
        value={opisOpreme}
      />
      <TextInput
        placeholder="Model"
        onChangeText={(text) => setModel(text)}
        value={model}
      />
    <Button title="DodajOpremo" onPress={handleAddEquipment} />

    </View>
  );
};

export default AddEquipmentPage;
