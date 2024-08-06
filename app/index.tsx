import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Button, Card, Chip, Text } from 'react-native-paper';

export default function HomeScreen() {
    return (
        <>
        <Stack.Screen options={{ title: 'Home' }} />
        <View
            style={{
                flexDirection: 'column',
                gap: 16,
                padding: 16,
            }}
        >
            <Text
                variant="displaySmall"
            >
                Hello Haya!
            </Text>
            <Text style={{
                fontWeight: 'bold'
            }}>
                Choose a Move: <Text>Choose a Move : Rock Paper Scissors
                The computer will also pick a move and then we will compare and find the winner!</Text>
            </Text>
            <Card
                style={{
                    padding: 16,
                    flexDirection: 'column',
                    gap: 16,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 16,
                    }}
                >
                    <Text>
                        Scissors
                    </Text>
                    <Text>
                        VS
                    </Text>
                    <Text>
                        Paper
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 16,
                    }}
                >
                    <Text>
                        Scissors
                    </Text>
                    <Text>
                        VS
                    </Text>
                    <Text>
                        Paper
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>
                        Scissors
                    </Text>
                    <Text>
                        VS
                    </Text>
                    <Text>
                        Paper
                    </Text>
                </View>
            </Card>

            <View
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Text variant="titleMedium">Pick Your round</Text>
                <View style={{
                    flexDirection: 'row',
                    gap: 8,
                }}>
                    <Chip>
                        3
                    </Chip>
                    <Chip>
                        5
                    </Chip>
                    <Chip>
                        7
                    </Chip>
                    <Chip>
                        9
                    </Chip>
                </View>
            </View>

            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Start
            </Button>
        </View>
        </>       
    )
}