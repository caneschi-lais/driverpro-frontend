import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Switch, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';

interface Props {
    navigate: (screen: string) => void;
}

export default function CalculatorPage({ navigate }: Props) {
    // Estados para os inputs
    const [distance, setDistance] = useState('');
    const [consumption, setConsumption] = useState('');
    const [fuelPrice, setFuelPrice] = useState('');
    const [pricePerKm, setPricePerKm] = useState('');
    const [isRoundTrip, setIsRoundTrip] = useState(false);

    // Estado para armazenar o resultado do cálculo
    const [results, setResults] = useState<{ cost: string; profit: string; total: string } | null>(null);

    const handleCalculate = () => {
        Keyboard.dismiss(); // Esconde o teclado

        // Converte os textos para números (ou 0 se estiver vazio)
        const dist = parseFloat(distance.replace(',', '.')) || 0;
        const cons = parseFloat(consumption.replace(',', '.')) || 1; // 1 para evitar divisão por zero
        const fPrice = parseFloat(fuelPrice.replace(',', '.')) || 0;
        const pKm = parseFloat(pricePerKm.replace(',', '.')) || 0;

        // Lógica de Negócio
        const totalDist = isRoundTrip ? dist * 2 : dist;
        const fuelUsedLiters = totalDist / cons;

        const estimatedCost = fuelUsedLiters * fPrice;
        const totalPrice = totalDist * pKm;
        const netProfit = totalPrice - estimatedCost;

        // Atualiza o estado formatando para 2 casas decimais
        setResults({
            cost: estimatedCost.toFixed(2).replace('.', ','),
            profit: netProfit.toFixed(2).replace('.', ','),
            total: totalPrice.toFixed(2).replace('.', ',')
        });
    };

    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Cabeçalho com botão de voltar */}
            <View className="flex-row items-center bg-primary pt-12 pb-6 px-4 shadow-sm rounded-b-3xl">
                <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="p-2">
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-2">Calculadora de Preço</Text>
            </View>

            <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>

                <Text className="text-gray-600 mb-4 font-medium">Insira os dados da viagem para calcular a estimativa de lucro e custo.</Text>

                {/* Inputs */}
                <CustomInput
                    iconName="map-outline"
                    placeholder="Distância da corrida (km)"
                    keyboardType="numeric"
                    value={distance}
                    onChangeText={setDistance}
                />

                <CustomInput
                    iconName="speedometer-outline"
                    placeholder="Consumo do seu carro (km/L)"
                    keyboardType="numeric"
                    value={consumption}
                    onChangeText={setConsumption}
                />

                <CustomInput
                    iconName="water-outline"
                    placeholder="Preço do litro do combustível (R$)"
                    keyboardType="numeric"
                    value={fuelPrice}
                    onChangeText={setFuelPrice}
                />

                <CustomInput
                    iconName="cash-outline"
                    placeholder="Seu preço cobrado por km (R$)"
                    keyboardType="numeric"
                    value={pricePerKm}
                    onChangeText={setPricePerKm}
                />

                {/* Toggle Ida e Volta */}
                <View className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 mt-2">
                    <View className="flex-row items-center">
                        <Ionicons name="swap-horizontal" size={24} color="#1A237E" />
                        <Text className="text-base font-bold text-primary ml-2">Viagem de Ida e Volta?</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#E0E0E0", true: "#FDD835" }}
                        thumbColor={isRoundTrip ? "#1A237E" : "#f4f3f4"}
                        onValueChange={setIsRoundTrip}
                        value={isRoundTrip}
                    />
                </View>

                {/* Botão de Calcular */}
                <PrimaryButton title="Calcular Valores" onPress={handleCalculate} />

                {/* Seção de Resultados */}
                {results && (
                    <View className="mt-8 mb-6">
                        <Text className="text-xl font-bold text-primary mb-4">Resultado</Text>

                        <View className="flex-row justify-between mb-4">
                            <View className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-100 mr-2 items-center">
                                <Text className="text-gray-500 text-xs font-medium mb-1">Custo Estimado</Text>
                                <Text className="text-lg font-bold text-[#EF4444]">R$ {results.cost}</Text>
                            </View>

                            <View className="flex-1 bg-primary p-4 rounded-lg shadow-sm ml-2 items-center">
                                <Text className="text-accent text-xs font-medium mb-1">Seu Lucro Líquido</Text>
                                <Text className="text-xl font-bold text-white">R$ {results.profit}</Text>
                            </View>
                        </View>

                        <View className="bg-white p-5 rounded-lg shadow-sm border border-dashed border-[#FDD835] items-center">
                            <Text className="text-gray-600 font-medium mb-1">Preço Total a Cobrar do Passageiro</Text>
                            <Text className="text-3xl font-bold text-primary">R$ {results.total}</Text>
                        </View>
                    </View>
                )}

            </ScrollView>
        </SafeAreaView>
    );
}