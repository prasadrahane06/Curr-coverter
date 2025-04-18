import React, {useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, View} from 'react-native';

import {AUIThemedView} from '@components/common/AUIThemedView';
import {AUISafeAreaView} from '@components/common/AUISafeAreaView';
import {AUIThemedText} from '@components/common/AUIThemedText';
import AUIDropDown from '@components/common/AUIDropDown';
import AUIInputField from '@components/common/AUIInputField';
import AUIButton from '@components/common/AUIButton';
import {countriesData} from '../../data/countriesData';
import {getExchangeRate} from '../../services/CurrencyConverter';
import {ApiErrorToast, ApiSuccessToast} from '@components/common/AUIToast';

const HomeScreen = () => {
  const [sourceCurrency, setSourceCurrency] = useState<any>(null);
  const [targetCurrency, setTargetCurrency] = useState<any>(null);
  const [amount, setAmount] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [isConverting, setIsConverting] = useState(false);

  const dropdownList = countriesData.map(item => ({
    ...item,
    label: `${item.code} - ${item.currency.name} (${item.currency.symbol})`,
    value: item.code,
    iconUri: item.flag,
  }));

  const handleConvert = async () => {
    if (!amount || isNaN(Number(amount))) {
      setError('Please enter a valid number for amount.');
      return;
    }
    if (!sourceCurrency || !targetCurrency) {
      setError('Please select both source and target currencies.');
      return;
    }

    setError('');
    setIsConverting(true);
    try {
      const exchange = await getExchangeRate(
        sourceCurrency.currency,
        targetCurrency.currency,
      );
      const result = parseFloat(amount) * exchange.rate;
      setConvertedAmount(result);
      ApiSuccessToast('Successfully Converted');
    } catch (err: any) {
      ApiErrorToast('Conversion Error');
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <AUISafeAreaView>
      <AUIThemedView style={{flex: 1, padding: 16}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <AUIThemedText type="defaultSemiBold" style={{textAlign: 'center'}}>
            💱 Currency Converter
          </AUIThemedText>
          <AUIThemedText
            type="subtitle"
            style={{marginBottom: 12, textAlign: 'center'}}>
            Convert between currencies in real-time
          </AUIThemedText>
          <View
            style={{borderBottomColor: 'white', borderBottomWidth: 1}}></View>
          <AUIThemedView
            style={{
              flexDirection: 'column',
              flex: 1,
              gap: 20,
              marginTop: 20,
            }}>
            <AUIInputField
              label="Enter Amount to Convert"
              placeholder="Enter amount"
              value={amount}
              onChangeText={(val: string) => {
                const numericOnly = val.replace(/[^0-9.]/g, '');
                setAmount(numericOnly);
              }}
              keyboardType="numeric"
              error={error.includes('amount') ? error : ''}
            />
            <AUIDropDown
              list={dropdownList}
              value={sourceCurrency?.value}
              setValue={(item: any) => setSourceCurrency(item)}
              labelField="label"
              valueField="value"
              listWithIcon
              label="From Currency"
              extrastyle={{
                paddingVertical: 11,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#CDD2D9',
              }}
            />
            <AUIDropDown
              list={dropdownList}
              value={targetCurrency?.value}
              setValue={(item: any) => setTargetCurrency(item)}
              labelField="label"
              valueField="value"
              listWithIcon
              label="To Currency"
              extrastyle={{
                paddingVertical: 11,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#CDD2D9',
              }}
            />
            {error.includes('currencies') && (
              <AUIThemedText style={{color: 'red', marginTop: 8}}>
                {error}
              </AUIThemedText>
            )}
            //
            {convertedAmount !== null && (
              <AUIThemedView
                style={{
                  gap: 10,
                  backgroundColor: 'white',
                  padding: 20,
                  borderRadius: 15,
                }}>
                <AUIThemedText
                  type="defaultSemiBold"
                  style={{color: 'black', opacity: 0.5}}>
                  Converted Amount:
                </AUIThemedText>
                <AUIThemedText type="defaultSemiBold" style={{color: 'black'}}>
                  {targetCurrency?.currency.symbol} {convertedAmount.toFixed(2)}
                </AUIThemedText>
              </AUIThemedView>
            )}
          </AUIThemedView>
          <AUIButton
            title={isConverting ? 'Converting...' : 'Convert Currency'}
            background="#FFED89"
            onPress={handleConvert}
            loadingDuration={isConverting}
            disabled={isConverting}
          />
        </KeyboardAvoidingView>
      </AUIThemedView>
    </AUISafeAreaView>
  );
};

export default HomeScreen;
