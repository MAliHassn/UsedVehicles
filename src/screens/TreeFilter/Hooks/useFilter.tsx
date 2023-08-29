import { useState, useEffect } from 'react';
import { getParentInfo } from '../../../utils';
import { Data } from '../../../constants/Data';

export default () => {
    interface CheckedChilds {
        ids: number[];
        titles: string[];
    }
    interface CheckedNodes {
        id: number;
        title: string;
    }


    const filters: Node[] = Data.treeData;
    const [filter_data, setFilter_data] = useState(filters);
    const [stateUpdated, setStateUpdated] = useState(false);
    const [checkedNode, setCheckedNode] = useState<CheckedNodes[]>([]);
    const [checkedChilds, setCheckedChilds] = useState<CheckedChilds[]>([]);

    useEffect(() => {
        setFilter_data(filter_data)
        setStateUpdated(false)
    }, [stateUpdated])


    //checking parents
    function updateCheck(nodeArray: any, targetId: number, newCheckValue: boolean) {
        for (const node of nodeArray) {
            if (node.id === targetId) {
                node.check = newCheckValue;
                return true; // Indicate that the node was found and updated
            }

            if (node.childern.length > 0) {
                if (updateCheck(node.childern, targetId, newCheckValue)) {
                    return true; // Node was found in children
                }
            }
        }
        return false; // Node was not found in this branch
    }

    //checking nodes
    function updateCheckByTitle(nodeArray: any, targetId: number, newCheckValue: boolean) {
        for (const node of nodeArray) {
            if (node.id === targetId) {
                node.check = newCheckValue;
                return true; // Indicate that the node was found and updated
            }


            if (node.childern && node.childern.length > 0) {
                if (updateCheckByTitle(node.childern, targetId, newCheckValue)) {
                    return true; // Node was found in childern
                }
            }

            if (node.nodes && node.nodes.length > 0) {
                if (updateCheckByTitle(node.nodes, targetId, newCheckValue)) {
                    return true; // Node was found in nodes
                }
            }
        }

        return false; // Node was not found in this branch
    }

    //clearing all nodes
    function updateChecksBasedOnParent(nodeArray: any) {
        for (const node of nodeArray) {

            if (!node.children?.some((child: any) => child.check)) {
                node.nodes.forEach((child: any) => {
                    child.check = false;
                });
            }

            if (node.childern && node.childern.length > 0) {
                updateChecksBasedOnParent(node.childern);
            }
        }
    }


    const clickOnNodes = (v: any) => {
        let treeData = filters;
        updateChecksBasedOnParent(treeData);
        const pathToUpdate = v.id; // Replace with the path of the node you want to update
        const newCheckValue = !v.check;
        updateCheckByTitle(treeData, pathToUpdate, newCheckValue);
        // dispatch(changeFilterData(treeData))
        setFilter_data(treeData)
        setStateUpdated(true)

        if (v.check) {
            setCheckedNode(v)
        }

    }

    const realTimeChanges = (v: any) => {
        let data = filters;
        updateCheck(data, v.id, !v.check)
        updateChecksBasedOnParent(data);
        // dispatch(changeFilterData(data))
        setFilter_data(data)
        setStateUpdated(true)

        if (v.check) {
            const result = getParentInfo(v.id, data);
            setCheckedChilds(result);
        }
        else {
            setCheckedNode([])
            setCheckedChilds([]);
        }
    }


    return {
        realTimeChanges,
        clickOnNodes,
        updateCheckByTitle,
        updateCheck,
        filter_data,
        checkedNode,
        checkedChilds,
    };
};