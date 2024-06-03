"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Container } from "./container";
import Link from "next/link";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { MainNav } from "./main-nav";
import { Skeleton } from "../ui/skeleton";

interface HeaderProps {
  userId: string | null;
}

export const Header = ({ userId }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full z-50 transition",
        scrolled ? "fixed top-0 left-0 bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-12 flex h-16 items-center">
          {/* SITE LOGO */}
          <Link
            href="/"
            className="uppercase flex gap-x-2 font-bold text-neutral-700 text-md lg:text-2xl md:text-xl select-none"
          >
            Foodied
          </Link>

          {/* Main Nav Bar */}
          <MainNav scrolled={scrolled} className="mr-8" />

          {/* User button or login/signup */}
          {userId ? (
            <div className="ml-4 flex items-center space-x-4">
              <ClerkLoading>
                <Skeleton className="w-9 h-9 rounded-full bg-gray-300" />
              </ClerkLoading>
              <ClerkLoaded>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9",
                    },
                  }}
                />
              </ClerkLoaded>
            </div>
          ) : (
            <div className="flex items-center space-x-4 ml-4">
              <Link href={"/sign-in"}>
                <Button size="sm" variant="outline">
                  Log In
                </Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
