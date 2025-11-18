export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  status: 'online' | 'offline' | 'away';
  avatar: string;
  lastSeen?: string;
  // Add other user properties as needed
}
