import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SummaryCard } from '../components/SummaryCard';
import { RideCard } from '../components/RideCard';
import { DriverHeader } from '../components/DriverHeader';
import { DriverBottomNav } from '../components/DriverBottomNav';

interface Props {
    navigate: (screen: string) => void;
}

export default function DriverDashboardPage({ navigate }: Props) {
    const [isAvailable, setIsAvailable] = useState(true);

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* 1. Header Componentizado */}
            <DriverHeader
                subtitle="Olá, Motorista"
                title="Bem-vindo!"
                rightIcon="settings-outline"
                onRightPress={() => navigate('DriverSettings')}
            />

            <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>

                {/* Toggle de Disponibilidade */}
                <View className="flex-row items-center justify-between bg-background-paper p-4 rounded-lg shadow-sm border border-surface-border mb-6">
                    <View className="flex-row items-center">
                        <Ionicons name={isAvailable ? "checkmark-circle" : "close-circle"} size={24} color={isAvailable ? "#4CAF50" : "#F44336"} />
                        <Text className="text-lg font-bold text-primary ml-2">
                            {isAvailable ? "Disponível para corridas" : "Indisponível"}
                        </Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#E0E0E0", true: "#FDD835" }}
                        thumbColor={isAvailable ? "#1A237E" : "#f4f3f4"}
                        onValueChange={() => setIsAvailable(!isAvailable)}
                        value={isAvailable}
                    />
                </View>

                {/* Resumo do Dia */}
                <Text className="text-lg font-bold text-primary mb-3">Resumo de Hoje</Text>
                <View className="flex-row justify-between mb-6 -mx-1">
                    <SummaryCard title="Corridas" value="05" iconName="car-outline" />
                    <SummaryCard title="Ganhos (Est.)" value="R$ 150" iconName="cash-outline" />
                </View>

                {/* Próxima Corrida */}
                <Text className="text-lg font-bold text-primary mb-3">Próxima Agendada</Text>
                <RideCard
                    passengerName="Sarah Silva"
                    time="14:30"
                    distance="5.2 km"
                    destination="Aeroporto Internacional"
                    onPressDetails={() => navigate('RideDetails')}
                />

                {/* Botão de Solicitações Pendentes */}
                <TouchableOpacity
                    className="bg-primary flex-row items-center justify-between p-4 rounded-lg shadow-sm mb-6 mt-4"
                    onPress={() => navigate('BookingRequests')}
                >
                    <View className="flex-row items-center">
                        <Ionicons name="notifications" size={24} color="#FDD835" />
                        <Text className="text-white font-bold text-base ml-3">Pedidos Pendentes</Text>
                    </View>
                    <View className="bg-red-500 w-6 h-6 rounded-full items-center justify-center">
                        <Text className="text-white text-xs font-bold">2</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>

            {/* 2. Bottom Nav Componentizada */}
            <DriverBottomNav currentScreen="DriverDashboard" navigate={navigate} />

        </SafeAreaView>
    );
}