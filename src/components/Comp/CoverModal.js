import React from 'react';
import {Modal, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function CoverModal({modalVisible, setModalVisible, data}) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalContainer}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Text style={styles.text}>{data.hp_title}</Text>
        <Image source={{uri: data.hp_img_url}} style={styles.img} />
        <Text style={styles.text}>{data.hp_author}</Text>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, .8)',
    width: '100%',
    height: '100%',
    paddingHorizontal: '5%',
    paddingTop: '8.5%',
  },
  img: {
    width: '100%',
    height: 200,
    marginVertical: '5%',
  },
  text: {
    color: 'rgb(255, 255, 255)',
    fontSize: 13,
  },
});
