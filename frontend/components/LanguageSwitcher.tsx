'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

export function LanguageSwitcher() {
  let router = useRouter()
  let pathname = usePathname()
  let locale = useLocale()          
  const otherLocales = ['en','es','fr'].filter(l => l !== locale)

  return (
    <div className="flex gap-2">
      {otherLocales.map(l => (
        <button
          key={l}
          onClick={() => {
            const newPath = pathname.replace(`/${locale}`, `/${l}`)
            router.push(newPath)
          }}
          className="underline"
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}