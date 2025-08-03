
import {useState } from "react";
import { ScrollView } from "react-native";
import Moviecard from "../../components/Moviecard";
import LoadingMoviecard from "../../components/movieloading";
import Movietype from "../../components/movietype";

export default function Movieapp() {
    const [favourite, setfavourite] = useState([]);
    

    return (
        <ScrollView style={{
            padding: 10
        }}>

            <Movietype Moviecard={Moviecard} LoadingMoviecard={LoadingMoviecard} favourite={favourite} setfavourite={setfavourite} type={"Trending"} collection={"Avengers"} ></Movietype>
            <Movietype Moviecard={Moviecard} LoadingMoviecard={LoadingMoviecard} favourite={favourite} setfavourite={setfavourite} type={"All Time Hits"} collection={"harry"}></Movietype>
            <Movietype Moviecard={Moviecard} LoadingMoviecard={LoadingMoviecard} favourite={favourite} setfavourite={setfavourite} type={"Horror"} collection={"conjuring"}></Movietype>
            <Movietype Moviecard={Moviecard} LoadingMoviecard={LoadingMoviecard} favourite={favourite} setfavourite={setfavourite} type={"Top-10"} collection={"batman"}></Movietype>
            <Movietype Moviecard={Moviecard} LoadingMoviecard={LoadingMoviecard} favourite={favourite} setfavourite={setfavourite} type={"Action"} collection={"marvel"}></Movietype>

        </ScrollView>
    )
}