import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function MenuItem({ blok }) {
  // TODO : make area for image

  // const [isEditing, setIsEditing] = useState(false)
  // const ref = useRef(null)

  // useEffect(() => {
  //   let observer
  //   if (window.location.search.includes('_storyblok') && ref.current) {
  //     observer = new MutationObserver((mutations) => {
  //       for (const mutation of mutations) {
  //         if (mutation.type === 'attributes') {
  //           setIsEditing(mutation.target.dataset.blokFocused === 'true')
  //         }
  //       }
  //     })
  //     observer.observe(ref.current, {
  //       attributes: true,
  //     })
  //   }

  //   return () => {
  //     observer?.disconnect()
  //   }
  // }, [])

  // TODO : use internal link if blok.link.linktype === 'story'
  return (
    <NavigationMenuItem {...storyblokEditable(blok)}>
      {blok.dropdown_panel.length ? (
        <>
          <NavigationMenuTrigger>{blok.label}</NavigationMenuTrigger>
          <NavigationMenuContent className="-absolute">
            <ul className="flex w-[400px] flex-col p-2 md:w-[500px] lg:w-[600px]">
              {blok.dropdown_panel.map((it) => (
                <StoryblokComponent blok={it} key={it._uid} />
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      ) : (
        <NavigationMenuLink
          href={blok.link.url}
          className={navigationMenuTriggerStyle()}
        >
          {blok.label}
        </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  )
}
