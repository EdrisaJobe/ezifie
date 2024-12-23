export interface Recipient {
  name: string;
  title: string;
  company: string;
  address: string;
  city: string;
  email: string;
}

export interface Sender {
  name: string;
  title: string;
  address: string;
  city: string;
  email: string;
  phone: string;
}

export interface Letter {
  date: string;
  greeting: string;
  opening: string;
  body: string;
  closing: string;
  signature: string;
}

export interface CoverLetterData {
  recipient: Recipient;
  sender: Sender;
  letter: Letter;
}