import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, VehiclesList, TreeFilter} from '../screens';

const Stack = createNativeStackNavigator<PrimaryStackParamList>();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen
          name={'Splash' as keyof PrimaryStackParamList}
          component={Splash}
        />
        <Stack.Screen
          name={'VehiclesList' as keyof PrimaryStackParamList}
          component={VehiclesList}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name={'TreeFilter' as keyof PrimaryStackParamList}
          component={TreeFilter}
          options={{presentation: 'modal'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default Stacks;
