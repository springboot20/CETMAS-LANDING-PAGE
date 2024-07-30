export type Routes = {
  to: string;
  label: string;
  Icon: React.FC<{
    className: string;
  }>;
  current: boolean;
}[];
