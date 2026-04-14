import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';

interface Props {
    navigate: (screen: string) => void;
}

export default function DriverAddRidePage({ navigate }: Props) {
    const [passengerName, setPassengerName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState('');

    const handleSaveRide = () => {
        console.log('Corrida salva na agenda!');
        // Volta para a agenda após salvar
        navigate('DriverAgenda');
    };

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho */}
            <View className="flex-row items-center bg-primary pt-12 pb-6 px-4 shadow-sm rounded-b-[40px] z-10">
                <TouchableOpacity onPress={() => navigate('DriverAgenda')} className="p-2">
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-2">Nova Corrida Manual</Text>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>

                    <Text className="text-surface-muted mb-6 font-medium text-sm">
                        Use esta tela para registrar corridas agendadas por fora do aplicativo (telefone, WhatsApp, etc) e manter sua agenda organizada.
                    </Text>

                    <Text className="text-primary font-bold text-lg mb-3">1. Dados do Passageiro</Text>
                    <CustomInput
                        iconName="person-outline"
                        placeholder="Nome do Passageiro"
                        value={passengerName}
                        onChangeText={setPassengerName}
                    />

                    <Text className="text-primary font-bold text-lg mt-4 mb-3">2. Data e Horário</Text>
                    <View className="flex-row justify-between mb-2">
                        <View className="flex-1 mr-2">
                            <CustomInput
                                iconName="calendar-outline"
                                placeholder="Ex: 15/10"
                                value={date}
                                onChangeText={setDate}
                            />
                        </View>
                        <View className="flex-1 ml-2">
                            <CustomInput
                                iconName="time-outline"
                                placeholder="Ex: 14:30"
                                value={time}
                                onChangeText={setTime}
                            />
                        </View>
                    </View>

                    <Text className="text-primary font-bold text-lg mt-4 mb-3">3. Trajeto e Valor</Text>
                    <CustomInput
                        iconName="location-outline"
                        placeholder="Endereço de Origem"
                        value={pickup}
                        onChangeText={setPickup}
                    />
                    <CustomInput
                        iconName="flag-outline"
                        placeholder="Endereço de Destino"
                        value={destination}
                        onChangeText={setDestination}
                    />
                    <CustomInput
                        iconName="cash-outline"
                        placeholder="Valor Combinado (R$)"
                        keyboardType="numeric"
                        value={price}
                        onChangeText={setPrice}
                    />

                    <View className="mt-8 mb-6">
                        <PrimaryButton title="Adicionar à Agenda" onPress={handleSaveRide} />
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}