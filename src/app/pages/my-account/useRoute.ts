import { usePathname } from '../../../helpers/hooks/usePathname.ts'

export const useRoute = () => {
  const path = usePathname()
  const parts = path.split('/').filter(Boolean)
  return parts[parts.length - 1]
}
