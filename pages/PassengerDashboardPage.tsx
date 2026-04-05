import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PassengerBottomNav } from '../components/PassengerBottomNav';

interface Props {
    navigate: (screen: string) => void;
}

export default function PassengerDashboardPage({ navigate }: Props) {
    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho Simples */}
            <View className="bg-primary pt-12 pb-6 px-6 rounded-b-3xl shadow-sm z-10 flex-row justify-between items-center">
                <View>
                    <Text className="text-white text-base">Olá, João</Text>
                    <Text className="text-white text-2xl font-bold mt-1">Para onde vamos?</Text>
                </View>
                <TouchableOpacity
                    className="w-12 h-12 bg-gray-200 rounded-full items-center justify-center border-2 border-accent"
                    onPress={() => console.log('Ir para Perfil do Passageiro')}
                >
                    <Ionicons name="person" size={24} color="#9CA3AF" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>

                {/* Acesso Rápido - Agendar Corrida */}
                <TouchableOpacity
                    className="bg-accent p-5 rounded-2xl shadow-sm mb-6 flex-row items-center justify-between"
                    onPress={() => navigate('NewBooking')}
                    activeOpacity={0.8}
                >
                    <View>
                        <Text className="text-primary font-extrabold text-xl mb-1">Agendar Motorista</Text>
                        <Text className="text-primary font-medium text-sm">Agende com antecedência e viaje seguro.</Text>
                    </View>
                    <View className="bg-primary p-2 rounded-full">
                        <Ionicons name="car-sport" size={24} color="#FDD835" />
                    </View>
                </TouchableOpacity>

                {/* Corrida de Hoje (Destaque) */}
                <Text className="text-lg font-bold text-primary mb-3">Sua Viagem de Hoje</Text>
                <View className="bg-background-paper p-5 rounded-xl shadow-sm border border-surface-border mb-6">
                    <View className="flex-row justify-between items-center mb-4">
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 bg-gray-200 rounded-full mr-3 items-center justify-center">
                                <Ionicons name="person" size={20} color="#9CA3AF" />
                            </View>
                            <View>
                                <Text className="text-base font-bold text-primary">Carlos (Motorista)</Text>
                                <Text className="text-surface-muted text-xs">Onix Prata - ABC1D23</Text>
                            </View>
                        </View>
                        <View className="bg-green-100 px-2 py-1 rounded">
                            <Text className="text-green-700 text-xs font-bold">14:30</Text>
                        </View>
                    </View>

                    <View className="flex-row items-center mb-4">
                        <Ionicons name="location" size={18} color="#FDD835" />
                        <Text className="text-gray-600 ml-2 text-sm">Aeroporto Internacional</Text>
                    </View>

                    <TouchableOpacity
                        className="w-full bg-primary py-3 rounded-lg items-center"
                        onPress={() => console.log('Detalhes da Corrida')}
                    >
                        <Text className="text-white font-bold">Ver Detalhes do Agendamento</Text>
                    </TouchableOpacity>
                </View>

                {/* Botões de Acesso Rápido Secundários */}
                <View className="flex-row justify-between mb-6">
                    <TouchableOpacity
                        className="flex-1 bg-background-paper p-4 rounded-xl shadow-sm border border-surface-border mr-2 items-center"
                        onPress={() => navigate('PassengerAgenda')}
                    >
                        <Ionicons name="calendar" size={28} color="#1A237E" className="mb-2" />
                        <Text className="text-primary font-bold text-sm text-center">Minhas{'\n'}Viagens</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-1 bg-background-paper p-4 rounded-xl shadow-sm border border-surface-border ml-2 items-center"
                        onPress={() => navigate('PassengerHistory')}
                    >
                        <Ionicons name="time" size={28} color="#1A237E" className="mb-2" />
                        <Text className="text-primary font-bold text-sm text-center">Histórico{'\n'}Passado</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            {/* Bottom Navigation */}
            <PassengerBottomNav currentScreen="PassengerDashboard" navigate={navigate} />

        </SafeAreaView>
    );
}