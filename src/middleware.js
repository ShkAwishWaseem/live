import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
// import { RouteMatcher } from "next/dist/server/future/route-matchers/route-matcher";


export default function middleware(request) {
  
  

    if (request.url.includes("/blog") | request.url.includes("/category") | request.url.includes("/add-blogs")  | request.url.includes("/apidata") | request.url.includes("/home") | request.url.includes("/open-dashboard") ) {
  const cookiesList = cookies();
  // console.log(cookiesList);
  if(!cookiesList.has("token")) {
    return NextResponse.redirect(new URL('/login', request.url))
      
  }

  // console.log(request.url.path)
}

    
    

  
  
}