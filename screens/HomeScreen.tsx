import {Text, useColorScheme, View} from "react-native";
import {useEffect, useState} from "react";
import {Button} from "react-native-paper";

export function HomeScreen({navigation}) {
    const colorScheme = useColorScheme();

    const [count, setCount] = useState(0);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount((c) => c + 1)}>Update count</Button>
            ),
        });
    }, [navigation]);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button onPress={() => navigation.navigate('Details')} buttonColor="primary">
                Test button to Details
            </Button>
            <Text>{colorScheme}</Text>
        </View>
    );
}