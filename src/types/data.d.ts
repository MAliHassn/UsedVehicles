// Commonly shared data across the app

interface IVehiclesItem {
  id: number;
  title: string;
  model: string;
  price: number;
  price_currency: string;
  year: string;
  meter: number;
  meter_unit: string;
  favorite: number;
  off: string;
  featured: number;
  urgent_sale: number;
  hot_deals: number;
  negotiatable: number;
  image: React.JSX.Element;
}

interface Node {
  title: string;
  id: number;
  check: boolean;
  nodes: Node[];
  children?: Node[];
}

interface CheckedChilds {
  ids: number[];
  titles: string[];
}
interface CheckedNodes {
  id: number;
  title: string;
}

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

interface IParentNodesProps {
  key_value: string;
  item: any;
  onPress: (item: any) => void;
}

interface IChildNodesProps {
  key_value: string;
  item: any;
  onPress: (item: any) => void;
}

interface INodeNodesProps {
  key_value: string;
  item: any;
  onPress: (item: any) => void;
}

interface IRepeatNodesProps {
  item: any;
  key_value: string;
  onPress: (item: any) => void;
  onPressNode: (item: any) => void;
}

interface TabItem {
  image: any;
  title: string;
}

interface Props {
  data: TabItem[];
  callBackSecTabSwitch: (item: TabItem, index: number) => void;
}
