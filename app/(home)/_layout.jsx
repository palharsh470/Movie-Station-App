import AsyncStorage from "@react-native-async-storage/async-storage"
import { router, Tabs } from "expo-router"
import { FilmSlate, ListHeart, MagnifyingGlass, SignOut, User, UserCircle } from "phosphor-react-native"
import { useEffect, useState } from "react"
import { Button, Text, TouchableOpacity, View } from "react-native"
export default function Layout() {
    const [user,setuser]=useState("")
    useEffect(function () {
    
            AsyncStorage.getItem("user")
                .then(function (response) {
                    if (response) {
                     setuser(response)
                    }
                    else {
                        router.replace("/login")
                    }
                })
        }, [])


        function handlelogout() {
        AsyncStorage.removeItem("user")
            .then(function () {
                router.replace("/login")
            })
    }
        function setleftheader(){
            return <View style={{
                margin:10
            }}><UserCircle size={32} /><Text>{user}</Text></View>
        }
       
    return (
        <Tabs screenOptions={{
            tabBarLabelStyle:{
                color:"black"
            },
            tabBarActiveBackgroundColor:"lightgrey",
        }}>
            <Tabs.Screen name="index" options={{
                title:"Movie Station",
                headerTitleAlign:"center",
                headerLeft:setleftheader,
                headerRight:function(){
                     return <TouchableOpacity onPress={handlelogout} ><SignOut size={32} /></TouchableOpacity>
                },
                tabBarIcon:function(){ return <FilmSlate size={32} weight="regular" />},
                tabBarLabel:"Home"
            }}></Tabs.Screen>

            <Tabs.Screen name="search" options={{
                tabBarIcon:function(){ return <MagnifyingGlass size={32} />},
                tabBarLabel:"Search",
                headerShown:false
            }}></Tabs.Screen>

            <Tabs.Screen name="favourite" options={{
                title:"Favourites",
                headerTitleAlign:"center",
                tabBarIcon:function(){ return <ListHeart size={32} />},
                tabBarLabel:"Favourites"
            }}></Tabs.Screen>

            
            
            
        </Tabs>
        
    )
}