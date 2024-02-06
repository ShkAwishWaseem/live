import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import { RouteMatcher } from "next/dist/server/future/route-matchers/route-matcher";


export default function middleware(request) {
  //   const response = new NextResponse();
  
  
  //  const  matcher = ['/blog/:id*', '/category/:id* ' , '/add-blogs' , 'apidata' , '/home' , 'open-dashboard'],
  

    if (request.url.includes("/blog") | request.url.includes("/category") | request.url.includes("/add-blogs")  | request.url.includes("/apidata") | request.url.includes("/home") | request.url.includes("/open-dashboard") ) {
  const cookiesList = cookies();
  console.log(cookiesList);
  if(!cookiesList.has("token")) {
    return NextResponse.redirect(new URL('/login', request.url))
      
  }

  console.log(request.url.path)
}

    // Local storage :
    //  console.log(localStorage.getItem("token"));

  // If the request is not on the login page, continue with the default behavior
  // (This is optional since the middleware will implicitly return undefined if not specified)
}