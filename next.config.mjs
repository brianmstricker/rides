/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    hostname: "img.clerk.com",
   },
   {
    hostname: "rides-carmarketplace.s3.us-east-1.amazonaws.com",
   },
  ],
 },
};

export default nextConfig;
