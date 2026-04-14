import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from '../components/Avatar';
import { StatusBadge } from '../components/StatusBadge';
import { PrimaryButton } from '../components/PrimaryButton';

interface Props {
    navigate: (screen: string) => void;
}

export default function RideDetailsPage({ navigate }: Props) {
    return (
        <SafeAreaView className="flex-1 bg-background">
            {/* Cabeçalho */}
            <View className="flex-row items-center bg-primary pt-12 pb-6 px-4 shadow-sm rounded-b-[40px]">
                <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="p-2">
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-2">Detalhes da Corrida</Text>
            </View>

            <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
                {/* Info do Passageiro */}
                <View className="flex-row items-center bg-background-paper p-4 rounded-2xl shadow-sm border border-surface-border mb-6">
                    <Avatar size="lg" />
                    <View className="ml-4 flex-1">
                        <Text className="text-xl font-bold text-primary">Sarah Silva</Text>
                        <Text className="text-surface-muted">Passageira há 2 anos</Text>
                    </View>
                    <StatusBadge status="Confirmada" />
                </View>

                {/* Detalhes da Rota */}
                <View className="bg-background-paper p-5 rounded-2xl shadow-sm border border-surface-border mb-6">
                    <Text className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">Trajeto</Text>

                    <View className="flex-row mb-6">
                        <View className="items-center mr-4">
                            <View className="w-3 h-3 rounded-full bg-status-info" />
                            <View className="w-0.5 h-10 bg-gray-200 my-1" />
                            <View className="w-3 h-3 rounded-full bg-status-danger" />
                        </View>
                        <View className="flex-1 justify-between">
                            <View>
                                <Text className="text-surface-muted text-xs">Origem</Text>
                                <Text className="text-primary font-bold">Rua das Acácias, 45 - Centro</Text>
                            </View>
                            <View className="mt-4">
                                <Text className="text-surface-muted text-xs">Destino</Text>
                                <Text className="text-primary font-bold">Aeroporto Internacional - Terminal 2</Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex-row justify-between border-t border-gray-100 pt-4">
                        <View>
                            <Text className="text-surface-muted text-xs">Distância</Text>
                            <Text className="text-lg font-bold text-primary">15.2 km</Text>
                        </View>
                        <View className="items-end">
                            <Text className="text-surface-muted text-xs">Horário</Text>
                            <Text className="text-lg font-bold text-primary">14:30</Text>
                        </View>
                    </View>
                </View>

                {/* Preferências e Lucro */}
                <View className="flex-row mb-6">
                    <View className="flex-1 bg-blue-50 p-4 rounded-2xl border border-blue-100 mr-2">
                        <Text className="text-blue-800 font-bold text-xs mb-2">Observações</Text>
                        <View className="flex-row items-center mb-1">
                            <Ionicons name="paw" size={14} color="#1E40AF" />
                            <Text className="text-blue-700 text-xs ml-2">Leva Pet</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Ionicons name="briefcase" size={14} color="#1E40AF" />
                            <Text className="text-blue-700 text-xs ml-2">2 Malas</Text>
                        </View>
                    </View>

                    <View className="flex-1 bg-green-50 p-4 rounded-2xl border border-green-100 ml-2">
                        <Text className="text-green-800 font-bold text-xs mb-1">Lucro Estimado</Text>
                        <Text className="text-2xl font-black text-status-success">R$ 48,50</Text>
                        <Text className="text-green-600 text-[10px]">Já descontado combustível</Text>
                    </View>
                </View>

                <PrimaryButton title="Iniciar Corrida" onPress={() => console.log('Iniciar')} />

                <TouchableOpacity className="mt-4 items-center p-2">
                    <Text className="text-status-danger font-bold">Cancelar Agendamento</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}