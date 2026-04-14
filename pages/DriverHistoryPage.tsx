import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HistoryRideCard } from '../components/HistoryRideCard';

interface Props {
    navigate: (screen: string) => void;
}

export default function DriverHistoryPage({ navigate }: Props) {
    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho e Resumo Financeiro */}
            <View className="bg-primary pt-12 pb-6 px-6 rounded-b-3xl shadow-md z-10">
                <View className="flex-row items-center justify-between mb-6">
                    <View className="flex-row items-center">
                        <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="mr-3">
                            <Ionicons name="arrow-back" size={24} color="#ffffff" />
                        </TouchableOpacity>
                        <Text className="text-white text-xl font-bold">Histórico</Text>
                    </View>
                </View>

                {/* Blocos de Resumo */}
                <View className="flex-row justify-between">
                    <View className="flex-1 bg-primary-light p-4 rounded-xl mr-2">
                        <Text className="text-accent text-xs font-medium uppercase mb-1">Lucro Total</Text>
                        <Text className="text-white text-2xl font-extrabold">R$ 3.450</Text>
                    </View>

                    <View className="flex-1 bg-primary-light p-4 rounded-xl ml-2">
                        <Text className="text-gray-300 text-xs font-medium uppercase mb-1">Corridas</Text>
                        <Text className="text-white text-2xl font-extrabold">42</Text>
                    </View>
                </View>
            </View>

            {/* Lista de Corridas Passadas */}
            <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>

                <Text className="text-surface-muted font-bold mb-4 uppercase tracking-wider text-xs">Mais Recentes</Text>

                <HistoryRideCard
                    passengerName="Amanda Silva"
                    dateTime="14 Out - 18:30"
                    distance="12.5 km"
                    totalPrice="55,00"
                    netProfit="42,50"
                    status="Concluída"
                />

                <HistoryRideCard
                    passengerName="Carlos Andrade"
                    dateTime="14 Out - 14:15"
                    distance="8.0 km"
                    totalPrice="35,00"
                    netProfit="27,00"
                    status="Concluída"
                />

                <HistoryRideCard
                    passengerName="Roberto Nunes"
                    dateTime="13 Out - 09:00"
                    distance="4.2 km"
                    totalPrice="20,00"
                    netProfit="0,00"
                    status="Cancelada"
                />

                <HistoryRideCard
                    passengerName="Juliana Costa"
                    dateTime="12 Out - 21:45"
                    distance="18.3 km"
                    totalPrice="80,00"
                    netProfit="61,80"
                    status="Concluída"
                />

            </ScrollView>
        </SafeAreaView>
    );
}