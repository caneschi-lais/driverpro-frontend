import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BookingRequestCard } from '../components/BookingRequestCard';
import { EmptyState } from '../components/EmptyState';

export default function BookingRequestsPage({ navigate }: { navigate: (screen: string) => void }) {
    // Simulando solicitações vindo da API
    const [requests, setRequests] = useState([
        { id: 1, passengerName: 'Sarah Silva', time: 'Agora', distance: '5.2 km', destination: 'Aeroporto Internacional', price: '45,00' },
        { id: 2, passengerName: 'Marcos Paulo', time: 'Daqui a 10 min', distance: '2.1 km', destination: 'Shopping Central', price: '18,50' }
    ]);

    // Função para remover da tela ao recusar
    const handleDecline = (idToRemove: number) => {
        setRequests(requests.filter(req => req.id !== idToRemove));
    };

    const handleAccept = (id: number) => {
        console.log('Aceitou corrida', id);
        navigate('DriverDashboard'); // Finge que aceitou e volta pro mapa/dashboard
    };

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-row items-center bg-primary pt-12 pb-6 px-4 shadow-sm rounded-b-[40px]">
                <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="p-2">
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-2">Novas Solicitações</Text>
            </View>

            <ScrollView contentContainerStyle={{ padding: 16 }} showsVerticalScrollIndicator={false}>
                {requests.length > 0 ? (
                    requests.map((req) => (
                        <BookingRequestCard
                            key={req.id}
                            passengerName={req.passengerName}
                            time={req.time}
                            distance={req.distance}
                            destination={req.destination}
                            estimatedPrice={req.price}
                            onAccept={() => handleAccept(req.id)}
                            onDecline={() => handleDecline(req.id)}
                        />
                    ))
                ) : (
                    <EmptyState
                        iconName="checkmark-done-circle-outline"
                        title="Tudo tranquilo por aqui"
                        description="Você não tem nenhuma solicitação de corrida pendente no momento. Fique online para receber novos pedidos."
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}