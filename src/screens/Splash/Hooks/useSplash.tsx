import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default () => {
    const navigation = useNavigation<SplashNavigationProp>();

    useEffect(() => {
        const timer = setTimeout(() => navigation.replace('VehiclesList'), 2500);
        return () => clearTimeout(timer);
    }, [])

    return {
    };
};