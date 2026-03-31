import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/sunscreen',
        destination: 'https://amzn.to/4bMHyVm',
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
