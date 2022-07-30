import React from 'react';

interface IMainPageLayoutProps {
  children: React.ReactNode;
}

export default function MainPageLayout({ children }: IMainPageLayoutProps) {
  return <>MainPageLayout {children}</>;
}
