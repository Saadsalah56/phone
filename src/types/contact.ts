export interface Contact {
  id: number;
  profile: string;
  name: string;
  email: string;
  phone: string;
  isVerified: boolean;
}

export interface VerificationRequest {
  contactId: number;
  userEmail: string;
}