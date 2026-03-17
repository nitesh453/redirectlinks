import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/go',
        destination: 'https://www.amazon.in/dp/ASIN?tag=yourtag-21',
        permanent: false, // Use false (302) so you can change the link later
      },
      {
        source: '/go/flipkart-deal',
        destination: 'https://www.flipkart.com/product-link?affid=yourid',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
