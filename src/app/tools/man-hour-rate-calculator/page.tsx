import type { Metadata } from 'next'
import { ManHourRateCalculator } from './_components/ManHourRateCalculator'

export const metadata: Metadata = {
  title:
    '稼働単価シミュレーター | フリーランス・業務委託の時給・月単価計算ツール',
  description:
    '時給から月単価、月単価から時給を簡単に計算。フリーランス・業務委託で働く方の収入シミュレーションに最適。稼働時間・日数を調整して最適な単価を見つけましょう。',
  openGraph: {
    title:
      '稼働単価シミュレーター | フリーランス・業務委託の時給・月単価計算ツール',
    description:
      '時給から月単価、月単価から時給を簡単に計算。フリーランス・業務委託で働く方の収入シミュレーションに最適。',
    type: 'website',
    siteName: '株式会社Typebase',
    images: 'https://typebase.dev/images/OGP.png',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      '稼働単価シミュレーター | フリーランス・業務委託の時給・月単価計算ツール',
    description:
      '時給から月単価、月単価から時給を簡単に計算。フリーランス・業務委託で働く方の収入シミュレーションに最適。',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
              稼働単価シミュレーター
            </h1>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ツール本体 */}
        <div className="mb-12">
          <ManHourRateCalculator />
        </div>

        {/* 説明セクション */}
        <section className="space-y-8 rounded-lg bg-white p-6 shadow-sm sm:p-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              稼働単価シミュレーターとは
            </h2>
            <p className="text-gray-700 leading-relaxed">
              稼働単価シミュレーターは、フリーランスや業務委託で働く方向けの収入計算ツールです。時給から月単価、または月単価から時給を簡単に計算できます。稼働時間や稼働日数を調整することで、自分に最適な単価設定を見つけることができます。
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">主な機能</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">▸</span>
                <span>
                  <strong>時給→月単価モード</strong>
                  ：時給と稼働条件から月単価を自動計算
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">▸</span>
                <span>
                  <strong>月単価→時給モード</strong>
                  ：月単価から逆算して時給を計算
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">▸</span>
                <span>
                  <strong>柔軟な稼働設定</strong>
                  ：1日あたり稼働時間、週あたり稼働日数、月あたり稼働日数を自由に設定
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">▸</span>
                <span>
                  <strong>税込み・税抜き切り替え</strong>
                  ：消費税を含めた計算も可能
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">▸</span>
                <span>
                  <strong>クイック入力ボタン</strong>
                  ：よく使う数値をワンタップで入力
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              こんな方におすすめ
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span>フリーランスとして独立を検討している方</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span>業務委託契約の単価交渉をする方</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span>適正な時給・月単価を知りたい方</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span>稼働時間を調整して収入をシミュレーションしたい方</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span>
                  エンジニア、デザイナー、ライター、コンサルタントなど
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">使い方</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 font-bold text-blue-600">1.</span>
                <span>
                  <strong>計算モードを選択</strong>
                  ：「時給→月単価」または「月単価→時給」を選択
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold text-blue-600">2.</span>
                <span>
                  <strong>基本条件を入力</strong>
                  ：1日あたりの稼働時間、週あたり稼働日数を入力
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold text-blue-600">3.</span>
                <span>
                  <strong>時給または月単価を入力</strong>
                  ：モードに応じて時給または月単価を入力
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold text-blue-600">4.</span>
                <span>
                  <strong>結果を確認</strong>
                  ：自動計算された値を確認し、必要に応じて調整
                </span>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">計算方法</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>時給→月単価の計算式：</strong>
              </p>
              <p className="rounded bg-gray-100 p-3 font-mono text-sm">
                月単価 = 時給 × 1日あたり稼働時間 × 月あたり稼働日数
              </p>
              <p className="mt-4">
                <strong>月単価→時給の計算式：</strong>
              </p>
              <p className="rounded bg-gray-100 p-3 font-mono text-sm">
                時給 = 月単価 ÷ (1日あたり稼働時間 × 月あたり稼働日数)
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="mt-12 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600 transition-colors">
                トップページ
              </a>
              {/* <span className="text-gray-400">|</span> */}
              {/* <a
                href="/tools"
                className="hover:text-blue-600 transition-colors"
              >
                ツール一覧
              </a> */}
            </div>
            <div className="text-sm text-gray-500">© 株式会社Typebase</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
