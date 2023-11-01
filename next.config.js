/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost:3000", "dashboard-vittoriomorellini.vercel.app"],
        path: "https://dashboard-vittoriomorellini.vercel.app/images",
        remotePatterns: [
            {
                hostname: "next-learn-dashboard.vercel.sh",
                protocol: "https"
            }
        ],        
    }
};

module.exports = nextConfig;
