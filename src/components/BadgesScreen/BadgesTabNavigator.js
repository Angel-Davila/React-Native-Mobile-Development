import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BadgesStack from './BadgesStack'
import Colors from '../../res/Colors'
import FavoriteStack from '../Favorites/FavoriteStack.js'

const Tabs = createBottomTabNavigator();

const BadgesTabNavigator = () => {
    return(
        <Tabs.Navigator 
            tabBarOptions={{
                showLabel: false,
                tintColor: Colors.pink,
                activeTintColor: Colors.pink,
                style:{
                    backgroundColor: Colors.zircon,
                },
            }}>
            <Tabs.Screen 
                name='Badges'
                component={BadgesStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height: size}}
                            source={require('../../assets/home.png')}/>
                    )}}/>

            <Tabs.Screen 
                name='Favorites'
                component={FavoriteStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height: size}}
                            source={require('../../assets/notFavorite.png')}/>
                    )}}/>
        </Tabs.Navigator>
    )
}

export default BadgesTabNavigator;