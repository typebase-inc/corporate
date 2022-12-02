import { news } from '~/constants/news'

export const News = () => {
  return (
    <div className="flex flex-col gap-8 px-1">
      {news.map((item) => {
        return (
          <div key={item.url} className="flex flex-col gap-1">
            <time className="text-slate-600 text-sm">{item.publishedAt}</time>
            <a
              className="inline text-lg text-slate-600 font-bold hover:underline hover:text-primaryDarker transition duration-200 ease-out hover:easy-in"
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
