import { ReactiveEffect, Ref, EffectScope } from '@vue/reactivity'

export const enum LifecycleHooks {
  BEFORE_CREATE = 'BeforeMount',
  CREATED = 'Created',
  BEFORE_MOUNT = 'BeforeMount',
  MOUNTED = 'Mounted',
  BEFORE_UPDATE = 'BeforeUpdate',
  UPDATED = 'Updated',
  BEFORE_UNMOUNT = 'BeforeUnmount',
  UNMOUNTED = 'Unmounted',
}

export interface InternalInstanceState {
  _id: number
  props: any
  data: Ref<any>
  isActive: boolean
  isMounted: boolean
  isUnmounted: boolean
  isUnmounting: boolean
  effects?: ReactiveEffect[]
  hooks: Record<string, Function[]>
  initialState: Record<any, any>
  provides: Record<string, unknown>
  scope: EffectScope | null
}

export type InstanceStateMap = Record<number, InternalInstanceState>
