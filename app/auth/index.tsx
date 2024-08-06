import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AuthScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <View
                style={{
                    height: 200,
                    width: '100%',
                    backgroundColor: 'gray',
                }}
            >
                <Text>Gambar</Text>
            </View>
                
            <View
                style={{
                    padding: 16,
                    flexDirection: 'column',
                    gap: 16,
                }}
            >
                <Text
                    variant="titleLarge"
                >
                    Sign In
                </Text>

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    mode="outlined"
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    mode="outlined"
                />

                <Button
                    mode="contained"
                    style={{
                        backgroundColor: Colors.primary,
                    }}
                >
                    Sign In
                </Button>

                <View
                    style={{
                        flexDirection: 'row',
                        gap: 8,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text>
                        Don't have an account? 
                    </Text>
                    <Text style={{color: 'blue'}}>
                        Sign Up
                    </Text>
                </View>

                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Text variant="headlineSmall">OR</Text>
                </View>

                <Button
                    mode="outlined"
                    textColor={Colors.primary}
                >
                    Play as Guest
                </Button>
            </View>

        </View>
    )
}