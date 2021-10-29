import React from 'react'
import dynamic from "next/dynamic"

const Page = () => {
    const Map = dynamic(
        () => import('@/components/Map'), // replace '@components/map' with your component's location
        { ssr: false } // This line is important. It's what prevents server-side render
      )
      return <Map />
}

export default Page
