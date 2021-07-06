import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesScreen from './BadgesScreen'
import BadgeLanding from '../BadgesLanding/BadgeLanding'
import BadgesDetail from '../BadgesDetail/BadgesDetail'
import BadgesEdit from '../BadgesEdit/BadgesEdit'
import Colors from '../../res/Colors'
import BadgesLogin from '../BadgesLogin/BadgesLogin'
import BadgesSignin from '../BadgesSignin/BadgesSignin'



const Stack = createStackNavigator()

const BadgesStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl,
            },
            headerTintColor: Colors.white,
        }}>
            <Stack.Screen name="Landing" component={BadgeLanding} options={{ headerShown: false}}/>
            <Stack.Screen name="Badges" component={BadgesScreen} />
            <Stack.Screen name="BadgesDetail" component={BadgesDetail} />
            <Stack.Screen name="BadgesEdit" component={BadgesEdit} />
            <Stack.Screen name="BadgesLogin" component={BadgesLogin} options={{ headerShown: false}}/>
            <Stack.Screen name="BadgesSignin" component={BadgesSignin} options={{ headerShown: false}}/>

        </Stack.Navigator>
    );

};

export default BadgesStack;