// Commonly shared data across the app

interface IVehiclesItem {
  id:number,
  title:string,
  model:string,
  price:number,
  price_currency:string,
  year:string,
  meter:number,
  meter_unit:string,
  favorite:number,
  off:string,
  featured:number,
  urgent_sale:number,
  hot_deals:number,
  negotiatable:number,
  image:React.JSX.Element,
}

interface Node {
  title: string;
  id: number;
  check: boolean;
  nodes: Node[];
  children?: Node[];
}

