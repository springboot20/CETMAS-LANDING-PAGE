export interface TalentJobProps {
  id: number;
  title: string;
  location: string;
  postTime: number;
  level: string;
  type: string;
  duration: number;
  description: string;
}

export interface ClientJobs extends TalentJobProps {
  status: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}
