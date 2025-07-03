// Types
import { ModelListProps } from '@/@types/types'
// Components
import Selectbox from '@components/Selectbox'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface ModelProps {
  lng: string
}

const Model: React.FC<ModelProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const modelList: ModelListProps = {
    title: t('Catalog.modelTitle'),
    anyMake: [
      { value: 'Audi' },
      { value: 'Infiniti' },
      { value: 'Honda' },
      { value: 'Hyundai' },
      { value: 'Lexus' },
      { value: 'Mazda' },
      { value: 'Mitsubishi' },
      { value: 'Mercedes-Benz' },
      { value: 'Nissan' },
    ],
    anyModel: [
      { value: 'Altima' },
      { value: 'Juke' },
      { value: 'Leaf' },
      { value: 'Maxima' },
      { value: 'Micra' },
      { value: 'Murano' },
      { value: 'Note' },
      { value: 'Pathfinder' },
      { value: 'Patrol' },
    ],
  }

  return (
    <div className="space-y-4 py-2">
      <h2 className="text-lg font-semibold">{modelList.title}</h2>

      <div className="space-y-2">
        <Selectbox
          placeholder={String(modelList.anyMake[0].value)}
          items={modelList.anyMake}
          classContent="dark:bg-main-600 bg-slate-200 border border-zinc-300 dark:border-gray-500"
          classContentItem="text-zinc-700 !bg-slate-200 dark:hover:!bg-main-700 dark:!bg-main-600 cursor-pointer hover:!bg-slate-300 dark:text-white dark:hover:bg-main-700"
          className="w-full border border-zinc-300 bg-slate-200 font-medium text-zinc-700 focus:ring-0 focus:ring-offset-0 dark:border-gray-500 dark:bg-main-600 dark:text-white"
        />

        <Selectbox
          placeholder={String(modelList.anyModel[0].value)}
          items={modelList.anyModel}
          classContent="dark:bg-main-600 bg-slate-200 border border-zinc-300 dark:border-gray-500"
          classContentItem="text-zinc-700 !bg-slate-200 dark:hover:!bg-main-700 dark:!bg-main-600 cursor-pointer hover:!bg-slate-300 dark:text-white dark:hover:bg-main-700"
          className="w-full border border-zinc-300 bg-slate-200 font-medium text-zinc-700 focus:ring-0 focus:ring-offset-0 dark:border-gray-500 dark:bg-main-600 dark:text-white"
        />
      </div>
    </div>
  )
}
export default Model
