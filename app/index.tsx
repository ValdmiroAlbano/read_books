import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { View, Text, StyleSheet } from 'react-native';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function ScreenLogin() {
  return (
    <View style={ style.screen }>
        <TextField variant='outlined' label='Email'/>
        <TextField variant='outlined' label='Password'/>

        <Button variant="contained">Entrar</Button>
        <Typography> ou </Typography>
        <Button variant="contained">Cadastrar-me</Button>
    </View>
  )
}

const style = StyleSheet.create({
    screen : {
        padding: 24
    }
})
