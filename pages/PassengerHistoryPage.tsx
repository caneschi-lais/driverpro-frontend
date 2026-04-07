import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PassengerHistoryCard } from '../components/PassengerHistoryCard';
import { PassengerBottomNav } from '../components/PassengerBottomNav';
import { EmptyState } from '../components/EmptyState';

// ... (Restante das interfaces)

export default function PassengerHistoryPage({ navigate }: Props) {
    const [searchQuery, setSearchQuery] = useState('');

    // Banco de Dados Fictício
    const [history] = useState([
        { id: 1, driver: 'Carlos Silva', date: '14 Out', time: '08:30', pickup: 'Rua das Flores, 123', dropoff: 'Aeroporto Internacional', price: '55,00', status: 'Concluída' as const },
        { id: 2, driver: 'Amanda Costa', date: '12 Out', time: '18:15', pickup: 'Shopping Morumbi', dropoff: 'Av. Paulista, 1000', price: '32,50', status: 'Concluída' as const },
        { id: 3, driver: 'Roberto Nunes', date: '28 Set', time: '14:00', pickup: 'Estação da Luz', dropoff: 'Parque Ibirapuera', price: '15,00', status: 'Cancelada' as const },
    ]);

    // A Mágica do Filtro: Pesquisa por nome do motorista ou destino
    const filteredHistory = history.filter(item =>
        item.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.dropoff.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView className="flex-1 bg-background">
            {/* ... (Seu código atual do cabeçalho com o TextInput chamando setSearchQuery) ... */}

            <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
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
                            onPress={() => console.log('Abrir Detalhes')}
                        />
                    ))
                ) : (
                    <EmptyState
                        iconName="search-outline"
                        title="Nenhum resultado"
                        description={`Não encontramos corridas para "${searchQuery}". Tente buscar por outro motorista ou destino.`}
                    />
                )}
            </ScrollView>

            {/* ... (Seu código da BottomNav) ... */}
        </SafeAreaView>
    );
}