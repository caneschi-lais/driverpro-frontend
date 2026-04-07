import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AgendaRideCard } from '../components/AgendaRideCard';
import { DriverBottomNav } from '../components/DriverBottomNav';
import { EmptyState } from '../components/EmptyState'; // Adicionado caso o dia não tenha corridas

interface Props {
    navigate: (screen: string) => void;
}

export default function DriverAgendaPage({ navigate }: Props) {
    // Lógica de Datas Reais
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Descobre quantos dias tem o mês atual selecionado
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const weekDaysShort = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    // Array simulando o banco de dados: Quais dias deste mês o motorista tem corrida?
    const daysWithRides = [12, 15, 28];

    // Gera o array de dias daquele mês dinamicamente
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
        const date = new Date(year, month, i + 1);
        const dayNumber = i + 1;
        return {
            day: dayNumber,
            weekDay: weekDaysShort[date.getDay()],
            // Verifica se o dia atual está dentro do array de dias com corrida
            hasRide: daysWithRides.includes(dayNumber),
        };
    });

    // A variável que controla a lista de baixo
    const hasRidesToday = daysWithRides.includes(selectedDay);

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho Fixo e Seletor de Mês */}
            <View className="bg-primary pt-12 pb-4 shadow-sm rounded-b-[40px] z-10">
                <View className="flex-row items-center px-4 mb-2">
                    <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="p-2">
                        <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <Text className="text-white text-xl font-bold ml-2">Minha Agenda</Text>
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
                <Text className="text-surface-muted font-bold mb-4 uppercase tracking-wider text-xs">
                    Corridas para {selectedDay} de {monthNames[month]}
                </Text>

                {hasRidesToday ? (
                    <>
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
                    </>
                ) : (
                    <EmptyState
                        iconName="calendar-clear-outline"
                        title="Dia Livre"
                        description="Você não possui corridas agendadas para este dia."
                    />
                )}
            </ScrollView>

            {/* Floating Action Button (+) */}
            <TouchableOpacity
                className="absolute bottom-20 right-6 w-16 h-16 bg-accent rounded-full items-center justify-center shadow-lg border border-accent-light"
                onPress={() => console.log('Adicionar bloqueio na agenda')}
                activeOpacity={0.8}
            >
                <Ionicons name="add" size={32} color="#1A237E" />
            </TouchableOpacity>

            {/* Bottom Nav */}
            <View className="absolute bottom-0 left-0 right-0">
                <DriverBottomNav currentScreen="DriverAgenda" navigate={navigate} />
            </View>

        </SafeAreaView>
    );
}