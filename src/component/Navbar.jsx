'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Navbar({
    className
  }) {
    const [active, setActive] = useState(null);
  return (
    <>
    {/* <div
    className={cn("container mx-auto fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}> */}
    <div
    className={cn("container mx-auto px-4 sm:px-6 flex justify-between items-center pt-3 pb-3", className)}>   
        <Link href={"/"}><img
                aria-hidden
                src="/logo_new.png"
                alt="logo"
                width={69}
                height={90}
                /></Link>
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} item="Home"> </MenuItem>
            </Link>
            {/* <MenuItem setActive={setActive} active={active} item="About Us"> */}
            <Link href={"/about"}>
            <MenuItem setActive={setActive} item="About Us">
            {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses"> Basic Music Theory </HoveredLink>
            <HoveredLink href="/courses"> Advanced Composition </HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses"> Music Production </HoveredLink>
            </div> */}
            </MenuItem>
            </Link>
            <Link href={"/features"}>
            <MenuItem setActive={setActive} item="Features">
            
            </MenuItem>
            </Link>
            <Link href={"/blog"}>
            <MenuItem setActive={setActive} item="Blog">
            
            </MenuItem>
            </Link>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} item="Contact Us">
            
            </MenuItem>
            </Link>

            
            
        </Menu>
    </div>
    </>
  )
}

export default Navbar