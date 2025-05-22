/** @type {import('next').NextConfig} */
const nextConfig = {
    // unoptimized: true
    typescript: {
        ignoreBuildErrors: true
    },
    distDir: "build"
};

export default nextConfig;
