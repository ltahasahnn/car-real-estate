'use client'

// Types
import { BreadCrumbProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'
// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components/ui/breadcrumb'

const BreadCrumb: React.FC<BreadCrumbProps> = ({ text, lng }) => {
  const { t } = useTranslation(lng, 'translation')
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-zinc-700 duration-300 hover:opacity-100 dark:text-white dark:opacity-50 dark:hover:text-white"
              href="/"
            >
              {t('Catalog.breadcrumbItem1')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem className="font-medium">
            <BreadcrumbPage className="text-zinc-700 dark:text-white">
              {text}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
export default BreadCrumb
