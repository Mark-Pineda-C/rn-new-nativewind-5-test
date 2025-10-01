import { ScreenContent } from "components/ScreenContent";
import { StatusBar } from "expo-status-bar";

export default function Index(){
    return (
        <>
            <ScreenContent title="Home" path="App.tsx"></ScreenContent>
            <StatusBar style="auto" />
        </>
    )
}