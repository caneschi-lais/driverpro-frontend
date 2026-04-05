import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BookingRequestCard } from '../components/BookingRequestCard';
import { EmptyState } from '../components/EmptyState';

interface Props {
    navigate: (screen: string) => void;
}

export default function BookingRequestsPage({ navigate }: Props) {
    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho com botão de voltar */}
            <View className="flex-row items-center bg-primary pt-12 pb-4 px-4 shadow-sm">
                <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="p-2">
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-2">Novas Solicitações</Text>
            </View>

            {/* Lista de Solicitações */}
            <ScrollView contentContainerStyle={{ padding: 16 }} showsVerticalScrollIndicator={false}>
                <Text className="text-surface-muted mb-4 font-medium">Você tem 2 pedidos pendentes:</Text>

                <BookingRequestCard
                    passengerName="Carlos Andrade"
                    date="15 de Outubro"
                    time="08:00"
                    pickup="Rua das Flores, 123 - Centro"
                    dropoff="Aeroporto Internacional"
                    rideType="VIP"
                    price="R$ 120,00"
                    onAccept={() => console.log('Aceitou a corrida do Carlos')}
                    onDecline={() => console.log('Recusou a corrida do Carlos')}
                />

                <BookingRequestCard
                    passengerName="Mariana Costa"
                    date="15 de Outubro"
                    time="18:30"
                    pickup="Shopping Morumbi"
                    dropoff="Av. Paulista, 1000"
                    rideType="Padrão"
                    price="R$ 45,00"
                    onAccept={() => console.log('Aceitou a corrida da Mariana')}
                    onDecline={() => console.log('Recusou a corrida da Mariana')}
                />

                {/* Caso não haja solicitações: */}
                {/* <EmptyState 
                        iconName="checkmark-done-circle-outline"
                        title="Tudo tranquilo por aqui"
                        description="Você não tem nenhuma solicitação de corrida pendente no momento. Fique online para receber novos pedidos."
                    /> */}
            </ScrollView>
        </SafeAreaView>
    );
}