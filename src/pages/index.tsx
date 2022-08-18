import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import type { ReactNode } from 'react'

import s from './index.module.css'

const Index: NextPage = () => {
  const ContactButton = () => {
    return (
      <a
        className="px-10 py-6 bg-white inline-block from-primaryLighter to-primaryDarker border border-primaryLighter text-text font-bold hover:bg-gradient-to-br hover:text-white transition duration-300 ease-out hover:easy-in"
        href="https://forms.gle/gjjhAcAKU328qE4eA"
        target="_blank"
        rel="noreferrer noopener"
      >
        お問い合わせはこちら
      </a>
    )
  }
  const Section = ({ children }: { children: ReactNode }) => {
    return <section className="py-10">{children}</section>
  }
  const SectionMainHeading = ({ children }: { children: ReactNode }) => {
    return <h2 className="text-text text-4xl font-bold mb-5">{children}</h2>
  }
  const url = 'https://typebase.dev'
  const title = '株式会社Typebase'
  const description = '株式会社TypebaseはWebサービスの受託開発を行う会社です。'
  const thumbnail = `${url}/images/OGP.png`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={thumbnail} />
        <meta name="viewport" content="width=device-width" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <header className="px-5 py-4">
        <div className="container mx-auto">
          <h1>
            <Link href="/">
              <a className="flex">
                <Image
                  src="/images/logo-landscape.webp"
                  objectFit="contain"
                  width="180"
                  height="42"
                  alt="株式会社Typebase"
                />
              </a>
            </Link>
          </h1>
        </div>
      </header>
      <section className={s.hero}>
        <h1
          className="text-white font-bold text-3xl px-8 leading-normal md:text-5xl"
          style={{ lineHeight: 1.5 }}
        >
          継続的に御社の開発を
          <br />
          ご支援します
        </h1>
        <ContactButton />
      </section>
      <main className="max-w-4xl mx-auto px-6 py-8">
        <Section>
          <SectionMainHeading>About</SectionMainHeading>
          <p className="text-text text-lg pb-4">
            私たちTypebaseはWeb系のシステム開発を支援するエンジニア集団です。
          </p>
          <p className="text-text text-lg">
            実務経験が豊富なエンジニアが、まるで自社に開発メンバーがいるかのように開発を推進していきます。
          </p>
        </Section>
        <Section>
          <SectionMainHeading>Services</SectionMainHeading>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="bg-gray-100 p-5">
              <h3 className="text-text text-2xl font-bold mb-5">
                🤝 Web受託開発
              </h3>
              <p>Webサービス全般の開発・運用を行います。</p>
              <p>
                「作って終わり」ではなく、継続的にシステムの改善に取り組んでいきます。
              </p>
            </div>
            <div className="bg-gray-100 p-5">
              <h3 className="text-text text-2xl font-bold mb-5">
                🔄 コードレビュー / リファクタリング
              </h3>
              <p>既存システムのコードレビューやリファクタリングを行います。</p>
              <p>
                「実装者はいるけど、正しく実装できているか不安」という場合はぜひお声がけください。
              </p>
            </div>
            <div className="bg-gray-100 p-5">
              <h3 className="text-text text-2xl font-bold mb-5">
                💵 システム開発の見積り
              </h3>
              <p>
                Webシステムの開発の相場がわからない場合や、既存の開発費が妥当か判断しにくい場合はぜひ一度お声がけください。
              </p>
            </div>
            <div className="bg-gray-100 p-5">
              <h3 className="text-text text-2xl font-bold mb-5">
                🤔 その他ご相談
              </h3>
              <p>
                Web開発に関して、不明点などありましたらお気軽にご相談ください。
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center pt-10">
            <ContactButton />
          </div>
        </Section>
        <Section>
          <SectionMainHeading>Tech Stack</SectionMainHeading>
          <a
            data-theme="light"
            data-layers="1,2,3,4"
            data-stack-embed="true"
            href="https://embed.stackshare.io/stacks/embed/4f8b2670291b0b72ea6df2db1a5fa2"
          ></a>
          <Script
            src="https://cdn1.stackshare.io/javascripts/client-code.js"
            charSet="utf-8"
          />
          <p className="my-4">上記の技術スタックを使うことが多いです。</p>
          <p>
            これら以外の技術を用いた開発にも対応できる場合がありますので、お気軽にご相談ください。
          </p>
        </Section>
        <Section>
          <SectionMainHeading>Company</SectionMainHeading>
          <div className="p-4">
            <table className="table-fixed w-full text-text">
              <tbody>
                <tr className="border-t">
                  <td className="p-4">会社名</td>
                  <td className="p-4">株式会社Typebase</td>
                </tr>
                <tr className="border-t border-b">
                  <td className="p-4">設立</td>
                  <td className="p-4">2022年8月</td>
                </tr>
                <tr className="border-t border-b">
                  <td className="p-4">資本金</td>
                  <td className="p-4">150万円</td>
                </tr>
                <tr className="border-t border-b">
                  <td className="p-4">代表取締役</td>
                  <td className="p-4">寺嶋祐稀</td>
                </tr>
                <tr className="border-t border-b">
                  <td className="p-4">事業内容</td>
                  <td className="p-4">Webサービスの受託開発および運用</td>
                </tr>
                <tr className="border-t border-b">
                  <td className="p-4">住所</td>
                  <td className="p-4">
                    〒921-8823
                    <br />
                    石川県野々市市粟田1丁目158番地
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
        <Section>
          <SectionMainHeading>Contact</SectionMainHeading>
          <p className="text-text text-lg">
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex items-center justify-center p-10">
            <ContactButton />
          </div>
        </Section>
      </main>
      <footer className="bg-primary pt-10 px-5 pb-5 text-white ">
        <div className="flex flex-col flex-start max-w-4xl mx-auto gap-10 md:flex-row md:gap-14">
          <div className="md:flex-grow">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo-main-white.webp"
                  width={100}
                  height={80}
                  objectFit="contain"
                  alt="株式会社Typebase"
                />
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold mb-2">Social</span>
            <a
              href="https://zenn.dev/typebase"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zenn
            </a>
            <a
              href="https://twitter.com/typebase_inc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/typebase-inc"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold mb-2">Contact</span>
            <a
              href="https://forms.gle/gjjhAcAKU328qE4eA"
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせ
            </a>
          </div>
        </div>
        <div className="text-center mt-10">© Typebase Inc.</div>
      </footer>
    </>
  )
}

export default Index
