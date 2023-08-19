import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../../screens/HomeScreen";
import {DetailsScreen} from "../../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export function Navigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}