export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactMessage extends ContactFormData {
  createdAt: any;
  status: 'new' | 'read';
  ipAddress: string;
}

export interface ContactFormResponse {
  success: boolean;
  id?: string;
  error?: string;
}