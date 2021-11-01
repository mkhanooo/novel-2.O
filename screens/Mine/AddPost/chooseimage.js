import React, { useState, useEffect } from 'react';
import { Text, Image, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ChooseImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'android') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <View>
        <TouchableOpacity title="Choose Image" onPress={pickImage} >
          <Text style={{ color: 'grey' }}> Choose Image </Text>
        </TouchableOpacity>
      </View>
      <View  style={{ marginTop: 13, }}>
        {image && <Image source={{ uri: image }} style={{ width: 370, height: 400 }} />}

      </View>
    </View>
  );
}