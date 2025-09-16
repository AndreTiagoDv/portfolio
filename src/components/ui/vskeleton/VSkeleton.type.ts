export type SkeletonVariant = 'card' | 'image';

export interface VSkeletonProps {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  rounded?: string;
  className?: string;
  variant?: SkeletonVariant;
}

// width e height podem ser passados como px ou %
// circle define se é um círculo (para avatares)
// rounded define borda arredondada
