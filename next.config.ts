import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // domains: ['ftp.goit.study'], // Додайте сюди домен, звідки завантажуються зображення
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ftp.goit.study',
            },
        ],
    },
};

export default nextConfig;
