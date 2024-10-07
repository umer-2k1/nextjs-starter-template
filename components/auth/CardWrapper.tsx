'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import Header from './Header';
import SocialButton from './SocialButton';
import BackButton from './BackButton';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel?: string;
  backButtonLabel: string;
  backButtonhref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonhref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter>
          <SocialButton />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton label={backButtonLabel} to={backButtonhref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
