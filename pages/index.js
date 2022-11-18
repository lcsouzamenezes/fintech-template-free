import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import ButtonPrimary from '../components/buttons/button-primary'
import dashboard_sample from '../public/images/dashboard_sample.png'
import customer_1 from '../public/images/customer_1.png'
import customer_2 from '../public/images/customer_2.png'
import customer_3 from '../public/images/customer_3.png'
import customer_4 from '../public/images/customer_4.png'

export default function Home() {
    const [reviewPage, setReviewPage] = useState(true)
    const [openedFAQ, setOpenedFAQ] = useState(null)

    const toggleFAQ = (question) => {
        if(openedFAQ !== question) {
            setOpenedFAQ(question)
        } else {
            setOpenedFAQ(null)
        }
    }

	return (
		<div>
			<Head>
                <title>Fintech Template | Landing Page</title>
			</Head>

			<main>
				<section className="px-3 bg-blue-900">
					<div className="max-w-screen-lg ml-auto mr-auto md:pt-20 md:pb-24 py-14">
						<h1 className="max-w-4xl lg:text-7xl md:text-6xl text-4xl font-semibold text-white lg:mb-20 mb-8">
							Intelligent Finance Tools For Your Business
						</h1>
						<ul className="grid md:grid-cols-5 gap-10">
							<li className="md:col-span-3">
								<Image className="border border-white" src={dashboard_sample} alt="Team meeting" priority />
							</li>
							<li className="md:col-span-2">
								<p className="text-xl leading-8 text-gray-300 mb-8">
									Our dashboard makes it easy for you to run your business.  Analyze, engage, and optimize your most critical tasks from one dashboard.
								</p>
								<ButtonPrimary text="Create An Account" linkTo="/signup" />
								<p className="mt-4 text-gray-300">
									*No credit card required for 14 days
								</p>
							</li>
						</ul>
					</div>
				</section>
				<section className="px-3 bg-white">
					<div className="max-w-screen-lg ml-auto mr-auto md:py-20 py-14">
                        <ul className="grid md:grid-cols-2 md:gap-10">
                            <li>
                                <h2 className="md:text-6xl text-3xl font-semibold text-gray-900 md:mb-8 mb-4">
                                    Our Platform
                                </h2>
                                <p className="text-lg leading-6 text-gray-900 md:mb-12 mb-8">
                                    We provide you everything you need to thrive in the market.  Research investment ideas, track spending, and much more.
                                </p>
                                <div className="p-10 bg-gray-900 space-y-8">
                                    <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                    </svg>
                                    <p className="text-2xl text-white">
                                        Track spending
                                    </p>
                                    <p className="text-gray-300">
                                        Get custom smart reports about your spending metrics.  Enable or disable for individual purchases.
                                    </p>
                                </div>
                            </li>
                            <li className="pt-8 space-y-8">
                                <div className="p-10 bg-blue-900 space-y-8">
                                    <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                    </svg>
                                    <p className="text-2xl text-white">
                                        Research Investment Ideas
                                    </p>
                                    <p className="text-gray-300">
                                        Track the pulse of what people are saying.  Stay on top of what is trending.
                                    </p>
                                </div>
                                <div className="p-10 bg-blue-900 space-y-8">
                                    <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                    </svg>
                                    <p className="text-2xl text-white">
                                        Analyze Performance
                                    </p>
                                    <p className="text-gray-300">
                                        Track vital business metrics in one dashboard and enhance your data with powerful analytics.
                                    </p>
                                </div>
                            </li>
                        </ul>
					</div>
				</section>
				<section className="px-3 bg-blue-900">
					<div className="max-w-screen-lg ml-auto mr-auto md:py-20 py-14">
                        <ul className="flex justify-between items-center gap-8">
                            <li>
                                <h3 className="md:text-6xl text-3xl font-semibold text-white md:mb-14 mb-8">
                                    What Customers Are Saying
                                </h3>
                            </li>
                            <li className="justify-self-end">
                                <ul className="flex items-center gap-2">
                                    <li>
                                        <svg onClick={() => setReviewPage(!reviewPage)} className="w-10 h-10 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg onClick={() => setReviewPage(!reviewPage)} className="w-10 h-10 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {reviewPage ? <ul className="grid md:grid-cols-2 md:gap-10 gap-4">
                            <li className="px-10 py-4 bg-white space-y-6">
                                <ul className="flex items-center gap-4">
                                    <div className="w-20">
                                        <Image className="rounded-full" src={customer_1} alt="Customer portrait" />
                                    </div>
                                    <li>
                                        <p className="text-xl font-semibold">
                                            Ronald Eigleman
                                        </p>
                                        <p className="text-gray-700">
                                            VP Of Engineering
                                        </p>
                                    </li>
                                </ul>
                                <div className="flex items-center">
                                    <p className="text-gray-900 font-semibold mr-4">
                                        5.00
                                    </p>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <p className="leading-8">
                                    I have been using the Fintech platform for years, and have nothing but positive remarks.
                                </p>
                            </li>
                            <li className="px-10 py-4 bg-white space-y-6">
                                <ul className="flex items-center gap-4">
                                    <div className="w-20">
                                        <Image className="rounded-full" src={customer_2} alt="Customer portrait" />
                                    </div>
                                    <li>
                                        <p className="text-xl font-semibold">
                                            Felix Johnson
                                        </p>
                                        <p className="text-gray-700">
                                            Business Strategist
                                        </p>
                                    </li>
                                </ul>
                                <div className="flex items-center">
                                    <p className="text-gray-900 font-semibold mr-4">
                                        5.00
                                    </p>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <p className="leading-8">
                                    I could not imagine using any other platfom.  Fintech platform makes my job so easy.
                                </p>
                            </li>
                        </ul> : <ul className="grid md:grid-cols-2 md:gap-10 gap-4">
                            <li className="px-10 py-4 bg-white space-y-6">
                                <ul className="flex items-center gap-4">
                                    <div className="w-20">
                                        <Image className="rounded-full" src={customer_3} alt="Customer portrait" />
                                    </div>
                                    <li>
                                        <p className="text-xl font-semibold">
                                            Fabio Isetta
                                        </p>
                                        <p className="text-gray-700">
                                            CEO
                                        </p>
                                    </li>
                                </ul>
                                <div className="flex items-center">
                                    <p className="text-gray-900 font-semibold mr-4">
                                        5.00
                                    </p>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <p className="leading-8">
                                    The team at Fintech platform are an excellent resource for my business.
                                </p>
                            </li>
                            <li className="px-10 py-4 bg-white space-y-6">
                                <ul className="flex items-center gap-4">
                                    <div className="w-20">
                                        <Image className="rounded-full" src={customer_4} alt="Customer portrait" />
                                    </div>
                                    <li>
                                        <p className="text-xl font-semibold">
                                            Susan Eigleman
                                        </p>
                                        <p className="text-gray-700">
                                            Marketing Manager
                                        </p>
                                    </li>
                                </ul>
                                <div className="flex items-center">
                                    <p className="text-gray-900 font-semibold mr-4">
                                        5.00
                                    </p>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <p className="leading-8">
                                    Fintech platform is a game changer.  This simplified my workflow 200%.
                                </p>
                            </li>
                        </ul>}
					</div>
				</section>
				<section className="px-3 bg-white">
					<div className="max-w-screen-lg ml-auto mr-auto md:pt-20 md:pb-24 pt-14 pb-16">
                        <h4 className="md:text-6xl text-3xl font-semibold text-gray-900 md:mb-6">
                            Frequently Asked Questions
                        </h4>
                        <ul>
                            <li onClick={() => toggleFAQ("What is it")} className="py-10 flex justify-between gap-4 border-b border-gray-900 cursor-pointer">
                                <div>
                                    <p className="text-xl text-gray-900">
                                        What is Fintech platfom?
                                    </p>
                                    {openedFAQ === "What is it" ? <p className="text-gray-700 mt-4">
                                        Fintech platform is a suite of financial tools for your business.  We make it easy to scale your daily opperations.
                                    </p> : <p className="hidden" />}
                                </div>
                                <div className="!w-6">
                                    {openedFAQ === "What is it" ? <svg className="!w-6 !h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> : <svg className="!w-6 !h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>}
                                </div>
                            </li>
                            <li onClick={() => toggleFAQ("How does it work")} className="py-10 flex justify-between gap-4 border-b border-gray-900 cursor-pointer">
                                <div>
                                    <p className="text-xl text-gray-900">
                                        How does Fintech platfom work?
                                    </p>
                                    {openedFAQ === "How does it work" ? <p className="text-gray-700 mt-4">
                                        Fintech platform works by integrating into the tools and as you already use and love.  We will help you with any custom integrations as well.
                                    </p> : <p className="hidden" />}
                                </div>
                                <div className="!w-6">
                                    {openedFAQ === "How does it work" ? <svg className="!w-6 !h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> : <svg className="!w-6 !h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>}
                                </div>
                            </li>
                            <li onClick={() => toggleFAQ("How much does it cost")} className="py-10 flex justify-between gap-4 border-b border-gray-900 cursor-pointer">
                                <div>
                                    <p className="text-xl text-gray-900">
                                        How much does Fintech platform cost?
                                    </p>
                                    {openedFAQ === "How much does it cost" ? <p className="text-gray-700 mt-4">
                                        Fintech platform is billed monthly at a fixed, affordable rate.  You can cancel your plan in your account page, or by email at any time.
                                    </p> : <p className="hidden" />}
                                </div>
                                <div className="!w-6">
                                    {openedFAQ === "How much does it cost" ? <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> : <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>}
                                </div>
                            </li>
                            <li onClick={() => toggleFAQ("Do you offer custom billing")} className="py-10 flex justify-between gap-4 border-b border-gray-900 cursor-pointer">
                                <div>
                                    <p className="text-xl text-gray-900">
                                        Do you offer custom billing?
                                    </p>
                                    {openedFAQ === "Do you offer custom billing" ? <p className="text-gray-700 mt-4">
                                        Yes, we can work with any budget or team size to make sure you can use our service.  Please contact our support team and we can offer custom billing.
                                    </p> : <p className="hidden" />}
                                </div>
                                <div className="!w-6">
                                    {openedFAQ === "Do you offer custom billing" ? <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> : <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>}
                                </div>
                            </li>
                            <li onClick={() => toggleFAQ("Do you offer refunds")} className="py-10 flex justify-between gap-4 border-b border-gray-900 cursor-pointer">
                                <div>
                                    <p className="text-xl text-gray-900">
                                        Do you offer refunds?
                                    </p>
                                    {openedFAQ === "Do you offer refunds" ? <p className="text-gray-700 mt-4">
                                        If you are not hapy with our service within 60 days, please contact our support team and we will reimburse you.
                                    </p> : <p className="hidden" />}
                                </div>
                                <div className="!w-6">
                                    {openedFAQ === "Do you offer refunds" ? <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> : <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>}
                                </div>
                            </li>
                        </ul>
					</div>
				</section>
				<section className="px-3 bg-blue-900">
					<div className="max-w-screen-lg ml-auto mr-auto md:py-24 py-20">
                        <h4 className="md:text-6xl text-3xl font-semibold text-white text-center mb-6">
                            Ready To Upgrade Your Financial Infastructure?
                        </h4>
                        <p className="text-white text-center leading-8 mb-8">
                            Getting started is easy.  Simply signup with a free acount, and you are all set.  Our team of onboarding specialists is ready to help you getting started or learn how to use your new account.
                        </p>
                        <div className="text-center">
                            <ButtonPrimary text="Get Started For Free" linkTo="/signup" />
                        </div>
					</div>
				</section>
			</main>
		</div>
	)
}
