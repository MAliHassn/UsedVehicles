
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { images } from '../constants/Images';
import { Fonts } from '../constants/Fonts';
import ToogleButton from './ToogleButton';


interface IFilterNodesProps {
    data: any;
    onPress: (item: any) => void;
    onPressNode: (item: any) => void;
}

interface ILogicNodesProps {
    item: any;
    key_value: string;
    onPress: (item: any) => void;
    onPressNode: (item: any) => void;
}



const Filter = (props: IFilterNodesProps) => {
    let { data, onPress, onPressNode } = props
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}>
            {
                data?.map((item: any, index: number) => {
                    return (
                        <Logic
                            item={item}
                            key={index.toString()}
                            key_value={index.toString()}
                            onPress={(v) => { onPress(v) }}
                            onPressNode={(v) => { onPressNode(v) }}
                        />
                    )
                })
            }
        </ScrollView>
    );
}

const Logic = (props: ILogicNodesProps) => {
    let { item, key_value, onPress, onPressNode } = props

    return (
        <View key={key_value}>

            <Parent
                key_value={key_value}
                item={item}
                onPress={(v) => { onPress(v) }}
            />
            {item?.check &&
                <>
                    {item?.nodes.length > 0 ?
                        <>
                            {item?.nodes.map((childern_item: any, index: number) => {
                                return (
                                    <Child
                                        key_value={index.toString()}
                                        item={childern_item}
                                        onPress={(v) => { onPressNode(v) }}
                                    />
                                )
                            })
                            }
                        </>
                        :
                        <>
                            {item?.childern.map((childern_item: any, index: number) => {
                                return (
                                    <Repeat
                                        key_value={index.toString()}
                                        item={childern_item}
                                        onPress={(v) => { onPress(v) }}
                                        onPressNode={(v) => { onPressNode(v) }}
                                    />
                                )
                            })
                            }
                        </>
                    }
                </>
            }
        </View>
    )
}

interface IParentNodesProps {
    key_value: string;
    item: any;
    onPress: (item: any) => void;
}
const Parent = (props: IParentNodesProps) => {
    let { key_value, item, onPress } = props
    return (
        <Pressable key={key_value}
            style={styles.parent}
            onPress={() => { onPress(item) }}
        >

            <Image
                source={item.check ? images.minus : images.add}
                style={styles.selection}
                resizeMethod="auto"
            />

            <Text style={styles.text}>{item.title}</Text>
        </Pressable>
    )
}

interface IChildNodesProps {
    key_value: string;
    item: any;
    onPress: (item: any) => void;
}

const Child = (props: IChildNodesProps) => {
    let { key_value, item, onPress } = props
    return (
        <Pressable key={key_value}
            style={styles.childern}
            onPress={() => { onPress(item) }}
        >

            <View style={styles.line_container}>

                <View
                    style={styles.line}
                />

            </View>

            <View style={{ flex: 1 }}>

                <Node
                    key={key_value}
                    key_value={key_value}
                    item={item}
                    onPress={(v) => { onPress(v) }}
                />
            </View>

        </Pressable>

    )
}


interface INodeNodesProps {
    key_value: string;
    item: any;
    onPress: (item: any) => void;
}

const Node = (props: INodeNodesProps) => {
    let { key_value, item, onPress } = props
    return (
        <Pressable
            key={key_value}
            style={styles.node}
            onPress={() => { onPress(item) }}
        >

            <Text style={styles.text}>{item.title}</Text>
            <ToogleButton value={item.check ? true : false} />

        </Pressable>
    )
}


interface IRepeatNodesProps {
    item: any;
    key_value: string;
    onPress: (item: any) => void;
    onPressNode: (item: any) => void;
}

const Repeat = (props: IRepeatNodesProps) => {
    let { item, key_value, onPress, onPressNode } = props
    return (
        <View key={key_value}
            style={{ marginStart: 26 }}
        >
            <Logic
                key_value={key_value}
                item={item}
                onPress={(v) => { onPress(v) }}
                onPressNode={(v) => { onPressNode(v) }}
            />
        </View>
    )
}




export default React.memo(Filter);

const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: 20
    },
    selection: {
        aspectRatio: 1,
        height: 22,
        width: 22,
    },
    all: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    line_container: {
        width: 22,
        alignItems: "center",
    },
    line: {
        width: 1.5,
        height: 40,
        backgroundColor: Colors.gray,
    },
    childern: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    node: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    parent: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 5
    },
    text: {
        color: Colors.dark_gray,
        fontSize: Fonts.body,
        paddingStart: 3,
    },
});