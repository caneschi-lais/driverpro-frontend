import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PassengerAgendaCard } from '../components/PassengerAgendaCard';
import { PassengerBottomNav } from '../components/PassengerBottomNav';

interface Props {
    navigate: (screen: string) => void;
}

export default function PassengerAgendaPage({ navigate }: Props) {
    // Simulando o dia selecionado
    const [selectedDay, setSelectedDay] = useState(15);

    // Dias do calendário (mock)
    const days = [
        { day: 14, weekDay: 'Seg', hasRide: false },
        { day: 15, weekDay: 'Ter', hasRide: true },
        { day: 16, weekDay: 'Qua', hasRide: true },
        { day: 17, weekDay: 'Qui', hasRide: false },
        { day: 18, weekDay: 'Sex', hasRide: false },
    ];

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho e Calendário */}
            <View className="bg-primary pt-12 pb-4 shadow-sm rounded-b-3xl z-10">
                <View className="flex-row items-center px-4 mb-4">
                    <TouchableOpacity onPress={() => navigate('PassengerDashboard')} className="p-2">
                        <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <Text className="text-white text-xl font-bold ml-2">Minhas Viagens</Text>
                </View>

                {/* Calendário Semanal */}
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

                                {/* Ponto indicando agendamento */}
                                {item.hasRide && (
                                    <View className={`w-1.5 h-1.5 rounded-full mt-1 ${isSelected ? 'bg-primary' : 'bg-accent'}`} />
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>

            {/* Lista de Agendamentos */}
            <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
                <Text className="text-surface-muted font-bold mb-4 uppercase tracking-wider text-xs">
                    Agendamentos para o dia {selectedDay}
                </Text>

                <PassengerAgendaCard
                    time="14:30"
                    driverName="Carlos Silva"
                    carInfo="Onix Prata - ABC1D23"
                    status="Confirmada"
                    onCancel={() => console.log('Cancelar')}
                    onReschedule={() => console.log('Reagendar')}
                />

                <PassengerAgendaCard
                    time="19:00"
                    driverName="Buscando Motorista..."
                    status="Pendente"
                    onCancel={() => console.log('Cancelar')}
                    onReschedule={() => console.log('Reagendar')}
                />

            </ScrollView>

            {/* Bottom Navigation do Passageiro */}
            <PassengerBottomNav currentScreen="PassengerAgenda" navigate={navigate} />

        </SafeAreaView>
    );
}