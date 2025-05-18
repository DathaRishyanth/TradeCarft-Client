/* eslint-disable no-unused-vars */
import Navbar from '@/components/Navbar'
import OptionChain from '@/components/OptionChain'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  

const OIPage = () => {
  return (
    <div>
        <Navbar />
        <hr className="border-gray-500 mt-3 mb-3" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-white hover:text-green-500" href="/user">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="text-white hover:text-green-500" href="/viewall">F&O</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white hover:text-green-500">Option Chain</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
        <OptionChain />
    </div>
  )
}

export default OIPage