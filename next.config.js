/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/LotusAndMe/blogposts-data/main/images/**',
            },
        ],
    },
}

module.exports = nextConfig
