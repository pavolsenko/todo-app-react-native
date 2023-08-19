import { NavigationContainer } from '@react-navigation/native';
import {Navigator} from "./components/navigator/Navigator";
import {PaperProvider} from "react-native-paper";

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Navigator/>
            </NavigationContainer>
        </PaperProvider>
  );
}


