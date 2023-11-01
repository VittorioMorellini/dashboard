/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "dashboard-vittoriomorellini.vercel.app"],
        remotePatterns: [
            {
                hostname: "next-learn-dashboard.vercel.sh",
                protocol: "https"
            }
        ],        
    }
};

module.exports = nextConfig;
