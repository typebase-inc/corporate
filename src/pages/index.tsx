import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import type { ReactNode } from 'react'

import { News } from '~/components/News'

import s from './index.module.css'

const Index: NextPage = () => {
  const ContactButton = () => (
    <a
      className="inline-block border border-primary-lighter bg-white px-10 py-6 font-bold text-text hover:bg-linear-to-br hover:from-primary-lighter hover:to-primary-darker hover:text-white"
      href="https://forms.gle/gjjhAcAKU328qE4eA"
      target="_blank"
      rel="noreferrer noopener"
    >
      お問い合わせはこちら
    </a>
  )
  const Section = ({ children }: { children: ReactNode }) => (
    <section className="py-14">{children}</section>
  )
  const SectionMainHeading = ({ children }: { children: ReactNode }) => (
    <h2 className="mb-8 inline-block bg-linear-to-br from-primary-lighter to-primary-darker bg-clip-text text-4xl font-bold text-transparent">
      {children}
    </h2>
  )

  const url = 'https://typebase.dev'
  const title = '株式会社Typebase'
  const description = '株式会社TypebaseはWebサービスの開発支援を行う会社です。'
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@typebase_inc" />
        <meta name="viewport" content="width=device-width" />
        <meta name="msapplication-TileColor" content="#5bbad5" />
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
          <h1 className="flex">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-landscape.webp"
                width="180"
                height="43"
                alt="株式会社Typebase"
              />
            </Link>
          </h1>
        </div>
      </header>
      <section className={s.hero}>
        <h1
          className="px-8 text-3xl font-bold leading-normal text-white md:text-5xl"
          // HACK: md:text-5xl の line-height を上書き
          style={{ lineHeight: 1.5 }}
        >
          継続的に貴社の開発を
          <br />
          ご支援します
        </h1>
        <ContactButton />
      </section>
      <main className="mx-auto max-w-4xl px-6 py-8">
        <Section>
          <SectionMainHeading>About</SectionMainHeading>
          <p className="pb-4 text-lg text-text">
            私たちTypebaseはWeb系のシステム開発を支援するエンジニア集団です。
          </p>
          <p className="text-lg text-text">
            実務経験が豊富なエンジニアが、まるで自社に開発メンバーがいるかのように開発を推進していきます。
          </p>
        </Section>
        <Section>
          <SectionMainHeading>Services</SectionMainHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                label: '🤝 Web開発',
                description: (
                  <>
                    <p>Webサービス全般の開発・運用を行います。</p>
                    <p>
                      「作って終わり」ではなく、継続的にシステムの改善に取り組んでいきます。
                    </p>
                  </>
                ),
              },
              {
                label: '🔄 コードレビュー / リファクタリング',
                description: (
                  <>
                    <p>
                      既存システムのコードレビューやリファクタリングを行います。
                    </p>
                    <p>
                      「実装者はいるけど、正しく実装できているか不安」という場合はぜひお声がけください。
                    </p>
                  </>
                ),
              },
              {
                label: '💵 システム開発の見積り',
                description: (
                  <p>
                    Webシステムの開発の相場がわからない場合や、既存の開発費が妥当か判断しにくい場合はぜひ一度お声がけください。
                  </p>
                ),
              },
              {
                label: '🤔 その他ご相談',
                description: (
                  <p>
                    Web開発に関して、不明点などありましたらお気軽にご相談ください。
                  </p>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="bg-gray-100 p-6">
                <h3 className="mb-5 text-2xl font-bold text-text">
                  {item.label}
                </h3>
                {item.description}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center pt-10">
            <ContactButton />
          </div>
        </Section>
        <Section>
          <SectionMainHeading>Tech Stack</SectionMainHeading>
          {/** biome-ignore lint/a11y/useAnchorContent: stackshare のために必要 */}
          <a
            data-theme="light"
            data-layers="1,2,3,4"
            data-stack-embed="true"
            href="https://embed.stackshare.io/stacks/embed/4f8b2670291b0b72ea6df2db1a5fa2"
          ></a>
          <Script src="https://cdn1.stackshare.io/javascripts/client-code.js" />
          <p className="my-4">
            React / Next.js / TypeScript 等の技術を使うことが多いです。
          </p>
          <p>
            これら以外の技術を用いた開発にも対応できる場合がありますので、お気軽にご相談ください。
          </p>
        </Section>
        <Section>
          <SectionMainHeading>News</SectionMainHeading>
          <News />
        </Section>
        <Section>
          <SectionMainHeading>Company</SectionMainHeading>
          <div className="py-4 md:px-4">
            <table className="w-full table-fixed text-text">
              <tbody>
                {[
                  { title: '会社名', content: '株式会社Typebase' },
                  { title: '設立', content: '2022年8月' },
                  { title: '資本金', content: '150万円' },
                  { title: '代表取締役', content: '寺嶋祐稀' },
                  { title: '事業内容', content: 'Webサービスの開発および運用' },
                  {
                    title: '住所',
                    content: (
                      <>
                        〒921-8823
                        <br />
                        石川県野々市市粟田1丁目158番地
                      </>
                    ),
                  },
                ].map((item) => (
                  <tr key={item.title} className="border-y">
                    <td className="p-4">{item.title}</td>
                    <td className="p-4">{item.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
        <Section>
          <SectionMainHeading>Contact</SectionMainHeading>
          <p className="text-lg text-text">
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex items-center justify-center p-10">
            <ContactButton />
          </div>
        </Section>
      </main>
      <footer className={s.footer}>
        <div className="mx-auto flex max-w-4xl flex-col gap-10 md:flex-row md:gap-14">
          <div className="flex md:grow">
            <Link href="/" className="grow-0">
              <Image
                src="/images/logo-main-white.webp"
                width={100}
                height={80}
                alt="株式会社Typebase"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 text-2xl font-bold">Social</span>
            {[
              { href: 'https://zenn.dev/p/typebase_dev', label: 'Zenn' },
              { href: 'https://twitter.com/typebase_inc', label: 'X(Twitter)' },
              { href: 'https://github.com/typebase-inc', label: 'GitHub' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 text-2xl font-bold">Contact</span>
            <a
              href="https://forms.gle/gjjhAcAKU328qE4eA"
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせ
            </a>
          </div>
        </div>
        <div className="mt-10 text-center">© Typebase Inc.</div>
      </footer>
    </>
  )
}

export default Index
