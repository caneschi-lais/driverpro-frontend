import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomInput } from '../components/CustomInput';
import { CustomCheckbox } from '../components/CustomCheckbox';
import { PrimaryButton } from '../components/PrimaryButton';

interface Props {
    navigate: (screen: string) => void;
}

export default function CarRegistrationPage({ navigate }: Props) {
    // Estados dos inputs de texto
    const [carModel, setCarModel] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [capacity, setCapacity] = useState('');
    const [fuelConsumption, setFuelConsumption] = useState('');

    // Estados dos checkboxes
    const [acceptsPets, setAcceptsPets] = useState(false);
    const [acceptsChildSeat, setAcceptsChildSeat] = useState(false);
    const [acceptsVolume, setAcceptsVolume] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-background">
            {/* Cabeçalho com botão de voltar */}
            <View className="flex-row items-center bg-primary pt-12 pb-6 px-4 shadow-sm rounded-b-3xl z-10">
                <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="p-2">
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-2">Dados do Veículo</Text>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>

                    <Text className="text-gray-600 font-medium mb-6">
                        Preencha os detalhes do seu carro para que os passageiros saibam o que você pode transportar.
                    </Text>

                    {/* Informações Básicas */}
                    <Text className="text-primary font-bold text-lg mb-3">Informações Básicas</Text>
                    <CustomInput
                        iconName="car-sport-outline"
                        placeholder="Modelo do Carro (ex: Onix, HB20)"
                        value={carModel}
                        onChangeText={setCarModel}
                    />

                    <CustomInput
                        iconName="barcode-outline"
                        placeholder="Placa do Veículo"
                        autoCapitalize="characters"
                        value={licensePlate}
                        onChangeText={setLicensePlate}
                    />

                    <View className="flex-row justify-between">
                        <View className="flex-1 mr-2">
                            <CustomInput
                                iconName="people-outline"
                                placeholder="Passageiros"
                                keyboardType="numeric"
                                value={capacity}
                                onChangeText={setCapacity}
                            />
                        </View>
                        <View className="flex-1 ml-2">
                            <CustomInput
                                iconName="speedometer-outline"
                                placeholder="Consumo (km/L)"
                                keyboardType="numeric"
                                value={fuelConsumption}
                                onChangeText={setFuelConsumption}
                            />
                        </View>
                    </View>

                    {/* Tipos de Carga / Diferenciais */}
                    <Text className="text-primary font-bold text-lg mt-4 mb-3">Diferenciais e Cargas</Text>

                    <CustomCheckbox
                        label="Aceita Pets (Banho e Tosa)"
                        iconName="paw-outline"
                        isChecked={acceptsPets}
                        onToggle={() => setAcceptsPets(!acceptsPets)}
                    />

                    <CustomCheckbox
                        label="Possui Cadeirinha de Criança"
                        iconName="body-outline"
                        isChecked={acceptsChildSeat}
                        onToggle={() => setAcceptsChildSeat(!acceptsChildSeat)}
                    />

                    <CustomCheckbox
                        label="Aceita Pequenos Volumes/Cargas"
                        iconName="cube-outline"
                        isChecked={acceptsVolume}
                        onToggle={() => setAcceptsVolume(!acceptsVolume)}
                    />

                    {/* Botão de Salvar */}
                    <View className="mt-8 mb-6">
                        <PrimaryButton
                            title="Salvar Dados do Veículo"
                            onPress={() => {
                                console.log('Salvar Carro', { carModel, licensePlate, capacity, fuelConsumption });
                                navigate('DriverDashboard');
                            }}
                        />
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}