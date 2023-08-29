import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Data } from '../../../constants/Data';
import { images } from '../../../constants/Images';
import { filterDataByMainFilter } from '../../../utils';


export default () => {
    const navigation = useNavigation<SplashNavigationProp>();
    const [input, setInput] = useState<string>("");
    const filter_data: IVehiclesItem[] = Data.vehicles;
    const [vehiclesData, setVehiclesData] = useState(Data.vehicles);

    let mainFilters = [
        { id: 0, typeId: 0, title: "All", value: "all", image: images.all },
        { id: 1, typeId: 0, title: "Featured", value: "featured", image: images.badge },
        { id: 2, typeId: 0, title: "Urgent sale", value: "urgent_sale", image: images.flash },
        { id: 3, typeId: 0, title: "Hot deals", value: "hot_deals", image: images.hot_deal },
        { id: 4, typeId: 0, title: "Negotiatable", value: "negotiatable", image: images.chat },
        { id: 5, typeId: 0, title: "Favorite", value: "favorite", image: images.heart_fill },
    ]

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const navigateTo = () => {
        navigation.navigate('TreeFilter')
    }

    const callBackUpdate = (search: string) => {
        if (!isNaN(Number(search))) {
            let text = search;
            let data = filter_data;
            const newData = data.filter(function (item) {
                const itemData = item.price.toString();
                const textData = text.toString();
                return itemData.indexOf(textData) > -1;
            });

            setInput(search);
            setVehiclesData(newData);
        } else {
            let text = search.toLowerCase();
            let data = filter_data;

            let filterData = data.filter(item => {
                if (item.title.toLowerCase().includes(text) || item.model.includes(text)) {
                    return item;
                }
            });

            setInput(search);
            setVehiclesData(filterData);
        }
    };


    const filterUpdate = (item: any) => {
        let filterValue = item.value;
        let data = Data.vehicles;
        const filteredData = filterDataByMainFilter(data, filterValue)
        setVehiclesData(filteredData)
    }

    return {
        navigateTo,
        filterUpdate,
        mainFilters,
        viewConfigRef,
        callBackUpdate,
        vehiclesData,
        input,
        setInput
    };
};