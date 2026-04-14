import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PassengerHistoryCard } from '../components/PassengerHistoryCard';
import { PassengerBottomNav } from '../components/PassengerBottomNav';
import { EmptyState } from '../components/EmptyState';
import { SegmentedControl } from '../components/SegmentedControl';

interface Props {
    navigate: (screen: string) => void;
}

export default function PassengerHistoryPage({ navigate }: Props) {
    const [searchQuery, setSearchQuery] = useState('');

    const [filterStatus, setFilterStatus] = useState('Todas'); // Pode ser: 'Todas', 'Concluídas', 'Canceladas'

    // Banco de Dados Fictício
    const [history] = useState([
        { id: 1, driver: 'Carlos Silva', date: '14 Out', time: '08:30', pickup: 'Rua das Acácias, 45 - Centro', dropoff: 'Aeroporto Internacional', price: '55,00', status: 'Concluída' as const },
        { id: 2, driver: 'Amanda Costa', date: '12 Out', time: '18:15', pickup: 'Shopping Morumbi', dropoff: 'Av. Paulista, 1000', price: '32,50', status: 'Concluída' as const },
        { id: 3, driver: 'Roberto Nunes', date: '28 Set', time: '14:00', pickup: 'Estação da Luz', dropoff: 'Parque Ibirapuera', price: '15,00', status: 'Cancelada' as const },
    ]);

    const filteredHistory = history.filter(item => {
        // 1. Verifica se bate com a barra de pesquisa
        const matchesSearch = item.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.dropoff.toLowerCase().includes(searchQuery.toLowerCase());

        // 2. Verifica se bate com o botão selecionado
        const matchesStatus = filterStatus === 'Todas' ? true :
            (filterStatus === 'Concluídas' ? item.status === 'Concluída' : item.status === 'Cancelada');

        return matchesSearch && matchesStatus;
    });

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho com Barra de Pesquisa */}
            <View className="bg-primary pt-12 pb-6 px-4 shadow-sm rounded-b-[40px] z-10">
                <Text className="text-white text-2xl font-bold mb-4 ml-2">Histórico</Text>

                <View className="flex-row items-center bg-white/20 rounded-2xl px-4 py-3 mx-2">
                    <Ionicons name="search" size={20} color="#ffffff" />
                    <TextInput
                        className="flex-1 text-white ml-2 font-medium"
                        placeholder="Buscar por motorista ou destino..."
                        placeholderTextColor="#E0E0E0"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>

            <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>

                {/* Filtros em Botão */}
                <View className="mb-6 mt-2">
                    <SegmentedControl
                        options={['Todas', 'Concluídas', 'Canceladas']}
                        selectedValue={filterStatus}
                        onValueChange={setFilterStatus}
                    />
                </View>

                <Text className="text-surface-muted font-bold mb-4 uppercase tracking-wider text-xs">
                    {filterStatus === 'Todas' ? 'Todas as Viagens' : `Viagens ${filterStatus}`}
                </Text>

                {filteredHistory.length > 0 ? (
                    filteredHistory.map((item) => (
                        <PassengerHistoryCard
                            key={item.id}
                            driverName={item.driver}
                            date={item.date}
                            time={item.time}
                            pickup={item.pickup}
                            dropoff={item.dropoff}
                            price={item.price}
                            status={item.status}
                            onPress={() => console.log('Abrir Recibo', item.id)}
                        />
                    ))
                ) : (
                    <EmptyState
                        iconName="search-outline"
                        title="Nenhuma corrida encontrada"
                        description={searchQuery ? `Não encontramos resultados para "${searchQuery}".` : `Você não tem viagens ${filterStatus.toLowerCase()}.`}
                    />
                )}
            </ScrollView>

            {/* Bottom Nav */}
            <View className="absolute bottom-0 left-0 right-0">
                <PassengerBottomNav currentScreen="PassengerHistory" navigate={navigate} />
            </View>

        </SafeAreaView>
    );
}