"use client"
import React, { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";
const Select = dynamic(()=>import('react-select'),{ssr:false})

import Link from "next/link";
import Image from "next/image";

import { jarallax, JarallaxInstance } from 'jarallax';
import 'jarallax/dist/jarallax.css';

import { LuSearch } from "react-icons/lu";
import { RxHome } from "react-icons/rx";
import { AiOutlineDollarCircle } from "react-icons/ai";

import Navbar from "../components/navbar";
import Categories from "../components/categories";
import About from "../components/about";
import Feature from "../components/feature";
import FeatureProperty from "../components/feature-property";
import TeamOne from "../components/team";
import Client from "../components/client";
import BlogOne from "../components/blog-one";
import GetInTuch from "../components/get-in-touch";
import Switcher from "../components/switcher";
import Footer from "../components/footer";

interface JarallaxElement extends HTMLDivElement {
    jarallax?: JarallaxInstance;
}

export default function IndexFourteen(){

    // For Jarallax
    const jarallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = jarallaxRef.current as JarallaxElement;

        if (element) {
            jarallax(element, {
                speed: 0.5
            });
        }

        return () => {
            const el = element as JarallaxElement;
            if (el && el.jarallax) {
                el.jarallax.destroy();
            }
        };
    }, []);

    // For activeTab
    const [activeTabIndex, setactiveTabIndex] = useState<number>(0);
    
    const handleTabClick = (tabIndex: number) => {
        setactiveTabIndex(tabIndex);
    };

    const Houses = [
        { value: 'AF', label: 'Apartment' },
        { value: 'AZ', label: ' Offices' },
        { value: 'BS', label: 'Townhome' },
    ]
    const minPrice = [
        { value: '1', label: '500' },
        { value: '2', label: '1000' },
        { value: '3', label: '2000' },
        { value: '4', label: '3000' },
        { value: '5', label: '4000' },
        { value: '5', label: '5000' },
        { value: '5', label: '6000' },
    ]
    const maxPrice = [
        { value: '1', label: '500' },
        { value: '2', label: '1000' },
        { value: '3', label: '2000' },
        { value: '4', label: '3000' },
        { value: '5', label: '4000' },
        { value: '5', label: '5000' },
        { value: '5', label: '6000' },
    ]

    return(
        <> 
            <Navbar navClass={''} topnavClass={''} tagline={false}/>
            
            <section className="relative pt-36">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                        <div className="xl:col-span-8 lg:col-span-7 md:col-span-6 col-span-12">
                            <h1 className="font-semibold leading-none text-4xl xl:text-7xl lg:text-6xl">Smart Real Estate Investments</h1>
                        </div>
                        <div className="xl:col-span-4 lg:col-span-5 md:col-span-6 col-span-12 md:mt-0 mt-6">
                            <p className="text-slate-400 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                            <div className="flex justify-between items-center mt-4">
                                <ul className="list-none relative leading-0">
                                    <li className="inline-block relative"><Link href="#"><Image src="/images/client/01.jpg" width={48} height={48} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                    <li className="inline-block relative -ms-4"><Link href="#"><Image src="/images/client/02.jpg" width={48} height={48} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                    <li className="inline-block relative -ms-4"><Link href="#"><Image src="/images/client/03.jpg" width={48} height={48} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                    <li className="inline-block relative -ms-4"><Link href="#"><Image src="/images/client/04.jpg" width={48} height={48} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                </ul>

                                <Link href="#" className="btn bg-primary hover:bg-primary-dark text-white rounded-md">See More</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid relative md:mx-4 mx-2 mt-12">
                    <div ref={jarallaxRef} className="relative overflow-hidden py-72 bg-no-repeat table w-full rounded-2xl shadow-sm dark:shadow-gray-700 jarallax"
                        style={{backgroundImage:`url(${"/images/bg/9.jpg"})`}}></div>
                </div>
            </section>

            <section className="relative md:pb-24 pb-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative -mt-32">
                            <div className="grid grid-cols-1">
                                <ul className="inline-block sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl border-b border-gray-200 dark:border-gray-800" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                    <li role="presentation" className="inline-block">
                                        <button onClick={() => handleTabClick(0)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 0 ? 'text-white bg-primary' : 'hover:text-primary'}`} id="buy-home-tab" data-tabs-target="#buy-home" type="button" role="tab" aria-controls="buy-home" aria-selected="true">Buy</button>
                                    </li>
                                    <li role="presentation" className="inline-block">
                                        <button onClick={() => handleTabClick(1)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 1 ? 'text-white bg-primary' : 'hover:text-primary'}`} id="sell-home-tab" data-tabs-target="#sell-home" type="button" role="tab" aria-controls="sell-home" aria-selected="false">Sell</button>
                                    </li>
                                    <li role="presentation" className="inline-block">
                                        <button onClick={() => handleTabClick(2)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 2 ? 'text-white bg-primary' : 'hover:text-primary'}`} id="rent-home-tab" data-tabs-target="#rent-home" type="button" role="tab" aria-controls="rent-home" aria-selected="false">Rent</button>
                                    </li>
                                </ul>

                                <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl shadow-md shadow-gray-200 dark:shadow-gray-700">
                                    {activeTabIndex === 0 && (
                                        <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                                            <form action="#">
                                                <div className="registration-form text-dark text-start">
                                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                        <div>
                                                            <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                                            <div className="filter-search-form relative filter-border mt-2">
                                                                <LuSearch className="icons"/>
                                                                <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" placeholder="Search your Keywords" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>                                                        
                                                            <div className="filter-search-form relative filter-border mt-2">
                                                                <RxHome className=" icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" options={Houses} placeholder="House"/>

                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>                                                        
                                                            <div className="filter-search-form relative filter-border mt-2">
                                                                <AiOutlineDollarCircle className="icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" options={minPrice} placeholder="Min Price"/>

                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>                                                        
                                                            <div className="filter-search-form relative mt-2">
                                                                <AiOutlineDollarCircle className="icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" options={maxPrice}  placeholder="Max Price"/>

                                                            </div>
                                                        </div>

                                                        <div className="lg:mt-6">
                                                            <input type="submit" id="search-buy" name="search" className="btn bg-primary hover:bg-primary-dark border-primary hover:border-primary-dark text-white searchbtn submit-btn w-full h-12! rounded" value="Search" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                    {activeTabIndex === 1 && (
                                        <div id="sell-home" role="tabpanel" aria-labelledby="sell-home-tab">
                                            <form action="#">
                                                <div className="registration-form text-dark text-start">
                                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                        <div>
                                                            <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                                            <div className="filter-search-form relative filter-border mt-2">
                                                                <LuSearch className="icons"/>
                                                                <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" placeholder="Search your Keywords" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>                                                        
                                                            <div className="filter-search-form relative filter-border mt-2">
                                                                <RxHome className=" icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" options={Houses} placeholder="House"/>

                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>                                                        
                                                            <div className="filter-search-form relative filter-border mt-2">
                                                                <AiOutlineDollarCircle className="icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" options={minPrice} placeholder="Min Price"/>

                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>                                                        
                                                            <div className="filter-search-form relative mt-2">
                                                                <AiOutlineDollarCircle className="icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" options={maxPrice}  placeholder="Max Price"/>

                                                            </div>
                                                        </div>

                                                        <div className="lg:mt-6">
                                                            <input type="submit" id="search-buy" name="search" className="btn bg-primary hover:bg-primary-dark border-primary hover:border-primary-dark text-white searchbtn submit-btn w-full h-12! rounded" value="Search" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                    {activeTabIndex === 2 && (
                                        <div id="rent-home" role="tabpanel" aria-labelledby="rent-home-tab">
                                            <form action="#">
                                                <div className="registration-form text-dark text-start">
                                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                        <div>
                                                            <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                                            <div className="filter-search-form relative filter-border mt-2">
                                                                <LuSearch className="icons"/>
                                                                <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" placeholder="Search your Keywords" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>                                                        
                                                            <div className="filter-search-form relative filter-border mt-2">
                                                                <RxHome className=" icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" options={Houses} placeholder="House"/>

                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>                                                        
                                                            <div className="filter-search-form relative filter-border mt-2">
                                                                <AiOutlineDollarCircle className="icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" options={minPrice} placeholder="Min Price"/>

                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>                                                        
                                                            <div className="filter-search-form relative mt-2">
                                                                <AiOutlineDollarCircle className="icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50! dark:bg-slate-800! border-0" options={maxPrice}  placeholder="Max Price"/>

                                                            </div>
                                                        </div>

                                                        <div className="lg:mt-6">
                                                            <input type="submit" id="search-buy" name="search" className="btn bg-primary hover:bg-primary-dark border-primary hover:border-primary-dark text-white searchbtn submit-btn w-full h-12! rounded" value="Search" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative lg:mt-24 mt-16">
                    <Categories/>
                </div>

                <About/>
                
                <Feature />

                <div className="container relative lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

                        <p className="text-slate-400 max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <FeatureProperty/>
                </div>

                <TeamOne/>

                <Client />
                
                <div className="container relative lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Blogs & News</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <BlogOne/>
                </div>

                <GetInTuch/>

            </section>

            <Footer/>
            <Switcher/>
        </>
    )
}