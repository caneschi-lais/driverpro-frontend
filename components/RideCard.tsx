import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RideCardProps {
    passengerName: string;
    time: string;
    distance: string;
    destination: string;
    onPressDetails: () => void;
}

export function RideCard({ passengerName, time, distance, destination, onPressDetails }: RideCardProps) {
    return (
        <View className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 mb-6">
            <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                    {/* Foto de perfil falsa */}
                    <View className="w-12 h-12 bg-gray-200 rounded-full items-center justify-center mr-3">
                        <Ionicons name="person" size={24} color="#9CA3AF" />
                    </View>
                    <View>
                        <Text className="text-lg font-bold text-primary">{passengerName}</Text>
                        <Text className="text-gray-500 text-sm">Hoje, {time}</Text>
                    </View>
                </View>
                <View className="bg-[#E8EAF6] px-2 py-1 rounded">
                    <Text className="text-primary font-bold">{distance}</Text>
                </View>
            </View>

            <View className="flex-row items-center mb-4">
                <Ionicons name="location" size={20} color="#FDD835" />
                <Text className="text-gray-700 ml-2 flex-1" numberOfLines={1}>{destination}</Text>
            </View>

            <TouchableOpacity
                className="w-full bg-accent py-3 rounded-lg items-center"
                onPress={onPressDetails}
            >
                <Text className="text-primary font-bold">Ver Detalhes</Text>
            </TouchableOpacity>
        </View>
    );
}