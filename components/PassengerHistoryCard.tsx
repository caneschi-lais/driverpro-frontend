import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from '../components/Avatar';

interface PassengerHistoryCardProps {
    driverName: string;
    date: string;
    time: string;
    pickup: string;
    dropoff: string;
    price: string;
    status: 'Concluída' | 'Cancelada' | 'Reembolsada';
    onPress: () => void;
}

export function PassengerHistoryCard({ driverName, date, time, pickup, dropoff, price, status, onPress }: PassengerHistoryCardProps) {
    // Definindo as cores da tag com base no status exigido no escopo
    let statusColor = 'bg-gray-100 text-gray-600 border-surface-border'; // Reembolsada
    if (status === 'Concluída') statusColor = 'bg-green-100 text-green-700 border-green-200';
    if (status === 'Cancelada') statusColor = 'bg-red-100 text-red-700 border-red-200';

    return (
        <TouchableOpacity
            className="bg-background-paper p-4 rounded-xl shadow-sm border border-surface-border mb-4 flex-row items-center"
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View className="flex-1 pr-2">
                {/* Topo do Card: Motorista, Data e Status */}
                <View className="flex-row justify-between items-start mb-3">
                    <View className="flex-row items-center">
                        <View className="mr-3">
                            <Avatar size="md" />
                        </View>
                        <View>
                            <Text className="text-base font-bold text-primary">{driverName}</Text>
                            <Text className="text-surface-muted text-xs">{date} às {time}</Text>
                        </View>
                    </View>
                </View>

                {/* Origem e Destino */}
                <View className="mb-3 pl-1">
                    <View className="flex-row items-center mb-1">
                        <View className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                        <Text className="text-gray-600 text-xs flex-1" numberOfLines={1}>{pickup}</Text>
                    </View>
                    <View className="flex-row items-center">
                        <View className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                        <Text className="text-gray-800 font-medium text-xs flex-1" numberOfLines={1}>{dropoff}</Text>
                    </View>
                </View>

                {/* Preço e Status */}
                <View className="flex-row items-center justify-between mt-1">
                    <Text className="text-lg font-bold text-primary">R$ {price}</Text>
                    <View className={`px-2 py-1 rounded-md border ${statusColor}`}>
                        <Text className="text-[10px] font-bold uppercase">{status}</Text>
                    </View>
                </View>
            </View>

            {/* Seta indicando que é clicável (Chevron) */}
            <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />

        </TouchableOpacity>
    );
}