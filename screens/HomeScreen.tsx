import { Text } from "react-native";
import {Button} from "@react-native-material/core";
import {useEffect, useState} from "react";

export function HomeScreen({navigation}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
            ),
        });
    }, [navigation]);

    return (<><Text>Count: {count}</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        /></>);
}