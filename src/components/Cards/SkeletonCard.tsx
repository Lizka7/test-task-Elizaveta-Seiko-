import type { SkeletonCardProps } from '../../types/product';
import { skeletonClasses, defaultSkeletonSizes } from '../../constants/skeleton';

const SkeletonCard = ({
  className = '',
  imageHeight = defaultSkeletonSizes.imageHeight,
  titleWidth = defaultSkeletonSizes.titleWidth,
  priceWidth = defaultSkeletonSizes.priceWidth,
}: SkeletonCardProps) => (
  <div
    className={`bg-gray-200 dark:bg-gray-800 rounded-xl p-4 flex flex-col gap-3 animate-pulse transition-colors ${className}`}
  >
    <div aria-hidden="true" className={`${skeletonClasses} rounded-lg h-${imageHeight}`} />

    <div aria-hidden="true" className={`${skeletonClasses} h-4 w-${titleWidth}`} />

    <div aria-hidden="true" className={`${skeletonClasses} h-5 w-${priceWidth}`} />

    <div className="space-y-2">
      <div aria-hidden="true" className={`${skeletonClasses} h-3 w-full`} />
      <div aria-hidden="true" className={`${skeletonClasses} h-3 w-5/6`} />
    </div>

    <div aria-hidden="true" className={`${skeletonClasses} h-6 rounded-full w-24`} />

    <div aria-hidden="true" className={`${skeletonClasses} mt-auto h-9 bg-gray-400 dark:bg-gray-600 rounded-lg`} />
  </div>
);

export default SkeletonCard;
