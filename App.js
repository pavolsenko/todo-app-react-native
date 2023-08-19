import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconComponentProvider} from "@react-native-material/core";
import {StackNavigator} from "./components/navigator/StackNavigator";

export default function App() {
    return (
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <NavigationContainer>
                <StackNavigator/>
            </NavigationContainer>
        </IconComponentProvider>
  );
}


