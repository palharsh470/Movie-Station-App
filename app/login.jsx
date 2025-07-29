import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBoxComponent } from "@react-native-community/checkbox";
import { router } from "expo-router";

import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";



const usersdata = [
    {
        "username": "Harsh",
        "password": "12345"
    },
    {
        "username": "Golu",
        "password": "12345"
    },
    {
        "username": "Aman",
        "password": "12345"
    },
    {
        "username": "Mukesh",
        "password": "1245"
    },
    {
        "username": "Ram",
        "password": "12345"
    },
]

export default function Login() {

    const [user, setuser] = useState("");
    const [pass, setpass] = useState("");
    const [err, seterr] = useState("");
   



    function handlelogin() {

        if (!user?.trim() || !pass?.trim()) return;

        const userget = usersdata.find(function (item) {
            if ((item.username == user) && (item.password == pass))
                return true;

        })


        console.log("main")
        if (userget) {
            AsyncStorage.setItem("user",userget.username).
            then(function(){
                router.replace("/")
            })
        }

        else {

            seterr("Invalid username or password")
        }

    }
    return (
        <View style={{
            height:"90%",
                justifyContent:"center"
        
        }}>
                <Text style={{
                    fontSize:25,
                    fontWeight:"bold",
                    textAlign:"center",
                    marginBottom:"45"
                }}>MOVIE STATION</Text>
            <View>
                <TextInput style={{
                    borderWidth: 2,
                    borderColor: "black",
                    borderRadius: 50,
                    margin: 10
                }} placeholder="Enter Username" value={user} onChangeText={setuser} ></TextInput>
                <TextInput style={{
                    borderWidth: 2,
                    borderColor: "black",
                    borderRadius: 50,
                    margin: 10,
                }} secureTextEntry={true} placeholder="Enter Password" value={pass} onChangeText={setpass}></TextInput>
                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: "black",
                    borderRadius: 50,
                    margin: 10,
                    padding:"5",
                    backgroundColor: "black"
                }} onPress={handlelogin} ><Text style={{
                    color: "white",
                    textAlign: "center",
                    fontSize:20
                }}>Login</Text></TouchableOpacity>
                {
                    err && <Text style={{
                        color: "red"
                    }}>{err}</Text>
                }
            </View>
        </View>
    )
}

