/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true,
    async rewrites(){
        return[
            {
            source :"/api/:path*",
            destination : "http://makeup-api.herokuapp.com/api/:path*"
         },
        {
            source :"/member/:path*",
            destination : "http://localhost:8090/member/:path*"
        },  
    ];
    }
}

module.exports = nextConfig
