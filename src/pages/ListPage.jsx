/* eslint-disable no-unused-vars */
import Navbar from "@/components/Navbar";
import StickyHeadTable from "@/components/TableStocks";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BasicTabs from "@/components/Tabs";

const ListPage = () => {
  return (
    <div>
      <Navbar />
      <hr className="border-gray-500 mt-16 mb-3" />
      <div className="mt-5 mb-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-white hover:text-green-500"
                href="/user"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-white hover:text-green-500"
                href="/viewall"
              >
                Stocks
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white hover:text-green-500">
                Stocks List
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        {/* <BasicTabs /> */}
      </div>
      <StickyHeadTable className="bg-slate-800 text-white" />
    </div>
  );
};

export default ListPage;
