import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";
import Moviecard from "../../components/Moviecard";

export default function Fav(){
    const [favourite, setfavourite] = useState([]);

    useFocusEffect(function () {
        AsyncStorage.getItem("fav-movies").then(function (data) {
            const storeddata = data ? JSON.parse(data) : []
            setfavourite(storeddata)
        })
    })


    return(
        <ScrollView>
            {
                favourite?.map(function(elem,indx){
                   return <Moviecard items={elem} key={indx} favourite={favourite} setfavourite={setfavourite}/>
                })
            }
           </ScrollView>
    )
}