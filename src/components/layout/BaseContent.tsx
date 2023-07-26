import { Layout } from 'antd';

import { ROLE } from '@/pb/const';

export default function BaseContent({
  className,
  userRole = ROLE.UNRECOGNIZED,
  children,
}: {
  className?: string;
  userRole?: ROLE;
  children?: React.ReactNode;
}) {
  if (userRole == ROLE.HANDYMAN)
    return (
      <Layout.Content
        className={`relative bg-white px-[16px] md:px-[40px] lg:px-[80px] 2xl:px-[200px] py-[48px] ${className}`}
      >
        {children}
      </Layout.Content>
    );
  else
    return (
      <Layout.Content
        className={`relative bg-white px-[16px] md:px-[80px] lg:px-[100px] 2xl:px-[300px] py-[48px] ${className}`}
      >
        {children}
      </Layout.Content>
    );
}

export function InnerContent({
  className,
  userRole = ROLE.UNRECOGNIZED,
  children,
}: {
  className?: string;
  userRole?: ROLE;
  children?: React.ReactNode;
}) {
  if (userRole == ROLE.HANDYMAN)
    return (
      <div
        className={`px-[16px] md:px-[80px] lg:px-[160px] xl:px-[200x] ${className}`}
      >
        {children}
      </div>
    );
  else
    return (
      <div
        className={`px-[16px] md:px-[80px] lg:px-[100px] 2xl:px-[300px] ${className}`}
      >
        {children}
      </div>
    );
}
