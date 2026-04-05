import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BookingRequestCardProps {
    passengerName: string;
    date: string;
    time: string;
    pickup: string;
    dropoff: string;
    rideType: string;
    price: string;
    onAccept: () => void;
    onDecline: () => void;
}

export function BookingRequestCard({
    passengerName, date, time, pickup, dropoff, rideType, price, onAccept, onDecline
}: BookingRequestCardProps) {
    return (
        <View className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-4">

            {/* Cabeçalho: Foto, Nome, Tipo e Preço */}
            <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                    <View className="w-12 h-12 bg-gray-200 rounded-full items-center justify-center mr-3">
                        <Ionicons name="person" size={24} color="#9CA3AF" />
                    </View>
                    <View>
                        <Text className="text-lg font-bold text-primary">{passengerName}</Text>
                        <View className="bg-accent px-2 py-0.5 rounded self-start mt-1">
                            <Text className="text-primary text-xs font-bold uppercase">{rideType}</Text>
                        </View>
                    </View>
                </View>
                <View className="items-end">
                    <Text className="text-lg font-bold text-[#4CAF50]">{price}</Text>
                </View>
            </View>

            {/* Detalhes: Data/Hora e Locais */}
            <View className="mb-5">
                <View className="flex-row items-center mb-3">
                    <Ionicons name="calendar-outline" size={18} color="#6B7280" />
                    <Text className="text-gray-600 font-medium ml-2">{date} às {time}</Text>
                </View>

                <View className="flex-row items-start mb-2">
                    <Ionicons name="location-outline" size={18} color="#3B82F6" className="mt-0.5" />
                    <View className="ml-2 flex-1">
                        <Text className="text-gray-400 text-xs">Origem</Text>
                        <Text className="text-gray-800 font-medium">{pickup}</Text>
                    </View>
                </View>

                <View className="flex-row items-start">
                    <Ionicons name="location" size={18} color="#EF4444" className="mt-0.5" />
                    <View className="ml-2 flex-1">
                        <Text className="text-gray-400 text-xs">Destino</Text>
                        <Text className="text-gray-800 font-medium">{dropoff}</Text>
                    </View>
                </View>
            </View>

            {/* Botões de Ação */}
            <View className="flex-row justify-between pt-4 border-t border-gray-100">
                <TouchableOpacity
                    className="flex-1 border border-gray-300 py-3 rounded-lg items-center mr-2"
                    onPress={onDecline}
                >
                    <Text className="text-gray-600 font-bold">Recusar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex-1 bg-primary py-3 rounded-lg items-center ml-2"
                    onPress={onAccept}
                >
                    <Text className="text-white font-bold">Aceitar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}