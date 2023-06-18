export const pagesPath = {
  "missions": {
    $url: (url?: { hash?: string }) => ({ pathname: '/missions' as const, hash: url?.hash }),
    _missionId: (missionId: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/missions/[missionId]' as const, query: { missionId }, hash: url?.hash })
    })
  },
  "ranking": {
    $url: (url?: { hash?: string }) => ({ pathname: '/ranking' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  _gitkeep: '/.gitkeep',
  apple_touch_icon_png: '/apple-touch-icon.png',
  favicon_ico: '/favicon.ico',
  icon_192_png: '/icon-192.png',
  icon_512_png: '/icon-512.png',
  icon_svg: '/icon.svg',
  manifest_webmanifest: '/manifest.webmanifest',
  ogp_png: '/ogp.png',
  traP_Mission_Logo_png: '/traP_Mission_Logo.png'
} as const

export type StaticPath = typeof staticPath
