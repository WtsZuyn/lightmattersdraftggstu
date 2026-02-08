
export interface Material {
  id: string;
  name: string;
  chemical: string;
  subtitle: string;
  tag: string;
  description: string;
  image: string;
  color: string;
  stats: {
    label: string;
    value: string;
    unit: string;
    icon: string;
  }[];
}

export interface Zone {
  id: string;
  name: string;
  subtitle: string;
  status: 'active' | 'inactive';
  x: number;
  y: number;
  icon: string;
  description: string;
  image: string;
}
