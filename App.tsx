import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MapPage from './src/pages/Map'
import ListPage from './src/pages/List'
import PlacePage from './src/pages/Place'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function MapStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Map" component={MapPage} options={{ headerShown: false }} />
            <Stack.Screen name="Place" component={PlacePage} options={{ title: 'Novo Local' }} />
        </Stack.Navigator>
    )
}

function ListStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={ListPage} options={{ title: 'Favoritos' }} />
            <Stack.Screen name="Place" component={PlacePage} options={{ title: 'Novo Local' }} />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Mapa" component={MapStack}
                    options={{ headerTransparent: true, drawerLabel: 'Mapa', title: '' }}
                />
                <Drawer.Screen name="Lista" component={ListStack}
                    options={{ headerTransparent: true, drawerLabel: 'Lista', title: '' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
