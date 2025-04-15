"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Donald J. Trump",
    designation: "@realDonaldTrump",
    image: "https://postrack.s3.eu-central-003.backblazeb2.com/donald_trump.jpg",
  },
  {
    id: 2,
    name: "levelsio",
    designation: "@levelsio", 
    image: "https://postrack.s3.eu-central-003.backblazeb2.com/levelsio.jpg",
  },
  {
    id: 3,
    name: "Naval",
    designation: "@naval",
    image: "https://postrack.s3.eu-central-003.backblazeb2.com/naval.jpg",
  },
  {
    id: 4,
    name: "Marc Lou",
    designation: "@marc_louivon",
    image: "https://postrack.s3.eu-central-003.backblazeb2.com/marc_lou.jpg",
  },
  {
    id: 5,
    name: "Dylan O'Sullivan",
    designation: "@DylanoA4",
    image: "https://postrack.s3.eu-central-003.backblazeb2.com/dylano.jpg",
  },
  {
    id: 6,
    name: "Sahil Bloom",
    designation: "@sahilbloom",
    image: "https://postrack.s3.eu-central-003.backblazeb2.com/sahil_bloom.jpg",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
