import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native";
import Moviecard from "../../components/Moviecard";
import LoadingMoviecard from "../../components/movieloading";


export default function Movieapp() {
    const [favourite, setfavourite] = useState([]);
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [user,setuser]=useState("")
    const arr = [1, 1, 1, 5, 11, 1, 1, 1, 1, 1, 1, 0, 11];

  

    useEffect(function () {

        setloading(true)
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9fab0ce9&s=harry").then(
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
        <ScrollView style={{
            padding: 10
        }
        }>

            
            <Text style={{
                fontWeight: "900",
                fontSize: 23,
                marginTop: 20,
                paddingVertical: 10
            }}>Trending</Text>

            {loading ? <FlatList
                contentContainerStyle={{
                    gap: 10
                }}
                horizontal
                data={arr}
                renderItem={({ item }) => {
                    return <LoadingMoviecard />
                }}
            ></FlatList> : <FlatList
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


            <Text style={{
                fontWeight: "900",
                fontSize: 23,
                marginTop: 20,
                paddingVertical: 10
            }}>All Time Hits</Text>

            {loading ? <FlatList
                contentContainerStyle={{
                    gap: 10
                }}
                horizontal
                data={arr}
                renderItem={({ item }) => {
                    return <LoadingMoviecard />
                }}
            ></FlatList> : <FlatList
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

            <Text style={{
                fontWeight: "900",
                fontSize: 23,
                marginTop: 20,
                paddingVertical: 10
            }}>Horror</Text>

            {loading ? <FlatList
                contentContainerStyle={{
                    gap: 10
                }}
                horizontal
                data={arr}
                renderItem={({ item }) => {
                    return <LoadingMoviecard />
                }}
            ></FlatList> : <FlatList
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

            <Text style={{
                fontWeight: "900",
                fontSize: 23,
                marginTop: 20,
                paddingVertical: 10
            }}>Top-10 </Text>

            {loading ? <FlatList
                contentContainerStyle={{
                    gap: 10
                }}
                horizontal
                data={arr}
                renderItem={({ item }) => {
                    return <LoadingMoviecard />
                }}
            ></FlatList> : <FlatList
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

            <Text style={{
                fontWeight: "900",
                fontSize: 23,
                marginTop: 20,
                paddingVertical: 10
            }}>Action</Text>

            {loading ? <FlatList
                contentContainerStyle={{
                    gap: 10
                }}
                horizontal
                data={arr}
                renderItem={({ item }) => {
                    return <LoadingMoviecard />
                }}
            ></FlatList> : <FlatList
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

        </ScrollView>
    )
}