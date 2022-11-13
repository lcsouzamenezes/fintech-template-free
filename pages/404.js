import Head from 'next/head'
import Link from 'next/link'
import ButtonPrimary from '../components/buttons/button-primary'

export default function Error () {
    return <div>
        <Head>
            <title>Fintech Template | Error Page</title>
        </Head>

        <main>
            <section className="px-3 bg-blue-900">
                <div className="max-w-screen-lg ml-auto mr-auto md:pt-32 md:pb-40 pt-14 pb-32">
                    <div className="max-w-lg ml-auto mr-auto text-center">
                        <h1 className="md:text-5xl text-4xl font-semibold text-white mb-4">
                            Premium Feature
                        </h1>
                        <p className="text-lg text-white leading-8 mb-8">
                            Visit <Link className="text-blue-500" href="https://www.fintech-template.com">fintech-template.com</Link> to purchase the full site.
                        </p>
                        <ButtonPrimary text={"Get Full Site"} linkTo={"https://www.fintech-template.com"} />
                    </div>
                </div>
            </section>
        </main>
    </div>
}