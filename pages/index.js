import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Fly from "@/components/Fly";
import { motion } from "framer-motion";
import ComedianCard from "@/components/ComedianCard";
import HorizontalGallery from "@/components/HorizontalGallery";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className="flex flex-col ">
            <Fly />
            <div className="w-full h-screen flex items-center text-6xl justify-center z-10 fixed flex-col uppercase">
                <motion.img
                    src="/rs_wordmark.png"
                    className="w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
                <motion.div
                    className="text-xs mt-2 -rotate-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    (click to shoo)
                </motion.div>
            </div>
            <div className="h-screen"></div>
            <section className="bg-[#ED7EDF] font-myfont w-full text-[#1c1c1c] min-h-screen overflow-hidden z-20 uppercase items-center flex flex-col">
                <div className="content-container max-w-[1000px]">
                    <div className="p-2">
                        <div className="flex flex-row justify-between w-full">
                            <div className="font-myfont">
                                finetooth.dev ★ Rotten Science
                            </div>
                            <div className="">website proposal</div>
                        </div>
                        <div className="text-5xl md:text-6xl lg:text-8xl text-balance mt-2">
                            Comedy, depravity, and all things Rotten.
                        </div>
                        <div className="leading-none mt-4">
                            We’re proposing a unique, high-end website that
                            effectively showcases current work while leaving
                            room to highlight future film and TV projects. The
                            site will come equipped with a Shopify backend to
                            handle ecomm, as well as a custom CMS (e.g. Webflow,
                            Sanity) to accomodate future updating.
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="px-2 text-xl mb-2">featured</h3>
                    <HorizontalGallery />
                </div>

                <div className="content-container max-w-[1000px]">
                    <div className="mt-16">
                        <div className="p-2">
                            <h3 className=" text-xl">
                                Proposed site structure
                            </h3>
                            <ol>
                                <li className="mt-4">Home</li>
                                <ul className="ml-2">
                                    <li>Interactive hero</li>
                                    <li>Featured gallery</li>
                                    <li>
                                        Horizontal gallery{" "}
                                        <sup>e.g. Standup specials</sup>
                                    </li>
                                    <li>inline shop preview</li>
                                    <li>
                                        footer &nbsp;
                                        <sup>
                                            incl. mailing list signup, links to
                                            socials, etc
                                        </sup>
                                    </li>
                                </ul>
                                <li className="mt-4">
                                    Work <sup>Standup, Film, Tv</sup>
                                </li>
                                <ul className="ml-2">
                                    <li>Grid gallery</li>
                                </ul>
                                <li className="mt-4">Shop</li>
                                <ul className="ml-2">
                                    <li>
                                        Shopify site hosted on subdomain{" "}
                                        <sup>e.g. shop.rottenscience.com</sup>
                                    </li>
                                </ul>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="p-2">
                            <h3 className=" text-xl">next steps</h3>
                            <ol>
                                <li>Outline Scope of Work</li>
                                <li>Sign Agreement & Send deposit</li>
                                <li>Design kickoff call</li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="p-2">
                            <h3 className=" text-xl">About finetooth.dev ∂</h3>
                            <div className="leading-none">
                                We are an award-winning team of designers and
                                engineers offering end-to-end design and
                                development. Where we excel is in creating
                                unique, left-of-center web experiences that go
                                against the grain and help our clients stand out
                                from their competition.
                            </div>
                            <div className="mt-2">
                                <a
                                    href="http://www.finetooth.dev"
                                    target="_blank"
                                    className="transition cursor hover:underline"
                                >
                                    Some of our work →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 text-8xl px-2">Thank you.</div>
                    <div className="mt-4 text-xs px-2 leading-none text-justify">
                        Note: The contents of this pitch deck are confidential
                        and proprietary. Unauthorized redistribution,
                        reproduction, or disclosure of the information and ideas
                        contained herein, in whole or in part, is strictly
                        prohibited. This deck is intended solely for the
                        recipient's personal evaluation and should not be shared
                        without prior written consent. By reviewing this
                        material, you agree to maintain the confidentiality of
                        the information provided.
                    </div>

                    <div className="flex flex-row justify-between mt-2 p-2">
                        © 2025
                        <a href="mailto:info@finetooth.dev">
                            info@finetooth.dev
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
