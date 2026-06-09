import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const WITH_MDX = createMDX({
  // Add mdx plugins here
});

export default WITH_MDX(nextConfig);
