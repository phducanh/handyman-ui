export enum Status {
  PENDING,
  SUCCESS,
  FAILED,
}

export type PopUpItemsProps = {
  name: string;
  description?: string;
  href?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

export type CarouselItem = {
  src: string;
};

export type ProductProps = {
  business: {
    id: string;
    name: string;
    phone: string;
    logoImage: string;
    bannerImage: string;
    contactId: string;
    website: string;
    descriptions: string;
    services: [string];
    mail: string;
    zipcode: string;
    image: string;
    status: string;
    zipcodes: [string];
  };
  rating: {
    rate: number;
    review: number;
  };
};

export type Category = {
  id: string;
  name: string;
  totalProvider: number;
  fee: number;
  image: string;
};

export enum ModalType {
  Alert,
  Success,
  Failed,
  ResetPasswordSuccess,
  ForgotPasswordSuccess,
  MailOtp,
}
