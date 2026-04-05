import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PassengerHistoryCard } from '../components/PassengerHistoryCard';
import { PassengerBottomNav } from '../components/PassengerBottomNav';

interface Props {
    navigate: (screen: string) => void;
}

export default function PassengerHistoryPage({ navigate }: Props) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho */}
            <View className="bg-primary pt-12 pb-4 px-6 rounded-b-3xl shadow-sm z-10">
                <View className="flex-row items-center mb-4">
                    <TouchableOpacity onPress={() => navigate('PassengerDashboard')} className="mr-3">
                        <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <Text className="text-white text-xl font-bold">Histórico de Viagens</Text>
                </View>

                {/* Barra de Pesquisa e Filtro */}
                <View className="flex-row items-center">
                    <View className="flex-1 flex-row items-center bg-primary-light px-4 py-2 rounded-xl mr-3 border border-indigo-800">
                        <Ionicons name="search" size={20} color="#9CA3AF" />
                        <TextInput
                            className="flex-1 ml-2 text-white"
                            placeholder="Buscar por local ou motorista..."
                            placeholderTextColor="#9CA3AF"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                    <TouchableOpacity className="bg-accent p-3 rounded-xl items-center justify-center">
                        <Ionicons name="filter" size={20} color="#1A237E" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Lista de Histórico */}
            <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>

                <Text className="text-gray-500 font-bold mb-4 uppercase tracking-wider text-xs">Neste mês</Text>

                <PassengerHistoryCard
                    driverName="Carlos Silva"
                    date="14 Out"
                    time="08:30"
                    pickup="Rua das Flores, 123 - Centro"
                    dropoff="Aeroporto Internacional"
                    price="55,00"
                    status="Concluída"
                    onPress={() => console.log('Abrir Detalhes')}
                />

                <PassengerHistoryCard
                    driverName="Amanda Costa"
                    date="12 Out"
                    time="18:15"
                    pickup="Shopping Morumbi"
                    dropoff="Av. Paulista, 1000"
                    price="32,50"
                    status="Concluída"
                    onPress={() => console.log('Abrir Detalhes')}
                />

                <Text className="text-gray-500 font-bold mb-4 mt-2 uppercase tracking-wider text-xs">Mês Passado</Text>

                <PassengerHistoryCard
                    driverName="Roberto Nunes"
                    date="28 Set"
                    time="14:00"
                    pickup="Estação da Luz"
                    dropoff="Parque Ibirapuera"
                    price="15,00"
                    status="Cancelada"
                    onPress={() => console.log('Abrir Detalhes')}
                />

                <PassengerHistoryCard
                    driverName="Juliana Martins"
                    date="25 Set"
                    time="22:30"
                    pickup="Teatro Municipal"
                    dropoff="Hotel Ibis"
                    price="45,00"
                    status="Reembolsada"
                    onPress={() => console.log('Abrir Detalhes')}
                />

            </ScrollView>

            {/* Bottom Navigation do Passageiro */}
            <View className="absolute bottom-0 left-0 right-0">
                <PassengerBottomNav currentScreen="PassengerHistory" navigate={navigate} />
            </View>

        </SafeAreaView>
    );
}