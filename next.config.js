/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //unoptimized: true,
        remotePatterns: [
              {
                  hostname: "next-learn-dashboard.vercel.sh",
                  protocol: "https"
              }
            ],  
        
    }
};

module.exports = nextConfig;
