export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ServiceFormData extends ContactFormData {
  service: string;
  date?: string;
}