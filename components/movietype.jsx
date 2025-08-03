
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router"
import { useCallback, useEffect, useState } from "react"
import { View } from "react-native";
import { FlatList, Text } from "react-native"

export default function Movietype({ Moviecard, LoadingMoviecard, favourite, setfavourite, type,collection }) {
    const [loading, setloading] = useState(false)
    const arr = [1, 1, 1, 5, 11, 1, 1, 1, 1, 1, 1, 0, 11];
    const [data, setdata] = useState([])
    useEffect(function () {

        setloading(true)
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9fab0ce9&s=${collection}`).then(
            function (value) {
                value.json().then(function (response) {
                    setdata(response?.Search)
                    setloading(false)
                })
            }
        )
            .catch(function (err) {
                setdata([])
            })
    }, [])

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem("fav-movies").then((data) => {
                const storeddata = data ? JSON.parse(data) : []
                setfavourite(storeddata)
            });
        }, []) // empty dependency list means this won't recreate on every render
    );
    return (

        <View>

            <Text style={{
                fontWeight: "900",
                fontSize: 23,
                marginTop: 20,
                paddingVertical: 10
            }}>{type}</Text>
            {
                loading ? <FlatList
                    contentContainerStyle={{
                        gap: 10
                    }
                    }
                    horizontal
                    data={arr}
                    renderItem={({ item }) => {
                        return <LoadingMoviecard />
                    }
                    }
                ></FlatList > : <FlatList
                    contentContainerStyle={{
                        gap: 10
                    }}
                    horizontal
                    data={data}
                    renderItem={({ item }) => {
                        return loading ? (<LoadingMoviecard />) : <Moviecard items={item} key={item.imdbID} favourite={favourite} setfavourite={setfavourite} />
                    }}
                ></FlatList>

            }

        </View>
    )
}