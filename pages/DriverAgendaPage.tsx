import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AgendaRideCard } from '../components/AgendaRideCard';

interface Props {
    navigate: (screen: string) => void;
}

export default function DriverAgendaPage({ navigate }: Props) {
    // Estado para simular o dia selecionado no calendário
    const [selectedDay, setSelectedDay] = useState(15);

    // Array simulando os dias da semana para o cabeçalho
    const days = [
        { day: 14, weekDay: 'Seg', hasRide: true },
        { day: 15, weekDay: 'Ter', hasRide: true },
        { day: 16, weekDay: 'Qua', hasRide: false },
        { day: 17, weekDay: 'Qui', hasRide: true },
        { day: 18, weekDay: 'Sex', hasRide: false },
    ];

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho Fixo */}
            <View className="bg-primary pt-12 pb-4 shadow-sm rounded-b-3xl z-10">
                <View className="flex-row items-center px-4 mb-4">
                    <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="p-2">
                        <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <Text className="text-white text-xl font-bold ml-2">Minha Agenda</Text>
                </View>

                {/* Calendário Semanal Horizontal */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16 }}>
                    {days.map((item) => {
                        const isSelected = selectedDay === item.day;
                        return (
                            <TouchableOpacity
                                key={item.day}
                                onPress={() => setSelectedDay(item.day)}
                                className={`items-center justify-center w-14 h-16 rounded-xl mr-3 ${isSelected ? 'bg-accent' : 'bg-primary-light'}`}
                            >
                                <Text className={`text-xs font-medium ${isSelected ? 'text-primary' : 'text-gray-300'}`}>{item.weekDay}</Text>
                                <Text className={`text-xl font-bold ${isSelected ? 'text-primary' : 'text-white'}`}>{item.day}</Text>

                                {/* Pontinho indicando que tem corrida no dia */}
                                {item.hasRide && (
                                    <View className={`w-1.5 h-1.5 rounded-full mt-1 ${isSelected ? 'bg-primary' : 'bg-accent'}`} />
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>

            {/* Lista de Corridas do Dia */}
            <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <Text className="text-gray-600 font-bold mb-4 uppercase tracking-wider">
                    Corridas do dia {selectedDay}
                </Text>

                <AgendaRideCard
                    time="08:30"
                    passengerName="Marcos Silva"
                    rideType="Padrão (Com Pet)"
                    location="Rua das Acácias, 45"
                    status="Concluída"
                />

                <AgendaRideCard
                    time="14:00"
                    passengerName="Aline Fernandes"
                    rideType="VIP"
                    location="Aeroporto Internacional"
                    status="Confirmada"
                />

                <AgendaRideCard
                    time="16:45"
                    passengerName="Roberto Costa"
                    rideType="Padrão"
                    location="Shopping Center Sul"
                    status="Pagamento Pendente"
                />
            </ScrollView>

            {/* Floating Action Button (+) */}
            <TouchableOpacity
                className="absolute bottom-6 right-6 w-16 h-16 bg-accent rounded-full items-center justify-center shadow-lg border border-yellow-400"
                onPress={() => console.log('Adicionar disponibilidade/bloqueio na agenda')}
                activeOpacity={0.8}
            >
                <Ionicons name="add" size={32} color="#1A237E" />
            </TouchableOpacity>

        </SafeAreaView>
    );
}