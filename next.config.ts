import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old WordPress URLs
      { source: "/about-us/:path*", destination: "/", permanent: true },
      { source: "/food/:path*", destination: "/food-menu", permanent: true },
      { source: "/new-drinks-menu/:path*", destination: "/drinks-menu", permanent: true },
      { source: "/gallery/:path*", destination: "/", permanent: true },
      { source: "/contact/:path*", destination: "/book", permanent: true },
      { source: "/booking/table-plans/:path*", destination: "/tables", permanent: true },
      { source: "/booking/outside-orange/:path*", destination: "/book", permanent: true },
      { source: "/booking/bottomless-cocktails-saturdays/:path*", destination: "/brunches", permanent: true },
      { source: "/booking/bottomless-cocktails-every-friday/:path*", destination: "/brunches", permanent: true },
      { source: "/booking/:path*", destination: "/book", permanent: true },
      { source: "/our-tables/full-venue/:path*", destination: "/full-venue", permanent: true },
      { source: "/our-tables/half-venue/:path*", destination: "/half-venue", permanent: true },
      { source: "/our-tables/tiki/:path*", destination: "/tiki", permanent: true },
      { source: "/our-tables/tiki-bar/:path*", destination: "/tiki", permanent: true },
      { source: "/our-tables/off-piste/:path*", destination: "/off-piste", permanent: true },
      { source: "/our-tables/mile-high/:path*", destination: "/mile-high", permanent: true },
      { source: "/our-tables/:path*", destination: "/tables", permanent: true },
      { source: "/recruitment/:path*", destination: "/", permanent: true },
      { source: "/legal/:path*", destination: "/", permanent: true },
      { source: "/event-calendar/:path*", destination: "/events", permanent: true },
      // wp-content redirect removed — assets served from public/photos/wp-assets/
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/feed/:path*", destination: "/", permanent: true },
      { source: "/menus/:path*", destination: "/drinks-menu", permanent: true },
    ];
  },
};

export default nextConfig;
