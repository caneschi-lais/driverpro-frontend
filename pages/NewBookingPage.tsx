import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Switch, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomInput } from '../components/CustomInput';
import { CustomCheckbox } from '../components/CustomCheckbox';
import { PrimaryButton } from '../components/PrimaryButton';
import { SegmentedControl } from '../components/SegmentedControl';

interface Props {
    navigate: (screen: string) => void;
}

export default function NewBookingPage({ navigate }: Props) {
    // Estados do Formulário
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [category, setCategory] = useState<'Padrão' | 'VIP'>('Padrão');

    // Características
    const [hasPets, setHasPets] = useState(false);
    const [hasChild, setHasChild] = useState(false);
    const [hasVolume, setHasVolume] = useState(false);

    // Preferência de Motorista e Data
    const [hasPreferredDriver, setHasPreferredDriver] = useState(false);
    const [selectedDriver, setSelectedDriver] = useState<string | null>(null);

    // Mocks de motoristas para a UI
    const mockDrivers = ['Carlos Silva (Onix)', 'Amanda Costa (Corolla)', 'Roberto Nunes (HRV - VIP)'];

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho */}
            <View className="flex-row items-center bg-primary pt-12 pb-6 px-4 shadow-sm rounded-b-3xl z-10">
                <TouchableOpacity onPress={() => navigate('PassengerDashboard')} className="p-2">
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-2">Agendar Corrida</Text>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>

                    {/* 1. Rota */}
                    <Text className="text-primary font-bold text-lg mb-3">1. Qual a rota?</Text>
                    <CustomInput
                        iconName="location-outline"
                        placeholder="Local de Partida (Origem)"
                        value={origin}
                        onChangeText={setOrigin}
                    />
                    <CustomInput
                        iconName="location"
                        placeholder="Para onde vamos? (Destino)"
                        value={destination}
                        onChangeText={setDestination}
                    />

                    {/* 2. Categoria e Necessidades */}
                    <Text className="text-primary font-bold text-lg mt-4 mb-3">2. Preferências da Viagem</Text>

                    {/* Toggle Padrão / VIP */}
                    <View className="mb-4">
                        <SegmentedControl
                            options={['Padrão', 'VIP']}
                            selectedValue={category}
                            onValueChange={(val) => setCategory(val as 'Padrão' | 'VIP')}
                        />
                    </View>

                    <CustomCheckbox label="Vou levar Pets (Banho/Tosa)" iconName="paw-outline" isChecked={hasPets} onToggle={() => setHasPets(!hasPets)} />
                    <CustomCheckbox label="Preciso de Cadeirinha Infantil" iconName="body-outline" isChecked={hasChild} onToggle={() => setHasChild(!hasChild)} />
                    <CustomCheckbox label="Tenho volume/carga extra" iconName="cube-outline" isChecked={hasVolume} onToggle={() => setHasVolume(!hasVolume)} />

                    {/* 3. Motorista e Horário */}
                    <Text className="text-primary font-bold text-lg mt-4 mb-3">3. Motorista e Horário</Text>

                    <View className="flex-row items-center justify-between bg-background-paper p-4 rounded-lg shadow-sm border border-surface-border mb-4">
                        <View className="flex-row items-center flex-1 pr-2">
                            <Ionicons name="star" size={24} color="#FDD835" />
                            <Text className="text-base font-bold text-primary ml-2 flex-wrap">Tem motorista de preferência?</Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#E0E0E0", true: "#FDD835" }}
                            thumbColor={hasPreferredDriver ? "#1A237E" : "#f4f3f4"}
                            onValueChange={setHasPreferredDriver}
                            value={hasPreferredDriver}
                        />
                    </View>

                    {/* Se escolher motorista de preferência, mostra a lista */}
                    {hasPreferredDriver && (
                        <View className="mb-4">
                            <Text className="text-surface-muted text-xs mb-2 ml-1 uppercase font-bold">Selecione o Motorista:</Text>
                            {mockDrivers.map((driver) => (
                                <TouchableOpacity
                                    key={driver}
                                    onPress={() => setSelectedDriver(driver)}
                                    className={`p-4 rounded-lg border mb-2 flex-row justify-between items-center ${selectedDriver === driver ? 'bg-primary-light border-primary-dark' : 'bg-background-paper border-surface-border'}`}
                                >
                                    <Text className={`font-medium ${selectedDriver === driver ? 'text-white' : 'text-gray-700'}`}>{driver}</Text>
                                    {selectedDriver === driver && <Ionicons name="checkmark-circle" size={20} color="#FDD835" />}
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                    {/* Seleção de Data Fictícia (Para UI) */}
                    <View className="flex-row justify-between mb-6">
                        <TouchableOpacity className="flex-1 bg-background-paper border border-surface-border p-4 rounded-lg mr-2 flex-row items-center justify-between">
                            <Text className="text-gray-600 font-medium">15 Outubro</Text>
                            <Ionicons name="calendar-outline" size={20} color="#1A237E" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-1 bg-background-paper border border-surface-border p-4 rounded-lg ml-2 flex-row items-center justify-between">
                            <Text className="text-gray-600 font-medium">14:30</Text>
                            <Ionicons name="time-outline" size={20} color="#1A237E" />
                        </TouchableOpacity>
                    </View>

                    {/* Footer de Confirmação */}
                    <View className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 flex-row items-center">
                        <Ionicons name="shield-checkmark" size={24} color="#3B82F6" />
                        <Text className="text-blue-800 text-xs ml-3 flex-1">
                            Fique tranquilo! O sistema <Text className="font-bold">verificará conflitos na agenda</Text> do motorista automaticamente antes de confirmar.
                        </Text>
                    </View>

                    <PrimaryButton
                        title="Solicitar Agendamento"
                        onPress={() => {
                            console.log('Enviando solicitação...');
                            navigate('PassengerDashboard'); // Volta pro dashboard após pedir
                        }}
                    />

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}