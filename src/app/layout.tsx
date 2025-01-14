// import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const interSans = Inter({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Bag Charm',
    description: 'Generated by bag charm',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className={`${interSans.className}`} suppressHydrationWarning={true}>
                <Header />
                <main className="layoutMain">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
