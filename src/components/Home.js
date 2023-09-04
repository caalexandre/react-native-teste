import { View, Text, Button, FlatList } from 'react-native';
import { styles } from './Style'
import { getPokemon } from '../../getPokemon';

export default function Home() {

    async function busca() {
        const result = await getPokemon()

        const DATA = result.data.results

        for(let pokemon in DATA){
            console.log(DATA[pokemon])
        }
    }


    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title='busca' onPress={busca} />
        </View>
    );
}