// http://localhost:3000/api/revalidate?path=/&secret=27b640e17e5b0fcb6abcbc2425a2a790

import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
      status: 401,
      statusText: 'Unauthorized',
      headers: {
        'Content-Type':'application/json'
      }
    })
  }

  const path = request.nextUrl.searchParams.get('path') || '/'

  revalidatePath(path)

  return NextResponse.json({ revalidated: true })
  
}



// import { NextApiRequest, NextApiResponse } from "next";
// export default async function GET(req:NextApiRequest,res:NextApiResponse) {
//     if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
//         return res.status(401).json({message:"Invalid token"})
//     }
//     const path = req.query.path as string
//     await res.revalidate(path)
//     return res.json({ revalidated: true })
// }