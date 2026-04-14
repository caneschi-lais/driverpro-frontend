import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PassengerAgendaCard } from '../components/PassengerAgendaCard';
import { PassengerBottomNav } from '../components/PassengerBottomNav';
import { EmptyState } from '../components/EmptyState';

interface Props {
    navigate: (screen: string) => void;
}

export default function PassengerAgendaPage({ navigate }: Props) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const weekDaysShort = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    // Array simulando o banco de dados: O Passageiro tem corrida nos dias 15 e 20
    const daysWithRides = [15, 20];

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
        const date = new Date(year, month, i + 1);
        const dayNumber = i + 1;
        return {
            day: dayNumber,
            weekDay: weekDaysShort[date.getDay()],
            hasRide: daysWithRides.includes(dayNumber),
        };
    });

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
        setSelectedDay(1);
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
        setSelectedDay(1);
    };

    const hasRidesToday = daysWithRides.includes(selectedDay);

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho Fixo e Seletor de Mês */}
            <View className="bg-primary pt-12 pb-4 shadow-sm rounded-b-[40px] z-10">
                <View className="flex-row items-center px-4 mb-2">
                    <TouchableOpacity onPress={() => navigate('PassengerDashboard')} className="p-2">
                        <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <Text className="text-white text-xl font-bold ml-2">Minhas Viagens</Text>
                </View>

                {/* Seletor de Mês/Ano */}
                <View className="flex-row justify-between items-center px-6 mb-4">
                    <TouchableOpacity onPress={handlePrevMonth} className="p-2 bg-primary-light rounded-full">
                        <Ionicons name="chevron-back" size={20} color="#FDD835" />
                    </TouchableOpacity>

                    <Text className="text-white text-lg font-bold">
                        {monthNames[month]} {year}
                    </Text>

                    <TouchableOpacity onPress={handleNextMonth} className="p-2 bg-primary-light rounded-full">
                        <Ionicons name="chevron-forward" size={20} color="#FDD835" />
                    </TouchableOpacity>
                </View>

                {/* Calendário Semanal Horizontal Dinâmico */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                >
                    {daysArray.map((item) => {
                        const isSelected = selectedDay === item.day;
                        return (
                            <TouchableOpacity
                                key={item.day}
                                onPress={() => setSelectedDay(item.day)}
                                className={`items-center justify-center w-14 h-16 rounded-xl mr-3 ${isSelected ? 'bg-accent' : 'bg-primary-light'}`}
                            >
                                <Text className={`text-[10px] font-bold uppercase ${isSelected ? 'text-primary' : 'text-surface-muted'}`}>
                                    {item.weekDay}
                                </Text>
                                <Text className={`text-xl font-bold ${isSelected ? 'text-primary' : 'text-white'}`}>
                                    {item.day}
                                </Text>

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
            <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <Text className="text-surface-muted font-bold mb-4 uppercase tracking-wider text-xs">
                    Agendamentos para {selectedDay} de {monthNames[month]}
                </Text>

                {hasRidesToday ? (
                    <>
                        {selectedDay === 15 && (
                            <PassengerAgendaCard
                                time="19:00"
                                driverName="Buscando Motorista..."
                                status="Pendente"
                                onCancel={() => console.log('Cancelar')}
                                onReschedule={() => console.log('Reagendar')}
                            />
                        )}

                        {(selectedDay === 15 || selectedDay === 20) && (
                            <PassengerAgendaCard
                                time="14:30"
                                driverName="Carlos Silva"
                                carInfo="Onix Prata - ABC1D23"
                                status="Confirmada"
                                onCancel={() => console.log('Cancelar')}
                                onReschedule={() => console.log('Reagendar')}
                            />
                        )}
                    </>
                ) : (
                    <EmptyState
                        iconName="car-sport-outline"
                        title="Nenhuma viagem agendada"
                        description="Você não possui viagens para este dia. Que tal agendar uma nova corrida?"
                        actionTitle="Agendar Agora"
                        onAction={() => navigate('NewBooking')}
                    />
                )}
            </ScrollView>

            {/* Bottom Navigation do Passageiro */}
            <View className="absolute bottom-0 left-0 right-0">
                <PassengerBottomNav currentScreen="PassengerAgenda" navigate={navigate} />
            </View>

        </SafeAreaView>
    );
}