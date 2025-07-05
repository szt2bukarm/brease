"use client"
import { useState } from "react";
import Implementations from "./Implementations";
import ImplementationsMobile from "./ImplementationsMobile";

const sections = [
    {
      title: "Reusable Sections, Built to Scale",
      content: (
        <>
          <b>Design once. Use forever.</b><br /><br />
          Turn custom React components into modular, editor-friendly sections that can be reused, reordered, and adapted across pages with zero dev time.
        </>
      )
    },
    {
      title: "Built for Content Editors",
      content: (
        <>
          <b>Design once. Use forever.</b><br /><br />
          Turn custom React components into modular, editor-friendly sections that can be reused, reordered, and adapted across pages with zero dev time.
        </>
      )
    },
    {
      title: "Unlimited Content Models",
      content: (
        <>
          <b>Design once. Use forever.</b><br /><br />
          Turn custom React components into modular, editor-friendly sections that can be reused, reordered, and adapted across pages with zero dev time.
        </>
      )
    },
    {
      title: "Developer-Minded by Design",
      content: (
        <>
          <b>Design once. Use forever.</b><br /><br />
          Turn custom React components into modular, editor-friendly sections that can be reused, reordered, and adapted across pages with zero dev time.
        </>
      )
    },
  ]

export default function ImplemetationsWrapper() {
    const [openedSectionTitle, setOpenedSectionTitle] = useState<string | null>("Reusable Sections, Built to Scale");

    const handleSelection = (title: string) => {
        if (openedSectionTitle === title) {
            setOpenedSectionTitle(null);
            return
        }
        setOpenedSectionTitle(null);
        setTimeout(() => {
            setOpenedSectionTitle(title);
        }, openedSectionTitle ? 300 : 0);
    }


    return (
        <>
        <div className="block md:hidden">
            <ImplementationsMobile sections={sections} openedSectionTitle={openedSectionTitle} handleSelection={handleSelection} />
        </div>
        <div className="hidden md:block">
            <Implementations sections={sections} openedSectionTitle={openedSectionTitle} handleSelection={handleSelection} />
        </div>
        </>
    )
}