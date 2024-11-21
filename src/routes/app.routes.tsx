import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Scrn from '@screens/index';

const NStck = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <NStck.Navigator
      screenOptions={{ headerShown: false }}
    >
      <NStck.Screen name="home" 
        component={Scrn.Home}
      />
      <NStck.Screen name="statistic" 
        component={Scrn.Statistic}
      />

    </NStck.Navigator>
  )
}