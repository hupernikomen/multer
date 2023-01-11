import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import api from './service/api';



export default function App() {


  const [image, setImage] = useState('fototeste.jpg') // Esse envio de foto é apenas teste.. um nome qualquer pra ver se vai

  async function EnviaFoto() {

    var data = new FormData()
    data.append('file', image)

    await api.post('/enviafoto', data)
      .then((response) => console.log("Tudook:", response.data))
      .catch((error) => {

        console.log({ ...error });

      })

  }


  return (
    <View>

      <TouchableOpacity
        onPress={EnviaFoto}
      >
        <Text>Enviar Foto</Text>
      </TouchableOpacity>

    </View>
  );
}