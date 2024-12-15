export interface EmailData {
  name: string;
  email: string;
  message: string;
  service?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}