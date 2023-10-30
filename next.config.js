/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
              {
                  hostname: "next-learn-dashboard.vercel.sh",
                  protocol: "https"
              }
            ],  
        
    }
};

module.exports = nextConfig;
