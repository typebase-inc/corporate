import { news } from '~/constants/news'

export const News = () => {
  return (
    <div className="flex flex-col gap-8 px-1">
      {news.map((item) => {
        return (
          <div key={item.url} className="flex flex-col gap-1">
            <time className="text-sm text-slate-600">{item.publishedAt}</time>
            <a
              className="inline text-lg font-bold text-slate-600 transition duration-200 ease-out hover:text-primary-darker hover:underline hover:ease-in"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {item.title}
            </a>
          </div>
        )
      })}
    </div>
  )
}
