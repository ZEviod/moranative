import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from "../../constants";

const bookmarks = [
    { id: '1', title: 'Bookmark 1', description: 'Description of Bookmark 1' },
    { id: '2', title: 'Bookmark 2', description: 'Description of Bookmark 2' },
    { id: '3', title: 'Bookmark 3', description: 'Description of Bookmark 3' },
    // Add more bookmarks as needed
];

const Bookmark = () => {
    const renderItem = ({ item }) => (
        <View className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-gray-800">{item.title}</Text>
            <Text className="text-gray-600">{item.description}</Text>
        </View>
    );

    return (
        <SafeAreaView className="bg-primary h-full p-4">
            <Text className="text-2xl text-white font-semibold mb-4">
                <Image
                    source={icons.bookmark}
                    resizeMode="contain"
                    className="w-6 h-6"
                />{" "}
                Bookmarks
            </Text>
            <FlatList
                data={bookmarks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
        </SafeAreaView>
    );
};

export default Bookmark;
