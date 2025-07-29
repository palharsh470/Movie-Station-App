import { Stack } from "expo-router"
export default function Layout() {
    
    return (
        <Stack screenOptions={{
            headerTitleAlign:"center",
        }}>
            <Stack.Screen
            name="(home)"
            options={{
                headerShown:false
            }}></Stack.Screen>
        
            <Stack.Screen
            name="login"
            options={{
              title:"Login",
            }}></Stack.Screen>
            <Stack.Screen
            name="Moviedetail/[id]"
            options={{
              title:"Details",
            }}></Stack.Screen>
        </Stack>
    )
}