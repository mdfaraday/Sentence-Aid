import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import MainScreen from '../screens/MainScreen'
import HistoryScreen from '../screens/HistoryScreen'

const MainScreenNavigator = createStackNavigator({
    Main: MainScreen
})

const HistoryScreenNavigator = createStackNavigator({
    History: HistoryScreen
})

const tabScreenConfig = {
    Main: {screen: MainScreenNavigator, 
        navigationOptions: {
            // tabBarIcon: (tabInfo) => {
            //     return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            // },
    }}, 
    History: {screen: HistoryScreenNavigator, 
        navigationOptions: {
        //tabBarLabel: 'Favorites!', this line would override the 'label'/'name' displayed on the tab
        // tabBarIcon: (tabInfo) => {
        //     return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        // },
        tabBarColor: '#15325B'
        //tabBarLabel: 
    }}
}

const tabNavigator = createBottomTabNavigator(tabScreenConfig, { //iOS
        tabBarOptions: {
            activeTintColor: '#15325B',
            // labelStyle: {
            //     fontFamily: 'open-sans-bold'
            // }
        }
    })

export default createAppContainer(tabNavigator);