import {useTheme} from "@react-native-material/core";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../../screens/HomeScreen";
import {DetailsScreen} from "../../screens/DetailsScreen";
import {headerStyles} from "./styles";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    const theme = useTheme();

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: headerStyles(theme)}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}