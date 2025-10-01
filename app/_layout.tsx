import { Stack } from "expo-router";
import { Text } from "react-native";
import "../global.css"

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen options={{
                headerTitle: () => <Text className="text-2xl font-bold text-red-500">Home</Text> 
            }} name="index" />
        </Stack>
    )
}