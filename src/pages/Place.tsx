import React from 'react'
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import * as placeRepo from '../services/place.repo'
import { Place } from '../models'

export default function PlacePage() {
    
    const navigation = useNavigation<NavigationProp<any>>()
    const route = useRoute()
    const param = route.params as Place

    const [name, setName] = React.useState(param.name || '')
    const [description, setDescription] = React.useState(param.description || '')

    React.useEffect(() => {
        navigation.setOptions({ title: param.name ? 'Editar Local' : 'Novo Local' })
    }, [])

    function savePlace() {
        const place = {
            name, description,
            latitude: param.latitude,
            longitude: param.longitude,
        } as Place

        placeRepo.save(place).then(() => {
            navigation.goBack()
        })
    }

    function removePlace() {
        placeRepo.remove(param).then(() => {
            navigation.goBack()
        })
    }

    return (
        <View style={styles.container}>
            <Text>Latitude: {param.latitude}</Text>
            <Text>Longitude: {param.longitude}</Text>

            <View style={styles.main}>
                <Text>Nome:</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} />

                <Text>Descrição:</Text>
                <TextInput style={styles.input} value={description} onChangeText={setDescription} />
            </View>

            <View style={styles.buttonView}>
                <Button color="red" title="Remover" onPress={removePlace} />
            </View>
            <View style={styles.buttonView}>
                <Button title="Salvar" onPress={savePlace} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    main: {
        padding: 30,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        borderColor: '#999',
    },
    buttonView: {
        marginLeft: 50,
        marginRight: 50,
    },
})