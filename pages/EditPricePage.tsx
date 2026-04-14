import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';

interface Props {
    navigate: (screen: string) => void;
}

export default function EditPricePage({ navigate }: Props) {
    const [price, setPrice] = useState('3.50');

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-row items-center bg-primary pt-12 pb-6 px-4 shadow-sm rounded-b-[40px]">
                <TouchableOpacity onPress={() => navigate('DriverSettings')} className="p-2">
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-2">Configurar Preço</Text>
            </View>

            <View className="p-6">
                <Text className="text-surface-muted mb-8">
                    Este valor será a base para o cálculo das suas corridas. Você pode alterá-lo a qualquer momento de acordo com seus custos.
                </Text>

                <View className="bg-background-paper p-6 rounded-3xl shadow-sm border border-surface-border items-center">
                    <Text className="text-primary font-bold text-lg mb-4">Valor por KM Rodado</Text>
                    <View className="w-full">
                        <CustomInput
                            iconName="cash-outline"
                            value={price}
                            onChangeText={setPrice}
                            placeholder="Ex: 3,50"
                            keyboardType="numeric"
                        />
                    </View>
                    <Text className="text-surface-muted text-xs mt-2 text-center">
                        Nota: Este valor reflete o quanto você deseja receber brutos por cada quilômetro de trajeto.
                    </Text>
                </View>

                <View className="mt-10">
                    <PrimaryButton title="Atualizar Preço" onPress={() => navigate('DriverSettings')} />
                </View>
            </View>
        </SafeAreaView>
    );
}