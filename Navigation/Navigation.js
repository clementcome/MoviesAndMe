import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: "Détails"
        }
    }
})

const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: "Favoris"
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: "Détails"
        }
    }
})

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigator,
        navigationOptions:{
            tabBarIcon: () => {
                return <Image style={styles.icon} source={require('../Images/ic_search.png')} />
            }
        }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions:{
            tabBarIcon: () => {
                return <Image style={styles.icon} source={require('../Images/ic_favorite.png')} />
            }
        }
    }
},{
    tabBarOptions:{
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF',
        showLabel:false,
        showIcon: true
    }
})

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default createAppContainer(MoviesTabNavigator)