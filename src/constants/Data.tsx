import { images } from "./Images";

const Data = {
    treeData: [
        {
            
            title: "Cars",
            id:1,
            check: false,
            nodes: [],
            childern: [
                {
                    
                    title: "AlfaRomeo",
                    id:11,
                    check: false,
                    nodes: [],
                    childern: [
                        {
                            
                            title: "Stelvio",
                            id:22,
                            check: false,
                            nodes: [],
                            childern: [
                                {
                                    title: "Red",
                                    id:876,
                                    check: false,
                                    nodes: [
                                        {
                                            title: "2023",
                                            id:221,
                                            check: false,
                                        },
                                        {
                                            title: "2022",
                                            id:222,
                                            check: false,
                                        },
                                        {
                                            title: "2021",
                                            id:223,
                                            check: false,
                                        },
                                        {
                                            title: "2020",
                                            id:224,
                                            check: false,
                                        },
                                        {
                                            title: "2019",
                                            id:225,
                                            check: false,
                                        },
                                        {
                                            title: "2018",
                                            id:226,
                                            check: false,
                                        },
                                    ],
                                    childern: []
                                },
                            ]
                        },
                        {
                            
                            title: "Suv",
                            id:33,
                            check: false,
                            nodes: [
                                {
                                    title: "2020",
                                    id:334,
                                    check: false,
                                },
                                {
                                    title: "2019",
                                    id:335,
                                    check: false,
                                },
                                {
                                    title: "2018",
                                    id:336,
                                    check: false,
                                },
                            ],
                            childern: []
                        }
                    ]
                }
            ]
        },
        {   
            title: "Trucks",
            id:2,
            check: false,
            nodes: [],
            childern: [
                {
                    title: "Mercedes-Benz",
                    id:44,
                    check: false,
                    nodes: [],
                    childern: [
                        {
                            
                            title: "430 E5",
                            id:444,
                            check: false,
                            nodes: [
                                {
                                    title: "2023",
                                    id:644,
                                    check: false,
                                },
                                {
                                    title: "2022",
                                    id:645,
                                    check: false,
                                },
                            ],
                            childern: []
                        },
                        {
                            
                            title: "Minsk",
                            id:555,
                            check: false,
                            nodes: [
                                {
                                    title: "2023",
                                    id:551,
                                    check: false,
                                },
                            ],
                            childern: []
                        }
                    ]
                }
            ]
        },
    ],
    
    vehicles:[
        {
            id:1,
            title:"Alpha romeo",
            model:"V6 SC",
            price:9900500,
            price_currency:"AED",
            year:"2020",
            meter:1500,
            meter_unit:"Km",
            favorite:1,
            off:"20%",
            featured:1,
            urgent_sale:0,
            hot_deals:0,
            negotiatable:0,
            image:images.alfa
        },
        {
            id:2,
            title:"Alpha romeo",
            model:"4c",
            price:780000,
            price_currency:"AED",
            year:"2006",
            meter:112000,
            meter_unit:"Km",
            favorite:0,
            off:"20%",
            featured:0,
            urgent_sale:0,
            hot_deals:1,
            negotiatable:0,
            image:images.wandaloo
        },
        {
            id:3,
            title:"MAZ",
            model:"5430",
            price:2140000,
            price_currency:"AED",
            year:"2003",
            meter:770000,
            meter_unit:"Km",
            favorite:0,
            off:"20%",
            featured:0,
            urgent_sale:0,
            hot_deals:0,
            negotiatable:0,
            image:images.maz5340
        },
        {
            id:4,
            title:"Apha romio",
            model:"suv",
            price:4500000,
            price_currency:"AED",
            year:"2024",
            meter:90000,
            meter_unit:"Km",
            favorite:1,
            off:"20%",
            featured:0,
            urgent_sale:0,
            hot_deals:0,
            negotiatable:1,
            image:images.guilia
        },
        {
            id:5,
            title:"Apha romio",
            model:"Pav",
            price:820000,
            price_currency:"AED",
            year:"2002",
            meter:45000,
            meter_unit:"Km",
            favorite:0,
            off:"20%",
            featured:0,
            urgent_sale:1,
            hot_deals:0,
            negotiatable:0,
            image:images.papilion
        },
        {
            id:6,
            title:"Apha romio",
            model:"Uyr",
            price:100000,
            price_currency:"AED",
            year:"1972",
            meter:3300,
            meter_unit:"Km",
            favorite:0,
            off:"20%",
            featured:0,
            urgent_sale:0,
            hot_deals:0,
            negotiatable:1,
            image:images.used
        },
        {
            id:7,
            title:"MAZ",
            model:"6430",
            price:9180000,
            price_currency:"AED",
            year:"2013",
            meter:670000,
            meter_unit:"Km",
            favorite:0,
            off:"70%",
            featured:0,
            urgent_sale:0,
            hot_deals:1,
            negotiatable:0,
            image:images.maz6430
        },
    ]
};
export { Data };