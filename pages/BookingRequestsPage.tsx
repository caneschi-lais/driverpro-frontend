import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BookingRequestCard } from '../components/BookingRequestCard';
import { EmptyState } from '../components/EmptyState';

export default function BookingRequestsPage({ navigate }: { navigate: (screen: string) => void }) {

    // Banco de Dados Simulado
    const [requests, setRequests] = useState([
        {
            id: 1,
            passengerName: 'Sarah Silva',
            time: 'Hoje, 14:30',
            pickup: 'Rua das Acácias, 45 - Centro',
            destination: 'Aeroporto Internacional - Terminal 2',
            distance: '15.2 km',
            price: '48,50',
            category: 'VIP (Com Pet)'
        },
        {
            id: 2,
            passengerName: 'Marcos Paulo',
            time: 'Amanhã, 08:00',
            pickup: 'Condomínio Bela Vista',
            destination: 'Shopping Central',
            distance: '5.5 km',
            price: '18,50',
            category: 'Padrão'
        }
    ]);

    const handleDecline = (idToRemove: number) => {
        setRequests(requests.filter(req => req.id !== idToRemove));
    };

    const handleAccept = (id: number) => {
        console.log('Aceitou corrida', id);
        navigate('DriverDashboard');
    };

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho */}
            <View className="flex-row items-center bg-primary pt-12 pb-6 px-4 shadow-sm rounded-b-[40px]">
                <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="p-2">
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-2">Pedidos Pendentes</Text>
            </View>

            {/* Lista de Pedidos */}
            <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
                <Text className="text-surface-muted mb-5 font-medium text-sm">
                    Analise os agendamentos abaixo e aceite os que se encaixam na sua agenda.
                </Text>

                {requests.length > 0 ? (
                    requests.map((req) => (
                        <BookingRequestCard
                            key={req.id}
                            passengerName={req.passengerName}
                            time={req.time}
                            pickup={req.pickup}
                            destination={req.destination}
                            distance={req.distance}
                            estimatedPrice={req.price}
                            category={req.category}
                            onAccept={() => handleAccept(req.id)}
                            onDecline={() => handleDecline(req.id)}
                        />
                    ))
                ) : (
                    <EmptyState
                        iconName="checkmark-done-circle-outline"
                        title="Sua lista está zerada"
                        description="Você não tem nenhuma solicitação nova no momento. Fique online para receber pedidos."
                    />
                )}
            </ScrollView>

        </SafeAreaView>
    );
}